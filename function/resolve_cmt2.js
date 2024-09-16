async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
  }
  
  async function handleData() {
    const data = await fetchData();
    console.log(data); // "Data received"
  }
  
  handleData();


// Simulating async/await using callbacks
function fetchDataCallback(callback) {
    setTimeout(() => {
      callback(null, "Data received");
    }, 1000);
  }
  
  // A function to simulate async/await behavior using callbacks
  function handleDataWithCallback() {
    fetchDataCallback((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data); // "Data received"
      }
    });
  }
  
  handleDataWithCallback();