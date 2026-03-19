import type { FooterLinkGroup, NavItem } from '@/types/content';

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collection', href: '/collection' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Explore',
    links: navigationItems,
  },
  {
    title: 'Collections',
    links: [
      { label: 'Heirloom Plush', href: '/collection' },
      { label: 'Wooden Discoveries', href: '/collection' },
      { label: 'Keepsake Gifting', href: '/collection' },
    ],
  },
];
