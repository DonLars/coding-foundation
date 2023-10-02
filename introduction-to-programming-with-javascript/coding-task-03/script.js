/*    Function 01
========================================================================== */

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

console.log(welcomeMsg("Lars"));
// Welcome Lars!

/*    Function 02
========================================================================== */

function calcGrossPrice(netPrice, taxRate) {
  //return netPrice * (taxRate + 1); // round error?
  return netPrice + netPrice * taxRate;
}

// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

/*    Function 03
========================================================================== */

function addPositive(a, b) {
  //return a * -1 + b * -1;
  return Math.abs(a + b);
}

// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
