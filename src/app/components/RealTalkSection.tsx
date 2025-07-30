import PhoneFrame from './PhoneFrame';

export default function RealTalkSection() {
  return (
    <div
      className='category-section realtalk-section py-16 md:py-24'
      style={{
        background: 'linear-gradient(135deg, #E0F5F1 0%, #D0F0EA 100%)',
      }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <div className='category-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Category Text */}
          <div className='category-text'>
            <div
              className='category-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
              style={{
                backgroundColor: 'rgba(224, 245, 241, 0.3)',
                color: 'var(--primary)',
              }}
            >
              <svg
                width='60'
                height='60'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
                <line x1='8' y1='8' x2='16' y2='8'></line>
                <line x1='8' y1='12' x2='14' y2='12'></line>
              </svg>
            </div>

            <h3
              className='font-crimson text-4xl md:text-5xl font-normal mb-4 italic'
              style={{ color: 'var(--text-dark)' }}
            >
              Real Talk
            </h3>

            <p
              className='category-subtitle text-xl md:text-2xl mb-8 leading-relaxed'
              style={{ color: 'var(--text-light)' }}
            >
              Check in on your relationship
            </p>

            <div className='category-details mb-8'>
              <ul className='space-y-4'>
                <li className='flex items-start gap-4'>
                  <svg
                    className='check-svg flex-shrink-0 mt-1'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    style={{ color: 'var(--primary)' }}
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  <span
                    className='text-lg leading-relaxed'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    5 simple questions about relationship health
                  </span>
                </li>
                <li className='flex items-start gap-4'>
                  <svg
                    className='check-svg flex-shrink-0 mt-1'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    style={{ color: 'var(--primary)' }}
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  <span
                    className='text-lg leading-relaxed'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    Complements your post-intimacy reflections with broader
                    check-ins
                  </span>
                </li>
                <li className='flex items-start gap-4'>
                  <svg
                    className='check-svg flex-shrink-0 mt-1'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    style={{ color: 'var(--primary)' }}
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  <span
                    className='text-lg leading-relaxed'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    Encourages ongoing communication beyond the bedroom
                  </span>
                </li>
              </ul>
            </div>

            <a
              href='/real-talk'
              className='category-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Start Conversation →
            </a>
          </div>

          {/* Category Visual */}
          <div className='category-visual flex justify-center lg:justify-end'>
            <PhoneFrame>
              {/* Mini App Content */}
              <div className='mini-app-content flex-1 flex flex-col justify-center'>
                <h4
                  className='text-lg font-medium mb-6 text-center'
                  style={{ color: 'var(--primary)' }}
                >
                  Weekly Check-in
                </h4>

                <p
                  className='mini-question font-crimson text-xl italic text-center mb-8 leading-relaxed px-4'
                  style={{ color: 'var(--text-dark)' }}
                >
                  What&apos;s one thing your partner did this week that you
                  appreciated?
                </p>

                <div className='mini-textarea-container mb-6'>
                  <textarea
                    className='mini-textarea w-full p-4 rounded-xl border-2 border-gray-200 bg-white resize-none h-32 text-gray-700'
                    placeholder='Share your appreciation...'
                    style={{ fontFamily: 'var(--font-instrument-sans)' }}
                  />
                </div>

                <div className='mini-button-container flex justify-center'>
                  <button
                    className='mini-button px-8 py-3 rounded-full text-white font-medium text-lg transition-all duration-200 hover:opacity-90'
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
