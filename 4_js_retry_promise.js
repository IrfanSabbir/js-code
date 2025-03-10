// Custom retry function

const retry = (operation, retries, delay, shouldRetry) => {
  return new Promise((resolve, reject) => {
    const atempt = (retryCount)=> {
      operation()
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          if(retryCount >= retries) {
            reject(error)
          } else if(shouldRetry && !shouldRetry(error)) {
            reject(error)
          } else {
            console.log(`Retry attempt ${retryCount + 1} failed. Retrying in ${delay}ms...`);
            setTimeout(() =>  atempt(retryCount+1), delay)
          }
        })
    }
    atempt(0);
  })
}

const shouldRetry = (error) => {
  return error.type === "NetworkError"; 
}

// Handelinf retry with failed network error
const unReachAbleFunction = () => {
  return new Promise((_, reject) => {
    const error = new Error("Network error");
    error.type = "NetworkError";
    reject(error);
  })
}


const reachAbleFunction = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if(success) {
      resolve("Data fetched!")
    } else {
      const error = new Error("Network error");
      error.type = "NetworkError";
      reject(error)
    }
  })
}


retry(unReachAbleFunction, 5, 1000, shouldRetry)
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error);
  });


retry(reachAbleFunction, 5, 1000, shouldRetry)  
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error);
  });



  // Example: Retry API Call

  function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          const error = new Error("Network error");
          error.type = "NetworkError";
          reject(error)
        }
        return response.json();
      });
  }
  
  retry(fetchData, 3, 1000)
    .then((data) => {
      console.log("Data fetched:", data);
    })
    .catch((error) => {
      console.error("Failed to fetch data:", error);
    });