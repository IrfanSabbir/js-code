// Reduce

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 22 },
];

const getTotalAge = people.reduce((prev, curr) =>  prev + curr.age, 0) 
console.log(getTotalAge)

// resepons: 64


// 1. Grouping Objects by a Property : AGE based people group

const getGroupPeople= people.reduce((prevObj, currObj) =>  {
  if(!prevObj[currObj.age]) {
    prevObj[currObj.age] = []
  }
  prevObj[currObj.age].push(currObj)
  return prevObj
}, {}) 

console.log(getGroupPeople)

// reponse 
/**
 * {
  '21': [ { name: 'Alice', age: 21 }, { name: 'Bob', age: 21 } ],
  '22': [ { name: 'Charlie', age: 22 } ]
  } 
 */


// 2. Flattening a Nested Array

const nestedArray = [1, [2, [3, [4]], 5]];

const flattenArray = (args) => 
  args.reduce((prev, curr) => {
    return prev.concat( Array.isArray(curr) ? flattenArray(curr): curr)
  }, [])

console.log(flattenArray(nestedArray))

 // Output: [1, 2, 3, 4, 5]

//  3. Counting Occurrences of Items in an Array

 const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
 const countItem = ()=> fruits.reduce((prev, curr) => {
      if(!prev[curr]) {
        prev[curr] = 0;
      }
      prev[curr]++;
      return prev
  }, {})

  console.log(countItem())

  // reponse: { apple: 3, banana: 2, orange: 1 }



  // 10. Parsing a Query String

const queryString = "name=Alice&age=21&city=New%20York";

const parsedQuery = queryString.split("&").reduce((acc, pair) => {
  const [key, value] = pair.split("=");
  acc[key] = decodeURIComponent(value);
  return acc;
}, {});

console.log(parsedQuery);
// Output: { name: "Alice", age: "21", city: "New York" }



// 9. Implementing a State Machine

const actions = ["INCREMENT", "INCREMENT", "DECREMENT", "INCREMENT"];

const initialState = { count: 0 };

const stateMachine = actions.reduce((state, action) => {
  switch (action) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}, initialState);

console.log(stateMachine); // Output: { count: 2 }



// 6. Calculating the Average of an Array

const numbers = [10, 20, 30, 40];

const avergaeNum = () => numbers.reduce((prev, curr, index, arr ) => {
  prev += curr
  if(index === arr.length -1 ) {
    return prev /arr.length 
  }
  return prev;
}, 0)

console.log(avergaeNum())


// 7. Removing Duplicates from an Array

const numbers2 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers2.reduce((prev, curr) => {
  if (!prev.includes(curr)) {
    prev.push(curr);
  }
  return prev;
}, []);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]