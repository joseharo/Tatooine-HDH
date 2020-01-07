/* Do ... While Statements
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in. */

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

/* 1. We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing. The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.

2. We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0. Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded. */

let cupsOfSugarNeeded = 13;
let cupsAdded = 0;
do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);