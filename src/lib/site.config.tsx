import { type Metadata } from 'next';

import logoImg from '@/public/logo.svg';
import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Fasraf . Business . Solution',
  description: 'Fasraf . Business . Solution',
  logo: logoImg,
  icon: logoImg,
  mode: MODE.DARK,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description,
): Metadata => {
  return {
    title: title ? `${title} - Fasraf-Business` : siteConfig.title,
    description,

    openGraph: openGraph ?? {
      title: title ? `${title} - Fasraf-Business` : title,
      description,
      url: 'https://www.fasikaconsult.com/',
      siteName: 'Fasraf . Business . Solution',
      locale: 'en_US',
      type: 'website',
    },
  };
};
