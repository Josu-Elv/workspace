#Notas importantes a tener en cuenta

1. Si defino las variables que vienen de los inputs fuera, las funciones tienen problemas para acceder bien a ellas, en este caso mejor definirlas dentro.
2. El return de un input es un string, necesario el parseInt, o Float en este caso para que convertirlo en número.

```js
function vehicleSize() {
  const diameterValue = parseFloat(document.getElementById('num1').value);
  let vehicleType;
  if (diameterValue > 1.4) {
    vehicleType = 'La rueda es para un vehículo grande';
  } else if (diameterValue <= 1.4 && diameterValue > 0.8) {
    vehicleType = 'La rueda es para un vehículo mediano';
  } else if (diameterValue <= 0.8) {
    vehicleType = 'La rueda es para un vehículo pequeño';
  } else {
    vehicleType = 'Por favor especifica un diametro';
  }
  document.getElementById('finalVehicle').innerHTML = vehicleType;
}
```
