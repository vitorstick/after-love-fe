// Quick test to verify API URL configuration
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('Fallback API URL would be: http://localhost:8000/api');

// Test the API URL configuration
export function testAPIURL() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  console.log('Final API URL:', API_URL);
  return API_URL;
}
