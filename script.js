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

//pet subclasses
class Snake extends Animal {
  constructor(name) {
    super(name);
  }
  drink() {
    thirstBar.value += 10;
  }
  slither() {
    happyBar.value += 10;
    hungerBar.value -= 10;
    thirstBar.value -= 10;
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  swim() {
    happyBar.value += 10;
    hungerBar.value -= 10;
    thirstBar.value -= 10;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }
  drink() {
    thirstBar.value += 10;
  }
  hop() {
    happyBar.value += 10;
    hungerBar.value -= 10;
    thirstBar.value -= 10;
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
