import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeading } from '@/components/SectionHeading';
import { products } from '@/data/products';

export const FeaturedCollectionSection = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section-space">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured collection"
            title="Curated pieces selected for beauty, quality, and occasion-ready gifting."
            description="Our boutique assortment is intentionally limited, allowing every item to feel elevated, collectible, and worthy of thoughtful inquiry."
          />
          <Button cta={{ label: 'View All Pieces', href: '/collection', variant: 'ghost' }} />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
