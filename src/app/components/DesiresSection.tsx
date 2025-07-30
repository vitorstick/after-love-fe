export default function DesiresSection() {
  return (
    <div
      className='category-section desires-section py-16 md:py-24'
      style={{
        background:
          'linear-gradient(135deg, var(--pastel-pink) 0%, #FFDDE6 100%)',
      }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <div className='category-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Category Text */}
          <div className='category-text'>
            <div
              className='category-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
              style={{
                backgroundColor: 'rgba(255, 143, 163, 0.1)',
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
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
              </svg>
            </div>

            <h3
              className='font-crimson text-4xl md:text-5xl font-normal mb-4 italic'
              style={{ color: 'var(--text-dark)' }}
            >
              Desires
            </h3>

            <p
              className='category-subtitle text-xl md:text-2xl mb-8 leading-relaxed'
              style={{ color: 'var(--text-light)' }}
            >
              Post-intimacy questionnaire to discover mutual desires
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
                    Only shows mutual matches - complete privacy for non-matches
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
                    Complete after intimacy to explore new possibilities
                    together
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
                    Perfect for exploring new ideas in the afterglow of intimacy
                  </span>
                </li>
              </ul>
            </div>

            <a
              href='/desires'
              className='category-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Start Exploring →
            </a>
          </div>

          {/* Category Visual */}
          <div className='category-visual flex justify-center lg:justify-end'>
            <div className='phone-mockup-small relative'>
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
                    background:
                      'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-pink) 100%)',
                  }}
                >
                  {/* Mini App Content */}
                  <div className='mini-app-content flex-1 flex flex-col justify-center'>
                    <h4
                      className='text-lg font-medium mb-6 text-center'
                      style={{ color: 'var(--primary)' }}
                    >
                      Level 1 - Question 3
                    </h4>

                    <p
                      className='mini-question font-crimson text-xl italic text-center mb-8 leading-relaxed px-4'
                      style={{ color: 'var(--text-dark)' }}
                    >
                      After our time together, I&apos;m curious about sensual
                      massage with oils
                    </p>

                    <div className='mini-options space-y-3'>
                      <button className='w-full py-3 px-6 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200'>
                        Curious
                      </button>
                      <button
                        className='w-full py-3 px-6 rounded-xl border-2 text-white font-medium selected transition-all duration-200'
                        style={{
                          backgroundColor: 'var(--primary)',
                          borderColor: 'var(--primary)',
                        }}
                      >
                        Yes Please
                      </button>
                      <button className='w-full py-3 px-6 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200'>
                        No Interest
                      </button>
                      <button className='w-full py-3 px-6 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200'>
                        Not for Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
