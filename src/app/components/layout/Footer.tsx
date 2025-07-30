import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Copyright */}
          <div className='mb-4 md:mb-0'>
            <p className='text-gray-400 text-sm'>
              © 2025 AfterLoving. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className='flex space-x-6'>
            <Link
              href='/privacy'
              className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
