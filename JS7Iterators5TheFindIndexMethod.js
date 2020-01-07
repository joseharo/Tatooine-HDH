/* The .findIndex() Method 
We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
*/

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

/* jumbledNums is an array that contains elements that are numbers.

const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().

The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.

num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition. 

Let’s take a look at what lessThanTen evaluates to: */

console.log(lessThanTen); // Output: 3 
// If we check what element has index of 3:

console.log(jumbledNums[3]); // Output: 5

// Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

// El elemento en el indice 3 es el numero 5. Tiene sentido ya que 5 es el primer elemento que es menor a 10.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/* 1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal. */

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
});

/* 2. Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS. */

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';  
})

console.log(startsWithS); //Output: 3