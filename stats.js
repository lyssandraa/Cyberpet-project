//tes pet
let pet = new Fish("testpet");

//get stat bar ids
const hungerBar = document.getElementById("hungerBar");
const thirstBar = document.getElementById("thirstBar");
const healthBar = document.getElementById("healthBar");
const happyBar = document.getElementById("happyBar");
//get stat bar wrap ids
const hungerBarWrap = document.getElementById("hungerBarWrap");
const thirstBarWrap = document.getElementById("thirstBarWrap");
const healthBarWrap = document.getElementById("healthBarWrap");
const happyBarWrap = document.getElementById("happyBarWrap");
//get button ids
const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const sleepButton = document.getElementById("sleepButton");
const playButton = document.getElementById("playButton");
//get button wrap ids
const eatButtonWrap = document.getElementById("eatButtonWrap");
const drinkButtonWrap = document.getElementById("drinkButtonWrap");
const sleepButtonWrap = document.getElementById("sleepButtonWrap");
const happyButtonWrap = document.getElementById("happyButtonWrap");

//hide thirst if fish
function thirstDisplay() {
  if (pet instanceof Fish) {
    drinkButtonWrap.style.display = "none";
    thirstBarWrap.style.display = "none";
  }
}
thirstDisplay();

// makes the hunger bar go down
const decreaseHunger = () => {
  const interval = setInterval(reduceBar, 200);
  function reduceBar() {
    hungerBar.value--;
  }
};
decreaseHunger();

//makes the thirst bar go down
const decreaseThirst = () => {
  const interval = setInterval(reduceBar, 200);
  function reduceBar() {
    thirstBar.value--;
  }
};
decreaseThirst();

//makes the health bar go down
const decreaseHealth = () => {
  const interval = setInterval(reduceBar, 200);
  function reduceBar() {
    healthBar.value--;
  }
};
decreaseHealth();

//makes the happiness bar go down
const decreaseHappy = () => {
  const interval = setInterval(reduceBar, 200);
  function reduceBar() {
    happyBar.value--;
  }
};
decreaseHappy();

//buttons work
eatButton.addEventListener("click", function () {
  pet.eat();
});
drinkButton.addEventListener("click", function () {
  pet.drink();
});
sleepButton.addEventListener("click", function () {
  pet.sleep();
});
playButton.addEventListener("click", function () {
  if (pet instanceof Snake) {
    pet.slither();
  } else if (pet instanceof Fish) {
    pet.swim();
  } else if (pet instanceof Rabbit) {
    pet.hop();
  }
});
