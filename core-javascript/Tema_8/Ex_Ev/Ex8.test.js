const { stringWork } = require('./Ex8.js');

test('arrayOfChars should return an array of characters', () => {
    const str = new stringWork("Yeepee");
    expect(str.arrayOfChars()).toEqual(['Y', 'e', 'e', 'p', 'e', 'e']);
});

test('shuffleChars should return a shuffled string', () => {
    const str = new stringWork("Yepe");
    const shuffled = str.shuffleChars();
    expect(shuffled.length).toBe(4); 
});

test('reverseChars should return the string reversed', () => {
    const str = new stringWork("Yeepe");
    expect(str.reverseChars()).toBe("epeeY");
});

test('deleteVowels should remove vowels', () => {
    const str = new stringWork("Yeepee yepe yep");
    expect(str.deleteVowels()).toBe("Yp yp yp");
});

test('deleteConsonants should remove consonants', () => {
    const str = new stringWork("Yepe Yipo Yapu");
    expect(str.deleteConsonants()).toBe("ee io au");
});

test('reverseOrder should reverse the order of words', () => {
    const str = new stringWork("David Roncal");
    expect(str.reverseOrder()).toBe("Roncal David");
});