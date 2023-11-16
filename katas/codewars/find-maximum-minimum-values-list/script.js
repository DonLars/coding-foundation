"use strict";

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., 
    depending on the language ) that receive a list of integers as input, and return
     the largest and lowest number in that list, respectively.

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

*/

const list = [-52, 56, 30, 29, -54, 0, -110];
/*Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
Test.assertEquals(max([5]), 5);*/

function (list) {
  if (list.length === 0) {
    console.log("Your array ist empty.");
  } else {
    let minNum = list[0];

    for (let i = 0; i < list.length; i++) {
      if (list[i] < minNum) {
        minNum = list[i];
      }
    }
    console.log("Die kleinste Zahl ist:", minNum);
  }
};
