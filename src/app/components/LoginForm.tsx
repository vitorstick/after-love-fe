'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginFormProps {
  onSwitchToSignup: () => void;
  onLoginSuccess?: () => void;
}

export default function LoginForm({
  onSwitchToSignup,
  onLoginSuccess,
}: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset errors
    setErrors({ email: '', password: '' });
    setGeneralError(null);

    // Basic validation
    const newErrors = { email: '', password: '' };
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await login({ email, password });

      // Success - call callback or redirect
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Default redirect to dashboard
        router.push('/dashboard');
      }
    } catch (error) {
      setGeneralError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='space-y-6'>
        {generalError && (
          <div
            className='p-3 rounded-lg text-sm'
            style={{ backgroundColor: '#fee', color: '#d00' }}
          >
            {generalError}
          </div>
        )}

        <div className='form-group'>
          <label
            htmlFor='login-email'
            className='form-label block text-sm font-medium mb-2'
            style={{ color: 'var(--text-dark)' }}
          >
            Email
          </label>
          <input
            type='email'
            id='login-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200'
            required
            disabled={isLoading}
          />
          {errors.email && (
            <div className='form-error text-red-500 text-sm mt-1'>
              {errors.email}
            </div>
          )}
        </div>

        <div className='form-group'>
          <label
            htmlFor='login-password'
            className='form-label block text-sm font-medium mb-2'
            style={{ color: 'var(--text-dark)' }}
          >
            Password
          </label>
          <input
            type='password'
            id='login-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200'
            required
            disabled={isLoading}
          />
          {errors.password && (
            <div className='form-error text-red-500 text-sm mt-1'>
              {errors.password}
            </div>
          )}
        </div>

        <div className='form-checkbox flex items-center'>
          <input
            type='checkbox'
            id='remember-me'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className='mr-2 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500'
          />
          <label
            htmlFor='remember-me'
            className='text-sm'
            style={{ color: 'var(--text-dark)' }}
          >
            Remember me
          </label>
        </div>

        <button
          type='submit'
          className='btn-primary w-full py-3 px-4 rounded-lg text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
          style={{ backgroundColor: 'var(--primary)' }}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className='divider my-6 relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span
            className='px-4 bg-white'
            style={{ color: 'var(--text-light)' }}
          >
            or continue with
          </span>
        </div>
      </div>

      <div className='social-login'>
        <button
          onClick={() => socialLogin('google')}
          className='social-button w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200'
        >
          <svg width='20' height='20' viewBox='0 0 24 24'>
            <path
              fill='#4285F4'
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
            ></path>
            <path
              fill='#34A853'
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
            ></path>
            <path
              fill='#FBBC05'
              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
            ></path>
            <path
              fill='#EA4335'
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
            ></path>
          </svg>
          <span style={{ color: 'var(--text-dark)' }}>Google</span>
        </button>
      </div>

      <div className='form-footer text-center mt-6'>
        <p className='text-sm'>
          <a
            href='/forgot-password'
            className='hover:underline'
            style={{ color: 'var(--primary)' }}
          >
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
}
