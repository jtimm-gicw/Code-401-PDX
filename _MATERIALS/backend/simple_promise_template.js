someAsyncThing()

  .then(data => {

    // Success
    console.log(data);

  })

  .catch(error => {

    // Failure
    console.log(error);

  });

// Start a task
//       ↓
// Wait for result
//       ↓
// If successful → .then()
//       ↓
// If failed → .catch()