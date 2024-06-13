//get stat bar ids
const hungerBar = document.getElementById("hungerBar");
const thirstBar = document.getElementById("thirstBar");
const healthBar = document.getElementById("healthBar");
//get button ids
const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const healthButton = document.getElementById("healthButton");

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
let pet = new Snake("testpet");
