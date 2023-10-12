/*
02) charCount function
Implement a charCount function.

✔ The function has a first parameter for a word which is a string.
✔ The function has a second parameter which contains the character to search for which is a string.
✔ Check if the second parameter consists of only one character, if not, quit the function.
✔ The function returns the number of times the character from the second parameter is present in the word.
✔ The function should be case insensitive.
 */

// TODO: Implement the charCount function

function charCount(string, seekChar) {
  // check if variable max. 1 character

  if (seekChar.length === 1) {
    // initalize the variable
    let counter = 0;
    // iterate each string character
    for (let i = 0; i < string.length; i++) {
      // use the method split, seek for the length of "seekChar" and subtract 1, because there is an additional Array element
      //times = string.split(seekChar).length - 1;

      // use the comparison operator, if the same as the seekChar, count up
      if (string[i] === seekChar) {
        counter++;
        //      count = string[i] + ", ";
      }
    }
    return counter;
  } else {
    return "Please use only one character";
  }
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
