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
  { label: 'Instagram', href: 'https://www.facebook.com/profile.php?id=61588504080209' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588504080209' },
  { label: 'Pinterest', href: 'https://www.facebook.com/profile.php?id=61588504080209' },
];

export const whatsappLink = whatsappHref;
