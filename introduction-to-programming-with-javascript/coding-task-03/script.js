function sameCase(a, b) {
  // If both characters are the same case, return 1
  if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  ) {
    return 1;

    // if both characters are letters, but not the same case, return 0
  } else if (
    (a === a.toLowerCase() && b === b.toUpperCase()) ||
    (a === a.toUpperCase() && b === b.toLowerCase())
  ) {
    return 0;

    // if either of the characters is not a letter, return -1
  } else if (
    (a === a.toLowerCase() && a !== a.toUpperCase()) ||
    (a === a.toLowerCase() && a !== a.toUpperCase())
  ) {
    return -1;
  }
}

//* sdfsdf  */

function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}
