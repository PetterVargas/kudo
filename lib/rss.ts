import { Feed } from 'feed';
import { blog } from '@/lib/source';
import { appName, appDescription, baseUrl } from '@/lib/shared';

export function getRSS() {
  const posts = [...blog.getPages()].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const feed = new Feed({
    title: appName,
    description: appDescription,
    id: baseUrl,
    link: baseUrl,
    language: 'es',
    copyright: `Todos los derechos reservados ${new Date().getFullYear()}`,
    updated: posts.length ? new Date(posts[0].data.date) : new Date(),
  });

  for (const page of posts) {
    feed.addItem({
      id: `${baseUrl}${page.url}`,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      author: [{ name: page.data.author }],
      date: new Date(page.data.date),
    });
  }

  return feed.rss2();
}
