// TODO: Implement the oddNumbers function

function oddNumbers(a, b) {
  if (a < 0 || b < 0) {
    return 0;
  }
  let num = [];
  for (let i = a; a <= b; a++) {
    num.push(a);
  }
  let result = num.filter((n) => n % 2 !== 0);
  return result.join();
}
console.log(oddNumbers(10, 33));

// Implement a charCount function.

function charCount(word, char) {
  if (char.length !== 1) {
    return "Bitte nur ein Zeichen eingeben!";
  }

  return word.split("").reduce((count, currentChar) => {
    return currentChar === char ? count + 1 : count;
  }, 0);

  /*
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
  */
}

console.log(charCount("Resümee", "e"));
