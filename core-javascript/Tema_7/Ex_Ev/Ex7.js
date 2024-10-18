// 7. Crea un programa que pida un valor de tamaño de array por input y
// después el número del cuál se van a obtener múltiplos y devuelva un
// array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])


const readline = require('readline');

function arrayMultiply(arrayLength, multiple) {
    let arrayInit = [];

    arrayLength = parseFloat(arrayLength)
    if ( arrayLength < 0 || isNaN(arrayLength) || !Number.isInteger(arrayLength)) {
        throw new Error("Array Length Not Valid")
    }

    multiple = parseFloat(multiple);
    if (isNaN(multiple)) {
        throw new Error("Multiple Not Valid");
    }

    for (let i = 0; i < arrayLength; i++) {
        arrayInit.push(multiple * (i + 1)); 
    }

    return arrayInit; 
}


if (require.main === module) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Ingresa el tamaño del array: ", (arrayLength) => {
        rl.question("Ingresa el número para multiplicar: ", (multiple) => {
            const result = arrayMultiply(arrayLength, multiple);
            console.log("Array resultante:", result); 
            rl.close(); 
        });
    });
}

module.exports = arrayMultiply;

