import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      role='contentinfo'
      className='pt-16 pb-8 mt-0'
      style={{
        background: 'linear-gradient(180deg, var(--pastel-lavender) 0%, var(--white) 100%)',
      }}
    >
      <div className='max-w-[1200px] mx-auto px-5'>
        {/* Footer Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-pink-300/20'>
          {/* Footer Brand */}
          <div className='md:col-span-2'>
            <Link
              href='/'
              className='flex items-center gap-3 text-2xl no-underline italic mb-2 font-crimson'
              style={{
                color: 'var(--primary)',
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
              </svg>
              AfterLoving
            </Link>
            <p
              className='leading-relaxed'
              style={{ color: 'var(--text-light)' }}
            >
              Three apps to transform your intimate connection and strengthen
              your relationship.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className='text-gray-900 font-medium mb-4'>Explore</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/desires'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  Desires
                </Link>
              </li>
              <li>
                <Link
                  href='/afterglow'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  Afterglow
                </Link>
              </li>
              <li>
                <Link
                  href='/real-talk'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  Real Talk
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className='text-gray-900 font-medium mb-4'>Info</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/pricing'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-gray-900 transition-colors duration-200'
                  style={{ color: 'var(--text-light)' }}
                  rel='noopener'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='text-center'>
          <p
            className='flex items-center justify-center gap-1'
            style={{ color: 'var(--text-light)' }}
          >
            © 2025 AfterLoving • Made with{' '}
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='currentColor'
              style={{ color: 'var(--primary)' }}
              className='inline align-middle'
            >
              <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
            </svg>{' '}
            in Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
