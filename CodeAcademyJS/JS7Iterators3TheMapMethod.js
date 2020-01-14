/* The .map() Method 
The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map(): */

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/* .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

In the example above:

1. numbers is an array of numbers.

2. bigNumbers will store the return value of calling .map() on numbers.

3. numbers.map will iterate through each element in the numbers array and pass the element into the callback function.

4. return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array. 

If we take a look at numbers and bigNumbers:

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/* Add your code under the animals array and before the line console.log(secretMessage.join(''));

Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage. */
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
                                  
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
/* Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers. */
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers);