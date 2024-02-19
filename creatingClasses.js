class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const ourPet = new Pet("Mokka", "Poodle");

console.log(ourPet);
console.log(
  `Our pets name is %c${ourPet.name}%c and she is a %c ${ourPet.type}.`,
  `color:brown;`,
  `color:black;`,
  `color:pink;`
);
