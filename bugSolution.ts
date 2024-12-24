function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); //Access the first element of the array
console.log(greeterArray(user)); //Use the modified function to handle the array