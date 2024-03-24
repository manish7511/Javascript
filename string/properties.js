//  length

let a="manish"
let t=a.length;
console.log(t);

//  charAt()
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

// charCodeAt()

let text1 = "HELLO WORLD";
let char1 = text1.charCodeAt(0);
console.log(char1);

// at()

const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

// slice
let text2 = "Apple, Banana, Kiwi";
console.log(text2.length);
let part = text2.slice(15,19);

console.log(part);

let text4 = "Apple, Banana, Kiwi";
let part4 = text4.slice(-4);
console.log(part4); 

//  substring
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str5 = "Apple, Banana, Kiwi";
let part5 = str5.substring(15, 19);
console.log(part5);

// substr()

// The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let parta = str.substr(7, 4);
console.log(parta);


// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
let text8 = "Hello World!";
let text9 = text8.toUpperCase();
console.log(text9);
// A string is converted to lower case with toLowerCase():
// A string is converted to upper case with toUpperCase():
let t8 = "Hello World!";
let p8=t8.toLowerCase();
console.log(p8);

// concat() joins two or more strings:

let te = "Hello";
let te2 = "World";
let te3 = te.concat(" ", te2);
console.log(te3);

// The trim() method removes whitespace from both sides of a string:

let x1 = "      Hello World!      ";
let x2 = x1.trim();
console.log(x2);

//  trimStart()  -> removes whitespace only from the start of a string.

//  trimEnd()   ->  removes whitespace only from the end of a string.

// repeat()  The repeat() method returns a string with a number of copies of a string.

// replace() -> method replaces a specified value with another value in a string:

// replaceall()  -> The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.


// indexof()  ->  The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:


// lastIndexOf()  method returns the index of the last occurrence of a specified text in a string:

// search()   method searches a string for a string (or a regular expression) and returns the position of the match



// The includes() method returns true if a string contains a specified value.

// The startsWith() method returns true if a string begins with a specified value.

//  The endsWith() method returns true if a string ends with a specified value.