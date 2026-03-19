import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { testimonials } from '@/data/home';

export const TestimonialSection = () => {
  return (
    <section className="section-space bg-white/60">
      <Container>
        <SectionHeading
          eyebrow="Trust & sentiment"
          title="A quiet sense of trust, designed to grow with the brand."
          description="This placeholder section introduces the tone for future client stories, brand mentions, and curated testimonials."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="surface-card p-8 sm:p-10">
              <blockquote className="font-display text-3xl leading-tight text-stone-950">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-stone-950/58">
                <span className="font-semibold text-stone-950">{testimonial.author}</span>
                <span className="mx-2">·</span>
                {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
