'use client';

import SignupForm from '@/app/components/SignupForm';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type OnboardingStep = 'signup' | 'welcome';

interface UserData {
  firstName: string;
  email: string;
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userData, setUserData] = useState<UserData | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Try to get user data from URL params first
    const firstName = searchParams.get('firstName');
    const email = searchParams.get('email');

    if (firstName && email) {
      setUserData({ firstName, email });
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
    // TODO: Navigate to next step (InvitePartnerPrompt)
    console.log('Welcome continue clicked - next: InvitePartnerPrompt');
  };

  return (
    <div className='onboarding-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
      <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-8'>
        {currentStep === 'signup' && (
          <SignupForm onSignupSuccess={handleSignupSuccess} />
        )}

        {currentStep === 'welcome' && userData && (
          <WelcomeScreen
            userName={userData.firstName}
            onContinue={handleWelcomeContinue}
          />
        )}
      </div>
    </div>
  );
}
