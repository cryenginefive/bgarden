import { CarouselSection } from './CarouselSection';
import { FeaturedPanels } from './FeaturedPanels';
import { AllSitesGrid } from './AllSitesGrid';
import { SpecialContent } from './SpecialContent';
import { SocialSection } from './SocialSection';
import { BonusesGrid } from './BonusesGrid';

export const TrustedSitesPage = () => {
  return (
    <div className="space-y-8">
      <CarouselSection />
      <FeaturedPanels />
      <AllSitesGrid />
      <SpecialContent />
      <SocialSection />
      <BonusesGrid />
    </div>
  );
};
