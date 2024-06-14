// generic class for all pets //
class Animal {
  constructor(name, hungerBar, thirstBar, healthBar, happyBar) {
    this.name = name;
    this.hungerBar = hungerBar;
    this.thirstBar = thirstBar;
    this.healthBar = healthBar;
    this.happyBar = happyBar;
  }
  eat() {
    this.hungerBar.value += 10;
  }
  sleep() {
    this.healthBar.value += 10;
    this.hungerBar.value -= 10;
    this.thirstBar.value -= 10;
  }
}

//pet subclasses
class Snake extends Animal {
  drink() {
    this.thirstBar.value += 10;
  }
  slither() {
    this.happyBar.value += 10;
    this.hungerBar.value -= 10;
    this.thirstBar.value -= 10;
  }
}

class Fish extends Animal {
  swim() {
    this.happyBar.value += 10;
    this.hungerBar.value -= 10;
    this.thirstBar.value -= 10;
  }
}

class Rabbit extends Animal {
  drink() {
    this.thirstBar.value += 10;
  }
  hop() {
    this.happyBar.value += 10;
    this.hungerBar.value -= 10;
    this.thirstBar.value -= 10;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // references to the pet selection images //
  const snakeSelect = document.getElementById("snakeSelect");
  const fishSelect = document.getElementById("fishSelect");
  const rabbitSelect = document.getElementById("rabbitSelect");

  // reference to the name input field //
  const petNameInput = document.getElementById("petName");

  // reference to the play button //
  const playBtn = document.querySelector(".playBtn button");

  //reference to the error message//
  const errorMessage = document.getElementById("errorMessage");

  // references to the different sections in the HTML //
  const welcomePage = document.querySelector(".welcomePage");
  const petSelectionPage = document.querySelector(".petSelectionPage");
  const gamePage = document.querySelector(".gamePage");

  // references to the individual animal sections //
  const snakeSection = document.querySelector(".snake");
  const fishSection = document.querySelector(".fish");
  const rabbitSection = document.querySelector(".rabbit");

  //get stat bar ids
  const hungerBar = document.getElementsByClassName("hungerBar");
  const thirstBar = document.getElementsByClassName("thirstBar");
  const healthBar = document.getElementsByClassName("healthBar");
  const happyBar = document.getElementsByClassName("happyBar");
  //get button ids
  const eatButton = document.getElementsByClassName("eatButton");
  const drinkButton = document.getElementsByClassName("drinkButton");
  const sleepButton = document.getElementsByClassName("sleepButton");
  const playButton = document.getElementsByClassName("playButton");

  //variable to store the selected pet instance
  let pet = null;

  // add eventlistener to transition from welcome to pet selection when enter is pressed //
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // hides welcome page //
      welcomePage.style.display = "none";
      // displays pet selection page instead //
      petSelectionPage.style.display = "block";
    }
  });

  // function for the pet selection process //
  function selectPet(petType) {
    const petName = petNameInput.value;
    if (!petName) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a name.";
      return;
    }

    if (petType === "snake") {
      pet = new Snake(petName, hungerBar, thirstBar, healthBar, happyBar);
      snakeSection.style.display = "block";
      fishSection.style.display = "none";
      rabbitSection.style.display = "none";
    } else if (petType === "fish") {
      pet = new Fish(petName, hungerBar, thirstBar, healthBar, happyBar);
      snakeSection.style.display = "none";
      fishSection.style.display = "block";
      rabbitSection.style.display = "none";
      drinkButton.style.display = "none";
      thirstBar.style.display = "none";
    } else if (petType === "rabbit") {
      pet = new Rabbit(petName, hungerBar, thirstBar, healthBar, happyBar);
      snakeSection.style.display = "none";
      fishSection.style.display = "none";
      rabbitSection.style.display = "block";
    }
  }

  // eventlisteners for pet images //
  snakeSelect.addEventListener("click", () => {
    selectPet("snake");
  });

  fishSelect.addEventListener("click", () => {
    selectPet("fish");
  });

  rabbitSelect.addEventListener("click", () => {
    selectPet("rabbit");
  });

  // eventlisteners for the play button and name input field //
  playBtn.addEventListener("click", () => {
    if (!pet) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please select a pet.";
    } else {
      errorMessage.style.display = "none";
      petSelectionPage.style.display = "none";
      gamePage.style.display = "block";
      decreaseHunger();
      decreaseThirst();
      decreaseHealth();
      decreaseHappy();
    }
  });

  // makes the hunger bar go down
  const decreaseHunger = () => {
    setInterval(() => {
      hungerBar.value--;
    }, 200);
  };

  //makes the thirst bar go down
  const decreaseThirst = () => {
    setInterval(() => {
      thirstBar.value--;
    }, 200);
  };

  //makes the health bar go down
  const decreaseHealth = () => {
    setInterval(() => {
      healthBar.value--;
    }, 200);
  };

  //makes the happiness bar go down
  const decreaseHappy = () => {
    setInterval(() => {
      happyBar.value--;
    }, 200);
  };

  //buttons work
  eatButton.addEventListener("click", () => {
    pet.eat();
  });
  drinkButton.addEventListener("click", () => {
    if (pet instanceof Fish) return;
    pet.drink();
  });
  sleepButton.addEventListener("click", () => {
    pet.sleep();
  });
  playButton.addEventListener("click", () => {
    if (pet instanceof Snake) {
      pet.slither();
    } else if (pet instanceof Fish) {
      pet.swim();
    } else if (pet instanceof Rabbit) {
      pet.hop();
    }
  });
});
