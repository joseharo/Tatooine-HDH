/* The .push() Method */

/* Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

Aprenderemos acerca de algunos metodos de JS que hacen el trabajo con arreglos mas facil. Esos metodos son llamados especificos de arrays para hacer tareas comunes, como agregar, eliminar elementos de forma mas sencilla.

One method, .push() allows us to add items to the end of an array. Here is an example of how this is used:

El metodo .push() nos permite agregar elementos al final de un arreglo. Aqu'i un ejemplo de como se usa:  */

const itemTracker = ['item 0', 'item 1', 'item 2'];

console.log(itemTracker); 
// Output: [ 'item 0', 'item 1', 'item 2' ]

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/* So, how does .push() work?
Como funciona .push()?

1. We access the push method by using dot notation, connecting push to itemTracker with a period.
1. Accedemos al metodo push con la notacion de punto, conectando push al itemTracker con un punto.

2. Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
2. Entonces lo llamamos como una funcion. Esto se debe a que .push() es una funcion que JS nos permite usar directamente en un arreglo.

3. .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
3. .push() puede tomar un argumento sencillo o multiples argumentos separados por comas. En este caso agregamos dos elementos: 'item 3' and 'item 4' a itemTracker.

4. Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
4. Se observa que .push() cambia o muta a itemTracker. Tambien .push() se conoce como un metodo de arreglo destructivo ya que cambia el arreglo inicial.

If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!
Si estas buscando un metodo que mute una matriz agregando elementos en un arreglo, entonces .push es el metodo para ti!  */

// Instructions:

const chores = ['wash dishes', 'do laundry', 'take out trash'];

console.log(chores); 
// Output: 'wash dishes', 'do laundry', 'take out trash' ]

// 1. Add two elements to the chores array using .push().
chores.push('cook', 'iron');

// 2. Use console.log to print your chores array to make sure your items were added.
console.log(chores); 
 // Output: [ 'wash dishes', 'do laundry', 'take out trash', 'cook', 'iron' ]

