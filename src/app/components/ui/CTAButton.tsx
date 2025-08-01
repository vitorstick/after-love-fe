import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  className?: string;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'normal', 
  className = '' 
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105';
  const sizeClasses = size === 'large' ? 'px-12 py-4 text-xl' : 'px-8 py-4 text-lg';
  
  const variantStyles = variant === 'primary' 
    ? { backgroundColor: 'var(--primary)', color: 'white' }
    : { backgroundColor: 'white', color: 'var(--primary)', border: '2px solid var(--primary)' };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses} ${className}`}
      style={variantStyles}
    >
      {children}
    </Link>
  );
}