const message1Element = document.querySelector("#message1 span");
const message2Element = document.querySelector("#message2 span");
const message3Element = document.querySelector("#message3 span");
const guessInput = document.querySelector("#guess");
const guessButton = document.querySelector("#my_btn");
const resetButton = document.querySelector("#reset_btn");

let answer = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
const guessedNumbers = [];

const playGame = () => {
  const userGuess = Number(guessInput.value);
  let message;
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message = "Enter a valid number between 1 and 100.";
  } else if (guessCount < 10) {
    if (userGuess < answer) {
      message = "Too low!";
    } else if (userGuess > answer) {
      message = "Too high!";
    } else {
      message = `Correct! You got it in ${guessCount + 1} guesses.`;
      endGame();
    }
  } else {
    message = "Game over. You've reached the maximum number of guesses.";
    endGame();
  }

  guessCount = guessCount < 10 ? guessCount + 1 : guessCount;
  guessedNumbers.push(userGuess);
  message1Element.textContent = guessCount;
  message2Element.textContent = guessedNumbers.join(", ");
  message3Element.textContent = message;
  guessInput.classList.toggle("error", isNaN(userGuess) || userGuess < 1 || userGuess > 100);
  guessInput.value = "";
};

const endGame = () => {
  guessInput.disabled = true;
  guessButton.remove();
  resetButton.style.display = "block";
};

const resetGame = () => {
  guessCount = 0;
  guessedNumbers.length = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  message1Element.textContent = "0";
  message2Element.textContent = "None";
  message3Element.textContent = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  resetButton.style.display = "none";
  guessInput.value = '';
};

guessInput.addEventListener("keyup", event => event.key === "Enter" && guessButton.click());
resetButton.addEventListener('click', resetGame);

