# AfterLove Desires Page Styling Guide

## Table of Contents
1. [AfterLove Design System](#afterlove-design-system)
2. [Current Desires Page Analysis](#current-desires-page-analysis)
3. [Implementation Plan](#implementation-plan)
4. [Component Patterns](#component-patterns)
5. [Code Examples](#code-examples)

---

## AfterLove Design System

### Color Scheme and Gradients

#### Primary Color Palette
```css
--primary: #FF8FA3;          /* Soft pink - main brand color */
--primary-dark: #FF6B8A;     /* Darker pink for hover states */
--text-dark: #2D3748;        /* Dark gray for main text */
--text-light: #718096;       /* Light gray for secondary text */
--white: #FFFFFF;
--gray-light: #F7FAFC;
```

#### Pastel Color System
```css
--pastel-pink: #FFE5EC;
--pastel-peach: #FFE0DC;
--pastel-lavender: #E8E3F5;
--pastel-mint: #E0F5F1;
--pastel-blue: #E3F0FF;
--pastel-yellow: #FFF5E1;
```

#### Section-Specific Gradients
- **Hero Section**: `linear-gradient(180deg, var(--pastel-pink) 0%, var(--pastel-peach) 100%)`
- **Desires Section**: `linear-gradient(135deg, var(--pastel-pink) 0%, #FFDDE6 100%)`
- **Afterglow Section**: `linear-gradient(135deg, var(--pastel-lavender) 0%, #DDD6F3 100%)`
- **Real Talk Section**: `linear-gradient(135deg, #E0F5F1 0%, #D0F0EA 100%)`
- **Pricing Highlight**: Solid `var(--pastel-blue)` background
- **CTA Section**: `linear-gradient(135deg, var(--pastel-pink) 0%, #F8E8F0 100%)`

### Typography System

#### Font Families
- **Primary Font**: `var(--font-instrument-sans)` - Used for body text and UI elements
- **Accent Font**: `var(--font-crimson-text)` - Used for headings and emphasis (italic style)

#### Font Sizes and Hierarchy
```css
/* Headings */
h1: clamp(2.5rem, 5vw, 3.5rem)  /* Responsive hero heading */
h2: 4xl md:5xl lg:6xl            /* Section headings */
h3: 4xl md:5xl                   /* Subsection headings */
h4: text-lg                      /* Card headings */

/* Body Text */
p.lead: text-xl md:text-2xl      /* Lead paragraphs */
p: text-lg                       /* Regular paragraphs */
small: text-sm                   /* Small text */
```

### Spacing and Layout Patterns

#### Container System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem; /* px-5 */
}
```

#### Section Spacing
```css
.section {
  padding: 4rem 0;    /* py-16 on mobile */
  padding: 6rem 0;    /* md:py-24 on desktop */
}
```

#### Grid Patterns
- **Two-column layout**: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16`
- **Three-column layout**: `grid grid-cols-1 md:grid-cols-3 gap-8`
- **Centered content**: `max-w-3xl mx-auto text-center`

### Component Structure Patterns

#### Icon Containers
```css
.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5rem;        /* w-20 */
  height: 5rem;       /* h-20 */
  border-radius: 50%; /* rounded-full */
  background-color: rgba(255, 143, 163, 0.1);
  color: var(--primary);
}
```

#### Feature Lists
```css
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;          /* space-y-4 */
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;          /* gap-4 */
}

.check-icon {
  flex-shrink: 0;
  margin-top: 0.25rem; /* mt-1 */
  color: var(--primary);
  width: 28px;
  height: 28px;
}
```

### Button and CTA Styles

#### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;           /* px-8 py-4 */
  border-radius: 9999px;        /* rounded-full */
  background-color: var(--primary);
  color: white;
  font-weight: 500;             /* font-medium */
  font-size: 1.125rem;          /* text-lg */
  transition: all 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: scale(1.05);
  background-color: var(--primary-dark);
}
```

#### Secondary Button
```css
.btn-secondary {
  padding: 0.75rem 1.5rem;      /* py-3 px-6 */
  border-radius: 0.75rem;       /* rounded-xl */
  border: 2px solid #D1D5DB;    /* border-gray-300 */
  background-color: white;
  color: #374151;               /* text-gray-700 */
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
}
```

### Card Styles
```css
.card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;          /* rounded-2xl */
  padding: 2rem;                /* p-8 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #F3F4F6;    /* border-gray-100 */
}
```

### Responsive Design Patterns

#### Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

#### Mobile-First Approach
```css
/* Mobile styles (default) */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: 1.25rem;
    padding: 1.5rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: 1.5rem;
    padding: 2rem;
  }
}
```

---

## Current Desires Page Analysis

### Current State
Based on the codebase analysis, the desires page (`/desires`) is referenced in navigation but doesn't exist yet. The only desires-related component is the `DesiresSection` on the homepage, which serves as a preview.

### DesiresSection Component Analysis
The current [`DesiresSection.tsx`](src/app/components/DesiresSection.tsx) includes:
- Gradient background matching the design system
- Icon container with heart icon
- Crimson italic heading
- Feature list with checkmarks
- CTA button
- PhoneFrame component showing a sample question

---

## Implementation Plan

### 1. Create Desires Page Structure
Create `/src/app/desires/page.tsx` with the following sections:

#### Hero Section
- Use the desires gradient: `linear-gradient(135deg, var(--pastel-pink) 0%, #FFDDE6 100%)`
- Large Crimson italic heading: "Explore Your Desires Together"
- Subtitle explaining the feature
- Start button (if not started) or continue button (if in progress)

#### How It Works Section
- White/light background
- Three-column grid on desktop
- Icons and explanations for each step:
  1. Complete together after intimacy
  2. Answer honestly and privately
  3. See only mutual matches

#### Categories Section
- Alternating pastel backgrounds
- Two-column layout (text + visual)
- Categories like:
  - Gentle Exploration (pastel-pink)
  - Sensual Touch (pastel-peach)
  - Adventure & Play (pastel-lavender)
  - Deep Connection (pastel-mint)

#### Privacy & Safety Section
- Pastel-blue background
- Centered content
- Trust badges and privacy guarantees

#### CTA Section
- Gradient background matching homepage CTA
- Large call-to-action to start exploring

### 2. Component Updates

#### Navigation Updates
Update [`Header.tsx`](src/app/components/layout/Header.tsx) to highlight the desires link when on the desires page.

#### Footer Updates
Ensure footer link styling is consistent.

### 3. Interactive Elements

#### Question Cards
```tsx
interface QuestionCardProps {
  level: number;
  questionNumber: number;
  question: string;
  options: string[];
  selected?: string;
}
```

#### Progress Indicator
```tsx
interface ProgressProps {
  currentLevel: number;
  totalLevels: number;
  questionsAnswered: number;
  totalQuestions: number;
}
```

#### Results Display
```tsx
interface MatchCardProps {
  category: string;
  matches: string[];
  icon: React.ReactNode;
  backgroundColor: string;
}
```

---

## Component Patterns

### Section Component Pattern
```tsx
interface SectionProps {
  gradient?: string;
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ gradient, backgroundColor, className = '', children }: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      style={{
        background: gradient || backgroundColor || 'transparent',
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-5">
        {children}
      </div>
    </section>
  );
}
```

### Feature Card Pattern
```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBackground?: string;
}

export function FeatureCard({ icon, title, description, iconBackground }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
        style={{
          backgroundColor: iconBackground || 'rgba(255, 143, 163, 0.1)',
          color: 'var(--primary)',
        }}
      >
        {icon}
      </div>
      <h3 className="font-crimson text-2xl font-normal mb-4 italic" style={{ color: 'var(--text-dark)' }}>
        {title}
      </h3>
      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-light)' }}>
        {description}
      </p>
    </div>
  );
}
```

### CTA Button Pattern
```tsx
interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  className?: string;
}

export function CTAButton({ href, children, variant = 'primary', size = 'normal', className = '' }: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105';
  const sizeClasses = size === 'large' ? 'px-12 py-4 text-xl' : 'px-8 py-4 text-lg';
  const variantStyles = variant === 'primary' 
    ? { backgroundColor: 'var(--primary)', color: 'white' }
    : { backgroundColor: 'white', color: 'var(--primary)', border: '2px solid var(--primary)' };

  return (
    <a
      href={href}
      className={`${baseClasses} ${sizeClasses} ${className}`}
      style={variantStyles}
    >
      {children}
    </a>
  );
}
```

---

## Code Examples

### Desires Page Hero Section
```tsx
import { Section } from '@/app/components/ui/Section';
import { CTAButton } from '@/app/components/ui/CTAButton';

export function DesiresHero() {
  return (
    <Section gradient="linear-gradient(135deg, var(--pastel-pink) 0%, #FFDDE6 100%)">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className="font-crimson text-5xl md:text-6xl lg:text-7xl font-normal mb-6 italic"
          style={{ color: 'var(--text-dark)' }}
        >
          Explore Your Desires Together
        </h1>
        <p
          className="text-xl md:text-2xl mb-12 leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
          A safe space to discover what you both want, with complete privacy for non-matches
        </p>
        <CTAButton href="/desires/start" size="large">
          Begin Your Journey →
        </CTAButton>
      </div>
    </Section>
  );
}
```

### Category Card Example
```tsx
interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  isReversed?: boolean;
}

export function CategoryCard({ title, description, icon, gradient, features, isReversed }: CategoryCardProps) {
  return (
    <Section gradient={gradient}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className="category-text">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(255, 143, 163, 0.1)',
              color: 'var(--primary)',
            }}
          >
            {icon}
          </div>
          
          <h3 className="font-crimson text-4xl md:text-5xl font-normal mb-4 italic" style={{ color: 'var(--text-dark)' }}>
            {title}
          </h3>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-light)' }}>
            {description}
          </p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-lg leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="category-visual flex justify-center lg:justify-end">
          {/* Visual content here */}
        </div>
      </div>
    </Section>
  );
}
```

### Question Interface Example
```tsx
export function QuestionInterface() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium" style={{ color: 'var(--primary)' }}>
            Level 1 - Question 3 of 10
          </h4>
          <span className="text-sm" style={{ color: 'var(--text-light)' }}>
            60% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: '60%', backgroundColor: 'var(--primary)' }}
          />
        </div>
      </div>
      
      <p className="font-crimson text-2xl italic text-center mb-8 leading-relaxed" style={{ color: 'var(--text-dark)' }}>
        After our time together, I'm curious about sensual massage with oils
      </p>
      
      <div className="space-y-3">
        {['Curious', 'Yes Please', 'No Interest', 'Not for Me'].map((option) => (
          <button
            key={option}
            className="w-full py-3 px-6 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200 hover:border-primary hover:text-primary"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
```

---

## Implementation Checklist

### Phase 1: Page Structure
- [ ] Create `/src/app/desires/page.tsx`
- [ ] Implement hero section with gradient
- [ ] Add "How It Works" section
- [ ] Create category showcase sections
- [ ] Add privacy/safety section
- [ ] Implement CTA section

### Phase 2: Interactive Components
- [ ] Create question card component
- [ ] Implement progress indicator
- [ ] Build option selection buttons
- [ ] Add animation transitions
- [ ] Create results display component

### Phase 3: Styling Refinements
- [ ] Apply consistent spacing patterns
- [ ] Ensure responsive behavior
- [ ] Add hover states and transitions
- [ ] Implement loading states
- [ ] Add micro-animations

### Phase 4: Integration
- [ ] Connect to authentication
- [ ] Implement question flow logic
- [ ] Add result matching system
- [ ] Create save/resume functionality
- [ ] Add partner synchronization

---

## Notes for Developers

1. **Consistency is Key**: Always use the CSS variables defined in the design system rather than hardcoding colors.

2. **Mobile-First**: Design for mobile screens first, then enhance for larger screens.

3. **Accessibility**: Ensure all interactive elements have proper focus states and ARIA labels.

4. **Performance**: Use lazy loading for images and optimize gradient rendering.

5. **Animations**: Keep animations subtle and purposeful, using the 200ms duration standard.

6. **Typography**: Use Crimson Text for emotional/romantic content, Instrument Sans for UI and body text.

7. **Spacing**: Follow the 8-point grid system for consistent spacing.

8. **Testing**: Test all gradient backgrounds on different devices for performance.