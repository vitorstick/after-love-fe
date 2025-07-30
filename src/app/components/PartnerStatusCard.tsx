'use client';

interface PartnerStatusCardProps {
  hasPartner: boolean;
  partnerName?: string;
  onInvitePartner?: () => void;
}

export default function PartnerStatusCard({
  hasPartner,
  partnerName,
  onInvitePartner,
}: PartnerStatusCardProps) {
  if (hasPartner && partnerName) {
    // Connected state - show partner info
    return (
      <div className='partner-status-card bg-white rounded-2xl shadow-lg p-6 mb-6'>
        <div className='partner-connected flex items-center gap-4'>
          <div 
            className='partner-avatar w-16 h-16 rounded-full flex items-center justify-center'
            style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
          >
            <svg
              width='32'
              height='32'
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
          
          <div className='partner-info flex-1'>
            <h3 
              className='font-medium text-lg mb-1'
              style={{ color: 'var(--text-dark)' }}
            >
              Connected with {partnerName}
            </h3>
            <p 
              className='text-sm flex items-center gap-2'
              style={{ color: 'var(--text-light)' }}
            >
              <span 
                className='status-dot w-2 h-2 rounded-full'
                style={{ backgroundColor: '#22c55e' }}
              ></span>
              Ready to explore together
            </p>
          </div>

          <div className='connection-badge'>
            <div 
              className='badge px-3 py-1 rounded-full text-xs font-medium'
              style={{ 
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#16a34a'
              }}
            >
              Connected
            </div>
          </div>
        </div>

        <div className='partner-actions mt-4 pt-4 border-t border-gray-100'>
          <p 
            className='text-sm text-center'
            style={{ color: 'var(--text-light)' }}
          >
            Start your journey together with intimate reflections and deeper conversations.
          </p>
        </div>
      </div>
    );
  }

  // Not connected state - show invite option
  return (
    <div className='partner-status-card bg-white rounded-2xl shadow-lg p-6 mb-6'>
      <div className='partner-invite text-center'>
        <div 
          className='invite-icon mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full'
          style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
        >
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{ color: 'var(--primary)' }}
          >
            <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
            <circle cx='9' cy='7' r='4'></circle>
            <path d='M22 21v-2a4 4 0 0 0-3-3.87'></path>
            <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
          </svg>
        </div>

        <h3 
          className='font-crimson text-xl font-medium mb-2 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Invite Your Partner
        </h3>
        
        <p 
          className='text-base leading-relaxed mb-4'
          style={{ color: 'var(--text-light)' }}
        >
          AfterLove is designed for couples to explore together. Invite your partner to unlock the full experience.
        </p>

        <div className='invite-benefits mb-6 text-left'>
          <div className='benefit-item flex items-start gap-3 mb-3'>
            <div 
              className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='12'
                height='12'
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
            <span 
              className='text-sm'
              style={{ color: 'var(--text-dark)' }}
            >
              Share intimate reflections safely together
            </span>
          </div>

          <div className='benefit-item flex items-start gap-3 mb-3'>
            <div 
              className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='12'
                height='12'
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
            <span 
              className='text-sm'
              style={{ color: 'var(--text-dark)' }}
            >
              Discover each other&apos;s desires and dreams
            </span>
          </div>

          <div className='benefit-item flex items-start gap-3'>
            <div 
              className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <svg
                width='12'
                height='12'
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
            <span 
              className='text-sm'
              style={{ color: 'var(--text-dark)' }}
            >
              Build deeper intimacy through guided conversations
            </span>
          </div>
        </div>

        {onInvitePartner && (
          <button
            onClick={onInvitePartner}
            className='btn-primary w-full py-3 rounded-lg text-white font-medium text-base transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
            style={{ backgroundColor: 'var(--primary)' }}
            aria-label='Invite your partner'
          >
            Invite Your Partner
          </button>
        )}
      </div>
    </div>
  );
}
