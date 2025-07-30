'use client';

import { useRouter } from 'next/navigation';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
  const router = useRouter();

  const handleSignupSuccess = (userData: {
    name: string;
    email: string;
    token: string;
  }) => {
    console.log('Registration successful:', userData);
    // Redirect to dashboard or onboarding after successful registration
    router.push('/dashboard');
  };

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Join AfterLoving
          </h1>
          <p className='text-gray-600'>
            Create your account to start building better intimacy
          </p>
        </div>

        <SignupForm onSignupSuccess={handleSignupSuccess} />

        <div className='text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{' '}
            <button
              onClick={() => router.push('/login')}
              className='font-medium text-pink-600 hover:text-pink-500'
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
