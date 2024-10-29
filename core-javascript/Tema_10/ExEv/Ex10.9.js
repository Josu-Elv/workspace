// 8. Crea un cronómetro en una página web (muy simple, sólo minutos y segundos)
// 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar
// o continuar el tiempo.(No hace falta controlar el momento en el que se para el tiempo a la hora de volver a empezar)

// tener en cuenta la variable que controla el tiempo en el que estamos: opcion 1 separar en _utils; utilizar variables globales de javascript.




let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;


function formatCrono() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("crono").textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


function toggleCrono() {
    if (!interval) {
        interval = setInterval(formatCrono, 1000);
    } else {
        clearInterval(interval);
        interval = null;
    }
}


function resetCrono() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("crono").textContent = "00:00:00";
}

// Funciones para testing
function getTime() {
    return { hours, minutes, seconds };
}

function getIntervalStatus() {
    return interval !== null;
}


module.exports = { formatCrono, toggleCrono, resetCrono, getTime, getIntervalStatus };