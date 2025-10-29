// Creating a table
// for - of loop and ... operator work with tables

// create a table
const table = [1, 2, 3, 4, 5];
console.log("Table:", table);
// Using Array methods
Array.of(6, 7, 8); // creates a new array from arguments
Array.from("hello"); // creates a new array from an iterable
Array.from({ length: 3 }, (_, i) => i + 1); // [1, 2, 3]
// Accessing elements
console.log("First element:", table[0]);
console.log("Last element:", table[table.length - 1]);

// Destructuring tables
let [first, second, ...c] = table;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", c);

let [a, , b] = table; // skip second element
let [, , , , last] = table; // get last element
[, , a, b] = table; // reassign a and b

// ... operator (spread syntax)
let newTable = [...table, 6, 7, 8];
console.log("New Table:", newTable); // [1, 2, 3, 4, 5, 6, 7, 8]

// for - of loop
for (let value of table) {
  console.log("Value:", value);
}
