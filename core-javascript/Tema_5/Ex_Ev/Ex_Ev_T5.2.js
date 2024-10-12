// Escribir la función titulo(), la cual recibe un string y lo retorna convirtiendo
// la primera letra de cada palabra a mayúscula y las demás letras a
// minúscula, dejando inalterados los demás caracteres. Precondición: el
// separador de palabras es el espacio: " "

// let user_str = prompt("Por favor introduce la frase que quieras:");
// let str_lowercase = user_str.toLowerCase();
// let str_array = str_lowercase.split(" ");

// for (let i = 0; i < str_array.length; i++) {
//     str_array[i] = str_array[i][0].toUpperCase() + str_array[i].substring(1);
// }

// alert(str_array.join(" "));

function titulo() {
    let user_str = document.getElementById('string').value;
    let valid_characters = /^[\p{L}\s]+$/u;

    if (user_str) {
        if (valid_characters.test(user_str)) {
            let str_lowercase = user_str.toLowerCase();
            let str_array = str_lowercase.split(" ");
            
            for (let i = 0; i < str_array.length; i++) {
                str_array[i] = str_array[i][0].toUpperCase() + str_array[i].substring(1);
            }
            alert(str_array.join(" "));
        } else {
            alert("Introduce solo caracteres válidos. Letras y espacios.");
        }
    } else {
        alert("Por favor, introduce una frase válida.");
    }
}  