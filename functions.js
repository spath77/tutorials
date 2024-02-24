//----------------- Understanding Context and this----------------------------
const myTruck = {
  speed: 0,
};

const myCar = {
  speed: 0,
};

// Passing an object to a function
function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}

///Setting the context of a function

// Using call()
drive.call(myCar, 65);
/*
  The call() method of function objects takes an object as its first parameter.
  When call() is called on a function, that function runs in the context of the
  object passed to call(). After the first parameter, call() accepts any number of
  additional arguments.*/

// Using apply()
drive.apply(myTruck, 86);
/*
  The apply() method works the same as call() but takes an array as its second
  parameter, which will be passed to the function that apply() is applied to.*/

// Using bind()
const driveMyCarOnTheFreeway = drive.bind(myCar, 65);
/*With that done, you can now call the new function and drive on the freeway anytime
  you like:*/
driveMyCarOnTheFreeway();

/*
  The bind() method works the same as call(), with a context object as the first
  parameter followed by any number of individual arguments. However, rather
  than return the result of calling the function, bind() returns a new function. You
  can assign this new function to a variable to create a new callable function that
  includes its context and data.*/

//-------------------------------------------------------------------------

const myVan = {
  speed: 0,
  operate(speed, callback) {
    callback(speed);
    console.log(`my Van is operating at ${this.speed} km/h.`);
  },
};

function use(speed) {
  this.speed = speed;
  console.log(`drive the vehicle at ${this.speed} km/h.`);
}

myVan.operate(55, use);
