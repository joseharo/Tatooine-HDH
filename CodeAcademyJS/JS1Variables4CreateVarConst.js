/* However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.

If you’re trying to decide between which keyword to use, let or const, think about whether you’ll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const. */

const entree = 'Enchiladas';
// 1. Create a constant variable named entree and set it to equal to the string 'Enchiladas'.

console.log(entree);
// 2. Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.

entree = 'Tacos';
// 3. Great, let’s see what happens if you try to reassign a constant variable.

/* This code throws the following error when you run your code:

TypeError: Assignment to constant variable. */