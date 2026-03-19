import type {
  Benefit,
  ExperienceFeature,
  HeroContent,
  IntroContent,
  Testimonial,
} from '@/types/content';

export const heroContent: HeroContent = {
  eyebrow: 'Boutique toy studio · Dhaka',
  title: 'Curated toys for families with a refined eye for play.',
  description:
    'Royal Toy Atelier brings together premium imported toys chosen for their craftsmanship, certified safety, and quiet elegance—perfect for elevated everyday play and memorable gifting.',
  primaryCta: {
    label: 'Explore the Collection',
    href: '/collection',
    variant: 'primary',
  },
  secondaryCta: {
    label: 'Discover the Atelier',
    href: '/about',
    variant: 'secondary',
  },
  highlights: ['Premium imported selection', 'Thoughtful gifting guidance', 'Meaningful play, beautifully presented'],
};

export const introContent: IntroContent = {
  eyebrow: 'Brand introduction',
  title: 'A calmer, more discerning way to shop for children.',
  paragraphs: [
    'We curate a concise collection of premium toys that complement modern homes and modern parenting—pieces that invite imagination without overwhelming the senses.',
    'Each selection is chosen for tactile beauty, developmental value, and gifting appeal, allowing families to invest in playthings that feel intentional from first glance to final ribbon.',
  ],
  stats: [
    { value: 'Curated', label: 'Imported toys, never mass-market clutter' },
    { value: 'Safety-led', label: 'Materials selected with care and certification in mind' },
    { value: 'Gift-ready', label: 'Elegant presentation for meaningful occasions' },
  ],
};

export const benefits: Benefit[] = [
  {
    title: 'Premium quality',
    description: 'Boutique-caliber pieces chosen for craftsmanship, tactile appeal, and enduring beauty.',
  },
  {
    title: 'Certified safe materials',
    description: 'Selections prioritize trusted materials and internationally recognized manufacturing standards.',
  },
  {
    title: 'Educational value',
    description: 'Open-ended play, sensory engagement, and development-friendly design remain central to every curation.',
  },
  {
    title: 'Elegant gifting',
    description: 'Ideal for birthdays, newborn arrivals, and milestone gifting with a polished boutique finish.',
  },
];

export const experienceFeatures: ExperienceFeature[] = [
  {
    title: 'Thoughtfully selected assortment',
    description: 'We focus on fewer, better pieces to create a collection that feels elevated, cohesive, and confidently chosen.',
  },
  {
    title: 'Aesthetic harmony for modern homes',
    description: 'Soft tones, natural finishes, and refined forms ensure every toy feels at home in beautifully designed living spaces.',
  },
  {
    title: 'Personal, boutique-led guidance',
    description: 'Whether you are choosing a first keepsake or a memorable gift, our recommendations remain intimate and considered.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'The collection feels less like shopping for toys and more like discovering heirloom objects for childhood.',
    author: 'Private Client',
    role: 'Dhaka family gifting circle',
  },
  {
    quote:
      'Every piece feels beautifully chosen—quiet, elegant, and genuinely meaningful for our home.',
    author: 'Atelier Patron',
    role: 'Mother of two',
  },
];
