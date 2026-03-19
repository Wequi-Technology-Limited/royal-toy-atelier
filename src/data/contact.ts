import { brand } from './brand';
import type { ContactDetail, SocialLink } from '@/types/content';

const whatsappHref = `https://wa.me/${brand.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
  brand.whatsappMessage,
)}`;

export const contactDetails: ContactDetail[] = [
  {
    label: 'WhatsApp',
    value: brand.whatsappNumber,
    href: whatsappHref,
  },
  {
    label: 'Location',
    value: brand.location,
  },
  {
    label: 'Availability',
    value: 'Private inquiries and curated gifting appointments by message',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Pinterest', href: '#' },
];

export const whatsappLink = whatsappHref;
