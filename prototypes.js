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

const myTruck = {
  speed: 0,
};

const myCar = {
  speed: 0,
};

function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}

// functions arguments
function makeNumberedList() {
  let numberedList = "<ol>";
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += "</ol>";
  return numberedList;
}

console.log(makeNumberedList("Konstantinos", "Elissabet", "Spiros", "Georgia"));
