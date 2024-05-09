// index.js - Lab 8
// Author: Gabriela Botto
// Date: 6 May 2024

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

const newArray = [4, 17, 22, 783, 85];

function calculateX(x) {
  return x + 12;
}

console.log("My Array: " + newArray);
console.log("Result: " + calculateX(newArray[4]));
console.log("Result: " + calculateX(newArray[2]));

let result = newArray.map(calculateX);
console.log("Calculate array values: " + result);

result = newArray.map(function(x) {
  return x - 12;
})

console.log("New array values: " + result);

let mapResult = "Your map results here: " + result;
$("#output").html(mapResult);
