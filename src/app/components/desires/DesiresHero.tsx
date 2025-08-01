import Section from '@/app/components/ui/Section';
import CTAButton from '@/app/components/ui/CTAButton';

export default function DesiresHero() {
  return (
    <Section gradient="linear-gradient(135deg, var(--pastel-pink) 0%, #FFDDE6 100%)">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className="font-crimson text-5xl md:text-6xl lg:text-7xl font-normal mb-6 italic"
          style={{ color: 'var(--text-dark)' }}
        >
          Explore Your Desires Together
        </h1>
        <p
          className="text-xl md:text-2xl mb-12 leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
          A safe space to discover what you both want, with complete privacy for non-matches
        </p>
        <CTAButton href="/desires/start" size="large">
          Begin Your Journey →
        </CTAButton>
      </div>
    </Section>
  );
}