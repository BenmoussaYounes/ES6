//* Browser DOM

//* Node properties
//? parentNode: Node | null
//? hasChildNodes(): boolean
//? childNodes: NodeListOf<Node>
//? firstChild: Node | null
//? lastChild: Node | null refere to the first and last child nodes
//? previousSibling: Node | null refere to the adjacent nodes
//? nextSibling: Node | null refere to the adjacent nodes

//* Element properties
//? children: HTMLCollection
//? firstElementChild: Element | null
//? lastElementChild: Element | null
//? previousElementSibling: Element | null
//? nextElementSibling: Element | null
//* Element methods
//? matches(css) : boolean
//? closest(css): Element | null
//? contains(node): boolean

// Example usage:
const parent = document.getElementById("parent");
if (parent) {
  console.log("Has child nodes:", parent.hasChildNodes());
  console.log("First child node:", parent.firstChild);
  console.log("Last child node:", parent.lastChild);
  console.log("Children elements:", parent.children);
  console.log("First element child:", parent.firstElementChild);
  console.log("Last element child:", parent.lastElementChild);
  console.log("Matches .active:", parent.matches(".active"));
  console.log("Closest .container:", parent.closest(".container"));
}

//* DOM Edit 
//? appendChild(node): Node
//? insertBefore(newNode, referenceNode): Node
//? removeChild(node): Node
//? replaceChild(newNode, oldNode): Node
//? cloneNode(deep?: boolean): Node

// Those methods return the node that was added/removed/replaced/cloned

// Example usage:
const newElement = document.createElement("div");
newElement.textContent = "New Element";
if (parent) {
  parent.appendChild(newElement);
  console.log("Appended new element:", newElement);
}

// Edit DOM with multiple elements / insert a fragment 
//? append(...nodesOrStrings): void
//? prepend(...nodesOrStrings): void
//? before(...nodesOrStrings): void
//? after(...nodesOrStrings): void
//? replaceWith(...nodesOrStrings): void

// Inserted nodes are removed from their previous position in the DOM
// To insert a copy of a node, use cloneNode()

// Example usage:
if (parent) {
  const clonedElement = newElement.cloneNode(true);
  parent.appendChild(clonedElement);
  console.log("Appended cloned element:", clonedElement);
}

//? Custom Data Attributes
// In Addition to standard attributes, HTML elements can have custom data attributes.
// The name of a custom data attribute starts with "data-".
// Cutom Attributes can be accessed via the dataset property of an element.
// Attribut data-nom-attribut is accessible as element.dataset.nomAttribut

// Example usage:
const elementWithCustomData = document.getElementById("custom-data-element");
if (elementWithCustomData) {
  // Set custom data attribute
    elementWithCustomData.dataset.example = "Hello, World!";
    // Get custom data attribute
    console.log("Custom data attribute 'example':", elementWithCustomData.dataset.example);
}

//? Controls for Forms and Inputs
// disabled: boolean true if the element is disabled
// readOnly: boolean true if the element is read-only
// required: boolean true if the element is required
// value: string gets or sets the current value of the element
// name: string gets or sets the name of the element
// checked: boolean true if the checkbox or radio button is checked
// type: string gets the type of the input element (e.g., "text", "checkbox", "radio", etc.)

// Example usage:
const inputElement = document.getElementById("myInput");

if (inputElement) {
    inputElement.value = "New Value";
    inputElement.disabled = false;
    console.log("Input value:", inputElement.value);
    console.log("Input disabled:", inputElement.disabled);
}

//? DOM Events
// Events about the page content are emitted and listened to by various DOM elements.
// Event about the window itself are emitted and listened to by the window object or document object.
// To add an event listener to an element, use the addEventListener method.
// element.addEventListener(event, handler)
// Do not forget to remove event listeners when they are no longer needed to avoid memory leaks.
// and when the element is removed from the DOM or replaced.
// element.removeEventListener(event, handler)

// Example usage:
const button = document.getElementById("myButton");
if (button) {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  button.addEventListener("click", handleClick);
    // To remove the event listener later
    // button.removeEventListener("click", handleClick);
}