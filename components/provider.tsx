'use client';
import SearchDialog from '@/components/search';
import { LinkTitles } from '@/components/link-titles';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog }}>
      <LinkTitles />
      {children}
    </RootProvider>
  );
}
