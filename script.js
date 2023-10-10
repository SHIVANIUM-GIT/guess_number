// Variable to store the list of guesses
let guesses = [];
// Variable for store the current random number
let correctNumber = getRandomNumber();

console.log(correctNumber);
window.onload = function () {
  document
    .getElementById("number-submit")
    .addEventListener("click", function () {
      playGame();
    });
  document
    .getElementById("restart-game")
    .addEventListener("click", function () {
      initGame();
    });
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  document.getElementById("number-guess").value = "";
}

function getRandomNumber() {
  var answer = Math.floor(Math.random() * 100) + 1;
  return answer;
}

function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess > correctNumber) {
    showNumberAbove();
  } else {
    showYouWon();
  }
}

function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  document.getElementById("history").innerHTML = "";
  document.getElementById("number-guess").value = "";
}

function getDialog(dialogtype, text) {
  let dialog;
  switch (dialogtype) {
    case "warning":
      dialog =
        "<div class='alert alert-warning' role='alert'>" + text + "</div>";
      break;
    case "won":
      dialog =
        "<div class='alert alert-success' role='alert'>" + text + "</div>";
      break;
  }
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, You won";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove() {
  const text = "Your guess is too high";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberBelow() {
  const text = "Your guess is too low";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function displayHistory(guess) {
  let index = guess.length - 1;
  let list = "<ul class='list-group' style='margin: 10px;'>";
  while (0 <= index) {
    list +=
      "<li class='list-group-item'>" + "You Guessed " + guess[index] + "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
  displayHistory(guesses);
}
