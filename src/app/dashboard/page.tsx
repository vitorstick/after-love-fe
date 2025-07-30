'use client';

import PartnerStatusCard from '@/app/components/PartnerStatusCard';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UserData {
  firstName: string;
  email: string;
  hasPartner: boolean;
  partnerName?: string;
}

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Redirect to login if not authenticated
      router.push('/login');
      return;
    }

    if (user) {
      // Extract first name from full name
      const firstName = user.name.split(' ')[0];
      setUserData({
        firstName,
        email: user.email,
        hasPartner: !!user.coupleId, // User has partner if coupleId exists
        partnerName: undefined, // TODO: Get partner name from API
      });
    }
  }, [user, isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-lg'>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated || !userData) {
    return null; // Will redirect to login
  }

  const handleInvitePartner = () => {
    // TODO: Navigate to invite flow or open invite modal
    console.log('Invite partner clicked');
  };

  return (
    <div className='dashboard-page min-h-screen bg-gray-50'>
      {/* Dashboard Header */}
      <div className='dashboard-header bg-white shadow-sm border-b border-gray-200'>
        <div className='container max-w-4xl mx-auto px-4 py-6'>
          <div className='header-content flex items-center justify-between'>
            <div className='user-welcome'>
              <h1
                className='font-crimson text-2xl font-medium italic mb-1'
                style={{ color: 'var(--text-dark)' }}
              >
                Welcome back, {userData.firstName}
              </h1>
              <p style={{ color: 'var(--text-light)' }}>
                Ready to deepen your connection?
              </p>
            </div>

            <div className='header-actions'>
              <div className='app-logo flex items-center gap-2'>
                <div
                  className='logo-icon w-10 h-10 rounded-full flex items-center justify-center'
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='5'></circle>
                    <line x1='12' y1='1' x2='12' y2='3'></line>
                    <line x1='12' y1='21' x2='12' y2='23'></line>
                    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                    <line x1='1' y1='12' x2='3' y2='12'></line>
                    <line x1='21' y1='12' x2='23' y2='12'></line>
                    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                  </svg>
                </div>
                <span
                  className='font-crimson text-lg font-medium italic'
                  style={{ color: 'var(--primary)' }}
                >
                  AfterLove
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className='dashboard-content container max-w-4xl mx-auto px-4 py-8'>
        {/* Partner Status Section */}
        <PartnerStatusCard
          hasPartner={userData.hasPartner}
          partnerName={userData.partnerName}
          onInvitePartner={handleInvitePartner}
        />

        {/* App Features Grid */}
        <div className='features-grid grid md:grid-cols-2 gap-6 mb-8'>
          {/* Afterglow Feature */}
          <div className='feature-card bg-white rounded-2xl shadow-lg p-6'>
            <div className='feature-header flex items-center gap-4 mb-4'>
              <div
                className='feature-icon w-12 h-12 rounded-full flex items-center justify-center'
                style={{ backgroundColor: 'rgba(232, 227, 245, 0.3)' }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ color: 'var(--primary)' }}
                >
                  <circle cx='12' cy='12' r='5'></circle>
                  <line x1='12' y1='1' x2='12' y2='3'></line>
                  <line x1='12' y1='21' x2='12' y2='23'></line>
                  <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                  <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                  <line x1='1' y1='12' x2='3' y2='12'></line>
                  <line x1='21' y1='12' x2='23' y2='12'></line>
                  <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                  <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                </svg>
              </div>
              <div>
                <h3
                  className='font-crimson text-xl font-medium italic'
                  style={{ color: 'var(--text-dark)' }}
                >
                  Afterglow
                </h3>
                <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                  Post-intimacy reflections
                </p>
              </div>
            </div>

            <p className='text-base mb-4' style={{ color: 'var(--text-dark)' }}>
              Share thoughtful reflections after intimate moments and discover
              new depths of connection.
            </p>

            <button
              className='feature-button w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2'
              style={{
                color: userData.hasPartner
                  ? 'var(--primary)'
                  : 'var(--text-light)',
                borderColor: userData.hasPartner ? 'var(--primary)' : '#E5E7EB',
                backgroundColor: userData.hasPartner
                  ? 'rgba(232, 227, 245, 0.1)'
                  : 'transparent',
              }}
              disabled={!userData.hasPartner}
            >
              {userData.hasPartner ? 'Start Reflection' : 'Requires Partner'}
            </button>
          </div>

          {/* Desires Feature */}
          <div className='feature-card bg-white rounded-2xl shadow-lg p-6'>
            <div className='feature-header flex items-center gap-4 mb-4'>
              <div
                className='feature-icon w-12 h-12 rounded-full flex items-center justify-center'
                style={{ backgroundColor: 'rgba(252, 165, 165, 0.3)' }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ color: '#ef4444' }}
                >
                  <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                </svg>
              </div>
              <div>
                <h3
                  className='font-crimson text-xl font-medium italic'
                  style={{ color: 'var(--text-dark)' }}
                >
                  Desires
                </h3>
                <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                  Explore fantasies together
                </p>
              </div>
            </div>

            <p className='text-base mb-4' style={{ color: 'var(--text-dark)' }}>
              Safely explore and share your deepest desires with guided
              conversations and prompts.
            </p>

            <button
              className='feature-button w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2'
              style={{
                color: userData.hasPartner ? '#ef4444' : 'var(--text-light)',
                borderColor: userData.hasPartner ? '#ef4444' : '#E5E7EB',
                backgroundColor: userData.hasPartner
                  ? 'rgba(252, 165, 165, 0.1)'
                  : 'transparent',
              }}
              disabled={!userData.hasPartner}
            >
              {userData.hasPartner ? 'Explore Desires' : 'Requires Partner'}
            </button>
          </div>

          {/* Real Talk Feature */}
          <div className='feature-card bg-white rounded-2xl shadow-lg p-6'>
            <div className='feature-header flex items-center gap-4 mb-4'>
              <div
                className='feature-icon w-12 h-12 rounded-full flex items-center justify-center'
                style={{ backgroundColor: 'rgba(147, 197, 253, 0.3)' }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ color: '#3b82f6' }}
                >
                  <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
                </svg>
              </div>
              <div>
                <h3
                  className='font-crimson text-xl font-medium italic'
                  style={{ color: 'var(--text-dark)' }}
                >
                  Real Talk
                </h3>
                <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                  Weekly check-ins
                </p>
              </div>
            </div>

            <p className='text-base mb-4' style={{ color: 'var(--text-dark)' }}>
              Have meaningful weekly conversations about your relationship,
              goals, and growth.
            </p>

            <button
              className='feature-button w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2'
              style={{
                color: userData.hasPartner ? '#3b82f6' : 'var(--text-light)',
                borderColor: userData.hasPartner ? '#3b82f6' : '#E5E7EB',
                backgroundColor: userData.hasPartner
                  ? 'rgba(147, 197, 253, 0.1)'
                  : 'transparent',
              }}
              disabled={!userData.hasPartner}
            >
              {userData.hasPartner ? 'Start Check-in' : 'Requires Partner'}
            </button>
          </div>

          {/* Connection Stats */}
          <div className='feature-card bg-white rounded-2xl shadow-lg p-6'>
            <div className='feature-header flex items-center gap-4 mb-4'>
              <div
                className='feature-icon w-12 h-12 rounded-full flex items-center justify-center'
                style={{ backgroundColor: 'rgba(167, 243, 208, 0.3)' }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ color: '#10b981' }}
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <div>
                <h3
                  className='font-crimson text-xl font-medium italic'
                  style={{ color: 'var(--text-dark)' }}
                >
                  Your Journey
                </h3>
                <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                  Progress & insights
                </p>
              </div>
            </div>

            <p className='text-base mb-4' style={{ color: 'var(--text-dark)' }}>
              Track your connection journey with insights, milestones, and
              growth patterns.
            </p>

            <button
              className='feature-button w-full py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2'
              style={{
                color: userData.hasPartner ? '#10b981' : 'var(--text-light)',
                borderColor: userData.hasPartner ? '#10b981' : '#E5E7EB',
                backgroundColor: userData.hasPartner
                  ? 'rgba(167, 243, 208, 0.1)'
                  : 'transparent',
              }}
              disabled={!userData.hasPartner}
            >
              {userData.hasPartner ? 'View Insights' : 'Requires Partner'}
            </button>
          </div>
        </div>

        {/* Getting Started Section */}
        {!userData.hasPartner && (
          <div className='getting-started bg-white rounded-2xl shadow-lg p-8'>
            <h2
              className='font-crimson text-2xl font-medium italic mb-4 text-center'
              style={{ color: 'var(--text-dark)' }}
            >
              Get Started
            </h2>

            <p
              className='text-center text-base mb-6'
              style={{ color: 'var(--text-light)' }}
            >
              While you wait for your partner to join, here&apos;s what you can
              do:
            </p>

            <div className='getting-started-steps grid gap-4'>
              <div className='step-item flex items-start gap-4 p-4 bg-gray-50 rounded-xl'>
                <div
                  className='step-number flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white'
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  1
                </div>
                <div>
                  <h4
                    className='font-medium mb-1'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    Set up your profile
                  </h4>
                  <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                    Add your preferences and what you&apos;re hoping to explore
                    together.
                  </p>
                </div>
              </div>

              <div className='step-item flex items-start gap-4 p-4 bg-gray-50 rounded-xl'>
                <div
                  className='step-number flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white'
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  2
                </div>
                <div>
                  <h4
                    className='font-medium mb-1'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    Browse conversation starters
                  </h4>
                  <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                    Get familiar with the types of questions and prompts
                    available.
                  </p>
                </div>
              </div>

              <div className='step-item flex items-start gap-4 p-4 bg-gray-50 rounded-xl'>
                <div
                  className='step-number flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white'
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  3
                </div>
                <div>
                  <h4
                    className='font-medium mb-1'
                    style={{ color: 'var(--text-dark)' }}
                  >
                    Invite your partner
                  </h4>
                  <p className='text-sm' style={{ color: 'var(--text-light)' }}>
                    Send them an invitation to start your journey together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
