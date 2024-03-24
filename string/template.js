// Back-Tics Syntax

// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:


// Template Strings allow both single and double quotes inside a string:

let text = `He's often called "Johnny"`;

//  Template Strings allow multiline strings

let text1 =
`The quick
brown fox
jumps over
the lazy dog`;

// Template String provide an easy way to interpolate variables and expressions into strings.
//  this method is called string interpolation
// The syntax is:
// ${...}



// Template Strings allow variables in strings:

let firstName = "John";
let lastName = "Doe";

let result= `Welcome ${firstName}, ${lastName}!`;

// Template Strings allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;