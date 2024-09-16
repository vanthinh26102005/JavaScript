const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
  
  fetchData
  .then((data) => {
    console.log(data); // "Data received"
  });
  


  // Simulating a promise-like behavior with callbacks
function fetchDataCallback(callback) {
    setTimeout(() => {
      callback(null, "Data received");
    }, 1000);
  }
  
  // Using the callback to handle the result
  fetchDataCallback((err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data); // "Data received"
    }
  });


  // Simulating an error in the callback
