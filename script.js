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
