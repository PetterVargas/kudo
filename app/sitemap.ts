import type { MetadataRoute } from 'next';
import { execFileSync } from 'node:child_process';
import { frameworkSource, sgxSource, blog } from '@/lib/source';
import { baseUrl } from '@/lib/shared';

export const revalidate = false;

function getGitLastModified(contentPath: string): Date | undefined {
  try {
    const output = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', contentPath],
      { cwd: process.cwd(), encoding: 'utf-8' },
    ).trim();
    return output ? new Date(output) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  const frameworkRoutes: MetadataRoute.Sitemap = frameworkSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: getGitLastModified(`content/framework/${page.path}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const sgxRoutes: MetadataRoute.Sitemap = sgxSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: getGitLastModified(`content/sgx/${page.path}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blog.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.data.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...frameworkRoutes, ...sgxRoutes, ...blogRoutes];
}
