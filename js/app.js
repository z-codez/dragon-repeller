/*  Variables Initializations     */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\""
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You have entered the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button  functions": [fightSlime, fightBeast, goTown]
  }
]

button1.addEventListener("click", goStore);

function update(location) {}

function goStore() {
  text.innerText = "You enter the store.";
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerHTML = "Go to town square";

  button1.addEventListener("click", buyHealth);
  button2.addEventListener("click", buyWeapon);
  button3.addEventListener("click", goTown);
}

function goCave() {
  text.innerText = "Going to cave";
}

function fightDragon() {
  text.innerText = "Fighting dragon";
}

function buyHealth() {}

function buyWeapon() {
  return undefined;
}

function goTown() {
  return undefined;
}

function fightSlime() {}

function fightBeast() {}
