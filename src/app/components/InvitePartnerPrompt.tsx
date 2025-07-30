'use client';

interface InvitePartnerPromptProps {
  onInvitePartner: () => void;
  onSkipForNow: () => void;
}

export default function InvitePartnerPrompt({
  onInvitePartner,
  onSkipForNow,
}: InvitePartnerPromptProps) {
  return (
    <div className='invite-prompt-container animate-in' id='invite-prompt'>
      <div className='prompt-header text-center mb-8'>
        <div
          className='prompt-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
          style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
        >
          <svg
            width='40'
            height='40'
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

        <h2
          className='font-crimson text-3xl font-medium mb-4 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Ready to Connect?
        </h2>
        <p
          className='text-lg leading-relaxed mb-2'
          style={{ color: 'var(--text-light)' }}
        >
          AfterLove is designed for couples to explore together.
        </p>
        <p
          className='text-lg leading-relaxed'
          style={{ color: 'var(--text-light)' }}
        >
          Invite your partner to join you on this journey.
        </p>
      </div>

      <div className='prompt-content mb-8'>
        <div className='benefits-list space-y-4'>
          <div className='benefit-item flex items-start gap-3'>
            <div
              className='benefit-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
            </div>
            <span className='text-base' style={{ color: 'var(--text-dark)' }}>
              Both partners need to complete reflections for them to be shared
            </span>
          </div>

          <div className='benefit-item flex items-start gap-3'>
            <div
              className='benefit-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
            </div>
            <span className='text-base' style={{ color: 'var(--text-dark)' }}>
              Your responses remain private until your partner joins
            </span>
          </div>

          <div className='benefit-item flex items-start gap-3'>
            <div
              className='benefit-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
            </div>
            <span className='text-base' style={{ color: 'var(--text-dark)' }}>
              Start building deeper intimacy and connection together
            </span>
          </div>
        </div>
      </div>

      <div className='prompt-actions space-y-4'>
        <button
          onClick={onInvitePartner}
          className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label='Invite your partner'
        >
          Invite Your Partner
        </button>

        <button
          onClick={onSkipForNow}
          className='btn-secondary w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2 hover:bg-gray-50'
          style={{
            color: 'var(--text-light)',
            borderColor: '#E5E7EB',
          }}
          aria-label='Skip invitation for now'
        >
          I&apos;ll invite them later
        </button>
      </div>

      <div
        className='prompt-footer mt-6 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        You can always invite your partner later from your dashboard.
      </div>
    </div>
  );
}
