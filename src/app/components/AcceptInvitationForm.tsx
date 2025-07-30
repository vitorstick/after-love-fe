'use client';

import { useState } from 'react';

interface AcceptInvitationFormProps {
  inviterName: string;
  invitationToken: string;
  onAcceptInvitation: (userData: {
    firstName: string;
    email: string;
    password: string;
  }) => void;
  isLoading?: boolean;
}

export default function AcceptInvitationForm({
  inviterName,
  invitationToken,
  onAcceptInvitation,
  isLoading = false,
}: AcceptInvitationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAcceptInvitation(formData);
  };

  return (
    <div className='accept-invitation-container animate-in' id='accept-invitation'>
      <div className='invitation-header text-center mb-8'>
        <div 
          className='invitation-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
          style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
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
            style={{ color: 'var(--primary)' }}
          >
            <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
            <circle cx='9' cy='7' r='4'></circle>
            <path d='M22 21v-2a4 4 0 0 0-3-3.87'></path>
            <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
          </svg>
        </div>
        
        <h2
          className='font-crimson text-3xl font-medium mb-4 italic'
          style={{ color: 'var(--text-dark)' }}
        >
          Join {inviterName} on AfterLove
        </h2>
        <p 
          className='text-lg leading-relaxed'
          style={{ color: 'var(--text-light)' }}
        >
          {inviterName} has invited you to explore deeper intimacy and connection together.
        </p>
      </div>

      <div className='invitation-benefits mb-8'>
        <div className='benefits-card bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6'>
          <h3 
            className='font-medium text-lg mb-4'
            style={{ color: 'var(--text-dark)' }}
          >
            What you&apos;ll experience together:
          </h3>
          
          <div className='benefits-list space-y-3'>
            <div className='benefit-item flex items-start gap-3'>
              <div 
                className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
              </div>
              <span 
                className='text-sm'
                style={{ color: 'var(--text-dark)' }}
              >
                Private reflections after intimate moments
              </span>
            </div>

            <div className='benefit-item flex items-start gap-3'>
              <div 
                className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
              </div>
              <span 
                className='text-sm'
                style={{ color: 'var(--text-dark)' }}
              >
                Explore desires and deepen emotional connection
              </span>
            </div>

            <div className='benefit-item flex items-start gap-3'>
              <div 
                className='benefit-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1'
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
              </div>
              <span 
                className='text-sm'
                style={{ color: 'var(--text-dark)' }}
              >
                Shared experiences visible only when both complete
              </span>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className='invitation-form space-y-4'
      >
        <div className='form-group'>
          <label
            className='form-label block text-sm font-medium mb-2'
            htmlFor='firstName'
            style={{ color: 'var(--text-dark)' }}
          >
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='form-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
            placeholder='Your first name'
            required
            aria-required='true'
            autoComplete='given-name'
            value={formData.firstName}
            onChange={handleChange}
            disabled={isLoading}
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
            placeholder='your@email.com'
            required
            aria-required='true'
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
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
            placeholder='Create a secure password'
            required
            aria-required='true'
            autoComplete='new-password'
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

        <button
          type='submit'
          className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
          style={{ backgroundColor: 'var(--primary)' }}
          disabled={isLoading}
          aria-label='Accept invitation and join'
        >
          {isLoading ? (
            <div className='flex items-center justify-center gap-2'>
              <svg
                className='animate-spin'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 12a9 9 0 11-6.219-8.56'></path>
              </svg>
              Joining...
            </div>
          ) : (
            `Join ${inviterName} on AfterLove`
          )}
        </button>
      </form>

      <div
        className='invitation-footer mt-6 text-center text-sm'
        style={{ color: 'var(--text-light)' }}
      >
        By joining, you agree to start your journey together for €4.99/month.
      </div>

      {/* Hidden token field for form processing */}
      <input type='hidden' value={invitationToken} />
    </div>
  );
}
