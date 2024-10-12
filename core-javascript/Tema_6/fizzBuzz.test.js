const fizzBuzz = require('./fizzBuzz');

test('Return "fizz" if num is divible by 3', () => {
    expect(fizzBuzz(9)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
    expect(fizzBuzz(18)).toBe('fizz');
});

test('Return "buzz" if num is divible by 5', () => {
    expect(fizzBuzz(20)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
    expect(fizzBuzz(25)).toBe('buzz');
});

test('Return "fizzbuzz" if num is divible by 3 & 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
    expect(fizzBuzz(0)).toBe('fizzbuzz');
});

test('Return "{num}" if num is not divisible by 3 or 5', () => {
    expect(fizzBuzz(8)).toBe('8');
    expect(fizzBuzz(17)).toBe('17');
    expect(fizzBuzz(37)).toBe('37');
});

test('Handle negative numbers divisible by 3 and/or 5', () => {
    expect(fizzBuzz(-3)).toBe('fizz');
    expect(fizzBuzz(-10)).toBe('buzz');
    expect(fizzBuzz(-15)).toBe('fizzbuzz');
});

test('Handle negative numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(-17)).toBe('-17');
    expect(fizzBuzz(-8)).toBe('-8');
    expect(fizzBuzz(-31)).toBe('-31');
});

test('Handle float numbers', () => {
    expect(fizzBuzz(3.47)).toBe('3.47');
    expect(fizzBuzz(5.0)).toBe('buzz');
    expect(fizzBuzz(30.0)).toBe('fizzbuzz');
});

test('Handle non-numeric inputs as error', () => {
    expect(() => fizzBuzz({})).toThrow('InvalidNumber');
    expect(() => fizzBuzz(undefined)).toThrow('InvalidNumber');
    expect(() => fizzBuzz('hola')).toThrow('InvalidNumber');
});