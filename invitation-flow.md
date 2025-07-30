# Partner Invitation Flow Implementation Plan

## Overview

This document outlines the complete partner invitation flow for the After Love application, allowing users to invite their partners via email and establish a connected couple experience.

## User Flow Steps

### 1. Partner 1 (Registrant) Signs Up

- **Action:** Partner 1 creates their account (email/password)
- **Outcome:** Account created, Partner 1 is logged in
- **Component:** `SignupForm.tsx` (already exists)

### 2. Prompt to Add Partner

- **Action:** Immediately after initial login, present "Invite Your Partner" call to action
- **Outcome:** Partner 1 is guided to the invitation step
- **Component:** `InvitePartnerPrompt`

### 3. Enter Partner's Email

- **Action:** Partner 1 enters their partner's email address and clicks "Send Invitation"
- **Outcome:** Partner 1 inputs the necessary email
- **Component:** `PartnerInviteForm`

### 4. Send Invitation Email

- **Action:** Application generates unique invitation link and sends email
- **Outcome:** Invitation email sent, confirmation shown to Partner 1
- **Component:** `InvitationSentConfirmation`

### 5. Partner 2 Receives & Accepts Invitation

- **Action:** Partner 2 clicks unique link in invitation email
- **Outcome:** Partner 2 directed to "Join Partner" screen
- **Component:** `AcceptInvitationForm`

### 6. Partner 2 Onboarding/Account Creation

- **Action:** Partner 2 creates account or logs in
- **Outcome:** Partner 2's account created/linked and logged in
- **Component:** `AcceptInvitationForm`

### 7. Confirmation of Connection

- **Action:** Both partners see connection confirmation
- **Outcome:** Both partners aware of successful link
- **Component:** `ConnectionSuccess`

### 8. Joint Experience Begins

- **Action:** Both partners access shared app space
- **Outcome:** Core couple functionality accessible
- **Component:** `DashboardPage` with `PartnerStatusCard`

## Component Structure

### 1. Post-Registration Flow Components

#### `WelcomeScreen.tsx`

```typescript
'use client';

interface WelcomeScreenProps {
  userName: string;
  onContinue: () => void;
}

export default function WelcomeScreen({
  userName,
  onContinue,
}: WelcomeScreenProps) {
  // Welcome message and "Continue" button
}
```

#### `InvitePartnerPrompt.tsx`

```typescript
'use client';

interface InvitePartnerPromptProps {
  onInvitePartner: () => void;
  onSkipForNow: () => void;
}

export default function InvitePartnerPrompt({
  onInvitePartner,
  onSkipForNow,
}: InvitePartnerPromptProps) {
  // "Invite Your Partner" CTA with skip option
}
```

### 2. Invitation Components

#### `PartnerInviteForm.tsx`

```typescript
'use client';

interface PartnerInviteFormProps {
  onSendInvitation: (email: string) => void;
  isLoading?: boolean;
}

export default function PartnerInviteForm({
  onSendInvitation,
  isLoading,
}: PartnerInviteFormProps) {
  // Email input field and "Send Invitation" button
  // Form validation for email
  // Loading state handling
}
```

#### `InvitationSentConfirmation.tsx`

```typescript
'use client';

interface InvitationSentConfirmationProps {
  partnerEmail: string;
  onResendInvitation: () => void;
  onContinueToApp: () => void;
}

export default function InvitationSentConfirmation({
  partnerEmail,
  onResendInvitation,
  onContinueToApp,
}: InvitationSentConfirmationProps) {
  // Confirmation message with partner's email
  // Option to resend invitation
  // Option to continue to app without partner
}
```

### 3. Partner Acceptance Components

#### `AcceptInvitationForm.tsx`

```typescript
'use client';

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
  isLoading,
}: AcceptInvitationFormProps) {
  // Similar to SignupForm but with invitation context
  // Shows inviter's name
  // Pre-fills email if available
  // Handles invitation token
}
```

#### `ConnectionSuccess.tsx`

```typescript
'use client';

interface ConnectionSuccessProps {
  partnerName: string;
  onContinueToApp: () => void;
}

export default function ConnectionSuccess({
  partnerName,
  onContinueToApp,
}: ConnectionSuccessProps) {
  // Success message for both partners
  // Celebration/confirmation UI
  // "Continue to App" button
}
```

### 4. Dashboard/App Components

#### `PartnerStatusCard.tsx`

```typescript
'use client';

interface PartnerStatusCardProps {
  hasPartner: boolean;
  partnerName?: string;
  onInvitePartner?: () => void;
}

export default function PartnerStatusCard({
  hasPartner,
  partnerName,
  onInvitePartner,
}: PartnerStatusCardProps) {
  // Shows partner status or invite option
  // Displays partner name if connected
  // Shows invite button if no partner
}
```

### 5. Page Components

#### `/onboarding/page.tsx`

```typescript
'use client';

export default function OnboardingPage() {
  // Orchestrates the onboarding flow after registration
  // Flow: WelcomeScreen -> InvitePartnerPrompt -> PartnerInviteForm -> InvitationSentConfirmation
  // Handles navigation between steps
  // Manages onboarding state
}
```

#### `/invite/[token]/page.tsx`

```typescript
'use client';

interface InvitePageProps {
  params: { token: string };
}

export default function InvitePage({ params }: InvitePageProps) {
  // Handles partner invitation acceptance
  // Validates invitation token
  // Flow: AcceptInvitationForm -> ConnectionSuccess
  // Error handling for invalid/expired tokens
}
```

#### `/dashboard/page.tsx`

```typescript
'use client';

export default function DashboardPage() {
  // Main app dashboard
  // Uses PartnerStatusCard and other app features
  // Shows different UI based on partner connection status
}
```

### 6. Layout/Container Components

#### `OnboardingLayout.tsx`

```typescript
'use client';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  step?: number;
  totalSteps?: number;
}

export default function OnboardingLayout({
  children,
  step,
  totalSteps,
}: OnboardingLayoutProps) {
  // Progress indicator and consistent styling for onboarding flow
  // Step counter/progress bar
  // Consistent header/footer
}
```

## Implementation Order

### Phase 1: Core Invitation Components

1. **`PartnerInviteForm`** - Email input and send invitation functionality
2. **`InvitationSentConfirmation`** - Confirmation screen after sending
3. **`AcceptInvitationForm`** - Partner signup/login from invitation
4. **`ConnectionSuccess`** - Success confirmation for both partners

### Phase 2: Onboarding Flow

1. **`WelcomeScreen`** - Post-registration welcome
2. **`InvitePartnerPrompt`** - CTA to invite partner
3. **`OnboardingLayout`** - Progress indicator and layout
4. **`/onboarding/page.tsx`** - Orchestrate the flow

### Phase 3: Invitation Acceptance

1. **`/invite/[token]/page.tsx`** - Handle invitation links
2. Token validation logic
3. Error handling for invalid invitations

### Phase 4: Dashboard Integration

1. **`PartnerStatusCard`** - Show connection status
2. **`/dashboard/page.tsx`** - Main app with partner status
3. Integration with existing app features

### Phase 5: Enhancements

1. Resend invitation functionality
2. Invitation expiration handling
3. Multiple invitation attempts
4. Partner notification system

## Styling Guidelines

- **Consistent with existing components:** Use same styling patterns as `SignupForm.tsx` and `LoginForm.tsx`
- **CSS Variables:** Use existing CSS variables (`--primary`, `--text-dark`, `--text-light`, etc.)
- **Form Styling:** Maintain consistent form input styles and button designs
- **Mobile Responsive:** Ensure all components work well on mobile devices
- **Animation:** Use `animate-in` class for consistent transitions

## State Management Considerations

- **User authentication state:** Track logged-in user
- **Invitation state:** Track sent/pending invitations
- **Partner connection state:** Track if user has connected partner
- **Onboarding progress:** Track current step in onboarding flow

## Error Handling

- **Invalid email addresses:** Form validation
- **Failed invitation sends:** Network error handling
- **Expired invitation tokens:** Clear error messages
- **Already connected partners:** Prevent duplicate connections
- **Network issues:** Retry mechanisms

## Testing Considerations

- **Happy path:** Complete flow from signup to partner connection
- **Error scenarios:** Invalid tokens, network failures, validation errors
- **Edge cases:** Expired invitations, multiple invitations, existing users
- **Mobile experience:** Touch interactions and responsive design
- **Accessibility:** Screen reader compatibility and keyboard navigation

## Future Enhancements

- **Social login integration:** Google, Facebook, Apple Sign In
- **SMS invitations:** Alternative to email invitations
- **QR code sharing:** Quick partner connection via QR codes
- **Partner profiles:** Enhanced partner information and preferences
- **Invitation analytics:** Track invitation success rates
