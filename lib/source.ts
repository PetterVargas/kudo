import { frameworkDocs, sgsiDocs, blogPosts } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import {
  frameworkRoute, frameworkImageRoute, frameworkContentRoute,
  sgsiRoute, sgsiImageRoute, sgsiContentRoute,
} from './shared';

export const frameworkSource = loader({
  baseUrl: frameworkRoute,
  source: frameworkDocs.toFumadocsSource(),
  plugins: [],
});

export const sgsiSource = loader({
  baseUrl: sgsiRoute,
  source: sgsiDocs.toFumadocsSource(),
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

export function getSgsiPageImage(page: (typeof sgsiSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `${sgsiImageRoute}/${segments.join('/')}` };
}

export function getSgsiPageMarkdownUrl(page: (typeof sgsiSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `${sgsiContentRoute}/${segments.join('/')}` };
}

export async function getLLMText(page: (typeof frameworkSource)['$inferPage'] | (typeof sgsiSource)['$inferPage']) {
  const processed = await page.data.getText('processed');
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
