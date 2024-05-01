// index.js - Lab 6: Obejcts and Arrays
// Author: Gabriela Botto
// Date: 28 April 2024

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
var myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "Silver",
  age: function() {
    return 2024 - this.year;
  }
}
myMainRide.age()
7

myTransport = ["Toyota Corolla", "bike", "bus", "rides from friends"];

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
