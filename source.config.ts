import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkMdxMermaid, rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { remarkBlockId } from 'fumadocs-core/mdx-plugins/remark-block-id';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { defineConfig, defineDocs, defineCollections } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const docsConfig = {
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
      extractLinkReferences: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
};

export const frameworkDocs = defineDocs({ dir: 'content/framework', ...docsConfig });
export const sgxDocs = defineDocs({ dir: 'content/sgx', ...docsConfig });

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMdxMermaid, [remarkBlockId, { addDataAttribute: 'feedback' }]],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
});

// Definición de colección de blog
export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: pageSchema.extend({
    author: z.string(),
    date: z.preprocess(
      (val) => val instanceof Date ? val.toISOString().split('T')[0] : val,
      z.string()
    ),
  }),
});