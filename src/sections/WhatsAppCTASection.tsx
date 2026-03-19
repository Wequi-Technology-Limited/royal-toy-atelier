import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { brand } from '@/data/brand';
import { whatsappLink } from '@/data/contact';

export const WhatsAppCTASection = () => {
  return (
    <section className="section-space">
      <Container>
        <div className="surface-card overflow-hidden px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow">WhatsApp concierge</span>
              <h2 className="section-heading max-w-3xl">
                Enquire about availability, gifting, or curated recommendations with ease.
              </h2>
              <p className="section-copy mt-6 max-w-2xl">
                For private inquiries, personal gifting assistance, or product reservations, connect with
                Royal Toy Atelier directly on WhatsApp.
              </p>
            </div>
            <Button
              cta={{ label: `Message ${brand.name}`, href: whatsappLink, variant: 'primary' }}
              external
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
