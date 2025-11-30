import { execa } from 'execa';
import ora from 'ora';
import { logger } from './logger.js';
import type { PackageManager } from '../constants.js';

/**
 * Instala las dependencias del proyecto
 */
export async function installDependencies(
  targetDir: string,
  packageManager: PackageManager
): Promise<void> {
  const spinner = ora({
    text: `Instalando dependencias con ${packageManager}...`,
    color: 'cyan',
  }).start();

  try {
    await execa(packageManager, ['install'], {
      cwd: targetDir,
      stdio: 'pipe',
    });

    spinner.succeed(`Dependencias instaladas con ${packageManager}`);
  } catch (error) {
    spinner.fail('Error al instalar dependencias');
    logger.error('Puedes instalar las dependencias manualmente ejecutando:');
    logger.info(`cd ${targetDir} && ${packageManager} install`);
    throw error;
  }
}
