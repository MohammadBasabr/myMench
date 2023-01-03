var player1_name = "player1",
  player2_name = "player2";
var message = document.getElementById("message");
var player1_state_text = document.getElementById("pl1sttxt");
var player2_state_text = document.getElementById("pl2sttxt");
var player1_state_image = document.getElementById("pl1stimg");
var player2_state_image = document.getElementById("pl2stimg");
var player1_dice = document.getElementById("dice1");
var player2_dice = document.getElementById("dice2");

document.getElementById("roll").addEventListener("click", play);
document.getElementById("edit").addEventListener("click", edit);

function play() {
  reset();
  var res1 = rollTheDice();
  var res2 = rollTheDice();
  make(res1, res2);
}

function edit() {
  getUname();
  player1_state_text.innerText = `${player1_name} is:`;
  player2_state_text.innerText = `${player2_name} is:`;
  reset();
}

function reset() {
  message.innerText = "What will happen?\n( ◔ ʖ̯ ◔ )";
  player1_state_image.setAttribute("src", "./image/worried.png");
  player2_state_image.setAttribute("src", "./image/worried.png");
}

function rollTheDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function make(arg1, arg2) {
  if ((arg1, arg2 === 6)) {
    message.innerText = "Could not be better!\n(づ￣ ³￣)づ";
    player1_state_image.setAttribute("src", "./image/win.png");
    player2_state_image.setAttribute("src", "./image/win.png");
    player1_dice.setAttribute("src", `./image/six.png`);
    player2_dice.setAttribute("src", `./image/six.png`);
  } else if (arg1 === 6) {
    message.innerText = `Hey ${player1_name}, you are so cute!\n(◕‿◕)`;
    player1_dice.setAttribute("src", `./image/${faces.getMe(arg1)}.png`);
    player2_dice.setAttribute("src", `./image/${faces.getMe(arg2)}.png`);
    player1_state_image.setAttribute("src", "./image/win.png");
    player2_state_image.setAttribute("src", "./image/ungry.png");
  } else if (arg2 === 6) {
    message.innerText = `Hey ${player2_name}, you are so cute!\n(◕‿◕)`;
    player1_dice.setAttribute("src", `./image/${faces.getMe(arg1)}.png`);
    player2_dice.setAttribute("src", `./image/${faces.getMe(arg2)}.png`);
    player2_state_image.setAttribute("src", "./image/win.png");
    player1_state_image.setAttribute("src", "./image/ungry.png");
  } else {
    player1_dice.setAttribute("src", `./image/${faces.getMe(arg1)}.png`);
    player2_dice.setAttribute("src", `./image/${faces.getMe(arg2)}.png`);
  }
}

function getUname() {
  player1_name = prompt("Enter player 1's name:");
  player2_name = prompt("Enter player 2's name:");
}

var faces = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  getMe: function (arg) {
    if (arg === 1) return this[1];
    if (arg === 2) return this[2];
    if (arg === 3) return this[3];
    if (arg === 4) return this[4];
    if (arg === 5) return this[5];
    if (arg === 6) return this[6];
  },
};
