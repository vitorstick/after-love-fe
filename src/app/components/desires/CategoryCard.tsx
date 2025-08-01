import Section from '@/app/components/ui/Section';
import CheckList from '@/app/components/ui/CheckList';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  isReversed?: boolean;
  visual?: React.ReactNode;
}

export default function CategoryCard({ 
  title, 
  description, 
  icon, 
  gradient, 
  features, 
  isReversed = false,
  visual 
}: CategoryCardProps) {
  const contentOrder = isReversed ? 'lg:order-2' : '';
  const visualOrder = isReversed ? 'lg:order-1' : '';

  return (
    <Section gradient={gradient}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`category-text ${contentOrder}`}>
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(255, 143, 163, 0.1)',
              color: 'var(--primary)',
            }}
          >
            {icon}
          </div>
          
          <h3 
            className="font-crimson text-4xl md:text-5xl font-normal mb-4 italic" 
            style={{ color: 'var(--text-dark)' }}
          >
            {title}
          </h3>
          
          <p 
            className="text-xl md:text-2xl mb-8 leading-relaxed" 
            style={{ color: 'var(--text-light)' }}
          >
            {description}
          </p>
          
          <CheckList items={features} />
        </div>
        
        <div className={`category-visual flex justify-center lg:justify-end ${visualOrder}`}>
          {visual}
        </div>
      </div>
    </Section>
  );
}