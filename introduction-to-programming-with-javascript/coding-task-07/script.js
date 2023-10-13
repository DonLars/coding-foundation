"use strict";
/*
01) removeItem function
Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.
*/

const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

console.log("original: " + animals);
console.log("original: " + fruits);

function removeItem(arr, num) {
  if (num > 0) {
    const arrCopy = structuredClone(arr);
    arrCopy.shift(num);
  } else {
    console.log("Please use with a positive number");
  }
}

// TODO: Implement the removeItem function

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

//console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

/********
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

****** */

/*
/*    Start array exercises
========================================================================== 

const colors = ["blue", "red", "orange", "green"];
const numbers = ["one", "two", "three", "four"];

colors.push("purple", "black"); // added at end
colors.unshift("white", "lime"); // added at begin

colors.pop(); // remove last element
colors.shift(); // remove first element

numbers.splice(1, 1); // first remove from index, second how much elements
colors.splice(1, 1, "dodgerblue", "hotpink"); // remove first entry from index add two another

console.log(numbers);

for (let i = 0; i < colors.length; i++) {
  console.log(i + ": " + colors[i]);
}

for (let colorEntry of colors) {
  console.log("for of loop: " + colorEntry);
}

const reducedLightColors = colors.slice(1, 3); // shallow copy
console.log(reducedLightColors);
console.log(colors);

*/
