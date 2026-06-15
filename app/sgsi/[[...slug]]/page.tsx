import { sgsiSource, getSgsiPageImage, getSgsiPageMarkdownUrl } from '@/lib/source';
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
import { gitConfig } from '@/lib/shared';
import { Feedback } from '@/components/feedback/client';

export default async function Page(props: PageProps<'/sgsi/[[...slug]]'>) {
  const params = await props.params;
  const page = sgsiSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getSgsiPageMarkdownUrl(page).url;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/sgsi/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(sgsiSource, page),
          })}
        />
      </DocsBody>
      <Feedback
        onSendAction={async (feedback) => {
          'use server';
          console.log(feedback);
          return {};
        }}
      />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return sgsiSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/sgsi/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = sgsiSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getSgsiPageImage(page).url,
    },
  };
}
