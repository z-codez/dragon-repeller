let xp = 0;
let gold = 50;
let health = 100;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


/*  Variables Initializations     */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");

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
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You entered the cave. You see some monsters."
  }
]

const weapons = [
  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  }
]

/*  INITIAL BUTTON EVENT LISTENERS  */
// button1.addEventListener("click", goStore);
// button2.addEventListener("click", goCave);
// button3.addEventListener("click", fightDragon);

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerHTML = location["button text"][2];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  text.innerText = location.text;
  // button1.addEventListener("click", location["button functions"][0]);
  // button2.addEventListener("click", location["button functions"][1]);
  // button3.addEventListener("click", location["button functions"][2]);
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  text.innerText = "Fighting dragon";
}

function buyHealth() {
  if(gold >= 10) {
    gold -= 10;
    health += 10;

    healthText.innerText = health;
    goldText.innerText = gold;
  } else {
    text.innerText = "You do not have enough gold to buy health."
  }
}

function buyWeapon() {
  if(gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    let newWeapon = weapons[currentWeaponIndex].name;
    inventory.push(newWeapon);
    goldText.innerText = gold;
    text.innerText = "You now have a " + newWeapon;
    text.innerText += ". In your inventory you have:";

    for(let i = 0; i < inventory.length; i++) {
      let ending;
      if(i === inventory.length - 1) {
        ending = ".";
      } else {
        ending = ", ";
      }

      text.innerText += " " + inventory[i] + ending;
    }
  }
}



function fightSlime() {}

function fightBeast() {}
