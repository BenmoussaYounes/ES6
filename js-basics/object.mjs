// Object literal
// objects are collections of key-value pairs.

let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
  "name with spaces": "Alice Smith",
};

// value can be a function (method)
let p2 = {
  fn: function () {
    console.log("Hello from method!");
  },
};

// Accessing properties
console.log(person.name); // Dot notation
console.log(person["age"]);

// Accessing null possible property
console.log(person?.middleName); // undefined
console.log(person?.address?.city); // undefined

// Updating properties
person.age = 31;
person["isEmployed"] = false;
// ! If the property does not exist, it will be created

// Syntax shortcuts
let x = 10;
let y = 20;
let point = { x, y }; // same as { x: x, y: y }

// Destructuring objects
let { name, age } = person; // equal to let name = person.name; let age = person.age;
console.log(name, age);
// if variables exist already
let person2 = { name2: "Bob", age2: 25 };
let name2, age2;
({ name2, age2 } = person2);
