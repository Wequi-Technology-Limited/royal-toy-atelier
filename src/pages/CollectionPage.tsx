import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export const CollectionPage = () => {
  return (
    <>
      <PageHero
        eyebrow="The collection"
        title="A curated boutique selection of imported toys with warmth, substance, and distinction."
        description="Explore our static showcase of premium pieces chosen for beautiful gifting, quiet luxury, and meaningful play at home."
      />

      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
