hoistedfunction();
function hoistedfunction(){
  console.log("hello: ");
}

var myfunction=function(){
  console.log("function expression");
}
console.log(myfunction);
myfunction()
