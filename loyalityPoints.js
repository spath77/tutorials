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

if (city === "") {
  alert("City is a required field.");
}
if (!city) {
  alert("City is a required field.");
}

/*
 JavaScript All-in-One For Dummies John Wiley & Sons, Inc. 2023
In practice, for loops are unpopular with experienced JavaScript developers. Like
using the var keyword, for loops are an old way to do things that shouldn't be
used. There's usually a more modern and simpler syntax for doing the same thing
that for loops do. You can learn about some of these in this chapter, and learn
about other methods that are better for looping through arrays in Chapter 6.
*/
