'use client';

import { useState } from 'react';

export default function SignupForm() {
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
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
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
        action='/login'
        onSubmit={handleSubmit}
        className='mt-6 space-y-4'
      >
        <div className='form-group'>
          <label
            className='form-label block text-sm font-medium mb-2'
            htmlFor='name'
            style={{ color: 'var(--text-dark)' }}
          >
            First Name
          </label>
          <input
            type='text'
            id='name'
            name='firstName'
            className='form-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
            placeholder='Emma'
            required
            aria-required='true'
            autoComplete='given-name'
            value={formData.firstName}
            onChange={handleChange}
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
          />
        </div>

        <button
          type='submit'
          className='btn-primary w-full py-4 rounded-lg text-white font-medium text-lg transition-colors duration-200 hover:opacity-90'
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label='Start AfterLoving'
        >
          Start Your Journey
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
