import { sgxSource, getSgxPageImage, getSgxPageMarkdownUrl, getBreadcrumbJsonLd } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig, sgxRoute, defaultOpenGraph } from '@/lib/shared';
export default async function Page(props: PageProps<'/sgx/[[...slug]]'>) {
  const params = await props.params;
  const page = sgxSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getSgxPageMarkdownUrl(page).url;
  const breadcrumbJsonLd = getBreadcrumbJsonLd(sgxSource, page, 'SGX', sgxRoute);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/sgx/${page.path}`}
          />
        </div>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(sgxSource, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return sgxSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/sgx/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = sgxSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      ...defaultOpenGraph,
      type: 'article',
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      images: {
        url: getSgxPageImage(page).url,
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
