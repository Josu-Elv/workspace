// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a
// una función que diga el número de veces que aparece el dígito en el
// número.

function press_button() {
let digit = prompt("Ingresa 1 dígito");
    if (digit.length > 1 || digit == null || isNaN(digit)) {
        alert("Por favor introduce UNICAMENTE 1 dígito");
        return;
    }
let whole_num = prompt("Introduce ahora el número que quieras");
    if (isNaN(whole_num)) {
        alert("Por favor introduce UNICAMENTE números");
        return;
    }
let solution = check_number(whole_num, digit);
alert(`El dígito ${digit} aparece ${solution} veces en el número ${whole_num}.`);



function check_number(whole_num, digit) {
    let str_num = whole_num.toString();
    let str_digit= digit.toString();
    let count = 0;
    for (i = 0; i < str_num.length; i++) {
        if (str_num[i] === str_digit) {
        count++;
        }
    }
return count;
}
}



