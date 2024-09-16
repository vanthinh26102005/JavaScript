// Simulating an error in the callback
const fetchDataCallback = (callback) => {
    const errorOccurred = true;
  
    if (errorOccurred) {
      // Passing a truthy error value
      callback("An error occurred!", null);
    } else {
      // No error, passing null for error and some data
      callback(null, "Data received");
    }
  };
  
  // Using the callback to handle the result
  fetchDataCallback((err, data) => {
    if (err) {
      // This block will run because err is truthy ("An error occurred!")
      console.error(err);  // Output: "An error occurred!"
    } else {
      console.log(data);  // This will not run in this case
    }
  });