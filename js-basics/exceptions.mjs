// Exceptions in ECMAScript

// To throw an exception, use the 'throw' statement
// throw a value of type Error or any other type
// name and message are optional properties of Error objects

// Catch exceptions using try...catch
// when executing a code block that may throw an exception we use try...catch to handle it

try {
  // Code that may throw an exception
  throw new Error("Something went wrong!");
} catch (error) {
  // Handle the exception
  console.log("Caught an exception: " + error.message);
} finally {
  // Code that will always execute
  console.log("Execution completed.");
}
