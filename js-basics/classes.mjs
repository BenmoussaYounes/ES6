// Defining a class
class Person {
  #name;
  #age;
  address; // public field
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    this.address = "";
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.#name} and I am ${this.#age} years old.`
    );
  }
}

// Creating an instance
let alice = new Person("Alice", 30);
alice.address = "123 Main St";
alice.greet(); // Hello, my name is Alice and I am 30 years old.

class Counter {
  #count;
  static #incrementBy = 1; // private static field

  constructor(initialCount = 0) {
    this.#count = initialCount;
  }
  increment() {
    this.#count += Counter.#incrementBy;
  }
  getCount() {
    return this.#count;
  }
}

let counter = new Counter(5);
counter.increment();
console.log(counter.getCount()); // 6
