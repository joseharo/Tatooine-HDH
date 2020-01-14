/* Nested Arrays */
// Matrices anidadas

/* Nested Arrays
Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below: 

Anteriormente mencionamos que los arreglos pueden almacenar otros arreglos. Cuando un arreglo contiene otro arreglo esto se conoce como matrices anidadas. Examina el siguiente ejemplo:
*/

const nestedArr = [[1], [2, 3]];

// To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

// Para acceder a arreglos anidados podemos usar la notacion de corchetes con el valor del indice, tal como lo hicimos para acceder a cualquier otro elemento:

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

// Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

// In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

// Instructions:

/* 1. Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.

  The first array element should hold the elements 1 and 2 in that order.

  The second array element should hold the elements 3 and 4 in that order.

  The third array element should hold the elements 5 and 6 in that order. */

const numberClusters = [[1,2],[3,4],[5,6]];

// 2. Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.

const target = numberClusters[2][1];

console.log(target);
// Output: 6