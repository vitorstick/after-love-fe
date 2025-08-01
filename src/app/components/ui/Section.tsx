interface SectionProps {
  gradient?: string;
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ 
  gradient, 
  backgroundColor, 
  className = '', 
  children 
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      style={{
        background: gradient || backgroundColor || 'transparent',
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-5">
        {children}
      </div>
    </section>
  );
}