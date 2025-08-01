import DesiresHero from '@/app/components/desires/DesiresHero';
import HowItWorks from '@/app/components/desires/HowItWorks';
import CategoryShowcase from '@/app/components/desires/CategoryShowcase';
import PrivacySafety from '@/app/components/desires/PrivacySafety';
import DesiresCtaSection from '@/app/components/desires/DesiresCtaSection';

export default function DesiresPage() {
  return (
    <main className="desires-page">
      <DesiresHero />
      <HowItWorks />
      <CategoryShowcase />
      <PrivacySafety />
      <DesiresCtaSection />
    </main>
  );
}