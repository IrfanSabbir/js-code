// Polyfill for Function.prototype.bind

let nameObj = {
  name: "Tony"
}

let PrintName = {
  name: "steve",
  sayHi: function () {
    console.log(this.name); 
  }
}

const res = PrintName.sayHi.bind(nameObj)
res()

// res: "Tony"


const person = {
  name: "Alice",
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const boundGreet = greet.bind(person, "Hello");
console.log(boundGreet("?")); // Output: "Hello, Alice!"

