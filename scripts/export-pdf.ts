import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { frameworkSource, sgxSource } from '@/lib/source';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';
const OUT_DIR = 'pdfs';

const urls = [
  ...frameworkSource.getPages().map((p) => p.url),
  ...sgxSource.getPages().map((p) => p.url),
];

async function exportPdf(browser: Awaited<ReturnType<typeof puppeteer.launch>>, pathname: string) {
  const page = await browser.newPage();

  await page.goto(BASE_URL + pathname, { waitUntil: 'networkidle2' });

  const filename = pathname.replace(/^\//, '').replaceAll('/', '-') + '.pdf';
  await page.pdf({
    path: path.join(OUT_DIR, filename),
    width: 950,
    printBackground: true,
  });

  console.log(`✓ ${pathname}`);
  await page.close();
}

const browser = await puppeteer.launch();
await fs.mkdir(OUT_DIR, { recursive: true });

for (const url of urls) {
  await exportPdf(browser, url);
}

await browser.close();
console.log(`\nPDFs saved to ./${OUT_DIR}/`);
