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