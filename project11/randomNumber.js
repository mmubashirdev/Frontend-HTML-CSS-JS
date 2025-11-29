let exit = prompt("Welcom press yes to continue no for exit: ");
let randomNum = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
let attempts = 0;
do {
  while (attempts < 10) {
    let guess = parseInt(prompt("Guess the number: "));
    if (guess == randomNum) {
      alert("Correct answer you win");
      alert("Number of attempts: " + (attempts + 1));
      break;
    } else if (guess < randomNum) {
      alert("Too low guess");
    } else if (guess > randomNum) {
      alert("Too high guess");
    }
    attempts++;
  }
  if (attempts == 10) {
    alert("Game Over Attempt limit reached");
    alert("The correct number was " + randomNum);
  }
  exit = prompt("Do you want to play again yes/no");
} while (exit == "yes");
