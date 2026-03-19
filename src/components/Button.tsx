import { Link } from 'react-router-dom';
import type { CTA } from '@/types/content';

type ButtonProps = {
  cta: CTA;
  external?: boolean;
};

const variantClasses: Record<NonNullable<CTA['variant']>, string> = {
  primary:
    'bg-stone-950 text-white hover:bg-stone-950/90 focus-visible:outline-stone-950',
  secondary:
    'border border-stone-950/15 bg-white/70 text-stone-950 hover:border-stone-950/30 hover:bg-white focus-visible:outline-stone-950',
  ghost:
    'bg-transparent text-stone-950 hover:bg-white/50 focus-visible:outline-stone-950',
};

export const Button = ({ cta, external = false }: ButtonProps) => {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variantClasses[cta.variant ?? 'primary']}`;

  if (external) {
    return (
      <a className={classes} href={cta.href} target="_blank" rel="noreferrer">
        {cta.label}
      </a>
    );
  }

  return (
    <Link className={classes} to={cta.href}>
      {cta.label}
    </Link>
  );
};
