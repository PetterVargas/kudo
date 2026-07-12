import { frameworkDocs, sgxDocs, blogPosts } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import {
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

export const blog = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
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
