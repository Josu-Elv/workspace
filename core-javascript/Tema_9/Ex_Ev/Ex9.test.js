const { ValueError, capitalize_last_name } = require('./Ex9.js');

describe('capitalize_last_name', () => {
    it('Should work correctly with a valid name',  () => {
        expect(capitalize_last_name('david roncal')).toEqual('David RONCAL');
        expect(capitalize_last_name('DAVid RoNCal')).toEqual('David RONCAL');
    });

    it('Should raise a TypeError when the input is not a string', () => {
        expect(() => capitalize_last_name(123)).toThrow(TypeError);
        expect(() => capitalize_last_name(null)).toThrow(TypeError);
    });

    it('Should raise a TypeError when the input contains numbers and/or special characters', () => {
        expect(() => capitalize_last_name('123 123')).toThrow(TypeError);
        expect(() => capitalize_last_name('dav1d R0nc4l')).toThrow(TypeError);
        expect(() => capitalize_last_name('-J0su <lv:r4')).toThrow(TypeError);
    });

    it('Should raise a ValueError when the input is different of two words', () => {
        const error = new ValueError();
        expect(() => capitalize_last_name('david')).toThrow(error);
        expect(() => capitalize_last_name('Josu elvira ojer')).toThrow(error);
        expect(() => capitalize_last_name('')).toThrow(error);
    })
});