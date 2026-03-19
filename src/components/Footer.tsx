import { Link } from 'react-router-dom';
import { brand } from '@/data/brand';
import { footerContent } from '@/data/footer';
import { footerLinkGroups } from '@/data/navigation';
import { socialLinks, whatsappLink } from '@/data/contact';

export const Footer = () => {
  return (
    <footer className="border-t border-stone-950/10 bg-white/70">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-3xl text-stone-950">{brand.name}</p>
          <p className="mt-4 text-sm leading-7 text-stone-950/68">{footerContent.note}</p>
          <a
            className="mt-6 inline-flex text-sm font-semibold tracking-[0.08em] text-stone-950 hover:text-gold-400"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp concierge
          </a>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-luxury text-stone-950/55">{group.title}</p>
            <ul className="mt-5 space-y-3 text-sm text-stone-950/68">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <Link className="hover:text-stone-950" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-shell flex flex-col gap-4 border-t border-stone-950/10 py-6 text-sm text-stone-950/55 sm:flex-row sm:items-center sm:justify-between">
        <p>{footerContent.copyright}</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-stone-950">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
