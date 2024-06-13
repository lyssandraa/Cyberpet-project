// generic class for all pets //
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    hungerBar.value += 10;
  }
  sleep() {
    healthBar.value += 10;
    hungerBar.value -= 10;
    thirstBar.value -= 10;
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }
  drink() {
    thirstBar.value += 10;
  }
  slither() {
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  swim() {
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.thirst = 100;
  }
  drink() {
    this.thirst += 10;
  }
  hop() {
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // references to the pet selection images //
  const snakeSelect = document.getElementById("snakeSelect");
  const fishSelect = document.getElementById("fishSelect");
  const rabbitSelect = document.getElementById("rabbitSelect");

  // references to the different sections in the HTML //
  const welcomePage = document.querySelector(".welcomePage");
  const petSelectionPage = document.querySelector(".petSelectionPage");
  const gamePage = document.querySelector(".gamePage");

  // references to the individual animal sections //
  const snakeSection = document.querySelector(".snake");
  const fishSection = document.querySelector(".fish");
  const rabbitSection = document.querySelector(".rabbit");
});
