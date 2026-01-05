let exit;
do {
  let randomNum = Math.floor(Math.random() * 101);
  let attempts = 0;
  while (attempts < 10) {
    let guess = parseInt(prompt(attempts+" Guess the number: "));
    if(isNaN(guess)){
      alert(attempts+" This is not a valid number")
      continue;
    }
    if (guess == randomNum) {
      alert("Correct answer you win");
      alert("Number of attempts: " + (attempts + 1));
      break;
    } else if (guess < randomNum) {
      alert(attempts+" Too low guess");
    } else if (guess > randomNum) {
      alert(attempts+" Too high guess");
    }
    attempts++;
  }
  if (attempts == 10) {
    alert("Game Over Attempt limit reached");
    alert("The correct number was " + randomNum);
  }
  exit = prompt("Do you want to play again yes/no");
} while (exit == "no");
