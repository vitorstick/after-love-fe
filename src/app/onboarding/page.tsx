'use client';

import InvitationSentConfirmation from '@/app/components/InvitationSentConfirmation';
import InvitePartnerPrompt from '@/app/components/InvitePartnerPrompt';
import SignupForm from '@/app/components/SignupForm';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

type OnboardingStep =
  | 'signup'
  | 'welcome'
  | 'invite-prompt'
  | 'invitation-sent';

interface UserData {
  name: string;
  email: string;
  token: string;
}

function OnboardingContent() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [partnerEmail, setPartnerEmail] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Try to get user data from URL params first
    const name = searchParams.get('name');
    const email = searchParams.get('email');

    if (name && email) {
      setUserData({ name, email, token: '' });
      setCurrentStep('welcome');
    } else {
      // Fallback to signup flow if no user data
      setCurrentStep('signup');
    }
  }, [searchParams]);

  const handleSignupSuccess = (data: UserData) => {
    setUserData(data);
    setCurrentStep('welcome');
  };

  const handleWelcomeContinue = () => {
    // Navigate to InvitePartnerPrompt step
    setCurrentStep('invite-prompt');
  };

  const handleSendInvitation = (email: string) => {
    // TODO: Handle sending invitation to partner (API call)
    console.log('Sending invitation to:', email);

    // Store the partner email and navigate to confirmation
    setPartnerEmail(email);
    setCurrentStep('invitation-sent');
  };

  const handleSkipInvitation = () => {
    // Navigate to dashboard
    router.push('/dashboard');
  };

  const handleResendInvitation = () => {
    // TODO: Resend invitation API call
    console.log('Resending invitation to:', partnerEmail);
  };

  const handleContinueToApp = () => {
    // Navigate to dashboard
    router.push('/dashboard');
  };

  return (
    <div className='onboarding-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
      <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-8'>
        {currentStep === 'signup' && (
          <SignupForm onSignupSuccess={handleSignupSuccess} />
        )}

        {currentStep === 'welcome' && userData && (
          <WelcomeScreen
            userName={userData.name}
            onContinue={handleWelcomeContinue}
          />
        )}

        {currentStep === 'invite-prompt' && (
          <InvitePartnerPrompt
            onSendInvitation={handleSendInvitation}
            onSkipForNow={handleSkipInvitation}
          />
        )}

        {currentStep === 'invitation-sent' && (
          <InvitationSentConfirmation
            partnerEmail={partnerEmail}
            onResendInvitation={handleResendInvitation}
            onContinueToApp={handleContinueToApp}
          />
        )}
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen flex items-center justify-center'>
          Loading...
        </div>
      }
    >
      <OnboardingContent />
    </Suspense>
  );
}
