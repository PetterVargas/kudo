import { Feed } from 'feed';
import { frameworkSource, sgxSource } from '@/lib/source';
import { appName } from '@/lib/shared';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export function getRSS() {
  const feed = new Feed({
    title: appName,
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  const pages = [...frameworkSource.getPages(), ...sgxSource.getPages()];

  for (const page of pages) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(),
    });
  }

  return feed.rss2();
}
