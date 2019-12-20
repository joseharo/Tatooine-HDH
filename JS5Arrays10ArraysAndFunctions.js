/* Arrays and Functions */

/* Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:    */

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/* Let’s go over what happened in the example:
Veamos que pasó en el ejemplo:

1. The flowers array that has 3 elements.
1. El arreglo flowers tiene 3 elementos.

2. The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr. 
2. La funcion addFlower() tiene el parámetro arr uses .push() para agregar el elemento 'lily' dentro de arr.

3. We call addFlower() with an argument of flowers which will execute the code inside addFlower.
3. Podemos llamar a addFlower() con un argumento de flores el cual puede ejecutar codigo dentro de addFlower.

4. We check the value of flowers and it now includes the 'lily' element! The array was mutated!
4. Revisamos el contenido de flowers y este ahora incluye al elemento 'lily'! El arreglo ha cambiado!

So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.

Entonces cuando pasas un arreglo dentro de una funcion, si el arreglo cambia dentro de la funcion, este cambio se conserva fuera de la funcion. Esto tambien se conoce como paso por referencia, ya que lo que se está pasando es una referencia almacenada y cambiada en memoria. */

// Instructions:

// 1. In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.

// Underneath the function call, log concept to the console to check if this reassignment mutated the array.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);
// Output: [ 'arrays', 'can', 'be', 'MUTATED' ]

// 2. Let’s double check what happens if we mutate an array using a built-in method inside a function.

// Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.

function removeElement(newArr){
  newArr.pop();
}

// 3. Call removeElement() with an argument of concept.
removeElement(concept);

// 4. After calling removeElement(concept), check the value of concept by logging it to console.
console.log(concept);
// Output: [ 'arrays', 'can', 'be' ]

// Notice that in both cases, the change to the array was maintained outside of the function!