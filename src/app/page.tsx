import AfterglowSection from './components/AfterglowSection';
import CtaSection from './components/CtaSection';
import DesiresSection from './components/DesiresSection';
import HeroSection from './components/HeroSection';
import PricingHighlightSection from './components/PricingHighlightSection';
import RealTalkSection from './components/RealTalkSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DesiresSection />
      <AfterglowSection />
      <RealTalkSection />
      <PricingHighlightSection />
      <CtaSection />
    </div>
  );
}
