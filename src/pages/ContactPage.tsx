import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { contactDetails, socialLinks, whatsappLink } from '@/data/contact';

export const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Private inquiries for gifting, availability, and curated recommendations."
        description="We welcome WhatsApp-led conversations from families and gift buyers seeking a more considered shopping experience in Dhaka."
      />

      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card p-8 sm:p-10">
              <span className="eyebrow">WhatsApp concierge</span>
              <h2 className="font-display text-4xl text-stone-950">Begin your inquiry with ease.</h2>
              <p className="mt-4 text-sm leading-7 text-stone-950/68">
                For product availability, gift recommendations, or curated selections for special occasions,
                connect directly via WhatsApp.
              </p>
              <div className="mt-8">
                <Button cta={{ label: 'Open WhatsApp', href: whatsappLink, variant: 'primary' }} external />
              </div>
            </div>

            <div className="grid gap-6">
              <div className="surface-card p-8 sm:p-10">
                <span className="eyebrow">Studio details</span>
                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label}>
                      <p className="text-xs uppercase tracking-luxury text-stone-950/50">{detail.label}</p>
                      {detail.href ? (
                        <a
                          className="mt-2 inline-flex text-lg text-stone-950 hover:text-gold-400"
                          href={detail.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-lg text-stone-950/76">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-8 sm:p-10">
                <span className="eyebrow">Social placeholders</span>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-stone-950/10 px-4 py-2 text-sm text-stone-950/68 hover:border-stone-950/25 hover:text-stone-950"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
