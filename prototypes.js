class Vehicle {
  constructor(speed) {
    this.speed = speed;
    this.moveForward = function () {
      return `Moving forward at ${this.speed}`;
    };
  }
}

function makeUnorderedList(array = []) {
  let listItems = array.map((element) => `<li>${element}</li>`);
  return `<ul>${listItems.join("")}</ul>`;
}

// functions arguments [you can consider them smt like arrays but can only use .length]
function makeNumberedList() {
  let numberedList = "<ol>";
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += "</ol>";
  return numberedList;
}

console.log(makeNumberedList("Konstantinos", "Elissabet", "Spiros", "Georgia"));
