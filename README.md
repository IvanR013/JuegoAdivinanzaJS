# Adiviná el Número

## Descripción

**Adivinar el Número**, es un sencillo juego web en el que el usuario debe adivinar un número aleatorio entre 1 y 100. El juego te proporciona pistas sobre si el número ingresado es mayor o menor que el número objetivo y muestra el número de intentos. Si se superan los 10 intentos, el juego termina.

## Stack Incluido

Este proyecto utiliza las siguientes tecnologías:

- **HTML:** Para estructurar la interfaz del juego.
- **CSS:** Para el diseño y la estética de la interfaz.
- **JavaScript:** Para la lógica del juego y la interacción con el usuario.

## Lógica del Código

1. **Generación de Número Aleatorio:** 
   - Al cargar la página, se genera un número aleatorio entre 1 y 100 utilizando `Math.random()` y `Math.floor()`. Este número es el objetivo que el usuario debe adivinar.

2. **Entrada del Usuario:**
   - El usuario introduce un número en un campo de entrada. Este número se obtiene y se parsea a entero con `parseInt()`.

3. **Validación de Entrada:**
   - Se verifica que el número ingresado esté dentro del rango permitido (1 a 100) y que sea un número válido. Si no es válido, se muestra un mensaje de error.

4. **Pistas y Feedback:**
   - Si el número ingresado es igual al número objetivo, se muestra un mensaje de felicitaciones y el juego se desactiva.
   - Si el número ingresado es menor que el número objetivo, se indica que el número es más alto.
   - Si el número ingresado es mayor, se indica que el número es más bajo.

5. **Contador de Intentos y Límite:**
   - Cada vez que el usuario intenta adivinar el número, el contador de intentos se incrementa y se muestra en la pantalla.
   - Si el número de intentos alcanza o supera los 10, el juego termina, se muestra el número objetivo y el campo de entrada se desactiva.

## Cómo Empezar

Para comenzar con el juego, sigue estos pasos:

1. **Clona el Repositorio:**

   
   git clone https://github.com/IvanR013/JuegoAdivinanzaJS.git
