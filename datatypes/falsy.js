let number = 0;
if (number) {
    console.log("Number is truthy");
} else {
    console.log("Number is falsy");
}

let numbe = -0;
if (numbe) {
    console.log("Number is truthy");
} else {
    console.log("Number is falsy");
}

let string = "";
if (string) {
    console.log("string is truthy");
} else {
    console.log("string is falsy");
}

let n =NaN;
if (n) {
    console.log("NaN is truthy");
} else {
    console.log("NaN is falsy");
}

let a = null;
if (a) {
    console.log("null is truthy");
} else {
    console.log("Number is falsy");
}

let m = undefined;
if (m) {
    console.log("undefined is truthy");
} else {
    console.log("undefined is falsy");
}

let BigInt = 0;
if (BigInt) {
    console.log("Bigint is truthy");
} else {
    console.log("Bigint is falsy");
}