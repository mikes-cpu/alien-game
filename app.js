const FIRE_BUTTON = document.querySelector(".fire");
const GAME_CONTAINER = document.querySelector(".game-container");
const NEW_GAME = document.querySelector(".start-new-game-button");

class Ship {
  constructor(type, hitPoints, isAlive) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.isAlive = isAlive;
  }
  hitMotherShip() {
    this.hitPoints -= 9;
  }
  hitDefenceShip() {
    this.hitPoints -= 10;
  }
  hitAttackShip() {
    this.hitPoints -= 12;
  }
}
let MOTHER_SHIP = {};
let DEFENCE_SHIPS = [];
let ATTACK_SHIPS = [];

function createDefShipData() {
  DEFENCE_SHIPS = [];
  for (let i = 0; i < 5; i++) {
    DEFENCE_SHIPS.push(new Ship("DEFENCE", 80, true));
  }
}
function createAttShipData() {
  ATTACK_SHIPS = [];
  for (let i = 0; i < 8; i++) {
    ATTACK_SHIPS.push(new Ship("ATTACK", 45, true));
  }
}

function utilityNumberGenerator(numberOf) {
  return Math.floor(Math.random() * numberOf);
}

function createMotherShipHTML() {
  const mother = document.createElement("h1");
  mother.innerText = "M";
  const motherScore = document.createElement("p");
  motherScore.innerText = MOTHER_SHIP.hitPoints;
  GAME_CONTAINER.appendChild(mother);
  GAME_CONTAINER.appendChild(motherScore);
}

function createDefenceShipHTML(index) {
  const defenceShip = document.createElement("h2");
  defenceShip.innerText = "D";
  const defenceShipScore = document.createElement("p");
  defenceShipScore.innerText = DEFENCE_SHIPS[index].hitPoints;
  GAME_CONTAINER.appendChild(defenceShip);
  GAME_CONTAINER.appendChild(defenceShipScore);
}

function createAttackShipHTML(index) {
  const attackShip = document.createElement("p");
  attackShip.innerText = "A";
  const attackShipScore = document.createElement("p");
  attackShipScore.innerText = ATTACK_SHIPS[index].hitPoints;
  GAME_CONTAINER.appendChild(attackShip);
  GAME_CONTAINER.appendChild(attackShipScore);
}

function displayShips() {
  GAME_CONTAINER.innerHTML = "";
  MOTHER_SHIP.isAlive ? createMotherShipHTML() : null;

  if (MOTHER_SHIP.isAlive) {
    DEFENCE_SHIPS[0].isAlive ? createDefenceShipHTML(0) : null;
    DEFENCE_SHIPS[1].isAlive ? createDefenceShipHTML(1) : null;
    DEFENCE_SHIPS[2].isAlive ? createDefenceShipHTML(2) : null;
    DEFENCE_SHIPS[3].isAlive ? createDefenceShipHTML(3) : null;
    DEFENCE_SHIPS[4].isAlive ? createDefenceShipHTML(4) : null;

    ATTACK_SHIPS[0].isAlive ? createAttackShipHTML(0) : null;
    ATTACK_SHIPS[1].isAlive ? createAttackShipHTML(1) : null;
    ATTACK_SHIPS[2].isAlive ? createAttackShipHTML(2) : null;
    ATTACK_SHIPS[3].isAlive ? createAttackShipHTML(3) : null;
    ATTACK_SHIPS[4].isAlive ? createAttackShipHTML(4) : null;
    ATTACK_SHIPS[5].isAlive ? createAttackShipHTML(5) : null;
    ATTACK_SHIPS[6].isAlive ? createAttackShipHTML(6) : null;
    ATTACK_SHIPS[7].isAlive ? createAttackShipHTML(7) : null;
  } else {
    alert(
      "Well Done! You destroyed the Mother Ship and the space army retreated!"
    );
  }
}

function motherShipHit() {
  MOTHER_SHIP.hitMotherShip();
  if (MOTHER_SHIP.hitPoints <= 0) {
    MOTHER_SHIP.isAlive = false;
  }
}
function defenceShipHit(index) {
  DEFENCE_SHIPS[index].hitDefenceShip();
  if (DEFENCE_SHIPS[index].hitPoints <= 0) {
    DEFENCE_SHIPS[index].isAlive = false;
  }
}
function attackShipHit(index) {
  ATTACK_SHIPS[index].hitAttackShip();
  if (ATTACK_SHIPS[index].hitPoints <= 0) {
    ATTACK_SHIPS[index].isAlive = false;
  }
}

function onFireAtShips() {
  let randomNumber = utilityNumberGenerator(3);

  switch (randomNumber) {
    case 0:
      motherShipHit();
      break;
    case 1:
      defenceShipHit(utilityNumberGenerator(5));
      break;
    case 2:
      attackShipHit(utilityNumberGenerator(8));
      break;
  }
  displayShips();
}

function onNewGame() {
  MOTHER_SHIP = new Ship("MOTHER", 100, true);
  createDefShipData();
  createAttShipData();
  displayShips();
}

FIRE_BUTTON.addEventListener("click", onFireAtShips);
NEW_GAME.addEventListener("click", onNewGame);
