'use client';

import LoginForm from '@/app/components/LoginForm';
import SignupForm from '@/app/components/SignupForm';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const router = useRouter();

  const switchTab = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
  };

  const handleSignupSuccess = (userData: {
    name: string;
    email: string;
    token: string;
  }) => {
    console.log('User signed up successfully:', userData);
    // Navigate to onboarding page with user data
    const params = new URLSearchParams({
      name: userData.name,
      email: userData.email,
    });
    router.push(`/onboarding?${params.toString()}`);
  };

  return (
    <div
      className='login-container min-h-screen flex items-center justify-center py-12 px-4'
      style={{
        background:
          'linear-gradient(135deg, var(--pastel-pink) 0%, #F8E8F0 100%)',
      }}
    >
      <div className='login-box w-full max-w-md bg-white rounded-2xl shadow-xl p-8'>
        <div className='login-header text-center mb-8'>
          <h1
            className='font-crimson text-3xl md:text-4xl font-normal mb-2 italic'
            style={{ color: 'var(--primary)' }}
          >
            Welcome Back
          </h1>
          <p className='text-lg' style={{ color: 'var(--text-light)' }}>
            Continue your journey to deeper connection
          </p>
        </div>

        <div className='form-tabs flex mb-6 bg-gray-100 rounded-lg p-1'>
          <button
            className={`tab-button flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'login'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => switchTab('login')}
          >
            Login
          </button>
          <button
            className={`tab-button flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'signup'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => switchTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Tab Content */}
        <div className='tab-content'>
          {activeTab === 'login' ? (
            <LoginForm onSwitchToSignup={() => switchTab('signup')} />
          ) : (
            <SignupForm onSignupSuccess={handleSignupSuccess} />
          )}
        </div>
      </div>
    </div>
  );
}
