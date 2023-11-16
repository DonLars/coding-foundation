"use strict";

/*
01) removeItem function
Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.
*/

function removeItem(arr, index) {
  if (index > 0 && index <= arr.length) {
    // Use structuredClone for a deep copy
    const arrDeepCopy = structuredClone(arr);

    // index - 1, because we want a non-zero-based index
    arrDeepCopy.splice(index - 1, 1);
    return arrDeepCopy;
  } else {
    console.log("Please use a positive number");
  }
}

// TODO: Implement the removeItem function

const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/*
03) sumOfCharacters function
Implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.

// TODO: Implement the sumOfCharacters function
*/

/* Try with for of loop /////////////////

function sumOfCharacters(arr) {
  console.log("Vor der Schleife: " + arr);
  let count = 0;
  for (let sumEntry of arr) {
    console.log("In 1. Schleife: " + sumEntry);

    for (let charEntry of sumEntry) {
      //console.log(harEntry"In 2. Schleife: " + charEntry + " | Count: " + count);
      count++;
    }
  }
   return count;
}
*/
function sumOfCharacters(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //console.log("In 1. Schleife: " + arr[i]);

    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i] === "string") {
        count++;
        //console.log("In 2. Schleife: " + arr[i][j] + " | Count: " + count);
      }
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

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
