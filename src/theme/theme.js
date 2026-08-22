export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEMES = ['system', 'light', 'dark'];

// `preference` is what the visitor chose; `systemPrefersDark` is what the OS says.
export function resolveTheme(preference, systemPrefersDark) {
  if (preference === 'light' || preference === 'dark') return preference;
  return systemPrefersDark ? 'dark' : 'light';
}

export function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return THEMES.includes(stored) ? stored : 'system';
  } catch (error) {
    // Private window, or site data blocked. Not a failure worth surfacing.
    return 'system';
  }
}

export function writeStoredTheme(preference) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch (error) {
    // The choice just won't survive a reload.
  }
}
