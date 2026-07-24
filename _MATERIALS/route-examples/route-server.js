// Import packages
import express from 'express';
import cors from 'cors';

// Import the route file
import bookRoutes from './routes/books.js';

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (request, response) => {

  response.send('Welcome to the Book API!');

});

// ------------------------------------
// Register Routes
// ------------------------------------

// Every route beginning with "/books"
// will be handled by routes/books.js

app.use('/books', bookRoutes);

// Start the server
const PORT = 3001;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});