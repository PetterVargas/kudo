import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog, getBlogPageImage } from '@/lib/source';
import { ViewOptions } from '@/components/page-actions';
import { baseUrl, defaultOpenGraph } from '@/lib/shared';

const owner = 'PetterVargas';
const repo = 'kudo';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.data.title,
    description: page.data.description,
    datePublished: page.data.date,
    author: {
      '@type': 'Person',
      name: page.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DivisionCero',
    },
    mainEntityOfPage: `${baseUrl}${page.url}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="w-full max-w-(--fd-layout-width) mx-auto px-4 flex flex-col items-center py-12">
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
      <article className="w-full max-w-(--fd-layout-width) mx-auto px-4 flex flex-col py-8">
        <div className="prose mx-auto min-w-0">
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
    authors: [{ name: page.data.author }],
    openGraph: {
      ...defaultOpenGraph,
      type: 'article',
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      publishedTime: page.data.date,
      authors: [page.data.author],
      images: {
        url: getBlogPageImage(page).url,
        width: 1200,
        height: 630,
        alt: page.data.title,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
    },
  };
}
