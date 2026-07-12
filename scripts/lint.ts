import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { frameworkSource, sgxSource } from '@/lib/source';

async function checkLinks() {
  const allFrameworkPages = frameworkSource.getPages();
  const allSgxPages = sgxSource.getPages();

  const scanned = await scanURLs({
    preset: 'next',
    populate: {
      'framework/[[...slug]]': allFrameworkPages.map((page) => ({
        value: { slug: page.slugs },
        hashes: getHeadings(page),
      })),
      'sgx/[[...slug]]': allSgxPages.map((page) => ({
        value: { slug: page.slugs },
        hashes: getHeadings(page),
      })),
    },
  });

  const files = await Promise.all([
    ...allFrameworkPages.map((page) => toFileObject(page)),
    ...allSgxPages.map((page) => toFileObject(page)),
  ]);

  printErrors(
    await validateFiles(files, {
      scanned,
      markdown: {
        components: {
          Card: { attributes: ['href'] },
        },
      },
      checkRelativePaths: 'as-url',
    }),
    true,
  );
}

type AnyPage =
  | (typeof frameworkSource)['$inferPage']
  | (typeof sgxSource)['$inferPage'];

function getHeadings(page: AnyPage): string[] {
  return page.data.toc.map((item) => item.url.slice(1));
}

async function toFileObject(page: AnyPage): Promise<FileObject> {
  return {
    path: page.absolutePath,
    content: await page.data.getText('raw'),
    url: page.url,
    data: page.data,
  };
}

void checkLinks();
