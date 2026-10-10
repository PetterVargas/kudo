import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName, appDescription } from '@/lib/shared';

export const revalidate = false;

export function GET() {
  return new ImageResponse(
    <DefaultImage
      title="Kudo - Framework de Ciberseguridad por y para LatAm"
      description={appDescription}
      site={appName}
    />,
    {
      width: 1200,
      height: 630,
    },
  );
}
