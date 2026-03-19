import { Container } from './Container';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <section className="section-space pb-12">
      <Container>
        <div className="surface-card overflow-hidden px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="max-w-4xl font-display text-5xl leading-none text-stone-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="section-copy mt-6 max-w-2xl">{description}</p>
        </div>
      </Container>
    </section>
  );
};
