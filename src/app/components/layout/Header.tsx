'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white/90 backdrop-blur-[20px] z-[1000] py-6'>
      <nav className='max-w-[1200px] mx-auto px-5 flex justify-between items-center'>
        {/* Logo/Brand */}
        <div className='flex-shrink-0'>
          <Link
            href='/'
            className='flex items-center gap-3 text-[1.75rem] font-normal text-pink-400 no-underline italic'
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            <span className='text-pink-400'>♡</span>
            AfterLoving
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='/'
            className='text-pink-400 hover:text-pink-500 text-sm font-medium border-b-2 border-pink-400 pb-4'
          >
            Home
          </Link>
          <Link
            href='/desires'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            Desires
          </Link>
          <Link
            href='/afterglow'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            Afterglow
          </Link>
          <Link
            href='/real-talk'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            Real Talk
          </Link>
          <Link
            href='/pricing'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            Pricing
          </Link>
          <Link
            href='/faq'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            FAQ
          </Link>
          <Link
            href='/contact'
            className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
          >
            Contact
          </Link>
        </div>

        {/* User Account Icon */}
        <div className='hidden md:flex items-center'>
          <Link href='/login' className='text-gray-600 hover:text-gray-900 p-2'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
