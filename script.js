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

  // reference to the name input field //
  const petNameInput = document.getElementById("petName");

  // reference to the play button //
  const playBtn = document.getElementById("playBtn");

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

  //variable to store the selected pet with no value assigned to it. nulll is placeholder //
  let selectedPet = null;

  // add eventlistner to transition from welcome to pet selection when enter is pressed //
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // hides welcome page //
      welcomePage.style.display = "none";
      // displays pet selection page instead //
      petSelectionPage.style.display = "block";
    }
  });

  // function for the pet selection process //
  function selectPet(pet) {
    selectedPet = pet;
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
    const petName = petNameInput.value;
    if (!selectedPet || petName === "") {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please select a pet and enter a name.";
    } else {
      errorMessage.style.display = "none";
      petSelectionPage.style.display = "none";
      gamePage.style.display = "block";

      if (selectedPet === "snake") {
        snakeNameDisplay.textContent = petName;
        snakeSection.style.display = "block";
        fishSection.style.display = "none";
        rabbitSection.style.display = "none";
      } else if (selectedPet === "fish") {
        fishNameDisplay.textContent = petName;
        snakeSection.style.display = "none";
        fishSection.style.display = "block";
        rabbitSection.style.display = "none";
      } else if (selectedPet === "rabbit") {
        rabbitNameDisplay.textContent = petName;
        snakeSection.style.display = "none";
        fishSection.style.display = "none";
        rabbitSection.style.display = "block";
      } else {
        alert("Please select a pet and enter a name.");
      }
    }
  });
});
