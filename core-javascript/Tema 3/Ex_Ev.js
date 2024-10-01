/* a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” */

//que me den un número positivo



let diameter = prompt("¿De cuantos metros quieres el diamtro de tu rueda?")
let thickness = prompt("De cuantos metros quieres el grosor de tu rueda?")

if (diameter === null) {
    alert("Por favor necesito que me des una medida")
} else if (typeof diameter !== "number" || diameter <= 0) {
    alert(" Necesito que me proporciones un número positivo")
} else { diameter === diameter}

