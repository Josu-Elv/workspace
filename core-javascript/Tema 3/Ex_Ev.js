/* Crea un script que pida al usuario el diámetro de una rueda y su grosor (en
metros) y a través de condicionales if realice las siguientes operaciones:
 */

const diameter = document.getElementById("num1");
const diameterValue = diameter.value;  
const thickness = document .getElementById("num2");
const thicknessValue = thickness.value;

/* 
 a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.
 */
function vehicleSize(diameterValue) {
    let vehicleType;
    if (diameterValue > 1.4) {
        vehicleType = "La rueda es para un vehículo grande";
    } else if (diameterValue <= 1.4 && diameterValue > 0.8) {
        vehicleType = "La rueda es para un vehículo mediano";
    } else if (diameterValue <= 0.8) {
        vehicleType = "La rueda es para un vehículo pequeño";
    } else { 
        vehicleType = alert("Por favor especifica un diametro")
    }
    document.getElementById("finalVehicle").innerHTML = vehicleType;
}



/* b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
 */

function recommendThickness(diameterValue,thicknessValue) {
    let tireType;
    if (diameterValue > 1.4 && thicknessValue < 0.4) {
        tireType = "El grosor para esta rueda es inferior al recomendado";
    } else if (diameterValue <= 1.4 && diameterValue > 0.8 && thicknessValue < 0.25 ) {
        tireType = "El grosor para esta rueda es inferior al recomendado";
    } else { 
        tireType = "Sus ruedas son correctas"
    document.getElementById("finalTire").innerHTML = tireType;
    }
}