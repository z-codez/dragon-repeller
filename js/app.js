
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


const text = document.querySelector("#text");

button1.onclick = goStore;

function goStore() {
  text.innerText = "You enter the store.";
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerHTML = "Go to town square";
}

function goCave() {
  text.innerText = "Going to cave";
}

function fightDragon() {
  text.innerText = "Going to Town square";
}
