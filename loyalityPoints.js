const user1 = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
}; // old user

const user2 = {
  name: "John Smith",
  email: "john.smith@example.com",
  loyaltyPoints: 0,
}; // new user

function displayLoyaltyPoints(user) {
  if (user.loyaltyPoints) {
    console.log(`User has ${user.loyaltyPoints} loyalty points`);
  } else {
    console.log("Field 'loyaltyPoints' not defined for user.");
  }
}

displayLoyaltyPoints(user1);
displayLoyaltyPoints(user2);
let city = "";

if (city === "" || !city) {
  alert("City is a required field.");
}

/*
JavaScript All-in-One For Dummies John Wiley & Sons, Inc. 2023
LISTING 1-3: A JavaScript file
LISTING 1-4: The HTML document for the game
*/
