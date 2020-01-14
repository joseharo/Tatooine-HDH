/*  The .forEach Method

.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function. 


.forEach () recorre la matriz y ejecuta la función de devolución de llamada para cada elemento. Durante cada ejecución, el elemento actual se pasa como argumento a la función de devolución de llamada. */

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))