'use client';
import { SidebarTabsDropdown } from 'fumadocs-ui/components/sidebar/tabs/dropdown';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';

export function SubSectionPicker({ tabs }: { tabs: LayoutTab[] }) {
  return (
    <SidebarTabsDropdown
      options={tabs}
      placeholder="Seleccionar categoría"
    />
  );
}
