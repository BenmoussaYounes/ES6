// JSON (JavaScript Object Notation)
// JSON is a lightweight data-interchange format.

// Serializing an object to JSON

let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};

let jsonString = JSON.stringify(person);
// Serialize value returned from toJSON method if exists
console.log(jsonString); // '{"name":"Alice","age":30,"isEmployed":true}'
// Note: Functions and undefined values are not included in JSON

// Deserializing JSON to an object
let jsonString2 = '{"name":"Bob","age":25,"isEmployed":false}';
let person2 = JSON.parse(jsonString2);
console.log(person2.name);

// Adding a toJSON method to an object
let user = {
  username: "charlie",
  password: "secret",
  toJSON: function () {
    return { username: this.username }; // Exclude password from JSON
  },
};
let userJson = JSON.stringify(user);
console.log(userJson); // '{"username":"charlie"}
