//* Validation

//* Regular Expressions (RegEx) 
// Regular Expressions are patterns used to match character combinations in strings.
// Those patterns are then used to :
// 1. verify if a string adheres to a specific format.
// 2. search a string for specific patterns.
// 3. replace parts of a string based on a pattern.

//* Pattern Syntax
// 1. Literal Characters: Match exact characters (e.g., /abc/ matches "abc").
// 2. \0 - Null character (\u0000)
// 3. \t - Tab character (\u0009)
// 4. \n - Newline character (\u000A)
// 5. \r - Carriage return character (\u000D)
// 6. \v - Vertical tab character (\u000B)
// 7. \f - Form feed character (\u000C)
// 8. \xNN - Character specified by the two hexadecimal digits NN
// 9. \uXXXX - Unicode character specified by the four hexadecimal digits XXXX
// 10. \cx - Control character (e.g., \cA matches Ctrl+A)

// Meta-characters  ^ $ \ . * + ? ( ) [ ] { } |
// must be escaped with a backslash (\) to match them literally.

//* Character Classes
// Character classes match any one of a set of characters.
// 1. . - Any character except newline
// 2. [...] - Any one character from the set   / d-f : interval from d to f
// 3. [^...] - Any one character not in the set
// 4. \d - Any digit (equivalent to [0-9])
// 5. \D - Any non-digit (equivalent to [^0-9])
// 6. \w - Any word character (alphanumeric + underscore) (equivalent to [A-Za-z0-9_])
// 7. \W - Any non-word character (equivalent to [^A-Za-z0-9_])
// 8. \s - Any whitespace character (spaces, tabs, line breaks)
// 9. \S - Any non-whitespace character (equivalent to [^ \t\n\r\f\v])
// 10. \b - Word boundary
// 11. [\b] - Backspace character

//* Repetition Quantifiers
// 1. * - 0 or more times
// 2. + - 1 or more times
// 3. ? - 0 or 1 time
// 4. {n} - Exactly n times
// 5. {n,} - At least n times
// 6. {n,m} - Between n and m times

//* Grouping 
// 1. (?:expr) - Non-capturing group
// 2. (expr) - Capturing group  can be used with 
// \n where n is the group number to refer back to the matched group.
// $s where s is the group number in replacement strings.

//* Alternation (Alternative)  
// 1. expr1|expr2 - Matches either expr1 or expr2

//* Position Anchors
// 1. ^ - Start of string
// 2. $ - End of string
// 3. \b - Word boundary
// 4. \B - Non-word boundary
// 5. x(?=y) - x followed by y (positive lookahead)
// 6. x(?!y) - x not followed by y (negative lookahead)

//* Type RegEx

// Regular experssion are represented by the RegExp type in JavaScript.
// literal expression /pattern/modifiers
// pattern : syntax of the searched pattern
// modifiers : optional flags to modify the search behavior
// g - global search
// i - case-insensitive search
// m - multi-line search
// u - unicode search

// new RegExp(pattern, modifiers)
// pattern : syntax of the searched pattern
// modifiers : optional flags to modify the search behavior
// a RexExp object
// source : the text of the pattern
// global, ignoreCase, multiline : boolean properties indicating the presence of respective flags
// lastIndex : index at which to start the next match (used with global or sticky searches)
// regexpr.test(s) : tests if string s matches the pattern, returns true or false
// regexpr.test(s) : executes the search on string s, returns an array of matched results or null
// regexpr.exec(s) : executes the search on string s, returns an array of matched results or null

//* String Methods with RegEx Support
// 1. str.match(regexpr) : returns an array of matches or null
// 2. str.search(regexpr) : returns the index of the first match or -1
// 3. str.split(regexpr) : splits the string into an array using the pattern as a delimiter
// 4. str.replace(regexpr, replacement) : replaces matches with replacement string or function
// replacement can use $n to refer to capturing groups
// $s where s is the group number in replacement strings.
// $$ to refere to $ itself

//* Examples
// Validate Email
export function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Validate Phone Number (US format)
export function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phonePattern.test(phoneNumber);
}

// Validate URL
export function validateURL(url) {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/;
    return urlPattern.test(url);
}

//* Form Validation Example
// Form validation consists of checking wether the user input meets certain criteria before processing it.
// this validation can be done on client side (browser) or server side.
// Client side  on : - HTML5 Validation (very performant but not customizable) / - JavaScript Validation (customizable but less performant)
// Server side : can be done also even if a client side validation is in place to ensure data integrity and security.

//* HTML5 Validation
// HTML5 provides built-in form validation features using attributes like required, pattern, min, max, etc.
// we can use a specific input type to enforce validation rules with the type attribute (e.g., type="email", type="url", type="number").
// express validation constraints directly in the HTML markup using the <input> element attributes.
// pattern : specifies a regular expression that the input's value must match to be considered valid.
// required : indicates that the input field must be filled out before submitting the form.
// min, max : specify the minimum and maximum values for numeric inputs.
// minlength, maxlength : specify the minimum and maximum length of text inputs.
// step : specifies the legal number intervals for numeric inputs.
// minlength and maxlength : specify the minimum and maximum length of text inputs.
// Visually indicate the validation status using CSS pseudo-classes :valid and :invalid.
// Invalid controlle cancel the form submission .

// Example HTML5 Form Validation
/*
<form id="myForm">
  <label for="email">Email:</label>
    <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <input type="submit" value="Submit">
</form>
<style>
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        border: 2px solid green;
    }
</style>
*/