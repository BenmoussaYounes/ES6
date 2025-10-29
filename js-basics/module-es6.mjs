// Creation Module ES6
//? All modules in ES6 are executed in strict mode by default.
//? To be able to use modules from other files, we need to export them first.

// Exporting a variable
export const pi = 3.14159;
// Exporting a function
export function square(x) {
  return x * x;
}

export { pi as PI_CONSTANT }; // Exporting with an alias

//? Default Export, a module can have one default export
//? And its not recommended to use default exports as it can lead to confusion
export default function cube(x) {
  return x * x * x;
}
export { pi as default }; // export as default 

// Usage of exported members would be done in another file using import statement

// Example of importing the above module in another file
//? import { pi, square, PI_CONSTANT } from './module-es6.mjs';
//? This would allow us to use pi, square, and PI_CONSTANT in that file.

// To import multiple members from a module
//? import * as math from './module-es6.mjs';

//? importing default export
//? import cube from './module-es6.mjs';

//* Module code is executed only once, even if imported multiple times in different files.
//* only when the module is imported for the first time, its code is executed. Subsequent imports use the cached version.

//? Modules in browsers
//? In browsers, we can use the <script> tag with type="module" to include ES6 modules.
//? <script type="module" src="path/to/module-es6.mjs"></script>

// <script type="module" src="path/to/module-es6.mjs"></script> 

// If module is inernal to html file
// <script type="module">
//   import { pi, square } from './module-es6.mjs';
//   console.log("Value of pi:", pi);
//   console.log("Square of 4:", square(4));
// </script>

//! If we using the modules in Node.js, 
//! we need to ensure that the file has a .mjs extension or set "type": "module" in package.json to enable ES6 module support.
//! Node.js uses CommonJS modules by default, so using ES6 modules requires this configuration.