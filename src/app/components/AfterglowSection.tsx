import PhoneFrame from './PhoneFrame';

export default function AfterglowSection() {
  return (
    <div
      className='category-section afterglow-section py-16 md:py-24'
      style={{
        background:
          'linear-gradient(135deg, var(--pastel-lavender) 0%, #DDD6F3 100%)',
      }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <div className='category-content reverse grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Category Visual - First on desktop (reversed) */}
          <div className='category-visual flex justify-center lg:justify-start order-2 lg:order-1'>
            <PhoneFrame>
              {/* Mini App Content */}
              <div className='mini-app-content flex-1 flex flex-col justify-center'>
                <h4
                  className='text-lg font-medium mb-6 text-center'
                  style={{ color: 'var(--primary)' }}
                >
                  Today&apos;s Reflection
                </h4>

                <p
                  className='mini-question font-crimson text-xl italic text-center mb-8 leading-relaxed px-4'
                  style={{ color: 'var(--text-dark)' }}
                >
                  What moment during our intimacy felt most connecting to you?
                </p>

                <div className='mini-textarea-container mb-6'>
                  <textarea
                    className='mini-textarea w-full p-4 rounded-xl border-2 border-gray-200 bg-white resize-none h-32 text-gray-700'
                    placeholder='Share your thoughts...'
                    style={{ fontFamily: 'var(--font-instrument-sans)' }}
                  />
                </div>

                <div
                  className='partner-status text-center text-sm italic'
                  style={{ color: 'var(--text-light)' }}
                >
                  Emma is also reflecting...
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* Category Text - Second on desktop (reversed) */}
          <div className='category-text order-1 lg:order-2'>
            <div
              className='category-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
              style={{
                backgroundColor: 'rgba(232, 227, 245, 0.3)',
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

            <h3
              className='font-crimson text-4xl md:text-5xl font-normal mb-4 italic'
              style={{ color: 'var(--text-dark)' }}
            >
              Afterglow
            </h3>

            <p
              className='category-subtitle text-xl md:text-2xl mb-8 leading-relaxed'
              style={{ color: 'var(--text-light)' }}
            >
              Reflect on intimate moments
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
                    5 thoughtful questions after intimacy
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
                    Responses revealed only when both complete
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
                    Creates safe space for vulnerability and appreciation
                  </span>
                </li>
              </ul>
            </div>

            <a
              href='/afterglow'
              className='category-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Begin Reflection →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
