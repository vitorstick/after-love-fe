// Test utilities for the registration flow

import { registerUser } from './api';

/**
 * Test the registration flow with sample data
 * This function can be used for development testing
 */
export async function testRegistration() {
  const testUser = {
    name: 'John Doe',
    email: `test+${Date.now()}@example.com`, // Unique email for each test
    password: 'testpassword123',
  };

  try {
    console.log('Testing registration with:', testUser);
    const response = await registerUser(testUser);
    console.log('Registration successful:', response);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
}

/**
 * Check if the API is reachable
 */
export async function checkAPIHealth() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

  try {
    const response = await fetch(`${API_URL}/health`, {
      method: 'GET',
    });

    if (response.ok) {
      console.log('API is healthy');
      return true;
    } else {
      console.warn('API responded with status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('API is not reachable:', error);
    return false;
  }
}
