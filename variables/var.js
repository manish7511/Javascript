function exampleVar() {
  var x = 10;
  if (true) {
      var x = 20;
      console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
exampleVar();

// In this example, the variable x is function-scoped. Even though it's re-declared inside the if block, it affects the value of x outside the block.