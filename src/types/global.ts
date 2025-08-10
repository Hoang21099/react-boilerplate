/**
 * Global type definitions for the application
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export type Theme = 'light' | 'dark';

export type Language = 'en' | 'vi';

export interface AppError {
  message: string;
  code?: string;
  status?: number;
}

export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';