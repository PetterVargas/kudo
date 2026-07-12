import { sgxSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, sectionTabs, getSgxSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';

export default function Layout({ children }: LayoutProps<'/sgx'>) {
  return (
    <DocsLayout
      tree={sgxSource.getPageTree()}
      tabs={sectionTabs}
      sidebar={{ banner: <SubSectionPicker key="sgx-subtabs" tabs={getSgxSubTabs()} /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
