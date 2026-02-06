export type SectionType = 'hero' | 'features' | 'cta';

export interface SiteMeta {
  name: string;
  url: string;
  locale: string;
}

export interface HeroSection {
  type: 'hero';
  id: string;
  heading: string;
  lead: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export interface FeatureItem {
  title: string;
  text: string;
  icon?: {
    type: 'lottie';
    src: string;
    label: string;
  };
}

export interface FeaturesSection {
  type: 'features';
  id: string;
  heading: string;
  items: FeatureItem[];
}

export interface CTASection {
  type: 'cta';
  id: string;
  heading: string;
  text: string;
  icon?: {
    type: 'lottie';
    src: string;
    label: string;
  };
  action: {
    label: string;
    href: string;
  };
}

export type Section = HeroSection | FeaturesSection | CTASection;

export interface Page {
  slug: string;
  title: string;
  description: string;
  canonical?: string;
  sections: Section[];
}

export interface SiteData {
  site: SiteMeta;
  pages: Page[];
}

export type HeroProps = {
  section: HeroSection;
};

export type FeaturesProps = {
  section: FeaturesSection;
};

export type CTAProps = {
  section: CTASection;
};
