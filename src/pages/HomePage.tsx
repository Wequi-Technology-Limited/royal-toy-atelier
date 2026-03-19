import { HeroSection } from '@/sections/HeroSection';
import { BrandIntroSection } from '@/sections/BrandIntroSection';
import { FeaturedCollectionSection } from '@/sections/FeaturedCollectionSection';
import { WhyChooseUsSection } from '@/sections/WhyChooseUsSection';
import { CuratedExperienceSection } from '@/sections/CuratedExperienceSection';
import { TestimonialSection } from '@/sections/TestimonialSection';
import { WhatsAppCTASection } from '@/sections/WhatsAppCTASection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <FeaturedCollectionSection />
      <WhyChooseUsSection />
      <CuratedExperienceSection />
      <TestimonialSection />
      <WhatsAppCTASection />
    </>
  );
};
