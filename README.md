# Royal Toy Atelier

A premium static boutique brand website for **Royal Toy Atelier**, built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**.

## Proposed folder structure

```text
src/
  assets/
  components/
    Button.tsx
    Container.tsx
    Footer.tsx
    Layout.tsx
    Navbar.tsx
    PageHero.tsx
    ProductCard.tsx
    SectionHeading.tsx
  data/
    about.ts
    brand.ts
    contact.ts
    footer.ts
    home.ts
    navigation.ts
    products.ts
  pages/
    AboutPage.tsx
    CollectionPage.tsx
    ContactPage.tsx
    HomePage.tsx
  sections/
    BrandIntroSection.tsx
    CuratedExperienceSection.tsx
    FeaturedCollectionSection.tsx
    HeroSection.tsx
    TestimonialSection.tsx
    WhatsAppCTASection.tsx
    WhyChooseUsSection.tsx
  styles/
    index.css
  types/
    content.ts
  App.tsx
  main.tsx
```

## Features

- Premium luxury boutique visual direction
- Fully static content with centralized data files
- Reusable section-based architecture
- Responsive pages for Home, About, Collection, and Contact
- WhatsApp-led inquiry flow
- Easy future expansion toward ecommerce or CMS integration

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Content maintenance

All editable brand and page content is centralized under `src/data/`.

- Brand and WhatsApp info: `src/data/brand.ts`
- Navigation and footer links: `src/data/navigation.ts`
- Homepage copy and benefits: `src/data/home.ts`
- Product catalog: `src/data/products.ts`
- About page editorial copy: `src/data/about.ts`
- Contact details and social links: `src/data/contact.ts`
