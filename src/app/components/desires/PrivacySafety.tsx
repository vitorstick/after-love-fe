import Section from '@/app/components/ui/Section';

export default function PrivacySafety() {
  const trustBadges = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Complete Privacy",
      description: "Your unmatched answers are never visible to your partner"
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
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
      title: "Secure & Encrypted",
      description: "All data is encrypted and stored securely"
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      ),
      title: "No Judgment Zone",
      description: "A safe space to explore without fear or shame"
    }
  ];

  return (
    <Section backgroundColor="var(--pastel-blue)">
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="font-crimson text-4xl md:text-5xl lg:text-6xl font-normal mb-6 italic"
          style={{ color: 'var(--text-dark)' }}
        >
          Your Privacy is Sacred
        </h2>
        <p
          className="text-xl md:text-2xl mb-12 leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
          We understand the importance of trust when exploring intimate desires. 
          That's why we've built privacy into every aspect of the experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{
                  backgroundColor: 'rgba(255, 143, 163, 0.1)',
                  color: 'var(--primary)',
                }}
              >
                {badge.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-dark)' }}>
                {badge.title}
              </h3>
              <p className="text-base" style={{ color: 'var(--text-light)' }}>
                {badge.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 
            className="font-crimson text-2xl font-normal mb-4 italic"
            style={{ color: 'var(--text-dark)' }}
          >
            Our Privacy Promise
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-light)' }}>
            Only mutual matches are revealed. If you both express interest in something, 
            you'll see it as a match. If only one of you is interested, that desire remains 
            completely private. This creates a judgment-free space where you can be honest 
            about your curiosities without fear.
          </p>
        </div>
      </div>
    </Section>
  );
}