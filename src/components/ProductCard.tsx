import { brand } from '@/data/brand';
import type { Product } from '@/types/content';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappHref = `https://wa.me/${brand.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello Royal Toy Atelier, I would like to inquire about ${product.name}.`,
  )}`;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-stone-950/10 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1">
      <div className="aspect-[4/4.4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 p-6 sm:p-7">
        <span className="inline-flex rounded-full bg-sand-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-950/58">
          {product.category}
        </span>
        <div>
          <h3 className="font-display text-3xl text-stone-950">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-stone-950/66">{product.description}</p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm font-semibold tracking-[0.08em] text-stone-950 transition-colors duration-300 hover:text-gold-400"
        >
          {product.inquiryLabel}
        </a>
      </div>
    </article>
  );
};
