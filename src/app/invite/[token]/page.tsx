'use client';

import AcceptInvitationForm from '@/app/components/AcceptInvitationForm';
import ConnectionSuccess from '@/app/components/ConnectionSuccess';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

interface InvitePageProps {
  params: Promise<{ token: string }>;
}

interface InvitationData {
  inviterName: string;
  isValid: boolean;
  isExpired: boolean;
  error?: string;
}

type InviteStep = 'loading' | 'form' | 'success' | 'error';

export default function InvitePage({ params }: InvitePageProps) {
  const resolvedParams = use(params);
  const [currentStep, setCurrentStep] = useState<InviteStep>('loading');
  const [invitationData, setInvitationData] = useState<InvitationData | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // TODO: Validate invitation token with API
    // For now, simulate token validation
    const validateToken = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock validation - in real app, this would be an API call
        if (resolvedParams.token === 'invalid') {
          setInvitationData({
            inviterName: '',
            isValid: false,
            isExpired: false,
            error: 'Invalid invitation link',
          });
          setCurrentStep('error');
        } else if (resolvedParams.token === 'expired') {
          setInvitationData({
            inviterName: '',
            isValid: false,
            isExpired: true,
            error: 'This invitation has expired',
          });
          setCurrentStep('error');
        } else {
          // Valid token - extract inviter name from token or API response
          setInvitationData({
            inviterName: 'Emma', // This would come from API
            isValid: true,
            isExpired: false,
          });
          setCurrentStep('form');
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        setInvitationData({
          inviterName: '',
          isValid: false,
          isExpired: false,
          error: 'Failed to validate invitation',
        });
        setCurrentStep('error');
      }
    };

    validateToken();
  }, [resolvedParams.token]);

  const handleAcceptInvitation = async (userData: {
    firstName: string;
    email: string;
    password: string;
  }) => {
    setIsSubmitting(true);

    try {
      // TODO: API call to create account and accept invitation
      console.log('Accepting invitation:', {
        token: resolvedParams.token,
        userData,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success - move to connection success
      setCurrentStep('success');
    } catch (error) {
      console.error('Failed to accept invitation:', error);
      // Handle error - could show error message or retry
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueToApp = () => {
    // TODO: Navigate to main app/dashboard
    console.log('Continue to app clicked');
    router.push('/dashboard');
  };

  if (currentStep === 'loading') {
    return (
      <div className='invite-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
        <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-8'>
          <div className='loading-container text-center'>
            <div className='loading-spinner mb-4 inline-flex items-center justify-center w-12 h-12'>
              <svg
                className='animate-spin'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ color: 'var(--primary)' }}
              >
                <path d='M21 12a9 9 0 11-6.219-8.56'></path>
              </svg>
            </div>
            <p style={{ color: 'var(--text-light)' }}>
              Validating your invitation...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'error') {
    return (
      <div className='invite-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
        <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-8'>
          <div className='error-container text-center'>
            <div
              className='error-icon mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full'
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
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
                style={{ color: '#ef4444' }}
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='15' y1='9' x2='9' y2='15'></line>
                <line x1='9' y1='9' x2='15' y2='15'></line>
              </svg>
            </div>

            <h2
              className='font-crimson text-2xl font-medium mb-4 italic'
              style={{ color: 'var(--text-dark)' }}
            >
              {invitationData?.isExpired
                ? 'Invitation Expired'
                : 'Invalid Invitation'}
            </h2>

            <p
              className='text-base leading-relaxed mb-6'
              style={{ color: 'var(--text-light)' }}
            >
              {invitationData?.error || 'This invitation link is not valid.'}
            </p>

            <button
              onClick={() => router.push('/login')}
              className='btn-primary w-full py-3 rounded-lg text-white font-medium text-base transition-colors duration-200 hover:opacity-90'
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='invite-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
      <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-8'>
        {currentStep === 'form' && invitationData && (
          <AcceptInvitationForm
            inviterName={invitationData.inviterName}
            invitationToken={resolvedParams.token}
            onAcceptInvitation={handleAcceptInvitation}
            isLoading={isSubmitting}
          />
        )}

        {currentStep === 'success' && invitationData && (
          <ConnectionSuccess
            partnerName={invitationData.inviterName}
            onContinueToApp={handleContinueToApp}
          />
        )}
      </div>
    </div>
  );
}
