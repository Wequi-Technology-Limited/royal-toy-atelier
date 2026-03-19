import type { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-hero-glow">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
