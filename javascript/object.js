let person = {
  fname: "daniel",
  lname: "hemmati",
  age: 24
}

let keys = Object.keys(person);
let entries = Object.entries(person);
let values = Object.values(person);
let property = person.hasOwnProperty('fname');
// console.log(property);
let test = "daniel";
console.log(test[0].toUpperCase() + test.slice(1))
