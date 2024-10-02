/* Crea un script que pida al usuario el diámetro de una rueda y su grosor (en
metros) y a través de condicionales if realice las siguientes operaciones:
 */

/* a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” */





function setDiameter() {
    let diameterValue;
    let diameter = prompt("¿De cuantos metros quieres el diametro de tu rueda?");
    if (diameter == null || diameter == "") {
    alert("Por favor, necesito que me des una medida");
    } else if (isNaN(diameter) || diameter <= 0) {
    alert(" Necesito que me proporciones un número positivo");
    } else { diameterValue = "Tu rueda tiene " + diameter + " metros de diametro";
    }
    document.getElementById("finalDiameter").innerHTML = diameterValue;
}

    
function setThickness() {  
    let thicknessValue;
    let thickness = prompt("De cuantos metros quieres el grosor de tu rueda?");
    if (thickness == null || thickness == "") {
    alert("Por favor, necesito que me des una medida");
    } else if (typeof thickness !== "number" || thickness <= 0) {
    alert(" Necesito que me proporciones un número positivo");
    } else { thicknessValue = "Tu rueda tiene " + thickness + " mestros de grosor";
    }
    document.getElementById("finalThickness").innerHTML = thicknessValue;
}
/* 
 a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.
 */



