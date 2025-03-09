// Promises (Polyfill for Promise.all, Promise.race, Promise.allSettled)


const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise4 = Promise.reject('Error')
const promise3 = new Promise((resolve) =>  {
  setTimeout(() => {
    resolve(3)
  }, 100);
})

const promise5 = new Promise((resolve) =>  {
  setTimeout(() => {
    resolve(5)
  }, 200);
})
// Promise ALL
/**
 * 1. Polyfill for Promise.all
  Promise.all takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved. 
  If any promise rejects, the entire Promise.all rejects immediately.
 */


Promise.all([promise1, promise2, promise3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

  // [ 1, 2, 3 ]


  Promise.all([promise1, promise2, promise4])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

    // If any promise rejects, the entire Promise.all rejects immediately.
    // Error




// Promise race
  /**
  2. Polyfill for Promise.race
  Promise.race takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
  */

  Promise.race([promise3, promise5])
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    // reponse 3, as promise3 is resolved, so full promise is reolved.

    Promise.race([promise3, promise5, promise4])
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    // reponse Error, as promise4 is rejected, so full promise is rejected.



// Promise allSettled


/**
 * 3. Polyfill for Promise.allSettled Promise.allSettled takes an array of promises and returns a single promise that resolves
  when all the promises in the array have either resolved or rejected. 
  It returns an array of objects describing the outcome of each promise
 */

    Promise.allSettled([promise1, promise2, promise3, promise5, promise4])
    .then(res => {
      console.log("res", res)
    })
    .catch(err => {
      console.log("err", err)
    })

    /**
      [
        { status: 'fulfilled', value: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'fulfilled', value: 3 },
        { status: 'fulfilled', value: 5 },
        { status: 'rejected', reason: 'Error' }
      ]
     */


  /**
   * 
   * Real-World Use Cases:
    Promise.all: Fetching multiple API endpoints simultaneously and waiting for all responses.

    Promise.race: Implementing a timeout for an API call.

    Promise.allSettled: Handling multiple API calls where you want to process all results, even if some fail.


    */