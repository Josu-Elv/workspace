// 6. Crea una función para obtener todos los valores de un set que estén
// entre dos rangos (numéricos).

function valuesInRange(set, min, max) {
    return new Set([...set].filter(value => value >= min && value <= max));
  }
  
  // Example usage
  const numbers = new Set([1, 3, 5, 7, 9, 11, 13]);
  const result = valuesInRange(numbers, 5, 10);
  console.log(result); // Output: Set { 5, 7, 9 }

  module.exports = valuesInRange;