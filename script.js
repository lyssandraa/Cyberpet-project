// Generic class for all pets
class Animal {
  constructor(name, hungerBar, thirstBar, healthBar, happyBar) {
    this.name = name;
    this.hungerBar = hungerBar;
    this.thirstBar = thirstBar;
    this.healthBar = healthBar;
    this.happyBar = happyBar;
  }

  eat() {
    this.hungerBar.value = Math.min(this.hungerBar.value + 10, 100); // Increase hunger by 10
  }

  sleep() {
    this.healthBar.value = Math.min(this.healthBar.value + 10, 100); // Increase health by 10
    this.hungerBar.value = Math.max(this.hungerBar.value - 10, 0); // Decrease hunger by 10
    this.thirstBar.value = Math.max(this.thirstBar.value - 10, 0); // Decrease thirst by 10
  }

  drink() {}

  slither() {}

  swim() {}

  hop() {}
}

// Snake subclass
class Snake extends Animal {
  constructor(name, hungerBar, thirstBar, healthBar, happyBar) {
    super(name, hungerBar, thirstBar, healthBar, happyBar);
    this.decreaseRate = 2000; // Decrease rate for snake
  }

  drink() {
    this.thirstBar.value = Math.min(this.thirstBar.value + 10, 100);
  }

  slither() {
    this.happyBar.value = Math.min(this.happyBar.value + 10, 100);
    this.hungerBar.value = Math.max(this.hungerBar.value - 10, 0);
    this.thirstBar.value = Math.max(this.thirstBar.value - 10, 0);
  }
}

// Fish subclass
class Fish extends Animal {
  constructor(name, hungerBar, thirstBar, healthBar, happyBar) {
    super(name, hungerBar, thirstBar, healthBar, happyBar);
    this.decreaseRate = 1000; // Decrease rate for fish
  }

  swim() {
    this.happyBar.value = Math.min(this.happyBar.value + 10, 100);
    this.hungerBar.value = Math.max(this.hungerBar.value - 10, 0);
    this.thirstBar.value = Math.max(this.thirstBar.value - 10, 0);
  }
}

// Rabbit subclass
class Rabbit extends Animal {
  constructor(name, hungerBar, thirstBar, healthBar, happyBar) {
    super(name, hungerBar, thirstBar, healthBar, happyBar);
    this.decreaseRate = 500; // Decrease rate for rabbit
  }

  drink() {
    this.thirstBar.value = Math.min(this.thirstBar.value + 10, 100);
  }

  hop() {
    this.happyBar.value = Math.min(this.happyBar.value + 10, 100);
    this.hungerBar.value = Math.max(this.hungerBar.value - 10, 0);
    this.thirstBar.value = Math.max(this.thirstBar.value - 10, 0);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // References to the pet selection images
  const snakeSelect = document.getElementById("snakeSelect");
  const fishSelect = document.getElementById("fishSelect");
  const rabbitSelect = document.getElementById("rabbitSelect");

  // Reference to the name input field
  const petNameInput = document.getElementById("petName");

  // Reference to the play button
  const playBtn = document.querySelector(".playBtn button");

  // Reference to the error message
  const errorMessage = document.getElementById("errorMessage");

  // References to the different sections in the HTML
  const welcomePage = document.querySelector(".welcomePage");
  const petSelectionPage = document.querySelector(".petSelectionPage");
  const gamePage = document.querySelector(".gamePage");

  // References to the individual animal sections
  const snakeSection = document.querySelector(".snake");
  const fishSection = document.querySelector(".fish");
  const rabbitSection = document.querySelector(".rabbit");

  // Get stat bar elements for each pet type
  const snakeBars = {
    hungerBar: snakeSection.querySelector("#hungerBar"),
    thirstBar: snakeSection.querySelector("#thirstBar"),
    healthBar: snakeSection.querySelector("#healthBar"),
    happyBar: snakeSection.querySelector("#happyBar"),
  };

  const fishBars = {
    hungerBar: fishSection.querySelector("#hungerBar"),
    thirstBar: fishSection.querySelector("#thirstBar"),
    healthBar: fishSection.querySelector("#healthBar"),
    happyBar: fishSection.querySelector("#happyBar"),
  };

  const rabbitBars = {
    hungerBar: rabbitSection.querySelector("#hungerBar"),
    thirstBar: rabbitSection.querySelector("#thirstBar"),
    healthBar: rabbitSection.querySelector("#healthBar"),
    happyBar: rabbitSection.querySelector("#happyBar"),
  };

  // Variable to store the selected pet instance
  let pet = null;

  // Add event listener to transition from welcome to pet selection when enter is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      welcomePage.style.display = "none"; // Hide welcome page
      petSelectionPage.style.display = "block"; // Display pet selection page
    }
  });

  // Function for the pet selection process
  function selectPet(petType) {
    const petName = petNameInput.value;
    if (!petName) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a name.";
      return;
    }

    if (petType === "snake") {
      pet = new Snake(
        petName,
        snakeBars.hungerBar,
        snakeBars.thirstBar,
        snakeBars.healthBar,
        snakeBars.happyBar
      );
      snakeSection.style.display = "block";
      fishSection.style.display = "none";
      rabbitSection.style.display = "none";
    } else if (petType === "fish") {
      pet = new Fish(
        petName,
        fishBars.hungerBar,
        fishBars.thirstBar,
        fishBars.healthBar,
        fishBars.happyBar
      );
      snakeSection.style.display = "none";
      fishSection.style.display = "block";
      rabbitSection.style.display = "none";
    } else if (petType === "rabbit") {
      pet = new Rabbit(
        petName,
        rabbitBars.hungerBar,
        rabbitBars.thirstBar,
        rabbitBars.healthBar,
        rabbitBars.happyBar
      );
      snakeSection.style.display = "none";
      fishSection.style.display = "none";
      rabbitSection.style.display = "block";
    }

    // Display pet name in the respective section
    document.getElementById(`${petType}NameDisplay`).textContent = petName;

    // Start decreasing stats for the selected pet
    decreaseStats();
  }

  // Event listeners for pet images
  snakeSelect.addEventListener("click", () => selectPet("snake"));
  fishSelect.addEventListener("click", () => selectPet("fish"));
  rabbitSelect.addEventListener("click", () => selectPet("rabbit"));

  // Event listener for the play button and name input field
  playBtn.addEventListener("click", () => {
    if (pet) {
      errorMessage.style.display = "none";
      petSelectionPage.style.display = "none";
      gamePage.style.display = "block";
    } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please select a pet.";
    }
  });

  // Recursive function to decrease stats over time
  function decreaseStats() {
    setTimeout(() => {
      if (pet) {
        pet.hungerBar.value = Math.max(pet.hungerBar.value - 1, 0);
        pet.thirstBar.value = Math.max(pet.thirstBar.value - 1, 0);
        pet.healthBar.value = Math.max(pet.healthBar.value - 1, 0);
        pet.happyBar.value = Math.max(pet.happyBar.value - 1, 0);
        decreaseStats();
      }
    }, pet.decreaseRate);
  }

  // Event listeners for action buttons
  document.querySelectorAll(".eatButton").forEach((button) => {
    button.addEventListener("click", () => {
      if (pet) pet.eat();
    });
  });

  document.querySelectorAll(".drinkButton").forEach((button) => {
    button.addEventListener("click", () => {
      if (pet instanceof Fish) return;
      if (pet) pet.drink();
    });
  });

  document.querySelectorAll(".sleepButton").forEach((button) => {
    button.addEventListener("click", () => {
      if (pet) pet.sleep();
    });
  });

  document.querySelectorAll(".playButton").forEach((button) => {
    button.addEventListener("click", () => {
      if (pet instanceof Snake) pet.slither();
      else if (pet instanceof Fish) pet.swim();
      else if (pet instanceof Rabbit) pet.hop();
    });
  });
});
