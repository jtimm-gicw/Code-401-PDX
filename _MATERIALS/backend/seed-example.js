/*
=========================================================
🌱 WHAT IS A SEED FILE?
=========================================================

Think of a seed file like planting seeds in a garden.

Instead of manually typing data into your database every
time you start a new project, a seed file automatically
adds sample data for you.

This is useful because:
✅ You have data to test your application.
✅ Every student starts with the same sample data.
✅ You don't have to enter everything by hand.

Example:
Instead of creating three books in your app one at a time,
this file creates them automatically.

=========================================================
🌱 WHAT IS seed.js?
=========================================================

seed.js is a standalone JavaScript file whose only job is
to add (seed) data into the database.

Unlike server.js, this file does NOT start an Express server.

It simply:
1. Connects to MongoDB.
2. Creates sample data.
3. Saves the data.
4. Disconnects from MongoDB.
5. Stops running.

You usually run it ONE TIME from the terminal using:

node seed.js

After the data has been added, the program ends.
=========================================================
*/

// Load environment variables from the .env file.
// This lets us safely use DATABASE_URL without hardcoding it.
require('dotenv').config();

// Import Mongoose so we can connect to MongoDB.
const mongoose = require('mongoose');

// Import our Book model.
// The model tells Mongoose what a Book document looks like.
const Book = require('./models/book');


// -------------------------------------------------------
// Create an async function called seed()
// -------------------------------------------------------
//
// This function performs all of the steps needed
// to add data into the database.
//
async function seed() {

  try {

    // ---------------------------------------------
    // Connect to MongoDB
    // ---------------------------------------------
    //
    // DATABASE_URL comes from the .env file.
    //
    await mongoose.connect(process.env.DATABASE_URL);



    // ---------------------------------------------
    // Create an array of sample books
    // ---------------------------------------------
    //
    // This is just regular JavaScript data.
    // Nothing has been saved to MongoDB yet.
    //
    const books = [
      {
        title: 'Book 1',
        description: 'Book 1 description',
        status: 'To Read'
      },
      {
        title: 'Book 2',
        description: 'Book 2 description',
        status: 'Reading'
      },
      {
        title: 'Book 3',
        description: 'Book 3 description',
        status: 'Finished'
      }
    ];


    // ---------------------------------------------
    // Save every book into MongoDB
    // ---------------------------------------------
    //
    // insertMany() takes the entire array and inserts
    // every object into the database at once.
    //
    await Book.insertMany(books);



    // ---------------------------------------------
    // Disconnect from MongoDB
    // ---------------------------------------------
    //
    // Since this file has finished its job,
    // we close the database connection.
    //
    await mongoose.disconnect();



    // Let us know everything worked.
    console.log('Database seeded successfully.');

  } catch (error) {

    // If anything goes wrong, print the error.
    console.error('Error seeding database:', error.message);

    // Exit the program with a failure status.
    process.exit(1);
  }
}



// -------------------------------------------------------
// Run the seed() function
// -------------------------------------------------------
//
// Calling seed(); actually starts the program.
//
// When you run:
//
// node seed.js
//
// JavaScript reaches this line and executes everything
// inside the seed() function.
//
// Without this line, nothing would happen.
//
seed();



/*
=========================================================
How is seed.js different from server.js?
=========================================================

server.js is always running.

Its job is to:
• Start Express
• Connect to MongoDB
• Listen for incoming requests
• Respond to the frontend

Example:

React App
      │
      ▼
server.js
      │
      ▼
MongoDB


=========================================================
seed.js is different.
=========================================================

seed.js is NOT a server.

Its only job is to add sample data.

node seed.js
      │
      ▼
Connect to MongoDB
      │
      ▼
Insert sample books
      │
      ▼
Disconnect
      │
      ▼
Program ends


=========================================================
Why don't we export seed()?
=========================================================

In server.js, we export things when another file needs them.

Example:

module.exports = router;

or

module.exports = Book;

Those files are imported somewhere else using require().


=========================================================
seed.js is different.
=========================================================

Nothing needs to import this file.

We run it directly from the terminal:

node seed.js

Because of that, we simply call:

seed();

at the bottom.

That tells JavaScript:

"Run this function now."

Once it finishes, the program exits.

There is no reason to export it because no other file
needs to use the seed() function.


=========================================================
How does seed.js relate to server.js?
=========================================================

Both files connect to the SAME MongoDB database.

server.js
----------
Purpose:
Run your backend application.

Starts Express
↓
Connects to MongoDB
↓
Waits for requests from React


seed.js
--------
Purpose:
Fill the database with starter data.

Connects to MongoDB
↓
Adds sample books
↓
Disconnects
↓
Ends


Think of it like this:

server.js = The restaurant opens for business.

seed.js = The chef stocks the kitchen before opening.

One keeps running.

The other finishes its job and closes.
=========================================================
*/