import SignupForm from './SignupForm';

export default function HeroSection() {
  return (
    <section
      className='hero py-16 md:py-24'
      role='main'
      style={{
        background:
          'linear-gradient(180deg, var(--pastel-pink) 0%, var(--pastel-peach) 100%)',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <div className='hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Hero Content */}
          <div className='hero-content animate-in'>
            <h1
              className='font-crimson font-normal mb-6'
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                lineHeight: '1.3',
                color: 'var(--text-dark)',
                fontWeight: '400',
                letterSpacing: '-0.5px',
              }}
            >
              The Complete Intimacy Journey for{' '}
              <span className='highlight'>Modern Couples</span>
            </h1>

            <p
              className='hero-subtitle text-xl md:text-2xl leading-relaxed mb-8'
              style={{ color: 'var(--text-light)' }}
            >
              Transform your intimacy through guided conversations. Our simple
              questions help you communicate desires, appreciate each other, and
              build lasting connection.
            </p>

            <ul className='feature-list space-y-4 mb-8'>
              <li className='flex items-center gap-4'>
                <span
                  className='check-icon flex-shrink-0'
                  style={{ color: 'var(--primary)' }}
                >
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                </span>
                <span className='text-lg' style={{ color: 'var(--text-dark)' }}>
                  Discover what you both desire
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <span
                  className='check-icon flex-shrink-0'
                  style={{ color: 'var(--primary)' }}
                >
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                </span>
                <span className='text-lg' style={{ color: 'var(--text-dark)' }}>
                  Reflect on intimate moments
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <span
                  className='check-icon flex-shrink-0'
                  style={{ color: 'var(--primary)' }}
                >
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                </span>
                <span className='text-lg' style={{ color: 'var(--text-dark)' }}>
                  Check in on your relationship
                </span>
              </li>
            </ul>

            <p
              className='desktop-price text-xl font-semibold mb-6 lg:block hidden'
              style={{ color: 'var(--primary)' }}
            >
              €4.99/month • Cancel anytime
            </p>

            <a
              href='#signup'
              className='mobile-cta-button lg:hidden inline-block w-full text-center py-4 rounded-lg text-white font-medium text-lg transition-colors duration-200 hover:opacity-90'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Start Your Journey
            </a>
          </div>

          {/* Signup Form */}
          <div className='signup-form-wrapper'>
            <div
              className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
