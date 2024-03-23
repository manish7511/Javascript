function exampleConstObject() {
  const person = {
      name: 'John',
      age: 30
  };
  console.log(person.name); // Output: John
  person.age = 40; // This is valid because we're modifying the object's properties, not reassigning the variable.
  console.log(person.age); // Output: 40
  console.log(person);
  
}
exampleConstObject();
