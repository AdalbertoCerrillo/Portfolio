export const LANG_STORAGE_KEY = 'portfolio-lang';
export const LANGUAGES = ['en', 'es'];

export function detectLanguage(stored, navigatorLanguages) {
  if (LANGUAGES.includes(stored)) return stored;
  const tags = Array.isArray(navigatorLanguages) ? navigatorLanguages : [];
  const wantsSpanish = tags.some(
    (tag) => typeof tag === 'string' && tag.toLowerCase().startsWith('es')
  );
  return wantsSpanish ? 'es' : 'en';
}

export function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return LANGUAGES.includes(stored) ? stored : null;
  } catch (error) {
    return null;
  }
}

export function writeStoredLanguage(lang) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (error) {
    // The choice just won't survive a reload.
  }
}

// Returns the key itself on a miss, so a missing string shows up as
// "experience.radii.body" rather than as blank space nobody notices.
export function translate(dictionary, key) {
  const value = String(key)
    .split('.')
    .reduce((node, part) => (node == null ? undefined : node[part]), dictionary);
  return typeof value === 'string' ? value : key;
}
