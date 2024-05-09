// index.js - Lab 7: Functions
// Author: Gabriela Botto
// Date: 30 April 2024

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

function stringSort() {
  const userName = window.prompt("What's your name?");
  console.log("User Input: " + userName);

  const array = userName.split('');
  console.log("New Array: " + array);

  const sortArray = array.sort();
  console.log("Sorted Array: " + sortArray);

  const newName = sortArray.join('');
  console.log("New Name: " + newName);

  return newName;

}

// output
const sortedName = stringSort();
document.writeln("Here's your new name " + sortedName + ".</br>");

