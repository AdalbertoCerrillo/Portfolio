import {
  LANG_STORAGE_KEY,
  detectLanguage,
  readStoredLanguage,
  writeStoredLanguage,
  translate,
} from './i18n';

describe('detectLanguage', () => {
  test('a stored choice wins over the browser', () => {
    expect(detectLanguage('en', ['es-MX'])).toBe('en');
    expect(detectLanguage('es', ['en-US'])).toBe('es');
  });

  test('a Spanish browser gets Spanish', () => {
    expect(detectLanguage(null, ['es-MX', 'en'])).toBe('es');
    expect(detectLanguage(null, ['ES'])).toBe('es');
  });

  test('anything else gets English', () => {
    expect(detectLanguage(null, ['en-US'])).toBe('en');
    expect(detectLanguage(null, ['fr-FR', 'de'])).toBe('en');
  });

  test('survives a missing or malformed navigator list', () => {
    expect(detectLanguage(null, undefined)).toBe('en');
    expect(detectLanguage(null, [null, 42])).toBe('en');
  });

  test('ignores a stored value that is not a supported language', () => {
    expect(detectLanguage('klingon', ['es'])).toBe('es');
  });
});

describe('stored language', () => {
  afterEach(() => {
    window.localStorage.clear();
    jest.restoreAllMocks();
  });

  test('round-trips', () => {
    writeStoredLanguage('es');
    expect(readStoredLanguage()).toBe('es');
    expect(window.localStorage.getItem(LANG_STORAGE_KEY)).toBe('es');
  });

  test('returns null when storage throws', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(readStoredLanguage()).toBeNull();
  });

  test('writing does not throw when storage is blocked', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(() => writeStoredLanguage('es')).not.toThrow();
  });
});

describe('translate', () => {
  const dictionary = { nav: { about: 'About Me' }, empty: {} };

  test('resolves a dotted key', () => {
    expect(translate(dictionary, 'nav.about')).toBe('About Me');
  });

  test('returns the key itself when the path is missing', () => {
    expect(translate(dictionary, 'nav.nope')).toBe('nav.nope');
    expect(translate(dictionary, 'a.b.c')).toBe('a.b.c');
  });

  test('returns the key when the path resolves to a branch, not a string', () => {
    expect(translate(dictionary, 'empty')).toBe('empty');
  });

  test('does not resolve keys through the prototype chain', () => {
    expect(translate(dictionary, 'constructor.name')).toBe('constructor.name');
    expect(translate(dictionary, 'toString.name')).toBe('toString.name');
    expect(translate(dictionary, 'nav.constructor.name')).toBe('nav.constructor.name');
  });
});
