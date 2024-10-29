const valuesInRange = require('./Ex12');

describe('valuesInRange', () => {
  test('filters values within range', () => {
    const set = new Set([1, 3, 5, 7, 9, 11]);
    expect(valuesInRange(set, 3, 9)).toEqual(new Set([3, 5, 7, 9]));
  });

  test('returns empty set when no values are within range', () => {
    const set = new Set([1, 2, 3]);
    expect(valuesInRange(set, 4, 5)).toEqual(new Set());
  });

  test('returns empty set when input set is empty', () => {
    const set = new Set();
    expect(valuesInRange(set, 1, 5)).toEqual(new Set());
  });

  test('includes values that match the exact min and max boundaries', () => {
    const set = new Set([1, 5, 7, 9, 11]);
    expect(valuesInRange(set, 5, 9)).toEqual(new Set([5, 7, 9]));
  });

  test('returns entire set when all values are within range', () => {
    const set = new Set([1, 2, 3]);
    expect(valuesInRange(set, 1, 3)).toEqual(new Set([1, 2, 3]));
  });

  test('handles a single-element set within range', () => {
    const set = new Set([5]);
    expect(valuesInRange(set, 1, 10)).toEqual(new Set([5]));
  });

  test('handles a single-element set out of range', () => {
    const set = new Set([5]);
    expect(valuesInRange(set, 6, 10)).toEqual(new Set());
  });
});
