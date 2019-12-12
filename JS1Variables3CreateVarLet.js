let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// The let keyword signals that the variable can be reassigned a different value.

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined.

let changeMe = true;
// 1. Create a let variable called changeMe and set it equal to the boolean true.

changeMe = false;
// 2. On the line after changeMe is declared, set the value of changeMe to be the boolean false.

console.log(changeMe);
// To check if changeMe was reassigned, log the value saved to changeMe to the console
