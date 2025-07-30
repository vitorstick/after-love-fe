'use client';

interface WelcomeScreenProps {
  userName: string;
  onContinue: () => void;
}

export default function WelcomeScreen({
  userName,
  onContinue,
}: WelcomeScreenProps) {
  return (
    <div className='welcome-container animate-in' id='welcome'>
      <div className='welcome-header text-center mb-8'>
        <h2
          className='font-crimson text-3xl font-medium mb-4 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Welcome to AfterLove, {userName}!
        </h2>
        <p
          className='text-lg leading-relaxed'
          style={{ color: 'var(--text-light)' }}
        >
          You&apos;ve taken the first step towards deeper intimacy and
          connection.
        </p>
      </div>

      <div className='welcome-content mb-8'>
        <div className='features-preview space-y-6'>
          <div className='feature-item flex items-start gap-4'>
            <div
              className='feature-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ color: 'var(--primary)' }}
              >
                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div>
              <h3
                className='font-medium text-lg mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Connect with Your Partner
              </h3>
              <p style={{ color: 'var(--text-light)' }}>
                Invite your partner to join you on this journey of deeper
                connection and intimacy.
              </p>
            </div>
          </div>

          <div className='feature-item flex items-start gap-4'>
            <div
              className='feature-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ color: 'var(--primary)' }}
              >
                <circle cx='12' cy='12' r='5'></circle>
                <line x1='12' y1='1' x2='12' y2='3'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                <line x1='1' y1='12' x2='3' y2='12'></line>
                <line x1='21' y1='12' x2='23' y2='12'></line>
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
              </svg>
            </div>
            <div>
              <h3
                className='font-medium text-lg mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Reflect & Grow Together
              </h3>
              <p style={{ color: 'var(--text-light)' }}>
                Share thoughtful reflections after intimate moments and discover
                new depths of connection.
              </p>
            </div>
          </div>

          <div className='feature-item flex items-start gap-4'>
            <div
              className='feature-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ color: 'var(--primary)' }}
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div>
              <h3
                className='font-medium text-lg mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Build Intimacy
              </h3>
              <p style={{ color: 'var(--text-light)' }}>
                Explore desires, communicate openly, and strengthen your
                emotional and physical bond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-colors duration-200 hover:opacity-90'
        style={{ backgroundColor: 'var(--primary)' }}
        aria-label='Continue to next step'
      >
        Let&apos;s Get Started
      </button>

      <div
        className='welcome-footer mt-6 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        Your journey to deeper connection begins now.
      </div>
    </div>
  );
}
