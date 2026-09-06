import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { appName, appDescription, baseUrl } from '@/lib/shared';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './global.css';
import 'katex/dist/katex.css';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${appName}`,
    default: 'Kudo Framework de Ciberseguridad por y para LatAm - DivisionCero',
  },
  description: appDescription,
  keywords: [
    'framework de ciberseguridad',
    'ciberseguridad LatAm',
    'SGX',
    'SGSI',
    'SGC',
    'OSCAL',
    'controles de ciberseguridad',
    'políticas de seguridad de la información',
    'DivisionCero',
    'Kudo',
  ],
  authors: [{ name: 'Peter Vargas', url: 'https://petervargas.com' }],
  creator: 'DivisionCero',
  publisher: 'divisioncero.com',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_419',
    siteName: appName,
    title: 'Kudo - Framework de Ciberseguridad por y para LatAm',
    description: appDescription,
    url: baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@divisioncero',
    creator: '@divisioncero',
    title: 'Kudo - Framework de Ciberseguridad por y para LatAm',
    description: appDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: appName,
          url: `${baseUrl}/rss.xml`,
        },
      ],
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DivisionCero',
  url: 'https://divisioncero.com',
  logo: `${baseUrl}/android-chrome-512x512.png`,
  sameAs: [
    'https://x.com/divisioncero',
    'https://github.com/PetterVargas',
    'https://linkedin.com/company/divisioncero',
    'https://facebook.com/divisioncerocom',
    'https://instagram.com/divisioncero',
    'https://youtube.com/@divisioncero',
    'https://tiktok.com/@divisioncero',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: appName,
  description: appDescription,
  url: baseUrl,
  inLanguage: 'es',
  publisher: {
    '@type': 'Organization',
    name: 'DivisionCero',
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html:
          `.fd-feedback-container ::highlight(fd-feedback-text){background-color:var(--color-fd-primary);color:var(--color-fd-primary-foreground);}`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QCM48B2CJQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QCM48B2CJQ');
          `}
        </Script>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

