export const appName = 'Kudo';

export const appDescription =
  'Kudo es el framework de ciberseguridad abierto de LatAm: SGX, 35 controles adaptados a OSCAL y más de 25 templates de políticas listos para implementar.';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://kudo.divisioncero.com';

export const frameworkRoute = '/framework';
export const frameworkImageRoute = '/og/framework';
export const frameworkContentRoute = '/llms.mdx/framework';

export const sgxRoute = '/sgx';
export const sgxImageRoute = '/og/sgx';
export const sgxContentRoute = '/llms.mdx/sgx';

export const homeImageRoute = '/og/home';

export const gitConfig = {
  user: 'PetterVargas',
  repo: 'kudo',
  branch: 'main',
};

// Next.js does not deep-merge `openGraph` between layout and page metadata:
// any page that defines its own `openGraph` object silently drops the root
// layout's siteName/locale. Spread this into every page-level openGraph object.
export const defaultOpenGraph = {
  siteName: appName,
  locale: 'es_419',
} as const;
