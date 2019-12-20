/* The .pop() Method */

// Another array method, .pop(), removes the last item of an array.
// El otro metodo de arreglos, .pop(), elimina el ultimo elemento de un arreglo.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/* 
1. In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
1. En el ejemplo anterior, se llamo a .pop() en el arreglo newItemTracker y se elimino item 2 del final.

2. .pop() does not take any arguments, it simply removes the last element of newItemTracker.
2. .pop() no toma ningun argumento, este simplemente remueve el ultimo elemento de newItemTracker.

3. .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
3. .pop() regresa el valor del ultimo elemento. En el ejemplo, almacenamos el valor retornado en la variable "removed" para utilizarla despues.

4. .pop() is a method that mutates the initial array.
4. .pop() es un metodo que muta al arreglo inicial.

When you need to mutate an array by removing the last element, use .pop().
Cuando necesitas mutar un arreglo removiendo el ultimo elemento, utiliza .pop(). */

// Instructions
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
console.log(chores);
// Output: 
// [ 'wash dishes','do laundry', 'take out trash', 'cook dinner', 'mop floor' ]

// 1. Use the .pop() method to remove the last element from chores.

chores.pop();

// 2. In a line after you called chores.pop(), log chores to the console to make sure it worked.
console.log(chores);
// Output: [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]
