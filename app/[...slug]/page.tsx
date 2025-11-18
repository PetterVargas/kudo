import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from 'fumadocs-ui/page';
import { ViewOptions } from '@/components/page-actions';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { Rate } from '@/components/rate';

const owner = 'PetterVargas';
const repo = 'divisioncero-docs';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const lastModified = page.data.lastModified;
  const formattedDate = lastModified
    ? new Date(lastModified).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <h1 className="text-3xl font-semibold">{page.data.title}</h1>
      <p className="text-lg text-fd-muted-foreground">
        {page.data.description}
      </p>
      <div className="flex flex-row gap-2 items-center border-b mb-6 pb-4">
        <ViewOptions
          markdownUrl={`/api/mdx${page.url}`}
          githubUrl={`https://github.com/${owner}/${repo}/blob/main/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // 👇 esta es la forma nativa de Fumadocs
            a: createRelativeLink(source, page),
          })}
        />

        <Rate />

        {formattedDate && (
          <p className="text-sm text-gray-500 mt-8">
            Última modificación: {formattedDate}
          </p>
        )}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  // Filtrar la ruta raíz (/) para evitar conflicto con la home page
  return source.generateParams().filter(params =>
    params.slug && params.slug.length > 0
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
