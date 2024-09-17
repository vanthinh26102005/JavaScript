
function CBPromise(callback) {
  setTimeout(() => {
    const error = false; 

    if (error) {
      callback("An error occurred!", null); 
    } else {
      callback(null, "Data received"); 
    }
  }, 1000);
}


function handleResult(err, data) {
  if (err) {
    console.error("Rejected:", err);
  } else {
    console.log("Resolved:", data);
  }
}


CBPromise(handleResult);
