// Página web ejecutada en bucle infinito que pregunta por una
// multiplicación y te responde con la solución mientras te vuelve a
// preguntar de nuevo.


function start_Infinite_Loop() {  
while (true) { 
    let mult1 = prompt("Define el primer número");
    let mult2 = prompt("Define el segundo número");
        if (isNaN(mult1) || isNaN(mult2)) { 
        alert("Por favor introduce solo números");
        } else {alert(mult1*mult2)}
    }    
} 

