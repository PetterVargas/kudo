#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'node:path';
import * as p from '@clack/prompts';
import pc from 'picocolors';
import { runInteractivePrompts } from './prompts.js';
import { copyBaseTemplates, copyPolicies } from './utils/copy-template.js';
import { logger } from './utils/logger.js';

const program = new Command();

interface CliOptions {
  packageManager?: 'npm' | 'pnpm' | 'yarn';
}

program
  .name('create-kudo-app')
  .description('CLI para crear nuevas aplicaciones Kudo con templates de políticas de Ciberseguridad')
  .version('0.1.0')
  .argument('[project-name]', 'Nombre del proyecto')
  .option('-p, --package-manager <pm>', 'Package manager a usar (npm, pnpm, yarn)')
  .action(async (projectName: string | undefined, options: CliOptions) => {
    try {
      // Ejecutar prompts interactivos
      const choices = await runInteractivePrompts(projectName);

      // Determinar directorio de destino
      const targetDir = path.resolve(process.cwd(), choices.projectName);

      // Verificar si el directorio ya existe
      if (await fs.pathExists(targetDir)) {
        const shouldOverwrite = await p.confirm({
          message: `El directorio ${pc.cyan(choices.projectName)} ya existe. ¿Quieres sobrescribirlo?`,
          initialValue: false,
        });

        if (p.isCancel(shouldOverwrite) || !shouldOverwrite) {
          p.cancel('Operación cancelada');
          process.exit(0);
        }

        await fs.remove(targetDir);
      }

      // Crear directorio
      await fs.ensureDir(targetDir);

      logger.title('🚀 Creando tu aplicación Kudo...');

      // Paso 1: Copiar estructura base
      logger.step(1, 2, 'Copiando estructura base del proyecto...');
      await copyBaseTemplates({
        projectName: choices.projectName,
        targetDir,
        packageManager: options.packageManager || choices.packageManager,
        includeBlog: choices.includeBlog,
      });

      // Paso 2: Copiar políticas
      if (choices.selectedPolicies.length > 0) {
        logger.step(2, 2, 'Copiando políticas de seguridad...');
        await copyPolicies(targetDir, choices.selectedPolicies);
      } else {
        logger.step(2, 2, 'Saltando políticas (ninguna seleccionada)');
      }

      // Mensaje de éxito
      console.log();
      p.outro(pc.green('✨ ¡Proyecto creado exitosamente!'));

      // Mostrar siguiente pasos
      console.log();
      logger.title('📝 Próximos pasos:');
      console.log();
      console.log(pc.cyan(`  cd ${choices.projectName}`));
      console.log(pc.cyan(`  ${choices.packageManager} install`));
      console.log(pc.cyan(`  ${choices.packageManager} dev`));
      console.log();
      logger.info('Tu aplicación estará disponible en http://localhost:3000');
      console.log();
      logger.info('Para más información, visita: https://kudo.divisioncero.com');
      console.log();

      // Mostrar resumen de lo que se incluyó
      if (choices.selectedDominios.length > 0) {
        logger.info(`Dominios incluidos: ${choices.selectedDominios.join(', ').toUpperCase()}`);
      }
      if (choices.selectedPolicies.length > 0) {
        logger.info(`Total de políticas: ${choices.selectedPolicies.length}`);
      }
      if (choices.includeBlog) {
        logger.info('Blog incluido');
      }
      console.log();

    } catch (error) {
      console.error();
      if (error instanceof Error) {
        logger.error(error.message);
      } else {
        logger.error('Ocurrió un error inesperado');
      }
      process.exit(1);
    }
  });

program.parse();
