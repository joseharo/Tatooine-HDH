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