import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { logger } from './logger.js';
import type { PackageManager } from '../constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface CopyTemplateOptions {
  projectName: string;
  targetDir: string;
  packageManager: PackageManager;
  includeBlog?: boolean;
  author?: string;
}

/**
 * Copia los templates base del proyecto
 */
export async function copyBaseTemplates(options: CopyTemplateOptions): Promise<void> {
  const { targetDir, projectName, packageManager, includeBlog = true, author = 'DivisionCero' } = options;

  const templatesDir = path.join(__dirname, '..', '..', 'src', 'templates');

  try {
    // Copiar estructura base
    logger.info('Copiando estructura base del proyecto...');

    // Copiar archivos de configuración base (incluyendo .template)
    await fs.copy(path.join(templatesDir, 'base'), targetDir);

    // Copiar app/
    await fs.copy(path.join(templatesDir, 'app'), path.join(targetDir, 'app'));

    // Copiar components/
    await fs.copy(path.join(templatesDir, 'components'), path.join(targetDir, 'components'));

    // Copiar lib/
    await fs.copy(path.join(templatesDir, 'lib'), path.join(targetDir, 'lib'));

    // Crear directorio content/docs
    await fs.ensureDir(path.join(targetDir, 'content', 'docs'));

    // Copiar componentes MDX (mermaid, etc.)
    const mdxComponentsSource = path.join(templatesDir, 'content', 'docs', 'components');
    if (await fs.pathExists(mdxComponentsSource)) {
      await fs.copy(mdxComponentsSource, path.join(targetDir, 'content', 'docs', 'components'));
      logger.success('Componentes MDX copiados');
    }

    // Copiar blog si está habilitado
    if (includeBlog) {
      const blogSource = path.join(templatesDir, 'content', 'blog');
      if (await fs.pathExists(blogSource)) {
        await fs.copy(blogSource, path.join(targetDir, 'content', 'blog'));
        logger.success('Blog copiado');
      }
    }

    // Procesar archivos .template
    await processTemplateFiles(targetDir, {
      PROJECT_NAME: projectName,
      PACKAGE_MANAGER: packageManager,
      AUTHOR: author,
    });

    logger.success('Estructura base copiada exitosamente');
  } catch (error) {
    logger.error('Error al copiar templates base');
    throw error;
  }
}

/**
 * Copia las políticas seleccionadas
 */
export async function copyPolicies(
  targetDir: string,
  selectedPolicies: string[]
): Promise<void> {
  const templatesDir = path.join(__dirname, '..', '..', 'src', 'templates');
  const politicasSource = path.join(templatesDir, 'content', 'politicas');
  const politicasTarget = path.join(targetDir, 'content', 'docs', 'politicas');

  try {
    await fs.ensureDir(politicasTarget);

    // Copiar meta.json y index.mdx siempre
    await fs.copy(
      path.join(politicasSource, 'meta.json'),
      path.join(politicasTarget, 'meta.json')
    );
    await fs.copy(
      path.join(politicasSource, 'index.mdx'),
      path.join(politicasTarget, 'index.mdx')
    );

    // Copiar políticas seleccionadas
    for (const policy of selectedPolicies) {
      const sourcePath = path.join(politicasSource, policy);
      const targetPath = path.join(politicasTarget, policy);

      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, targetPath);
      }
    }

    logger.success(`${selectedPolicies.length} políticas copiadas`);
  } catch (error) {
    logger.error('Error al copiar políticas');
    throw error;
  }
}

/**
 * Procesa archivos .template reemplazando placeholders
 */
async function processTemplateFiles(
  targetDir: string,
  replacements: Record<string, string>
): Promise<void> {
  const templateFiles = [
    'package.json.template',
    'README.md.template',
  ];

  for (const templateFile of templateFiles) {
    const templatePath = path.join(targetDir, templateFile);

    if (await fs.pathExists(templatePath)) {
      let content = await fs.readFile(templatePath, 'utf-8');

      // Reemplazar placeholders
      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
      }

      // Escribir archivo sin extensión .template
      const outputPath = templatePath.replace('.template', '');
      await fs.writeFile(outputPath, content, 'utf-8');

      // Eliminar archivo .template
      await fs.remove(templatePath);
    }
  }
}
