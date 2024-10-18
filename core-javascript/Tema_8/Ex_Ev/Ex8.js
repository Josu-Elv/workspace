// 1.7 Crea una clase para trabajar diferentes transformaciones de un string
// inicial con diferentes métodos:
// - Conversión de todo el string a array de caracteres uno por uno
// - La ordenación de los caracteres de manera aleatoria
// - La inversión del orden de caracteres
// - Quitar las vocales
// - Quitar las consonantes.
// - Array de palabras
// - Inversión del orden de las palabras del string

class stringWork {
    constructor(string) {
        return this.string = string;
    }
    arrayOfChars() {
        return this.string.split('');
    } 
    shuffleChars() {
        return this.string.split('').sort(() => Math.random() - 0.5).join('');
    }
    reverseChars() {
        return this.string.split('').reverse().join('');
    }
    deleteVowels() {
        return this.string.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
    }
    deleteConsonants() {
        return this.string.split('').filter(char => 'aeiouAEIOU'.includes(char) || char === ' ').join('');
    }
    reverseOrder() {
        return this.string.split(/\s+/).reverse().join(' ');
    }
  } 

module.exports = { stringWork };