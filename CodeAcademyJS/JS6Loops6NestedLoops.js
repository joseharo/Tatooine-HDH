/* Nested Loops */

/* When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
Un bucle dentro de otro bucle, es llamado un buble anidado. Un bucle anidado se usa para comparar elementos en dos arreglos. Para cada iteracion del bucle externo, el bucle interno se ejecutara por completo.

Let’s look at an example of a nested for loop: 
Ejemlo de bucle aniadado:                      */

const myArray = [7, 8, 2];
const yourArray = [8, 5, 20];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// Output: Both loops have the number: 8

// Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.
// Que sucede en el bucle anidado del ejemplo. Para cada elemento en el arreglo externo myArray, el bucle interno se ejecuta en su totalidad comparando el elemento actual de myArray[i] (externo), con cada elemento del arreglo interno yourArray[j]. Si se encuentra una coincidencia se imprime una cadena en consola.

// Now it’s your turn to write a nested loop!
// Ahora es tu turno de escribir un bucle anidado!

// Instructions:

// 1. Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.

const bobsFollowers = ['Paty', 'Bob', 'Peter', 'Joe', 'Ana'];

// 2. Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.

const tinasFollowers = ['Bob', 'Jr', 'Paty'];

// 3. Create a third variable named mutualFollowers and set it to an empty array.

let mutualFollowers = [];

// 4. Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

for (let i=0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j] ) {
      mutualFollowers.push(bobsFollowers[i]);      
    }    
  }
}

console.log('Mutual Followers: ' + mutualFollowers);
// Output: Mutual Followers: Paty,Bob