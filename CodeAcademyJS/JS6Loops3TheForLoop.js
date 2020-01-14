/* The For Loop */

/* A for loop contains three expressions separated by ; inside the parentheses:

1. an initialization starts the loop and can also be used to declare the iterator variable.

2. a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
3. an iteration statement is used to update the iterator variable on each loop.

The for loop syntax looks like this: */

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// In this example, the output would be the following:
// 0
// 1
// 2
// 3

// Instructions

// 1. Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.

for (let counter = 5; counter <= 10; counter++) {
  console.log(counter);
}

// Output:
// 5
// 6
// 7
// 8
// 9
// 10