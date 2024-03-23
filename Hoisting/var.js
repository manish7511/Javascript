var a = 10;
function outer() {
    console.log(a); // Output: undefined
    var a = 20;
    console.log(a); // Output: 20
}
outer();
console.log(a); // Output: 10
