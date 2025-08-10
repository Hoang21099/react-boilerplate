/**
 * Authentication API services
 */
import httpClient from '../http';
import { LoginCredentials, RegisterCredentials, AuthTokens } from '@/types/auth';
import { User, ApiResponse } from '@/types/global';

export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}

export const authApi = {
  /**
   * Login user with credentials
   */
  login: async (credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> => {
    const response = await httpClient.post('/auth/login', credentials);
    return response.data;
  },

  /**
   * Register new user
   */
  register: async (credentials: RegisterCredentials): Promise<ApiResponse<LoginResponse>> => {
    const response = await httpClient.post('/auth/register', credentials);
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<ApiResponse<void>> => {
    const response = await httpClient.post('/auth/logout');
    return response.data;
  },

  /**
   * Get current user profile
   */
  getProfile: async (): Promise<ApiResponse<User>> => {
    const response = await httpClient.get('/auth/profile');
    return response.data;
  },

  /**
   * Refresh access token
   */
  refreshToken: async (refreshToken: string): Promise<ApiResponse<AuthTokens>> => {
    const response = await httpClient.post('/auth/refresh', { refreshToken });
    return response.data;
  },
};