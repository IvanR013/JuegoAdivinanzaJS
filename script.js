// Recuperación de elementos del dom.
let numeroRandom = Math.floor(Math.random() * 100) + 1;   // Math random va  a generar un número entre 0 y 99. math floor hace que 1 y 100 salgan. 

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');   

let intento = document.getElementById('intento');   

let intentos = 0; // Acá definimos la variable del contador de intentos.

//Acción a ejecutar  cuando se presione revisar.

function revisarResultado() {

    intentos ++; // Esto sirve para que el contador avance hacia adelante.
    
    intento.textContent = 'Veces que intentaste: ' + intentos;

    let numeroIngresado = parseInt(numeroEntrada.value); //el parseo a integer es porque la variable suelta el valor en string.

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {  
        
        mensaje.textContent = 'Por favor, introducí un número válido entre 1 y 100.'
        mensaje.style.color = 'red'
        return 
    }
    if (numeroIngresado === numeroRandom) { // el msje por si adivinás el número.
        
        mensaje.textContent = '¡Felicitaciones!, ganaste el juego.'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    
    } else if (numeroIngresado < numeroRandom) { // Por si el número que ingresaste es menor al que te sale.
        
        mensaje.textContent = 'El número es más alto!';
        mensaje.style.color = 'red';
        
    } else if(intentos > 10){
        mensaje.textContent = 'Se te acabaron los intentos.';
        mensaje.textContent = 'Fin del Juego.'; 
        mensaje.style.color = 'red';
        numeroEntrada.disabled = true; // Desactiva el campo de entrada
        return;
        
    } else {

        mensaje.textContent = 'El número es más bajo!'; // Por si no se cumple la condición del else de arriba.
        mensaje.style.color = 'red';
    }
}