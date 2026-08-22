import {
  THEME_STORAGE_KEY,
  resolveTheme,
  readStoredTheme,
  writeStoredTheme,
} from './theme';

describe('resolveTheme', () => {
  test('follows the OS when the preference is system', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
  });

  test('an explicit choice beats the OS', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
  });

  test('an unrecognised preference falls back to the OS', () => {
    expect(resolveTheme('chartreuse', true)).toBe('dark');
    expect(resolveTheme(undefined, false)).toBe('light');
  });
});

describe('readStoredTheme', () => {
  afterEach(() => {
    window.localStorage.clear();
    jest.restoreAllMocks();
  });

  test('defaults to system when nothing is stored', () => {
    expect(readStoredTheme()).toBe('system');
  });

  test('returns a stored valid preference', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light');
    expect(readStoredTheme()).toBe('light');
  });

  test('ignores a stored value that is not a theme', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'banana');
    expect(readStoredTheme()).toBe('system');
  });

  test('falls back to system when storage throws', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(readStoredTheme()).toBe('system');
  });
});

describe('writeStoredTheme', () => {
  afterEach(() => jest.restoreAllMocks());

  test('persists the preference', () => {
    writeStoredTheme('dark');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  test('does not throw when storage is blocked', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(() => writeStoredTheme('dark')).not.toThrow();
  });
});
