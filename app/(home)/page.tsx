import type { Metadata } from 'next';
import { appDescription, homeImageRoute, defaultOpenGraph } from '@/lib/shared';
import { HomeContent } from './home-content';

export const metadata: Metadata = {
  title: {
    absolute: 'Kudo - Framework de Ciberseguridad por y para LatAm | DivisionCero',
  },
  description: appDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...defaultOpenGraph,
    type: 'website',
    url: '/',
    title: 'Kudo - Framework de Ciberseguridad por y para LatAm',
    description: appDescription,
    images: {
      url: homeImageRoute,
      width: 1200,
      height: 630,
      alt: 'Kudo - Framework de Ciberseguridad por y para LatAm',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kudo - Framework de Ciberseguridad por y para LatAm',
    description: appDescription,
  },
};

export default function HomePage() {
  return <HomeContent />;
}
