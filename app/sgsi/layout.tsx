import { sgsiSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, sectionTabs, getSgsiSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';

export default function Layout({ children }: LayoutProps<'/sgsi'>) {
  return (
    <DocsLayout
      tree={sgsiSource.getPageTree()}
      tabs={sectionTabs}
      sidebar={{ banner: <SubSectionPicker key="sgsi-subtabs" tabs={getSgsiSubTabs()} /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
