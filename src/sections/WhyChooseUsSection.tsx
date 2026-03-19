import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { benefits } from '@/data/home';

export const WhyChooseUsSection = () => {
  return (
    <section className="section-space bg-white/60">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Luxury standards for families who care how a gift feels, lasts, and lives at home."
          description="Every detail—from materials to presentation—is selected to support elevated play with confidence and grace."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="surface-card h-full p-8">
              <h3 className="font-display text-3xl text-stone-950">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-950/66">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
