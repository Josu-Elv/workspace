/* Crea un script que pida al usuario el diámetro de una rueda y su grosor (en
metros) y a través de condicionales if realice las siguientes operaciones:
 */

// const diameter = document.getElementById("num1").value;
// const thickness = document .getElementById("num2").value;
// Si defino las variables que vienen de los inputs fuera, las funciones tienen problemas para acceder bien a ellas, en este caso mejor definirlas dentro.
// El return de un imput es un string, necesario el parseInt, o Float en este caso para que convertirlo en número.

/* 
 a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.
 */
function vehicleSize() {
    const diameterValue = parseFloat(document.getElementById("num1").value);
    let vehicleType;
    if (diameterValue > 1.4) {
        vehicleType = "La rueda es para un vehículo grande";
    } else if (diameterValue <= 1.4 && diameterValue > 0.8) {
        vehicleType = "La rueda es para un vehículo mediano";
    } else if (diameterValue <= 0.8) {
        vehicleType = "La rueda es para un vehículo pequeño";
    } else { 
        vehicleType = "Por favor especifica un diametro";
    }
    document.getElementById("finalVehicle").innerHTML = vehicleType;
}



/* b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
 */

function recommendThickness() {
    const diameterValue = parseFloat(document.getElementById("num1").value);
    const thicknessValue = parseFloat(document.getElementById("num2").value);
    let tireType;
    if (isNaN(diameterValue) || isNaN(thicknessValue)) {
     tireType = "Por favor especifica ambas medidas";
    } else if (diameterValue > 1.4 && thicknessValue < 0.4) {
        tireType = "El grosor para esta rueda es inferior al recomendado";
    } else if (diameterValue <= 1.4 && diameterValue > 0.8 && thicknessValue < 0.25) {
        tireType = "El grosor para esta rueda es inferior al recomendado";
    } else { 
        tireType = "Sus ruedas son correctas";
    }
    document.getElementById("finalTire").innerHTML = tireType;
}