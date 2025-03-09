// pipe

/* 
Features of pipe()
  Combines functions from left to right.
  The output of each function is passed as the input to the function on its right.
  Creates a clear and intuitive flow of data transformation.

Uses of pipe()
  When the sequence of transformations starts from the initial input and flows to the final result.
  Common in data processing pipelines. (Lodash)
  Preferred in scenarios where readability and straightforward function chaining are important.
**/

const pipe = (...fns) => (args) => 
   fns.reduce((acc, fn) => fn(acc), args)

const addFn = (x) => x+5;
const removeFn = (x) => x-5
const multiplyFn = (x) => x*5

// example 1
const pipeFn = pipe(addFn, removeFn, multiplyFn);

console.log("Pipe reponse, ", pipeFn(10))

// example 2

string =" I am mohammed "

const stringTrim = (str) => str.trim();
const tostrUpperCase = (str) => str.toUpperCase();
const strExclaim = (str) => str + "!"

const pipeStrFn = pipe(stringTrim, tostrUpperCase, strExclaim);

console.log("Pipe reponse, ", pipeStrFn(string))



// Compose 


/* 
Features of compose()
  Combines functions from right to left.
  The output of each function is passed as the input to the function on its left.
  Allows for creating complex transformations by composing smaller functions.

Uses of Compose()

  When the sequence of transformations starts with the final result in mind.
  Common in middleware composition (e.g., Redux).
  Useful in functional programming to build complex operations from simple function
**/
const compose = (...fns) => (args) => 
    fns.reduceRight((curr, fn) => fn(curr), args)


// example 3
const composeFn = compose(multiplyFn, removeFn, addFn,);

console.log("composeFn reponse, ", composeFn(10))



const composeStrFn = compose(strExclaim, tostrUpperCase, stringTrim);

console.log("composeStrFn reponse, ", composeStrFn(string))