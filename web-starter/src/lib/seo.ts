import type { Page, SiteMeta } from '@/content/types';

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  twitterCard: 'summary_large_image';
}

export function buildSeo(site: SiteMeta, page: Page): SeoMeta {
  const baseUrl = new URL(site.url);
  const canonicalPath = page.canonical ?? page.slug;
  const canonical = new URL(canonicalPath, baseUrl).toString();

  return {
    title: `${site.name} | ${page.title}`,
    description: page.description,
    canonical,
    ogImage: new URL('/favicon.svg', baseUrl).toString(),
    twitterCard: 'summary_large_image'
  };
}
