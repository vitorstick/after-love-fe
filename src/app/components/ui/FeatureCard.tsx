interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBackground?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBackground 
}: FeatureCardProps) {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
        style={{
          backgroundColor: iconBackground || 'rgba(255, 143, 163, 0.1)',
          color: 'var(--primary)',
        }}
      >
        {icon}
      </div>
      <h3 
        className="font-crimson text-2xl font-normal mb-4 italic" 
        style={{ color: 'var(--text-dark)' }}
      >
        {title}
      </h3>
      <p 
        className="text-lg leading-relaxed" 
        style={{ color: 'var(--text-light)' }}
      >
        {description}
      </p>
    </div>
  );
}