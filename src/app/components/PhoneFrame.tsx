interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneFrame({
  children,
  className = '',
}: PhoneFrameProps) {
  return (
    <div className={`phone-mockup-small relative ${className}`}>
      {/* Phone Frame */}
      <div
        className='relative w-80 h-[600px] rounded-[3rem] border-8 border-black overflow-hidden'
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Phone Screen */}
        <div
          className='phone-screen w-full h-full rounded-[2rem] p-6 flex flex-col'
          style={{
            background: 'var(--background)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
