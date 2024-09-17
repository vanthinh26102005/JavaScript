// Custom async-like behavior using callbacks
function fetchData(callback) {
  setTimeout(() => {
    const errorOccurred = false; // Change this to true to simulate an error

    if (errorOccurred) {
      callback("Failed to fetch data", null); // Simulate an error
    } else {
      callback(null, "Data received"); // Simulate success
    }
  }, 1000);
}

// Function to mimic async/await behavior
function customAsyncFunction() {
  fetchData((err, data) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Success:", data);
    }

    // Simulate another async call
    fetchData((err, data) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("Success:", data);
      }
    });
  });
}

// Call the function
customAsyncFunction();
