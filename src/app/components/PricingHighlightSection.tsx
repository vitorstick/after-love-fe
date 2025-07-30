export default function PricingHighlightSection() {
  return (
    <section
      className='pricing-highlight py-12 md:py-16 text-center'
      style={{ background: 'var(--pastel-blue)' }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <h2
          className='font-crimson text-3xl md:text-4xl lg:text-5xl font-normal mb-12 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          All Three Apps for One Price
        </h2>

        <div className='apps-included flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12'>
          {/* Desires App */}
          <div className='app-item flex flex-col items-center'>
            <div
              className='app-icon mb-4 w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg'
              style={{ color: 'var(--primary)' }}
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
              >
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
              </svg>
            </div>
            <h4
              className='text-lg font-medium'
              style={{ color: 'var(--text-dark)' }}
            >
              Desires
            </h4>
          </div>

          {/* Plus Sign */}
          <div
            className='plus-sign text-2xl font-light hidden md:block'
            style={{ color: 'var(--primary)' }}
          >
            +
          </div>

          {/* Afterglow App */}
          <div className='app-item flex flex-col items-center'>
            <div
              className='app-icon mb-4 w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg'
              style={{ color: 'var(--primary)' }}
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
            <h4
              className='text-lg font-medium'
              style={{ color: 'var(--text-dark)' }}
            >
              Afterglow
            </h4>
          </div>

          {/* Plus Sign */}
          <div
            className='plus-sign text-2xl font-light hidden md:block'
            style={{ color: 'var(--primary)' }}
          >
            +
          </div>

          {/* Real Talk App */}
          <div className='app-item flex flex-col items-center'>
            <div
              className='app-icon mb-4 w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg'
              style={{ color: 'var(--primary)' }}
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
              >
                <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
                <line x1='8' y1='8' x2='16' y2='8'></line>
                <line x1='8' y1='12' x2='14' y2='12'></line>
              </svg>
            </div>
            <h4
              className='text-lg font-medium'
              style={{ color: 'var(--text-dark)' }}
            >
              Real Talk
            </h4>
          </div>
        </div>

        <p
          className='text-xl md:text-2xl font-medium'
          style={{ color: 'var(--text-light)' }}
        >
          €4.99/month • Unlimited Access • Both Partners Included
        </p>
      </div>
    </section>
  );
}
