# GitHub Copilot Instructions for AfterLoving Frontend

## Project Goal

# To build the frontend for the "AfterLoving" web application using Next.js, TypeScript, and Tailwind CSS.

# The application will feature user authentication, protected routes, and pages to interact with the app's core features like "Desires".

# ---

# Step 1: Initial Project Setup (Run this in your terminal)

# ---

# npx create-next-app@latest afterloving-frontend --typescript --tailwind --eslint

# ---

# Step 2: Define Project Structure and Environment Variables

# ---

# 1. In the root directory, create a `.env.local` file.

# 2. Add the backend API URL to the `.env.local` file. This will be used to make API calls to the NestJS backend.

# NEXT_PUBLIC_API_URL=http://localhost:8000/api

# 3. Create the following directories inside the `app/` folder to organize our code:

# - `app/components/` (for reusable UI components like buttons, inputs, etc.)

# - `app/components/layout/` (for major layout components like Header, Footer)

# - `app/lib/` (for utility functions and API service definitions)

# - `app/context/` (for React context, like authentication)

# ---

# Step 3: Create the Main Layout and Static Components

# ---

# 1. In `app/layout.tsx`:

# - Import and render Header and Footer components around the `{children}`.

# - Ensure the layout has a flex column structure to push the footer to the bottom of the page.

# - Set a background color for the entire app on the `<body>` tag.

# 2. In `app/components/layout/Header.tsx`:

# - Create a Header component.

# - It should contain a responsive navigation bar with a dark background.

# - Include the app logo or name "AfterLoving" on the left.

# - On the right, include navigation links: "Home", "Features".

# - Also on the right, include two buttons: "Log In" and "Sign Up". These will be conditionally rendered later.

# 3. In `app/components/layout/Footer.tsx`:

# - Create a simple Footer component.

# - It should contain copyright information "© 2025 AfterLoving" and links to "Privacy Policy" and "Terms of Service".

# ---

# Step 4: Create the API Service Layer (Using Fetch API)

# ---

# 1. In `app/lib/api.ts`:

# - Get the base URL from environment variables: `const API_URL = process.env.NEXT_PUBLIC_API_URL;`

# - Define a function `registerUser(userData)` that uses `fetch` to POST to `${API_URL}/auth/register`.

# - Define a function `loginUser(credentials)` that uses `fetch` to POST to `${API_URL}/auth/login`. It should return user data and a token.

# - Define a function `getDesires(token)` that uses `fetch` to GET from `${API_URL}/desires`. It must include the JWT token in an `Authorization: 'Bearer ' + token` header.

# - Define a function `createDesire(desireData, token)` that uses `fetch` to POST to `${API_URL}/desires`, including the auth header.

# - For all POST requests, ensure the 'Content-Type' header is set to 'application/json' and the body is stringified using `JSON.stringify()`.

# - For all requests, check if `response.ok` is true, otherwise throw an error. Parse the JSON from the response using `await response.json()`.

# ---

# Step 5: Implement Authentication Context

# ---

# 1. In `app/context/AuthContext.tsx`:

# - Create a new React context called `AuthContext`.

# - Create an `AuthProvider` component.

# - The provider should manage state for `user`, `token`, and `isLoading`.

# - The context should expose the `user`, `token`, and `isAuthenticated` boolean.

# - It should also expose `login`, `signup`, and `logout` functions.

# - `login(email, password)`: should call the `api.loginUser`, store the token (e.g., in localStorage), set the user state, and redirect to the dashboard.

# - `logout()`: should clear the user and token from state and localStorage, and redirect to the homepage.

# - Create a custom hook `useAuth()` to easily access the context.

# 2. In `app/layout.tsx`:

# - Wrap the `{children}` with the `AuthProvider` so the entire app has access to the auth state.

# ---

# Step 6: Build the Application Pages

# ---

# 1. In `app/page.tsx` (Homepage):

# - Recreate the main landing page from the original website.

# - Create a hero section with the headline "A better relationship starts with better intimacy" and a "Get Started" button.

# - Create a "Features" section with three cards describing "Desires," "Afterglow," and "Real Talk."

# 2. In `app/login/page.tsx` (Login Page):

# - Create a form with "Email" and "Password" fields and a "Log In" button.

# - Use the `useAuth` hook to get the `login` function.

# - On form submission, call the `login` function with the form data.

# - Handle loading and error states.

# 3. In `app/signup/page.tsx` (Sign Up Page):

# - Create a form with "Name", "Email", and "Password" fields and a "Sign Up" button.

# - Use the `useAuth` hook and an API function to register the user.

# 4. In `app/desires/page.tsx` (Protected Page):

# - This page should be a protected route.

# - Use the `useAuth` hook to check if the user `isAuthenticated`. If not, redirect them to the `/login` page.

# - If the user is authenticated, fetch the list of desires using the `api.getDesires` function.

# - Display the desires in a list.

# - Include a simple form on this page to submit a new desire.

```

```
