let xp = 0;
let gold = 50;
let health = 100;
let currentWeaponIndex = 0;
let inventory = ["stick"];
let currentMonster;
let currentMonsterHealth;

/*  Variables Initializations     */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");

function attack() {
  text.innerText = "The " + monsterName.innerText + " attacks";
  const currentWeapon = weapons[currentWeaponIndex];
  console.log("Current weapon is " + currentWeapon.name);
  text.innerText += ", You attack it with your " + currentWeapon.name;

  health -= currentMonster.level;
  healthText.innerText = health;

  currentMonsterHealth -= currentWeapon.power + Math.floor(Math.random() * xp + 1);
  monsterHealth.innerText = currentMonsterHealth;

  if (health <= 0) {
    lose();
  } else if (currentMonsterHealth <= 0) {
    defeatMonster();
  }

  //console.log(currentMonsterHealth);
}

function dodge() {
  text.innerText = "You dodge the attack from the " + currentMonster.name;
}

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
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: "The monster screams \"Arg!\" as it dies. You gain experience points and find gold."
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
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];

/*  INITIAL BUTTON EVENT LISTENERS  */
// button1.addEventListener("click", goStore);
// button2.addEventListener("click", goCave);
// button3.addEventListener("click", fightDragon);

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  // This makes the monster stats disappear
  monsterStats.style.display = "none";

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerHTML = location["button text"][2];

  // I tried using addEventListeners, but I cannot get them to work properly
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
  if(currentWeaponIndex < weapons.length - 1) {
    if(gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      let newWeapon = weapons[currentWeaponIndex].name;
      inventory.push(newWeapon);
      goldText.innerText = gold;
      text.innerText = "You now have a " + newWeapon;
      text.innerText += ". In your inventory you have:";
      inventoryFormatter();
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if(inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let soldWeapon = inventory.shift();
    text.innerText = "You sold a " + soldWeapon + ".";
    inventoryFormatter();
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function inventoryFormatter() {
  for (let i = 0; i < inventory.length; i++) {
    let ending;
    if (i === inventory.length - 1) {
      ending = ".";
    } else {
      ending = ", ";
    }

    text.innerText += " " + inventory[i] + ending;
  }
}

function lose() {

}

let defeatMonster = () => {
  update(locations[4]);

  xp += currentMonster.level;
  gold += Math.floor(currentMonster.level * 6.7);

  xpText.innerText = xp;
  goldText.innerText = gold;

};

function goFight(index) {
  update(locations[3]);
  currentMonster = monsters[index];
  currentMonsterHealth = currentMonster.health;

  monsterStats.style.display = "block";

  monsterHealth.innerText = currentMonster.health;
  monsterName.innerText = currentMonster.name;
}

function fightDragon() {
  goFight(2);
}


function fightSlime() {
  goFight(0);
}

function fightBeast() {
  goFight(1);
}

