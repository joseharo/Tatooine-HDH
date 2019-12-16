/* typeof operator 

While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeofoperator checks the value to its right and returns, or passes back, a string of the data type. */

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

// 1. Use console.log() to print the typeof newVariable.
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // Output: string

newVariable = 1;
console.log(typeof newVariable); // Output: number

// 2. Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.

newVariable = true;
console.log(typeof newVariable); // Output: boolean

// 3. Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.

newVariable = null;
console.log(typeof newVariable); // Output: object