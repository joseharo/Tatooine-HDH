/* if Statement - Sentencia if */

const isMailSent = true; // A isMailSent se le asigna el valor true

if (isMailSent) { // Condicional if que evalua si isMailSent es verdadero
  // This code block will be executed
  console.log('Mail sent to recipient'); // Al ser verdadero se ejecuta el codigo
}

/* An if statement accepts an expression with a set of parentheses ( ):
Una sentencia if acepta una expresion encerrada entre pareentesis ():

If the expression evaluates to a truthy value, then the code within its code body executes.
Si la expresion resulta verdadera entonces el codigo contenido en esta se ejecuta.

If the expression evaluates to a falsy value, its code body will not execute.
Si la expresion se evalua como falsa el codigo no sera ejecutado. */


/* else Statement - sentencia else  */

const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}

/* An else block is added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.

Un bloque else se agrega a una serie if, el bloque else se ejecuta solo si el condicional if resulta falso.*/


/* NOT ! Operator - Operador No !*/

// example 1
let value = true;
let oppositeValue = !value;
console.log(oppositeValue); // false

// example 2
const emptyString = '';
!emptyString; // true
const truthyNumber = 1;
!truthyNumber // false

/* The ! operator can be used to do one of the following:
El operador no se puede usar para las acciones:
 
Invert a Boolean value.
Invertir un valor booleano

Invert the truthiness of non-Boolean values. 
En valores no booleanos invertir la veracidad  */


/* JavaScript Comparison Operators - Operadores relacionales 

1 > 3 // false
3 > 1 // true
250 >= 250 // true
1 === 1 // true
1 === 2 // false
1 === '1' // false

JavaScript comparison operators are used to compare two values and return true or false depending on the validity of the comparison. Comparison operators include:
En JS los operadores relacionales se usan para comparar dos valores y regresar el valor verdadero o falso dependiendo de la comparacion realizada. Los operadores relacionales son:

strict equal (===)
Estricta iguadad

strict not equal (!==)
Estricta desigualdad

greater than (>)
Mayor que

less than (<)
Menor que

greater than or equal (>=)
Mayor o igual que

less than or equal (<=
Menor o igual que                 */


/* JavaScript Strict Comparisons - Comparacion estricta en JS*/
console.log(1 === 1);    // true
console.log('1' === 1);  // false
console.log(8 !== 9);    // true

/* The strict equality operator (===) checks if two values are the same and returns true if they are the same. The inequality comparison operator (!==) check if two values are different and return true if they aren’t the same. 

El operador de estricta igualdad (===) compara si dos valores son el mismo y retorna verdadero si son iguales, el operador de desigualdad estricta (!==) compara si dos valores son diferentes y retorna el valor verdadero si es que no son iguales.
*/


/* if else else if Statement - Sentencias if else else if */
const size = 10;
if (size > 100) {
  console.log('Big!');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// 'Small'

/* After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy. 

Despues del bloque inicial if, con else if se pueden agregar mas bloques con condicionales a evaluar; si se desea despues de todos los else - if se puede agregar un bloque else que se ejecutara por default si ninguno de los else if se evaluaron como verdaderos.
*/


/* Operador AND && - Operador Y 

true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true. If one, or both, of the values is falsy, then it returns false.

El operador logico AND && evalua dos valores y regresa un valor logico, si se evaluo como veraz entonces se retorna verdadero, por el contrario si se evaluo como falso se retornara el valor booleano falso.  */


/* OR || Operator 

true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. If both values are falsy, it returns false.

El operador logico OR || evalua dos valores y regresa un booleano, si uno de los dos valores es verdadero retornara el valor true, si ambos valores son falsos se retornara el booleano false.


/* switch Statement - Sentencia switch */
const food = 'pizza';

switch (food) {
  case 'oyster':
    console.log('Enjoy the taste of the sea');
    break;
  case 'pizza':
    console.log('Enjoy a delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}

// Output: 'Enjoy a delicious pie'
// If food = 'Cheese', Output: 'Enjoy your meal'

/* JavaScript’s switch statements provide a means of checking an expression against multiple values. It first evaluates an expression. The result of the expression is matched against values in one or more case clauses. If a case matches, the code inside that clause is executed.

En JS la sentencia switch proporciona el medio para evaluar una expresion contra multiples valores, si un caso coincide se ejecuta el codigo dentro de ese bloque.

The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed. If break is omitted from the block of a case (or the execution is not broken otherwise, such as returning from a function with a switch), the switch statement will continue to check against case values until a break is encountered or the flow is broken. 

Cada bloque de evaluacion debe terminar con la palabra break, para los casos que ninguna evaluacion coincida se agrega un bloque por default.

Si no se agrega la palabra break en cada comparacion, el flujo de ejecucion continuara verificando los valores hasta que encuentre un break o se interrupa el flujo. */


/* JavaScript Ternary Operator - Operador Ternario en JS */

let price = 10.5;
let day = "Monday";

// The following examples produce the same result:

// A: if/else
if (day === "Monday") {
  price -= 1.5;
} else {
  price += 1.5;
}

// B: ternary operator
day === "Monday" ? price -= 1.5 : price += 1.5;

/* The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a ? operator, and then two expressions separated by a :. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed. It can be read as “IF condition THEN expression1 ELSE expression2”. 

El operador ternario permite con una sintaxis corta para la decision entre dos opciones, se utiliza una condicion seguida de un operador ? y luego dos expresiones separadas por :

Si la condicion se evalua como verdadera se ejecuta la primera expresion, de lo contrario se ejecuta la segunda. */