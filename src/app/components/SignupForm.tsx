'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface SignupFormProps {
  onSwitchToLogin?: () => void;
  onSignupSuccess?: (userData: {
    name: string;
    email: string;
    token: string;
  }) => void;
}

export default function SignupForm({ onSignupSuccess }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signup(formData);

      // Call onSignupSuccess with the user data and token (if provided)
      if (onSignupSuccess) {
        onSignupSuccess({
          name: formData.name,
          email: formData.email,
          token: '', // Token is now managed by auth context
        });
      } else {
        // Default redirect to onboarding or dashboard
        router.push('/onboarding');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='signup-container animate-in' id='signup'>
      <div className='form-header text-center mb-8'>
        <h2
          className='font-crimson text-2xl font-medium mb-2 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Start Today for €4.99/Month
        </h2>
        <p style={{ color: 'var(--text-light)' }}>
          30 seconds to better intimacy • Cancel anytime
        </p>
      </div>

      <form
        id='signupForm'
        name='signup'
        method='post'
        onSubmit={handleSubmit}
        className='mt-6 space-y-4'
      >
        {error && (
          <div
            className='p-3 rounded-lg text-sm'
            style={{ backgroundColor: '#fee', color: '#d00' }}
          >
            {error}
          </div>
        )}

        <div className='form-group'>
          <label
            className='form-label block text-sm font-medium mb-2'
            htmlFor='name'
            style={{ color: 'var(--text-dark)' }}
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
            placeholder='Emma Johnson'
            required
            aria-required='true'
            autoComplete='name'
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            suppressHydrationWarning
          />
        </div>

        <div className='form-group'>
          <label
            className='form-label block text-sm font-medium mb-2'
            htmlFor='email'
            style={{ color: 'var(--text-dark)' }}
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
            placeholder='emma@example.com'
            required
            aria-required='true'
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            suppressHydrationWarning
          />
        </div>

        <div className='form-group'>
          <label
            className='form-label block text-sm font-medium mb-2'
            htmlFor='password'
            style={{ color: 'var(--text-dark)' }}
          >
            Create Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
            placeholder='Create a secure password (min 6 characters)'
            required
            aria-required='true'
            autoComplete='new-password'
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            suppressHydrationWarning
          />
        </div>

        <button
          type='submit'
          className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-colors duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label='Start AfterLoving'
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Start Your Journey'}
        </button>
      </form>

      <div
        className='form-footer mt-4 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        By signing up, you agree to start for €4.99/month. Cancel anytime.
      </div>
    </div>
  );
}
