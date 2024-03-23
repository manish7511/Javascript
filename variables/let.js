function exampleLet() {
  let y = 10;
  if (true) {
      let y = 20;
      y=35
      console.log(y); // Output: 20
  }
  console.log(y); // Output: 10
}
exampleLet();




// In this example, the variable y is block-scoped. The y declared inside the if block is scoped only to that block, so it doesn't affect the value of y outside the block.