/**
 * RTK Query API slice
 * Base API configuration with endpoints
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '@/config/env';
import { getStoredTokens } from '@/services/http';
import type { RootState } from '../index';

// Base query with authentication
const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const tokens = getStoredTokens();
    
    if (tokens?.accessToken) {
      headers.set('authorization', `Bearer ${tokens.accessToken}`);
    }
    
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User', 'Post', 'Auth'],
  endpoints: (builder) => ({}),
});

export const {} = api;