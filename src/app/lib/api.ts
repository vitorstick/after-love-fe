// TypeScript interfaces based on the API documentation

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  coupleId: string | null;
}

export interface AuthResponse {
  message: string;
  data: {
    user: User;
    access_token: string;
  };
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Desire {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDesireRequest {
  title: string;
  description: string;
}

// API Service Functions

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Register a new user
 * @param userData - User registration data
 * @returns Promise with user data and access token
 */
export async function registerUser(
  userData: RegisterRequest
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'Network error or server unavailable',
    }));
    throw new Error(errorData.message || 'Registration failed');
  }

  return await response.json();
}

/**
 * Login an existing user
 * @param credentials - User login credentials
 * @returns Promise with user data and access token
 */
export async function loginUser(
  credentials: LoginRequest
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'Network error or server unavailable',
    }));
    throw new Error(errorData.message || 'Login failed');
  }

  return await response.json();
}

/**
 * Get current user profile
 * @param token - JWT access token
 * @returns Promise with user profile data
 */
export async function getUserProfile(
  token: string
): Promise<ApiResponse<User>> {
  const response = await fetch(`${API_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to get user profile');
  }

  return await response.json();
}

// Placeholder functions for desires (to be implemented later)
export async function getDesires(
  token: string
): Promise<ApiResponse<Desire[]>> {
  const response = await fetch(`${API_URL}/desires`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to get desires');
  }

  return await response.json();
}

export async function createDesire(
  desireData: CreateDesireRequest,
  token: string
): Promise<ApiResponse<Desire>> {
  const response = await fetch(`${API_URL}/desires`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(desireData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create desire');
  }

  return await response.json();
}
