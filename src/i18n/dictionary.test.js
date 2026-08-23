import en from './en';
import es from './es';

const keyPaths = (node, prefix = '') =>
  Object.entries(node).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'string' ? [path] : keyPaths(value, path);
  });

const enKeys = keyPaths(en).sort();
const esKeys = keyPaths(es).sort();

test('the two dictionaries have identical key sets', () => {
  // Catches the bug where switching language silently blanks a paragraph.
  expect(esKeys).toEqual(enKeys);
});

const read = (dictionary, path) =>
  path.split('.').reduce((node, part) => node[part], dictionary);

test.each([
  ['en', en, enKeys],
  ['es', es, esKeys],
])('%s has no empty entries', (_name, dictionary, keys) => {
  const blanks = keys.filter((path) => read(dictionary, path).trim() === '');
  expect(blanks).toEqual([]);
});

test('every leaf is a string', () => {
  const nonStrings = [];
  const walk = (node, prefix = '') =>
    Object.entries(node).forEach(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object') return walk(value, path);
      if (typeof value !== 'string') nonStrings.push(path);
    });
  walk(en);
  walk(es);
  expect(nonStrings).toEqual([]);
});
