import {   
  defineConfig,   
  defineDocs,   
  metaSchema,   
  defineCollections,   
  frontmatterSchema, 
} from 'fumadocs-mdx/config'; 

import { z } from 'zod'; 
import rehypeKatex from 'rehype-katex'; 
import remarkMath from 'remark-math';  

// Definición de docs y metadatos
export const docs = defineDocs({   
  docs: {     
    schema: frontmatterSchema,   
  },   
  meta: {     
    schema: metaSchema,   
  },   
});  

// Configuración principal
export default defineConfig({   
  lastModifiedTime: 'git', // 👈 añade la última modificación desde Git
  mdxOptions: {     
    remarkPlugins: [remarkMath],     
    rehypePlugins: (v) => [rehypeKatex, ...v],   
  }, 
});  

// Definición de colección de blog
export const blogPosts = defineCollections({   
  type: 'doc',   
  dir: 'content/blog',   
  schema: frontmatterSchema.extend({     
    author: z.string(),     
    date: z.string().date().or(z.date()),   
  }), 
});
