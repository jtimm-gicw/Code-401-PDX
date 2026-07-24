// Import Express
import express from 'express';

// Create a new router
const router = express.Router();

// --------------------------------------
// Sample Data
// --------------------------------------

// Normally this data would come from a database.
// For now, we'll store it in an array.

let books = [
  {
    id: 1,
    title: 'Harry Potter'
  },
  {
    id: 2,
    title: 'The Hobbit'
  }
];

// ======================================
// GET
// Read all books
// ======================================

router.get('/', (request, response) => {

  response.json(books);

});

// ======================================
// GET
// Read one book by ID
// ======================================

router.get('/:id', (request, response) => {

  const id = Number(request.params.id);

  const foundBook = books.find(book => book.id === id);

  response.json(foundBook);

});

// ======================================
// POST
// Create a new book
// ======================================

router.post('/', (request, response) => {

  const newBook = {
    id: books.length + 1,
    title: request.body.title
  };

  books.push(newBook);

  response.status(201).json(newBook);

});

// ======================================
// PUT
// Update a book
// ======================================

router.put('/:id', (request, response) => {

  const id = Number(request.params.id);

  const foundBook = books.find(book => book.id === id);

  foundBook.title = request.body.title;

  response.json(foundBook);

});

// ======================================
// DELETE
// Delete a book
// ======================================

router.delete('/:id', (request, response) => {

  const id = Number(request.params.id);

  books = books.filter(book => book.id !== id);

  response.send('Book deleted.');

});

// Export the router
export default router;