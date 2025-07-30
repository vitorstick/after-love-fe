'use client';

interface InvitationSentConfirmationProps {
  partnerEmail: string;
  onResendInvitation: () => void;
  onContinueToApp: () => void;
}

export default function InvitationSentConfirmation({
  partnerEmail,
  onResendInvitation,
  onContinueToApp,
}: InvitationSentConfirmationProps) {
  return (
    <div className='invitation-sent-container animate-in' id='invitation-sent'>
      <div className='confirmation-header text-center mb-8'>
        <div 
          className='confirmation-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
          style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
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
            style={{ color: '#22c55e' }}
          >
            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
            <polyline points='22 4 12 14.01 9 11.01'></polyline>
          </svg>
        </div>
        
        <h2
          className='font-crimson text-3xl font-medium mb-4 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Invitation Sent!
        </h2>
        <p 
          className='text-lg leading-relaxed mb-2'
          style={{ color: 'var(--text-light)' }}
        >
          We&apos;ve sent an invitation to
        </p>
        <p 
          className='text-lg font-medium'
          style={{ color: 'var(--primary)' }}
        >
          {partnerEmail}
        </p>
      </div>

      <div className='confirmation-content mb-8'>
        <div className='next-steps-card bg-gray-50 rounded-xl p-6'>
          <h3 
            className='font-medium text-lg mb-4'
            style={{ color: 'var(--text-dark)' }}
          >
            What happens next?
          </h3>
          
          <div className='steps-list space-y-4'>
            <div className='step-item flex items-start gap-3'>
              <div 
                className='step-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-white'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                1
              </div>
              <span 
                className='text-base'
                style={{ color: 'var(--text-dark)' }}
              >
                Your partner will receive an email with a unique invitation link
              </span>
            </div>

            <div className='step-item flex items-start gap-3'>
              <div 
                className='step-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-white'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                2
              </div>
              <span 
                className='text-base'
                style={{ color: 'var(--text-dark)' }}
              >
                They&apos;ll create their account and connect with you
              </span>
            </div>

            <div className='step-item flex items-start gap-3'>
              <div 
                className='step-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-white'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                3
              </div>
              <span 
                className='text-base'
                style={{ color: 'var(--text-dark)' }}
              >
                You&apos;ll both be notified when you&apos;re connected
              </span>
            </div>
          </div>
        </div>

        <div className='tips-section mt-6'>
          <div className='tip-card border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg'>
            <div className='flex items-start gap-3'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-blue-600 flex-shrink-0 mt-0.5'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='12' y1='16' x2='12' y2='12'></line>
                <line x1='12' y1='8' x2='12.01' y2='8'></line>
              </svg>
              <div>
                <p className='text-sm font-medium text-blue-800 mb-1'>
                  Tip: Check your spam folder
                </p>
                <p className='text-sm text-blue-700'>
                  Sometimes invitation emails can end up in spam. Let your partner know to check there if they don&apos;t see it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='confirmation-actions space-y-4'>
        <button
          onClick={onContinueToApp}
          className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label='Continue to app'
        >
          Continue to AfterLove
        </button>

        <button
          onClick={onResendInvitation}
          className='btn-secondary w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2 hover:bg-gray-50'
          style={{ 
            color: 'var(--text-light)', 
            borderColor: '#E5E7EB' 
          }}
          aria-label='Resend invitation'
        >
          Resend Invitation
        </button>
      </div>

      <div
        className='confirmation-footer mt-6 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        You can always invite more partners or manage invitations from your dashboard.
      </div>
    </div>
  );
}
