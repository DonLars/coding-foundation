// TODO: Implement the oddNumbers function

/*
 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check.
*/

function oddNumbers(num1, num2) {
  // Check if both numbers are positive
  if (num1 < 0 || num2 < 0) {
    return "Both numbers must be positive!";
  }

  let oddNumbersString = "";

  // Iterate over all numbers between num1 and num2
  for (let i = num1; i <= num2; i++) {
    // Check if the current number is odd
    if (i % 2 !== 0) {
      if (oddNumbersString !== "") {
        oddNumbersString += ",";
      }
      oddNumbersString += i;
    }
  }

  return oddNumbersString;
}

console.log(oddNumbers(0, 26));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
