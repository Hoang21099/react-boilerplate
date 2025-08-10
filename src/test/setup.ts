import '@testing-library/jest-dom';

// Mock environment variables for tests
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_APP_NAME: 'Test App',
    VITE_API_BASE_URL: 'http://localhost:3001/api',
    VITE_APP_VERSION: '1.0.0',
    VITE_NODE_ENV: 'test',
  },
  writable: true,
});