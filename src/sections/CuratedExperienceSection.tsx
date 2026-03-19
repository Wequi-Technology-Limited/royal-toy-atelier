import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { experienceFeatures } from '@/data/home';

export const CuratedExperienceSection = () => {
  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Curated experience"
            title="A boutique approach shaped by restraint, taste, and intention."
            description="Royal Toy Atelier is built around the idea that premium children’s objects should feel as considered as any luxury lifestyle purchase."
          />

          <div className="surface-card p-8 sm:p-10">
            <div className="space-y-8">
              {experienceFeatures.map((feature, index) => (
                <div key={feature.title} className="grid gap-3 border-b border-stone-950/10 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[56px_1fr]">
                  <span className="font-display text-4xl text-gold-400">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl text-stone-950">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-950/68">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
