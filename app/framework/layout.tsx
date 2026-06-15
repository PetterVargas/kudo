import { frameworkSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, sectionTabs, getFrameworkSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';

export default function Layout({ children }: LayoutProps<'/framework'>) {
  return (
    <DocsLayout
      tree={frameworkSource.getPageTree()}
      tabs={sectionTabs}
      sidebar={{ banner: <SubSectionPicker key="framework-subtabs" tabs={getFrameworkSubTabs()} /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
