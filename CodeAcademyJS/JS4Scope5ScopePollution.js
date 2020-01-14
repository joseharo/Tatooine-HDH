/*Scope Pollution
Contaminacion de alcance

It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.
Puede parecer una gran idea hacer siempre accesibles sus variables, pero tener demasiadas variables globales puede causar problemas en un programa.

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.
Cuando declara variables globales, van al espacio de nombres global. El espacio de nombres global permite que las variables sean accesibles desde cualquier parte del programa. Estas variables permanecen allí hasta que finaliza el programa, lo que significa que nuestro espacio de nombres global puede llenarse muy rápidamente.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code. 
La contaminación del alcance es cuando tenemos demasiadas variables globales que existen en el espacio de nombres global, o cuando reutilizamos variables en diferentes ámbitos. La contaminación del alcance dificulta el seguimiento de nuestras diferentes variables y nos prepara para posibles accidentes. Por ejemplo, las variables de alcance global pueden colisionar con otras variables que tienen un alcance más local, causando un comportamiento inesperado en nuestro código.*/

// Example
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/* You’ll notice:
Tenemos que:

1. We have a variable num.
Definimos la variable num.

2. Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
Dentro del cuerpo de la funcion se declaro una nueva variable sin la palabra reservada let. Cuando llamamos a la funcion logNum(), a num se le reasigna el valor de 100.

The reassignment inside logNum() affects the global variable num.
El reasignar dentro de la funcion logNum() afecta a la variable global num.

Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.
Aunque se permite reasignar y no se muestra error, si se quiere usar despues num, sin saber usaremos el nuevo valor de num.

*/ 

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());

console.log(stars);

/* 1. Let’s see what happens if we create a variable that overwrites a global variable.
Se observa que sucede cuando sobreescribimos una variable global.

Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius'.
Dentro de la funcion callMyNightSky() en la primera linea se asigna a la variable stars el valor de 'Sirius'.

2. Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.
Fuera de l funcion despues de console.log() se agrega otro console.log(stars) 

You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.
Se observa que la variable global stars fue reasignada a 'Sirius', es decir cambiamos el valor de la variable global stars, la lectura de este tipo de cambios puede ser complicada resultando en una mala practica pudiendo afectar nuestro codigo.
*/