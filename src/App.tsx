/**
 * Main App component
 * Root component with providers and global configuration
 */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { router } from '@/router';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { getStoredTokens } from '@/services/http';
import '@/i18n';

// Theme initializer component
const ThemeInitializer: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
};

// Auth initializer component
const AuthInitializer: React.FC = () => {
  const { getProfile } = useAuth();

  useEffect(() => {
    // Check if user has stored tokens and fetch profile
    const tokens = getStoredTokens();
    if (tokens?.accessToken) {
      getProfile();
    }
  }, [getProfile]);

  return null;
};

// App initializers wrapper
const AppInitializers: React.FC = () => {
  return (
    <>
      <ThemeInitializer />
      <AuthInitializer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppInitializers />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;