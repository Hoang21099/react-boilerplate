/**
 * Custom hook for authentication
 * Provides authentication state and actions
 */
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState, AppDispatch } from '@/store';
import { loginUser, registerUser, logoutUser, getCurrentUser, clearError } from '@/store/slices/authSlice';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const login = useCallback(
    (credentials: LoginCredentials) => {
      return dispatch(loginUser(credentials));
    },
    [dispatch]
  );

  const register = useCallback(
    (credentials: RegisterCredentials) => {
      return dispatch(registerUser(credentials));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    return dispatch(logoutUser());
  }, [dispatch]);

  const getProfile = useCallback(() => {
    return dispatch(getCurrentUser());
  }, [dispatch]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    ...auth,
    login,
    register,
    logout,
    getProfile,
    clearAuthError,
  };
};