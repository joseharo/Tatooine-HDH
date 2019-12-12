/* Built-in Objects
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

/* Built-in Objects
Built-in Objects
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.
Ademas de la consola, hay otros objetos dentro de JS. Usted creara sus propios objetos, por ahora estos objetos incorporados tienen muchas funciones utiles.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.
Un ejemplo es si quieres hacer operaciones matematicas con mayor dificultad que las aritmeticas, JS tiene el objeot de matematicas integrado.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:
Lo mejor es que los objetos tienen sus metodos, llamemos al metodo .random() del objeto Math:
*/

console.log(Math.random()); 
// Prints a random number between 0 and 1


// To generate a random number between 0 and 50, we could multiply this result by 50, like so:
console.log(Math.random() * 50);

// Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:
// Math.floor() toma un numero decimal y lo redondea al entero mas proximo. Se puede usar Math.floor() para redondear un numero aleatorio:

// Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
// Now, use Math.floor() to make the output a whole number.Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor().
console.log(Math.floor(Math.random() * 100));

// Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
console.log(Math.ceil(43.8));

// Find a method on the built-in Number object that checks if a number is an integer.
console.log(Number.isInteger(2017));