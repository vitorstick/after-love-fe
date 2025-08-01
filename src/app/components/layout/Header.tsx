'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className='bg-white/90 backdrop-blur-[20px] z-[1000] py-6'>
      <nav className='max-w-[1200px] mx-auto px-5 flex justify-between items-center'>
        {/* Logo/Brand */}
        <div className='flex-shrink-0'>
          <Link
            href='/'
            className='flex items-center gap-3 text-[1.75rem] font-normal no-underline italic font-crimson'
            style={{ color: 'var(--primary)' }}
          >
            <span style={{ color: 'var(--primary)' }}>♡</span>
            AfterLoving
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className='hidden md:flex items-center justify-center space-x-8'>
          <Link
            href='/'
            className={`text-sm font-medium pb-4 ${
              isActive('/')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            href='/desires'
            className={`text-sm font-medium pb-4 ${
              isActive('/desires')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Desires
          </Link>
          <Link
            href='/afterglow'
            className={`text-sm font-medium pb-4 ${
              isActive('/afterglow')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Afterglow
          </Link>
          <Link
            href='/real-talk'
            className={`text-sm font-medium pb-4 ${
              isActive('/real-talk')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Real Talk
          </Link>
          <Link
            href='/pricing'
            className={`text-sm font-medium pb-4 ${
              isActive('/pricing')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Pricing
          </Link>
          <Link
            href='/faq'
            className={`text-sm font-medium pb-4 ${
              isActive('/faq')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            FAQ
          </Link>
          <Link
            href='/contact'
            className={`text-sm font-medium pb-4 ${
              isActive('/contact')
                ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contact
          </Link>

          {/* Authentication-based navigation */}
          {isAuthenticated ? (
            <div className='flex items-center space-x-4'>
              <Link
                href='/dashboard'
                className={`text-sm font-medium pb-4 ${
                  isActive('/dashboard')
                    ? 'text-pink-400 hover:text-pink-500 border-b-2 border-pink-400'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dashboard
              </Link>
              <span className='text-sm text-gray-600'>
                Hi, {user?.name.split(' ')[0]}!
              </span>
              <button
                onClick={logout}
                className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href='/login'
              className='text-gray-600 hover:text-gray-900 text-sm font-medium pb-4'
            >
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
          )}
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
