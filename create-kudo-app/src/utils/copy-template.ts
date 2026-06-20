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

export async function copyBaseTemplates(options: CopyTemplateOptions): Promise<void> {
  const { targetDir, projectName, packageManager, includeBlog = true, author = 'DivisionCero' } = options;

  const templatesDir = path.join(__dirname, '..', '..', 'src', 'templates');

  try {
    logger.info('Copiando estructura base del proyecto...');

    // Copiar archivos de configuración base
    await fs.copy(path.join(templatesDir, 'base'), targetDir);

    // Copiar app/
    await fs.copy(path.join(templatesDir, 'app'), path.join(targetDir, 'app'));

    // Copiar components/
    await fs.copy(path.join(templatesDir, 'components'), path.join(targetDir, 'components'));

    // Copiar lib/
    await fs.copy(path.join(templatesDir, 'lib'), path.join(targetDir, 'lib'));

    // Copiar content/framework/ completo
    const frameworkSource = path.join(templatesDir, 'content', 'framework');
    if (await fs.pathExists(frameworkSource)) {
      await fs.copy(frameworkSource, path.join(targetDir, 'content', 'framework'));
      logger.success('Contenido del framework copiado');
    }

    // Copiar content/sgsi/ base (index, meta, lineamientos)
    const sgsiSource = path.join(templatesDir, 'content', 'sgsi');
    await fs.ensureDir(path.join(targetDir, 'content', 'sgsi'));
    if (await fs.pathExists(path.join(sgsiSource, 'index.mdx'))) {
      await fs.copy(path.join(sgsiSource, 'index.mdx'), path.join(targetDir, 'content', 'sgsi', 'index.mdx'));
    }
    if (await fs.pathExists(path.join(sgsiSource, 'meta.json'))) {
      await fs.copy(path.join(sgsiSource, 'meta.json'), path.join(targetDir, 'content', 'sgsi', 'meta.json'));
    }
    if (await fs.pathExists(path.join(sgsiSource, 'lineamientos'))) {
      await fs.copy(path.join(sgsiSource, 'lineamientos'), path.join(targetDir, 'content', 'sgsi', 'lineamientos'));
      logger.success('Lineamientos SGSI copiados');
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

export async function copyPolicies(
  targetDir: string,
  selectedPolicies: string[]
): Promise<void> {
  const templatesDir = path.join(__dirname, '..', '..', 'src', 'templates');
  const politicasSource = path.join(templatesDir, 'content', 'sgsi', 'politicas');
  const politicasTarget = path.join(targetDir, 'content', 'sgsi', 'politicas');

  try {
    await fs.ensureDir(politicasTarget);

    // Copiar meta.json e index.mdx siempre
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

      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
      }

      const outputPath = templatePath.replace('.template', '');
      await fs.writeFile(outputPath, content, 'utf-8');
      await fs.remove(templatePath);
    }
  }
}
