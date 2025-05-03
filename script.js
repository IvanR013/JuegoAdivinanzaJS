// Recuperación de elementos del dom.
let numeroRandom = Math.floor(Math.random() * 100) + 1;   // Math random va  a generar un número entre 0 y 99. math floor hace que 1 y 100 salgan. 

console.log("No hagas trampaaaaa!");


let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');

let AdvertenciaMalvada = document.getElementById('mensajeMalvado');

let mensaje2 = document.getElementById('mensaje2');

let intento = document.getElementById('intento');

let intentos = 0; // Acá definimos la variable del contador de intentos.

//Acción a ejecutar  cuando se presione revisar.

function revisarResultado() {

    intentos++; // Esto sirve para que el contador avance hacia adelante.

    intento.textContent = 'Veces que intentaste: ' + intentos;

    let numeroIngresado = parseInt(numeroEntrada.value); //el parseo a integer es porque la variable suelta el valor en string.
    if (intentos === 12) {
        AdvertenciaMalvada.textContent = 'Te queda el último intento MUAJAJAJAJ..... 😈';
        AdvertenciaMalvada.style.color = 'red';
        setTimeout(() => {
            AdvertenciaMalvada.textContent = ''; // Elimino el mensaje malo después de 2 segundos.
        }, 2000);
    }

    if (intentos >= 13) {
        mensaje.textContent = 'Se te acabaron los intentos. Game Over👾 (Siempre quise poner eso en un juego mío).';
        mensaje.style.color = 'red';
        numeroEntrada.disabled = true;
        mensaje2.textContent = 'Recargando el juego... Mucha suerte.'; // Mensaje que aparece cuando se acaban los intentos.
        mensaje2.style.color = 'black';

        setTimeout(() => {
            location.reload(); // Recargo la página después de 2 segundos y evito que se ejecute el resto de la lógica del juego.
        }, 2800);

        return;

    }

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {

        mensaje.textContent = 'Menos mal que te dije un número entre 1 y 100. 😑';
        mensaje.style.color = 'red';
        return;
    }
    if (numeroIngresado === numeroRandom) { // el msje por si adivinás el número.

        mensaje.textContent = '¡Felicitaciones!, ganaste el juego. 🎉🎉🎉🎊';
        mensaje2.textContent = 'Recargando el juego... Muy bien! 🤩';
        mensaje.style.color = 'green';
        mensaje2.style.color = 'black';
        numeroEntrada.disabled = true;

        setTimeout(() => {
            location.reload();
        }, 2000); // Espero 2 segundos antes de recargar la página.

    } else if (numeroIngresado < numeroRandom) { // Por si el número que ingresaste es menor al que te sale.

        mensaje.textContent = 'El número es más alto! ⬆⬆';
        mensaje.style.color = 'red';

    } else {

        mensaje.textContent = 'El número es más bajo! ⬇⬇'; // Por si no se cumple la condición del else de arriba.
        mensaje.style.color = 'red';
    }
}
