import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { aboutIntro, storyBlocks } from '@/data/about';

export const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.description}
      />

      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Philosophy"
              title="We believe children’s objects can be developmentally rich and visually composed."
              description="Our editorial approach favors pieces that balance imagination, safety, calm aesthetics, and a sense of occasion."
            />
            <div className="space-y-6">
              {storyBlocks.map((block) => (
                <article key={block.title} className="surface-card p-8 sm:p-10">
                  <h2 className="font-display text-3xl text-stone-950">{block.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone-950/68">{block.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
