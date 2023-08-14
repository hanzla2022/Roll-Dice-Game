//////////// generate the random number
let randomNum1, randomNum2;
function randomNumGenerator() {
  return Math.ceil(Math.random() * 6);
}

////////// ACCESSING DOM ELEMENTS
let winner = document.getElementById("winnerAnouncement");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
////////// ACCESSING PLAYING BUTTONS
let diceButton1 = document.getElementById("role_dice_1");
let diceButton2 = document.getElementById("role_dice_2");
////////////// RESET CONTAINER AND BUTTON DECELEATION //////////////
let resetContainer = document.getElementById("reset_container");
let resetButton;

function restartGame() {
  winner.textContent = "Play Roll Dice";
  resetContainer.removeChild(resetButton);
  resetContainer.style.visibility = "hidden";
  // MAKE THE DICE IMAGES TO DEFAULT ONe
  document.querySelector("#img_1").setAttribute("src", "dice1.png");
  document.querySelector("#img_2").setAttribute("src", "dice2.png");
}
////////////////  ADDING EVENT LISTERNER TO DICE BUTTONS  ////////////////////
diceButton1.addEventListener("click", diceRoller1);
diceButton2.addEventListener("click", diceRoller2);
////////////////// CHANGE THE PLAYER NAME FUNC ////////////////

function editPlayer() {
  let assignPlayer1Name = prompt("Player1 Name");
  let assignPlayer2Name = prompt("Player2 Name");
  if (assignPlayer1Name !== "" && assignPlayer2Name !== "") {
    player1.textContent = assignPlayer1Name;
    player2.textContent = assignPlayer2Name;
  } else {
    alert("plase type names of both players");
  }
}

////////////// ROOLING THE DICE  ////////////////

let player1turn = true;
let player2turn = false;

function diceRoller1() {
  // FLAG VALIDATION
  if (!player1turn) {
    alert("its " + player2.textContent + "'s turn");
    return;
  }
  player1turn = false;
  player2turn = true;
  // FETCH RANDOMNUM1 GENEERTAOR VALUE
  randomNum1 = randomNumGenerator();
  // IMG SELECTOR BASED ON THE RANDOM NUMBER
  let img1 = document
    .querySelector("#img_1")
    .setAttribute("src", "dice" + randomNum1 + ".png");
  alert("player1 performed rollilng");
  // CALL THE RESULT FUCNTION
  // getResult();
  // REMOVE EVENT LISTENER
  // diceButton1.removeEventListener("click", diceRoller1);
}
function diceRoller2() {
  // CHECKING FOR VALIDATION
  if (player2turn === false) {
    alert("its " + player1.textContent + "'s turn");
    return;
  }
  // INVERSE FLAGS AFTER PALYER --> 2 --- ROLLING
  player2turn = false;
  player1turn = true;
  // FETCH RANDOMNUM1 GENEERTAOR VALUE
  randomNum2 = randomNumGenerator();
  // IMG SELECTOR BASED ON THE RANDOM NUMBER
  let img2 = document
    .querySelector("#img_2")
    .setAttribute("src", "dice" + randomNum2 + ".png");
  // CALL THE RESULT FUCNTION
  getResult();
  // RESET BUTTON
  resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  resetButton.classList.add("playButton");
  resetContainer.style.visibility = "visible";
  resetContainer.classList.add("reset_modal");
  resetContainer.appendChild(resetButton);
  resetButton.addEventListener("click", restartGame);

  // diceButton2.removeEventListener("click", diceRoller2);
}

function getResult() {
  // APPLYING CONDITIONS FOR WINNER AND LOOSER
  if (randomNum1 > randomNum2) {
    winner.textContent = `Winner is ${player1.textContent}`;
  } else if (randomNum1 < randomNum2) {
    winner.textContent = `Winner is ${player2.textContent}`;
  } else {
    winner.textContent = "DRAW";
  }
}

// setTimeout(diceRoller1, 2000);
// setTimeout(diceRoller2, 2000);
