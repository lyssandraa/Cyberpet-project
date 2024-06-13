const hungerBar = document.getElementById("hungerBar");

// makes the hunger bar go down
const decreaseHunger = () => {
  const interval = setInterval(reduceBar, 200);
  function reduceBar() {
    hungerBar.value--;
  }
};

decreaseHunger();

let pet = new Animal("Ruff");

const eatButton = document.getElementById("eatButton");

eatButton.addEventListener("click", function () {
  pet.eat();
});
