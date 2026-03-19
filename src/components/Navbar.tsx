import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { brand } from '@/data/brand';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-950/10 bg-sand-50/90 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-5">
        <Link className="flex flex-col" to="/" aria-label={brand.name}>
          <span className="font-display text-2xl leading-none tracking-[0.08em] text-stone-950">
            Royal Toy
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-luxury text-stone-950/50">
            Atelier · Dhaka
          </span>
        </Link>

        <button
          className="inline-flex rounded-full border border-stone-950/10 px-4 py-2 text-sm font-medium text-stone-950 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm tracking-[0.08em] ${
                  isActive ? 'text-stone-950' : 'text-stone-950/58 hover:text-stone-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <nav className="container-shell flex flex-col gap-3 border-t border-stone-950/10 py-4 lg:hidden" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm tracking-[0.08em] ${
                  isActive ? 'bg-white text-stone-950' : 'text-stone-950/65 hover:bg-white/70 hover:text-stone-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
};
