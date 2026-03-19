import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { heroContent } from '@/data/home';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden section-space pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <span className="eyebrow">{heroContent.eyebrow}</span>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.95] text-stone-950 sm:text-7xl lg:text-[5.75rem]">
              {heroContent.title}
            </h1>
            <p className="section-copy mt-8 max-w-2xl">{heroContent.description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button cta={heroContent.primaryCta} />
              <Button cta={heroContent.secondaryCta} />
            </div>
          </div>

          <div className="surface-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
            <div className="grid gap-6 rounded-[1.5rem] bg-sand-100/70 p-6 sm:p-8">
              <div className="aspect-[4/4.8] overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury curated toys display"
                  className="h-full w-full object-cover"
                />
              </div>
              <ul className="space-y-3">
                {heroContent.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm leading-6 text-stone-950/68"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
