/* Review Functions 

A function is a reusable block of code that groups together a sequence of statements to perform a specific task 

A function declaration: */

function greetWorld(){ // Key
  console.log('Hello, World!'); // Function body
}

// A parameter is a named variable inside a function's block witch will be assigned the value of the argument passed in when the function is invoked:

function calculateArea(width, height){ // Parameters width & height
  console.log(width * height); // Parameters are treated like variables within a function
}

// To call a function in your code:

greetWorld(); // Identifier

// ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

// To return a value from a function, we use a return statement.

// To define a function using function expressions:

const calculateArea = function(width, height){
  const area = width * height;
  return area;
};

// To define a function using arrow function notation:

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

// Function definition can be made concise using arrow notation:

  // Single line block
  const sumNumbers = number => number + number;

  // Multi line block
  const sumNumbers = numbers => {
    const sum = number + number;
    return sum; // Return statement
  }





