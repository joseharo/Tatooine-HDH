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

