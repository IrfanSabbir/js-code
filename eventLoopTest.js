const fs = require("fs");

console.log("Start");

// Timer (setTimeout)
setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 100);

// Immediate (setImmediate)
setImmediate(() => {
  console.log("Immediate");
});

// Next Tick (process.nextTick)
process.nextTick(() => {
  console.log("Next Tick 1");
});

process.nextTick(() => {
  console.log("Next Tick 2");
});

// Promises
Promise.resolve().then(() => {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});


// setInterval
let intervalCounter = 0;
const intervalId = setInterval(() => {
  console.log(`Interval run ${++intervalCounter}`);
  if (intervalCounter === 2) {
    clearInterval(intervalId); // Stop the interval after 2 runs
  }
}, 50);

// Custom Promise with setTimeout
new Promise((resolve) => {
  setTimeout(() => {
    resolve("Custom Promise Resolved");
  }, 50);
}).then((message) => {
  console.log(message);
});

console.log("End");


/* 
reponse: ...........

Start
End
Next Tick 1
Next Tick 2
Promise 1
Promise 2
Timeout 1
Immediate
Interval run 1
Custom Promise Resolved
Timeout 2
Interval run 2

**/