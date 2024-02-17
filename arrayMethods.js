const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };
let houseDetails = "<h3>Information about this house</h3>";

// for ... in method on object {}
// the ${houseDetails
for (let prop in house) {
  houseDetails = `${houseDetails} ${prop}:${house[prop]}</br>`;
  document.getElementById("root").innerHTML = houseDetails;
}

const previousOWners = ["Konstantinos", "Elissabet"];
let items = "<h3>Information about another house</h3>";
let myItems = "<h3>Information about house owners</h3>";

// for .. in method on array will return the index of the the items found
for (let item in previousOWners) {
  items = `${items} ${item}</br>`;
  document.getElementById("details").innerHTML = items;
}

// for ... of method on array will return the items (names) found
for (let item of previousOWners) {
  myItems = `${myItems} ${item}</br>`;
  document.getElementById("Mydetails").innerHTML = `${myItems}`;
}
/*for(let i=1; i <= 100; i++) {
    console.log(i);
    }
    */
/* JavaScript All-in-One For Dummies John Wiley & Sons, Inc. 2023 */
