import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { ViewOptions } from '@/components/page-actions';

const owner = 'PetterVargas';
const repo = 'divisioncero-docs';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <div className="container flex flex-col items-center py-12">
        <h1 className="mb-2 text-center text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-2 text-center text-fd-muted-foreground">{page.data.description}</p>
        <div className="flex flex-row gap-2 items-center border-b mb-6 pb-4">
          <ViewOptions
            markdownUrl={`/api/mdx${page.url}`}
            githubUrl={`https://github.com/${owner}/${repo}/blob/main/content/blog/${page.path}`}
          />
        </div>
        <div className="flex flex-col items-center gap-1 text-sm">
          <span className="text-fd-muted-foreground">
            By {page.data.author} &middot; {new Date(page.data.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>
      <article className="container flex flex-col px-4 py-8">
        <div className="prose min-w-0">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </div>
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
