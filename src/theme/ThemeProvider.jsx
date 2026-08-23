import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { readStoredTheme, resolveTheme, writeStoredTheme } from './theme';

const ThemeContext = createContext(null);
const DARK_QUERY = '(prefers-color-scheme: dark)';

// Mirrors --color-bg-primary for each theme in src/App.css. Kept in sync by
// hand rather than read from the CSS, since the meta tag has to be set from
// JS regardless and a computed-style read would need the stylesheet to have
// already loaded.
const THEME_COLORS = { dark: '#0a0a0a', light: '#f4f4f5' };

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

    // Keeps the browser chrome (address bar, task switcher card) in step with
    // the page instead of staying pinned dark. The tag may not exist (e.g. a
    // stripped-down test DOM), so this is a no-op rather than a throw then.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
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
