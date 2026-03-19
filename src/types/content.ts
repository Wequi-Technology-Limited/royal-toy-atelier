export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  highlights: string[];
};

export type IntroStat = {
  value: string;
  label: string;
};

export type IntroContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stats: IntroStat[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  inquiryLabel: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type ExperienceFeature = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type StoryBlock = {
  title: string;
  body: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};
