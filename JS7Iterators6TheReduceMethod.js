/* The .reduce() Method 
Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below: 


Otro método de iteración ampliamente utilizado es .reduce (). El método .reduce () devuelve un solo valor después de iterar a través de los elementos de una matriz, reduciendo así la matriz. Eche un vistazo al siguiente ejemplo:*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

/* Now let’s go over the use of .reduce() from the example above:

numbers is an array that contains numbers.
numbers es un arreglo de numeros.

summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
summedNums es una variable qe almacena los valores que devuelve .reduce() al invocarlo en numbers.

numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
numbers.reduce() llama al metodo .reduce() sobre el arreglo y toma en una llamada de vuelta de la funcion como argumento.

The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
La llamada de vuelta tiene dos parametros, acumulator (acumulador) y currentValue (valor actual). El valor de accumulator (acumulador) inicia inactivo y toma el valor del primer elemento del arreglo y currentValue (valor actual) inica en el segundo elemento. 

As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process. 
Como .reduce() itera mediante el arreglo, el valor de retorno de la función de devolución de llamada se convierte en el valor del acumulador para la próxima iteración, currentValue toma el valor del elemento actual en el proceso de bucle.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance: 
.reduce() puede tomar opcionalmente un segundo parametro para asignar un valor inicial al acumulador */

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

/* ****** */

/* 1. Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

In main.js, there is an array of numbers, newNumbers.

To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.

You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step! */

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce(() => {
  
// });

/* 2. Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function. */

// const newNumbers = [1, 3, 5, 7];

// onst newSum = newNumbers.reduce((accumulator, currentValue) => {
  
// });

/* To check the value being used as we iterate through the array, add three statements to the function body of the callback: */

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // console.log('The value of accumulator: ', accumulator);
  // console.log('The value of currentValue: ', currentValue);
  // return accumulator + currentValue;
// });

/* Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers. */

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// return accumulator + currentValue;
//});

/* While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

Add a second argument of 10 to .reduce(). */

console.log(newSum);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  
  console.log('The value of accumulator: ', accumulator);

  console.log('The value of currentValue: ', currentValue);
  
  return accumulator + currentValue;
},10);

console.log(newSum);

/* Output: 
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26
*/