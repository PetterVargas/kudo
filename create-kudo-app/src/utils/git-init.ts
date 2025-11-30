import { execa } from 'execa';
import { logger } from './logger.js';

/**
 * Inicializa un repositorio Git
 */
export async function initGit(targetDir: string): Promise<void> {
  try {
    await execa('git', ['init'], { cwd: targetDir });
    await execa('git', ['add', '.'], { cwd: targetDir });
    await execa(
      'git',
      ['commit', '-m', 'Initial commit - Kudo app created'],
      { cwd: targetDir }
    );

    logger.success('Repositorio Git inicializado');
  } catch (error) {
    logger.warn('No se pudo inicializar el repositorio Git');
    // No fallar si Git no está disponible
  }
}
