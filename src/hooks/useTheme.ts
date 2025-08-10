/**
 * Custom hook for theme management
 */
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '@/store';
import { setTheme, toggleTheme } from '@/store/slices/themeSlice';
import { Theme } from '@/types/global';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  const changeTheme = useCallback(
    (newTheme: Theme) => {
      dispatch(setTheme(newTheme));
    },
    [dispatch]
  );

  const toggle = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return {
    theme,
    setTheme: changeTheme,
    toggleTheme: toggle,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};