const arrayMultiply = require('./Ex7.js');

test('Should return correclty inputs of positive numbers', () => {
   expect(arrayMultiply(2, 4)).toEqual([4, 8]);
   expect(arrayMultiply(5, 6)).toEqual([6, 12, 18, 24, 30]);
   expect(arrayMultiply(3, 0)).toEqual([0, 0, 0]);
});

test('Should return an empty array when the size is 0', () => {
    expect(arrayMultiply(0, 2)).toEqual([]);
    expect(arrayMultiply(0, 8)).toEqual([]);
});

test('Should return an array with negative multiples when multiple is negative', () => {
    expect(arrayMultiply(6, -4)).toEqual([-4, -8, -12, -16, -20, -24]);
    expect(arrayMultiply(3, -6)).toEqual([-6, -12, -18]);
    expect(arrayMultiply(8, -2)).toEqual([-2, -4, -6, -8, -10, -12, -14, -16]);
});

test('Should work correctly with non numeric values of multiple', () => {
    expect(arrayMultiply(4, "5")).toEqual([5, 10, 15, 20]);
    expect(arrayMultiply(5, "2")).toEqual([2, 4, 6, 8, 10]);
});

test('Should work correctly with float values of multiple', () => {
    expect(arrayMultiply(2, 4.14)).toEqual([4.14, 8.28]);
    expect(arrayMultiply(3, 6.22)).toEqual([6.22, 12.44, 18.66]);
});

test('Should throw an error when inputs are not valid', () => {
    expect(() => arrayMultiply(1, "hola")).toThrow("Multiple Not Valid");
    expect(() => arrayMultiply(-5, 3)).toThrow("Array Length Not Valid");
    expect(() => arrayMultiply("cuatro", 6)).toThrow("Array Length Not Valid");
    expect(() => arrayMultiply(2.56, 6)).toThrow("Array Length Not Valid")
});
