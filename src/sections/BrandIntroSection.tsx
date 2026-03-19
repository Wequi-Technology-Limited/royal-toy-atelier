import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { introContent } from '@/data/home';

export const BrandIntroSection = () => {
  return (
    <section className="section-space pt-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <SectionHeading eyebrow={introContent.eyebrow} title={introContent.title} />

          <div className="space-y-8">
            {introContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="section-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {introContent.stats.map((stat) => (
            <div key={stat.label} className="surface-card p-8">
              <p className="font-display text-4xl text-stone-950">{stat.value}</p>
              <p className="mt-4 text-sm leading-7 text-stone-950/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
