import * as p from '@clack/prompts';
import pc from 'picocolors';
import { DOMINIOS, PACKAGE_MANAGERS, type DominioId, type PackageManager } from './constants.js';

export interface UserChoices {
  projectName: string;
  packageManager: PackageManager;
  selectedDominios: DominioId[];
  selectedPolicies: string[];
  includeBlog: boolean;
}

export async function runInteractivePrompts(defaultProjectName?: string): Promise<UserChoices> {
  console.log();
  p.intro(pc.bgCyan(pc.black(' create-kudo-app ')));

  const projectName = await p.text({
    message: '¿Cuál es el nombre de tu proyecto?',
    placeholder: defaultProjectName || 'my-kudo-project',
    defaultValue: defaultProjectName,
    validate: (value) => {
      if (!value) return 'El nombre del proyecto es requerido';
      if (!/^[a-z0-9-_]+$/i.test(value)) {
        return 'El nombre solo puede contener letras, números, guiones y guiones bajos';
      }
    },
  });

  if (p.isCancel(projectName)) {
    p.cancel('Operación cancelada');
    process.exit(0);
  }

  const packageManager = await p.select({
    message: '¿Qué package manager quieres usar?',
    options: PACKAGE_MANAGERS.map((pm) => ({
      value: pm,
      label: pm,
      hint: pm === 'pnpm' ? 'Recomendado' : undefined,
    })),
    initialValue: 'pnpm',
  });

  if (p.isCancel(packageManager)) {
    p.cancel('Operación cancelada');
    process.exit(0);
  }

  // Incluir todos los dominios por defecto (sin preguntar)
  const selectedDominios: DominioId[] = Object.keys(DOMINIOS) as DominioId[];
  const selectedPolicies: string[] = Object.values(DOMINIOS).flatMap((d) => d.politicas);

  // Incluir blog por defecto (sin preguntar)
  const includeBlog = true;

  return {
    projectName: projectName as string,
    packageManager: packageManager as PackageManager,
    selectedDominios,
    selectedPolicies,
    includeBlog,
  };
}
