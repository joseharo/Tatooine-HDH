/* 
 The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Alcance del bloque
El siguiente contexto que cubriremos es el alcance del bloque. Cuando una variable se define dentro de un bloque, solo es accesible para el código dentro de las llaves {}. Decimos que la variable tiene alcance de bloque porque solo es accesible a las líneas de código dentro de ese bloque.

Las variables que se declaran con alcance de bloque se conocen como variables locales porque solo están disponibles para el código que forma parte del mismo bloque.
*/
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
// La siguiente linea daria un error ya que la variable color es de alcance local
// console.log(color); // ReferenceError

/* 
You’ll notice:
We define a function logSkyColor().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, throws a ReferenceError.

Se observa:
Definimos una función logSkyColor ().
Dentro de la función, la variable de color solo está disponible dentro de las llaves de la función.
Si intentamos registrar la misma variable fuera de la función, arroja un Error de referencia.
*/

const logVisibleLightWaves = () => {
  let ligthWaves = 'Moonlight';
  console.log(ligthWaves);
}
logVisibleLightWaves();
console.log(logVisibleLightWaves);
// console.log(ligthWaves);
// La linea anterior da error ya que la variable lightWaves es local

/* 
1. In main.js, define a function logVisibleLightWaves().
Se definio la funcion logVisibleLightWaves()

2. Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
Junto a esta funcion se crea la variable lightWaves y se le asigna el valor 'Moonlight'

3. Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
Se agrega una linea console.log() para imprimir el valor de lightWaves cuando se ejecuta la funcion

4. Call the logVisibleLightWaves() function from outside the function.
Se hace un llamado a la funcion logVisibleLightWaves() desde fuera de ella.

5. Beneath the function call, log the value of lightWaves to the console from outside the function.
Debajo de la llamada a la función, se intenta mostrar el valor de la variable lightWaves

Se observaria un ReferenceError ya que la variable lightWaves está solo dentro del alcance de bloque de la funcion.

*/