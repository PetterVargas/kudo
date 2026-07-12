import { frameworkSource, sgxSource } from '@/lib/source';
import type { Graph } from '../components/graph-view';

export function buildGraph(): Graph {
  const sources = [frameworkSource, sgxSource];
  const graph: Graph = { links: [], nodes: [] };

  for (const source of sources) {
    for (const page of source.getPages()) {
      graph.nodes.push({
        id: page.url,
        url: page.url,
        text: page.data.title,
        description: page.data.description,
      });

      const { extractedReferences = [] } = page.data;
      for (const ref of extractedReferences) {
        const refPage =
          frameworkSource.getPageByHref(ref.href) ??
          sgxSource.getPageByHref(ref.href);
        if (!refPage) continue;

        graph.links.push({
          source: page.url,
          target: refPage.page.url,
        });
      }
    }
  }

  return graph;
}
