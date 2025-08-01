import Section from '@/app/components/ui/Section';
import CTAButton from '@/app/components/ui/CTAButton';

export default function DesiresCtaSection() {
  return (
    <Section gradient="linear-gradient(135deg, var(--pastel-pink) 0%, #F8E8F0 100%)">
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="font-crimson text-4xl md:text-5xl lg:text-6xl font-normal mb-6 italic"
          style={{ color: 'var(--text-dark)' }}
        >
          Ready to Explore Together?
        </h2>
        <p
          className="text-xl md:text-2xl mb-12 leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
          Join thousands of couples who have discovered new dimensions of intimacy 
          through honest, safe exploration
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <CTAButton href="/signup" size="large">
            Start Your Free Trial →
          </CTAButton>
          <CTAButton href="/login" variant="secondary">
            Already have an account? Sign in
          </CTAButton>
        </div>
        
        <p className="text-base" style={{ color: 'var(--text-light)' }}>
          <span className="font-semibold" style={{ color: 'var(--primary)' }}>
            7-day free trial
          </span>
          {' '}• No credit card required • Cancel anytime
        </p>
      </div>
    </Section>
  );
}