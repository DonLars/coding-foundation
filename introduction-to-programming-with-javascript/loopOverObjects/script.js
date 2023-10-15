/*    Objects
========================================================================== */

const animals = {
  name: "Eli",
  type: "Elefant",
  age: 7,
  size: 200,
};

/* Access */

console.log(animals); //complete objekt
console.log(animals.age); // dot notation

/* Add */

animals.color = "blue"; // dot notation
animals["color"] = "pink"; // bracket notation

/* Update */

animals.age = 6; // dot notation
animals["age"] = 5; // bracket notation

/* Delete */

delete animals.size;

/* For in loop */

for (const property in animals) {
  console.log(property, animals[property]);
}
