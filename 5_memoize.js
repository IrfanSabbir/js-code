function memoize(fn, cacheLimit = 10) {
  const cache = new Map(); 

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Fetching from cache for key:", key);
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    console.log("Storing in cache for key:", key);

    if (cache.size > cacheLimit) {
      const oldestKey = cache.keys().next().value;
      console.log("Removing oldest key from cache:", oldestKey);
      cache.delete(oldestKey);
    }

    return result;
  };
}

function multifly(n, m) {
  console.log("Computing multifly of:", n, m);
  return n * m;
}

const memoizedMultiply = memoize(multifly, 2); 

console.log(memoizedMultiply(5, 2)); 
console.log(memoizedMultiply(10, 2)); 
console.log(memoizedMultiply(5, 2)); 
console.log(memoizedMultiply(15, 2)); 
console.log(memoizedMultiply(10, 2)); 



// Reponse---

// Computing multifly of: 5 2
// Storing in cache for key: [5,2]
// 10
// Computing multifly of: 10 2
// Storing in cache for key: [10,2]
// 20
// Fetching from cache for key: [5,2]
// 10
// Computing multifly of: 15 2
// Storing in cache for key: [15,2]
// Removing oldest key from cache: [5,2]
// 30
// Fetching from cache for key: [10,2]
// 20