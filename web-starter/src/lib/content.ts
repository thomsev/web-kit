import siteDataJson from '@/content/site.json';
import type { Page, SiteData } from '@/content/types';

const siteData: SiteData = siteDataJson;

export function getSiteData(): SiteData {
  return siteData;
}

export function getPageBySlug(slug: string): Page {
  const page = siteData.pages.find((entry) => entry.slug === slug);

  if (!page) {
    throw new Error(`Fant ingen side for slug: ${slug}`);
  }

  return page;
}
