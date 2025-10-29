// Functions with MjS

// Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
greet(undefined); // Hello, Guest!
greet(null); // Hello, null!

// spread syntax in function calls

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// we can call a fn on an object where it does not belong using call or apply
const person = {
  firstName: "John",
};
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.firstName}${punctuation}`);
}

introduce.call(person, "Hello", "!"); // Hello, I'm John!
introduce.apply(person, ["Hi", "."]); // Hi, I'm John.
// introduce(person, "Hey", "?"); //! TypeError: Cannot read properties of undefined (reading 'firstName')
//? this design makes it possible to use methods of one object on another object

let obj = {
  f: function () {
    console.log(this);
  },
};
obj.f(); // this refers to obj

// Arrow Functions
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5

const square = (x) => {
  return x * x;
};
console.log(square(4)); // 16

//? Restrictions of Arrow Functions
// 1. No own 'this' binding
// 2. No 'arguments' object
// 3. Cannot be used as constructors with 'new' or 'super'
// 4. This value cannot be changed with call, apply, or bind

//? Arrow functions are best suited for non-method functions and callbacks
//? 1. Working with short functions
//? 2. Functional programming (map, filter, reduce)
//? 3. Preserving 'this' context in nested functions

//* Function got access to all variables in the scope where it was defined (lexical scoping)
//* even if they are out of scope when the function is called
