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