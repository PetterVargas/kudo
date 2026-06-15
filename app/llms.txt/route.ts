import { frameworkSource, sgsiSource } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export function GET() {
  const content = [
    llms(frameworkSource).index(),
    llms(sgsiSource).index(),
  ].join('\n\n');

  return new Response(content);
}
