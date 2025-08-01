import Section from '@/app/components/ui/Section';
import FeatureCard from '@/app/components/ui/FeatureCard';

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Complete Together",
      description: "Answer questions after intimate moments when you're both relaxed and open"
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: "Private & Honest",
      description: "Your answers remain completely private until both partners express the same interest"
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: "Discover Matches",
      description: "See only what you both desire, creating a safe space for exploration"
    }
  ];

  return (
    <Section backgroundColor="var(--gray-light)">
      <div className="text-center mb-12">
        <h2
          className="font-crimson text-4xl md:text-5xl lg:text-6xl font-normal mb-4 italic"
          style={{ color: 'var(--text-dark)' }}
        >
          How It Works
        </h2>
        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          style={{ color: 'var(--text-light)' }}
        >
          A simple, private process designed for couples
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <FeatureCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </Section>
  );
}