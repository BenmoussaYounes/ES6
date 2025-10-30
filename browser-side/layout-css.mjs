//* Layout: CSS style sheets
//* Style Sheets

// HTML describe the semantic content of a web page, while CSS (Cascading Style Sheets) define the visual presentation and layout of that content. 
// CSS allows developers to control the appearance of multiple web pages by linking them to a single style sheet, promoting consistency and easier maintenance.

// General Syntax 
/*
selector {
    property: value;
}
*/
//  Adding style to a web page can be done in three ways:
// 1. Inline CSS 2. Internal CSS 3. External CSS

// 1. External CSS
// Style written in an external file with a .css extension 
// and linked to HTML documents using the <link> tag within the <head> section.

// Loading the external CSS file on the head of the HTML document
/*
<head>
    <link rel="stylesheet" href="styles.css">
</head>
*/

// 2. Internal CSS
// Style written within a <style> tag inside the <head> section of an HTML document.
/*
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: white;
            text-align: center;
        }
    </style>
</head>
*/

// 3. Inline CSS
// Style written directly within an HTML element using the style attribute.
/*
<h1 style="color:blue; text-align:center;">This is a heading</h1>
<p style="font-size:20px;">This is a paragraph.</p>
*/  

//* CSS Selectors
// CSS selectors allow to select HTML elements
// Simple selectors include:
// elem : of type <elem>
// .class : of class "class"
// * : all elements
// elem.class : of type <elem> and class "class"

// Elements with an attribute
// [attribute] : elements with the specified attribute
// [attribute="value"] : elements with the specified attribute and value
// [attribute~="value"] : elements with the specified attribute containing the specified word in a space-separated list
// [attribute|="value"] : elements with the specified attribute starting with the specified value followed by a hyphen
// [attribute^="value"] : elements with the specified attribute starting with the specified value
// [attribute$="value"] : elements with the specified attribute ending with the specified value
// [attribute*="value"] : elements with the specified attribute containing the specified value

// Selecting Elements based on there position in the document tree <element>
// ancetre element : descendant of <ancetre>
// parent > element : direct child of <parent>
// elem1 + elem2 : <elem2> immediately preceded by <elem1>
// elem1 ~ elem2 : <elem2> preceded by <elem1>
// group of selectors : selector1, selector2, ...

//* CSS Properties
// CSS got a wide range of properties to control the layout and appearance of HTML elements. 
// Some common CSS properties include:
// 1. color: Sets the text color of an element.
// 2. background-color: Sets the background color of an element.
// 3. font-size: Sets the font size of text.
// 4. margin: Sets the space outside an element.
// 5. padding: Sets the space inside an element.
// 6. border: Sets the border around an element.
// 7. display: Specifies the display behavior of an element (e.g., block, inline, flex).
// 8. position: Specifies the positioning method of an element (e.g., static, relative, absolute).
// 9. width: Sets the width of an element.
// 10. height: Sets the height of an element.

//* Display, Positioning, and Box Model
// The content of elements are placed in boxes that are laided out and positioned according to the CSS box model and various display and positioning properties.

//* Display types of boxes
// Displaying an element 
// inline : the element is displayed inline with surrounding content
// block : the element is displayed as a block, taking up the full width available
// inline-block : the element is displayed inline but behaves like a block element
// none : the element is not displayed  
// flex : the element is displayed as a flexible container
// grid : the element is displayed as a grid container
// inline-grid : the element is displayed as an inline grid container
// list-item : the element is displayed as a list item

// Visibility of an element
// visible : the element is visible
// hidden : the element is hidden but still takes up space
// collapse : for table rows and columns, the element is hidden and does not take up space

//* Positioning
// Positioning an element
// Position indicates how an element is positioned in the document
// top, right, bottom, left : specify the offset of the element from its normal position or containing element

// Position in normal flow
// static : the default position, elements are positioned according to the normal flow of the document
// relative : the element is positioned relative to its normal position
// Position out of normal flow
// Position out of normal flow displays the element according to normal flow and add additional positioning according to the specified offsets
// absolute : the element is positioned relative to its nearest positioned ancestor (not static)
// fixed : the element is positioned relative to the viewport, and remains in the same position even when the page is scrolled
// sticky : the element is positioned based on the user's scroll position

// Elements are displayed each one on the other according to their order in the document flow
// Changing the stacking order of elements is possible using the z-index property
// z-index : specifies the stack order of an element (higher values are displayed in front of lower values)

//* Dimensioning

// Dimensioning is possible using the width and height properties
// width : sets the width of an element (can be specified in px, %, em, rem, vw, vh, etc.)
// height : sets the height of an element (can be specified in px, %, em, rem, vw, vh, etc.)

// Filling, Margin and Padding 
//padding, border, margin

//* Pseudo-classes

// Pseudo-classes allow to define a special state of an element
// selecteur:pseudo-classe { property: value; }
// Examples of pseudo-classes
// :hover : when the user hovers over an element
// :focus : when an element has focus

//State of form controls
// :checked : when a checkbox or radio button is checked
// :disabled : when a form control is disabled
// :enabled : when a form control is enabled
// :valid : when a form control has valid input
// :invalid : when a form control has invalid input
// :read-only : when a form control is read-only

//* Navigation 
// CSS can be used to style navigation elements such as menus, links, and buttons

// state of link of an anchor element <a>
// a:link, a:visited, a:active,  link non visited, link visited, link active
// :hover: element when the user hovers over it
// :target: element that is the target of the URL fragment identifier by clicking on an anchor link <a href="#id">

//* Positiong with in the DOM
// :first-child :nth-child(n) :last-child :first-of-type :nth-of-type(n) :last-of-type :only-child :only-of-type
// first child element, nth child element, last child element, first element of its type, nth element of its type, last element of its type, only child element, only element of its type

//* Style Manipulation using JavaScript
// In line style of a document
// style proprety got css propreties 
// font-size -> fontSize
// e.style.fontSiwer = "24pt";
// cssText all propreties
// getPropertyValue("nom CSS") value proprety
// setProperty("nom CSS", "valeur CSS", "") // changing css proprety
// removeProperty("nom CSS")

//* Style Class
// Instead of chaning inline style of element we can change CSS classes
// proprety className
// proprety classList allow to edit name of class thanks to its methods add(name), remove(name), toggle(nom), contains(name)

//* Progressive Improvements
// A web page must be able to keep adapting and working correctly on most cases
// Put in work progressive improvements conssite of 
// 1. having an HTML document finished with good structure 
// 2. add of layout with css 
// 3. if js is availble the add of js improvements 