'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getUserProfile,
  loginUser,
  registerUser,
  type AuthResponse,
  type LoginRequest,
  type RegisterRequest,
  type User,
} from '../lib/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  signup: (userData: RegisterRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  // Load token and user from localStorage on mount
  useEffect(() => {
    const loadAuthData = async () => {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('access_token');
        if (storedToken) {
          try {
            // Verify token by fetching user profile
            const response = await getUserProfile(storedToken);
            setToken(storedToken);
            setUser(response.data);
          } catch (error) {
            // Token is invalid, clear it
            localStorage.removeItem('access_token');
            console.error('Invalid token, clearing auth data:', error);
          }
        }
      }
      setIsLoading(false);
    };

    loadAuthData();
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      const response: AuthResponse = await loginUser(credentials);

      // Store token and user data
      setToken(response.data.access_token);
      setUser(response.data.user);

      // Persist token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', response.data.access_token);
      }
    } catch (error) {
      // Re-throw error so component can handle it
      throw error;
    }
  };

  const signup = async (userData: RegisterRequest) => {
    try {
      const response: AuthResponse = await registerUser(userData);

      // Store token and user data
      setToken(response.data.access_token);
      setUser(response.data.user);

      // Persist token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', response.data.access_token);
      }
    } catch (error) {
      // Re-throw error so component can handle it
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    // Clear token from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }

    // Redirect to home page
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
