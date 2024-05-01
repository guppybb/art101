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

function sortUserName(gabby){
    var userName = window.prompt ("Hi, please tell me your name so I can fix it.");
    console.log("userName =", userName);

    var nameArray = userName.split('');
    console.log("nameArray", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameSorted =", nameSorted);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted
}