
function fetchData(callback) {
  setTimeout(() => {
    const errorOccurred = false; 

    if (errorOccurred) {
      callback("Failed to fetch data", null); 
    } else {
      callback(null, "Data received");
    }
  }, 1000);
}


function CBAsyncFunction() { 
  fetchData((err, data) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Success:", data);
    }

    //async
    fetchData((err, data) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("Success:", data);
      }
    });
  });
}

CBAsyncFunction();
