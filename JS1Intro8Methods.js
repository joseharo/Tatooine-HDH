/* Methods
Remember that methods are actions we can perform. JavaScript provides a number of string methods.
Recordando que los metodos son acciones que se pueden hacer. JS proporciona varios metodos de cadenas.

We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: e.g. 'example string'.methodName().
Usamos o llamamos esos metodos agregando una instancia  con un punto, el nombre del metodo y parentesis: 'cadenaEjemplo'.nombreMetodo().

Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!
Esta sintaxis te parece conocida? Cuando usamos console.log() estamos llamando el metodo .log() en el objeto de la consola.
 
Examples: */

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());