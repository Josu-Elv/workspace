const arrayMultiply = require('./Ex7.js');

describe('arrayMultiply', () => {
    it('Should return correclty inputs of positive numbers', () => {
        const array = arrayMultiply(2, 4);
        expect(array).toEqual([4, 8]);
    });

    it('Should return an empty array when the size is 0', () => {
        const array = arrayMultiply(0, 2);
        expect(array).toEqual([]);
    });

    it('Should return an array with negative multiples when multiple is negative', () => {
        const array = arrayMultiply(6, -4)
        expect(array).toEqual([-4, -8, -12, -16, -20, -24]);
    });

   it('Should work correctly with non numeric values of multiple', () => {
        const array = arrayMultiply(4, "5");
        expect(array).toEqual([5, 10, 15, 20]);
    });

    it('Should work correctly with float values of multiple', () => {
        const array = arrayMultiply(2, 4.14);
        expect(array).toEqual([4.14, 8.28]);
    });

    it('Should throw an error when inputs are not valid', () => {
        expect(() => arrayMultiply(1, "hola")).toThrow("Multiple Not Valid");
        expect(() => arrayMultiply(-5, 3)).toThrow("Array Length Not Valid");
        expect(() => arrayMultiply("cuatro", 6)).toThrow("Array Length Not Valid");
        expect(() => arrayMultiply(2.56, 6)).toThrow("Array Length Not Valid")
    });
});

