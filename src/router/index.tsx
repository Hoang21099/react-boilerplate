/**
 * Application router configuration
 * Defines all routes with lazy loading and code splitting
 */
import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import Loading from '@/components/ui/Loading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Lazy load components for code splitting
const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/auth/Login'));
const Register = React.lazy(() => import('@/pages/auth/Register'));
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const Users = React.lazy(() => import('@/pages/Users'));

// Layout component with header and footer
const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Protected layout for authenticated routes
const ProtectedLayout: React.FC = () => (
  <ProtectedRoute>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  </ProtectedRoute>
);

// Loading wrapper for suspense
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center">
      <Loading text="Loading..." />
    </div>
  }>
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: (
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'register',
        element: (
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  // Redirect /login to /auth/login for convenience
  {
    path: '/login',
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: '/register',
    element: (
      <SuspenseWrapper>
        <Register />
      </SuspenseWrapper>
    ),
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: 'dashboard',
        element: (
          <SuspenseWrapper>
            <Dashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'users',
        element: (
          <SuspenseWrapper>
            <Users />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  // 404 Page
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Page not found
          </p>
        </div>
      </div>
    ),
  },
]);