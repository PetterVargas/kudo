import { frameworkDocs, sgxDocs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import {
  baseUrl,
  frameworkRoute, frameworkImageRoute, frameworkContentRoute,
  sgxRoute, sgxImageRoute, sgxContentRoute,
} from './shared';

export const frameworkSource = loader({
  baseUrl: frameworkRoute,
  source: frameworkDocs.toFumadocsSource(),
  plugins: [],
});

export const sgxSource = loader({
  baseUrl: sgxRoute,
  source: sgxDocs.toFumadocsSource(),
  plugins: [],
});

export function getFrameworkPageImage(page: (typeof frameworkSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `${frameworkImageRoute}/${segments.join('/')}` };
}

export function getFrameworkPageMarkdownUrl(page: (typeof frameworkSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `${frameworkContentRoute}/${segments.join('/')}` };
}

export function getSgxPageImage(page: (typeof sgxSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `${sgxImageRoute}/${segments.join('/')}` };
}

export function getSgxPageMarkdownUrl(page: (typeof sgxSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `${sgxContentRoute}/${segments.join('/')}` };
}

export async function getLLMText(page: (typeof frameworkSource)['$inferPage'] | (typeof sgxSource)['$inferPage']) {
  const processed = await page.data.getText('processed');
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}

export function getBreadcrumbJsonLd(
  source: typeof frameworkSource | typeof sgxSource,
  page: { slugs: string[]; url: string; data: { title: string } },
  sectionName: string,
  sectionUrl: string,
) {
  const items: { name: string; url: string }[] = [
    { name: 'Inicio', url: baseUrl },
    { name: sectionName, url: `${baseUrl}${sectionUrl}` },
  ];

  for (let i = 1; i <= page.slugs.length; i++) {
    const slice = page.slugs.slice(0, i);
    const isLast = i === page.slugs.length;
    const crumbPage = isLast ? page : source.getPage(slice);
    if (!crumbPage) continue;

    items.push({
      name: crumbPage.data.title,
      url: `${baseUrl}${crumbPage.url}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type SeoPage = { slugs: string[]; url: string; data: { title: string; description?: string } };

const MIN_DESCRIPTION_LENGTH = 100;
let duplicateTitles: Set<string> | undefined;

function getDuplicateTitles() {
  if (!duplicateTitles) {
    const counts = new Map<string, number>();
    for (const p of [...frameworkSource.getPages(), ...sgxSource.getPages()]) {
      counts.set(p.data.title, (counts.get(p.data.title) ?? 0) + 1);
    }
    duplicateTitles = new Set([...counts].filter(([, n]) => n > 1).map(([t]) => t));
  }
  return duplicateTitles;
}

/**
 * Título y descripción para metadata. El título visible (y el del sidebar) no
 * cambia: solo se agrega el contexto de la página padre cuando el título se
 * repite en el sitio (p. ej. "Correlación entre Dominios") o la descripción es
 * demasiado corta para un snippet de buscador.
 */
export function getSeoMeta(source: typeof frameworkSource | typeof sgxSource, page: SeoPage) {
  const parent = page.slugs.length > 0 ? source.getPage(page.slugs.slice(0, -1)) : undefined;
  const parentTitle = parent && parent.url !== page.url ? parent.data.title : undefined;
  const { title } = page.data;
  const description = page.data.description ?? '';

  const seoTitle = parentTitle && getDuplicateTitles().has(title) ? `${title} de ${parentTitle}` : title;

  let seoDescription = description;
  if (description.length < MIN_DESCRIPTION_LENGTH) {
    const base = description.replace(/[.\s]+$/, '');
    const context = parentTitle ? `${parentTitle} — ` : '';
    seoDescription = `${base}. ${context}Kudo, framework de ciberseguridad open-source por y para LatAm.`;
  }

  return { title: seoTitle, description: seoDescription };
}
