/**
 * Users API services
 */
import httpClient from '../http';
import { User, ApiResponse, PaginatedResponse, PaginationParams } from '@/types/global';

export const usersApi = {
  /**
   * Get paginated list of users
   */
  getUsers: async (params: PaginationParams): Promise<ApiResponse<PaginatedResponse<User>>> => {
    const response = await httpClient.get('/users', { params });
    return response.data;
  },

  /**
   * Get user by ID
   */
  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    const response = await httpClient.get(`/users/${id}`);
    return response.data;
  },

  /**
   * Create new user
   */
  createUser: async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> => {
    const response = await httpClient.post('/users', userData);
    return response.data;
  },

  /**
   * Update user
   */
  updateUser: async (id: string, userData: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await httpClient.put(`/users/${id}`, userData);
    return response.data;
  },

  /**
   * Delete user
   */
  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    const response = await httpClient.delete(`/users/${id}`);
    return response.data;
  },
};