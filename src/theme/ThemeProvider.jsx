import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { readStoredTheme, resolveTheme, writeStoredTheme } from './theme';

const ThemeContext = createContext(null);
const DARK_QUERY = '(prefers-color-scheme: dark)';

const systemPrefersDark = () => {
  try {
    return window.matchMedia(DARK_QUERY).matches;
  } catch (error) {
    return false;
  }
};

export const ThemeProvider = ({ children }) => {
  const [preference, setPreference] = useState(readStoredTheme);
  const [osDark, setOsDark] = useState(systemPrefersDark);

  // Keep following the OS for as long as the visitor has not chosen for themselves.
  useEffect(() => {
    let media;
    try {
      media = window.matchMedia(DARK_QUERY);
    } catch (error) {
      return undefined;
    }
    const onChange = (event) => setOsDark(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const theme = resolveTheme(preference, osDark);

  // JS resolves to a concrete value, so the CSS never needs prefers-color-scheme.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    setPreference(next);
    writeStoredTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({ theme, preference, setTheme, toggleTheme }),
    [theme, preference, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside a ThemeProvider');
  return context;
};
