/* More Array Methods */

/* There are many more array methods than just .push() and .pop(). You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation. */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Instructions:

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// 1. Use the .shift() method to remove the first item from the array groceryList.
// 1. .shift() elimina el primer elemento de un arreglo.

// Log the new groceryList to the console. 
groceryList.shift();

console.log(groceryList);
// Output: [ 'bananas',  'coffee beans',  'brown rice',  'pasta',  'coconut il',  'plantains' ]

// 2. Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
// 2. .unshift() agrega un elemento al inicio de un arreglo.

// After calling .unshift() on groceryList, log groceryList to the console.

// You may wish to delete the console.log() statement from the previous step.
groceryList.unshift('popcorn');

console.log(groceryList);
// Output: [ 'popcorn',  'bananas',  'coffee beans',  'brown rice',  'pasta',  'coconut oil',   'plantains' ]

//3. You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

// Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

// Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.

console.log(groceryList.slice(1, 4));
// Output: [ 'bananas', 'coffee beans', 'brown rice' ]

// 4. After calling .slice() on groceryList, log the grocery list to the console one more time.

// Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.

console.log(groceryList);
// Output: [ 'popcorn',  'bananas',  'coffee beans',  'brown rice', 'pasta',  'coconut oil',  'plantains' ]

// 5. Let’s find the index of a particular element in groceryList using .indexOf().

// Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

// Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.

console.log(groceryList);
// Output: [ 'popcorn',  'bananas',  'coffee beans',  'brown rice', 'pasta',  'coconut oil',  'plantains' ]

const pastaIndex = groceryList.indexOf('pasta');
// const pastaIndex = 4;
console.log(pastaIndex);
// Output: 4