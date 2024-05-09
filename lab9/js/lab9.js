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

/* 
  lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

  Requirements: jQuery must be loaded for this script to work

  Author: Gabriela Botto
  Date: 9 May 2024
*/

// add button to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to each button
$("button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

$("button-problems").click(function(){
  $("#problems").toggleClass("special");
});

$("button-results").click(function(){
  $("#results").toggleClass("special");
});