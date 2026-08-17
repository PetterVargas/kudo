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
