/**
 * Environment configuration
 * Centralizes all environment variables for the application
 */
export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Enterprise React App',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;