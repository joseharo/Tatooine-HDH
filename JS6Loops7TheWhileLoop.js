/* The While Loop */

// You’re doing great! We’re going to teach you about a different type of loop: the while loop. To start, let’s convert a for loop into a while loop:
// Aprenderemos acerca de bucles diferentes: el bucle while. Iniciaremos convirtiendo un bucle for a un bucle while:

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

/* 1.Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.

2. Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

Inside the block of your while loop, add the following line of code:

currentCard = cards[Math.floor(Math.random() * 4)]; 

3. Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console. */

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];  
  console.log(currentCard);
}



