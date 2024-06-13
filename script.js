// generic class for all pets //
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.happiness = 100;
  }
  eat() {
    this.hunger += 10;
  }
  clean() {
    this.health += 10;
  }
  sleep() {
    this.health += 10;
    this.hunger -= 10;
    this.thirst -= 10;
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
    this.thirst = 100;
  }
  drink() {
    this.thirst += 10;
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

  // reference to the name input field //
  const petNameInput = document.getElementById("petName");

  // reference to the play button //
  const playBtn = document.getElementById("playBtn");

  // references to the different sections in the HTML //
  const welcomePage = document.querySelector(".welcomePage");
  const petSelectionPage = document.querySelector(".petSelectionPage");
  const gamePage = document.querySelector(".gamePage");

  // references to the individual animal sections //
  const snakeSection = document.querySelector(".snake");
  const fishSection = document.querySelector(".fish");
  const rabbitSection = document.querySelector(".rabbit");

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
    if (selectedPet && petName !== "") {
      petSelectionPage.style.display = "none";
      gamePage.style.display = "block";

      if (selectedPet === "snake") {
        snakeSection.style.display = "block";
        fishSection.style.display = "none";
        rabbitSection.style.display = "none";
      } else if (selectedPet === "fish") {
        snakeSection.style.display = "none";
        fishSection.style.display = "block";
        rabbitSection.style.display = "none";
      } else if (selectedPet === "rabbit") {
        snakeSection.style.display = "none";
        fishSection.style.display = "none";
        rabbitSection.style.display = "block";
      } else {
        alert("Please select a pet and enter a name.");
      }
    }
  });
});
