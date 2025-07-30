'use client';

interface ConnectionSuccessProps {
  partnerName: string;
  onContinueToApp: () => void;
}

export default function ConnectionSuccess({
  partnerName,
  onContinueToApp,
}: ConnectionSuccessProps) {
  return (
    <div
      className='connection-success-container animate-in'
      id='connection-success'
    >
      <div className='success-header text-center mb-8'>
        <div
          className='success-icon mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full'
          style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
        >
          <svg
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{ color: '#22c55e' }}
          >
            <path d='M8 12l2 2 4-4'></path>
            <circle cx='12' cy='12' r='10'></circle>
          </svg>
        </div>

        <h2
          className='font-crimson text-3xl font-medium mb-4 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          You&apos;re Connected!
        </h2>
        <p
          className='text-lg leading-relaxed mb-2'
          style={{ color: 'var(--text-light)' }}
        >
          Welcome to AfterLove! You&apos;re now connected with
        </p>
        <p className='text-xl font-medium' style={{ color: 'var(--primary)' }}>
          {partnerName}
        </p>
      </div>

      <div className='success-content mb-8'>
        <div className='celebration-card bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 mb-6'>
          <div className='celebration-text text-center'>
            <h3
              className='font-medium text-lg mb-3'
              style={{ color: 'var(--text-dark)' }}
            >
              🎉 Your journey together begins now!
            </h3>
            <p
              className='text-base leading-relaxed'
              style={{ color: 'var(--text-light)' }}
            >
              You can now explore deeper intimacy, share reflections, and build
              stronger connections together.
            </p>
          </div>
        </div>

        <div className='features-preview space-y-4'>
          <h4
            className='font-medium text-base mb-3'
            style={{ color: 'var(--text-dark)' }}
          >
            What&apos;s available to you now:
          </h4>

          <div className='feature-item flex items-start gap-3'>
            <div
              className='feature-icon flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.5)' }}
            >
              <svg
                width='16'
                height='16'
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
              <h5
                className='font-medium text-sm mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Afterglow Reflections
              </h5>
              <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                Share thoughtful reflections after intimate moments
              </p>
            </div>
          </div>

          <div className='feature-item flex items-start gap-3'>
            <div
              className='feature-icon flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.5)' }}
            >
              <svg
                width='16'
                height='16'
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
              <h5
                className='font-medium text-sm mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Desires Exploration
              </h5>
              <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                Discover and communicate your intimate desires safely
              </p>
            </div>
          </div>

          <div className='feature-item flex items-start gap-3'>
            <div
              className='feature-icon flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center'
              style={{ backgroundColor: 'rgba(232, 227, 245, 0.5)' }}
            >
              <svg
                width='16'
                height='16'
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
              <h5
                className='font-medium text-sm mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Real Talk Check-ins
              </h5>
              <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                Weekly conversations to strengthen your bond
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onContinueToApp}
        className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
        style={{ backgroundColor: 'var(--primary)' }}
        aria-label='Continue to AfterLove app'
      >
        Start Exploring Together
      </button>

      <div
        className='success-footer mt-6 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        {partnerName} has been notified that you&apos;ve joined. Welcome to your
        journey together! 💕
      </div>
    </div>
  );
}
