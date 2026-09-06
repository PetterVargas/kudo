'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * fumadocs-ui's nav/header links (logo, top nav items, icon buttons) don't
 * accept a per-item `title` prop, so its rendered <a> tags ship without one.
 * This backfills `title` from the link's aria-label or visible text on any
 * <a> missing it, sitewide, and re-runs on route changes / DOM mutations
 * (mobile menu, popovers, etc.) so newly rendered links are covered too.
 */
function labelFor(anchor: HTMLAnchorElement): string | null {
  const ariaLabel = anchor.getAttribute('aria-label');
  if (ariaLabel?.trim()) return ariaLabel.trim();

  const text = anchor.textContent?.replace(/\s+/g, ' ').trim();
  if (text) return text.slice(0, 100);

  const altSource = anchor.querySelector('img[alt], svg title');
  const alt = altSource?.getAttribute('alt') ?? altSource?.textContent;
  if (alt?.trim()) return alt.trim();

  return null;
}

function applyTitles(root: ParentNode) {
  root.querySelectorAll<HTMLAnchorElement>('a[href]:not([title])').forEach((a) => {
    const label = labelFor(a);
    if (label) a.title = label;
  });
}

export function LinkTitles() {
  const pathname = usePathname();

  useEffect(() => {
    applyTitles(document);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) applyTitles(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
