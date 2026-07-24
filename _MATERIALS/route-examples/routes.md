# Creating Backend Routes
## A Beginner's Guide to RESTful APIs with Express

---

# Learning Objectives

By the end of this guide, you should be able to:

- Explain what a route is.
- Understand the parts of a route.
- Know where routes belong in an Express application.
- Create GET, POST, PUT, and DELETE routes.
- Understand how the frontend communicates with backend routes.

---

# What is a Route?

A **route** is a path (URL) that tells your server what to do when it receives a request.

Think of your server like a restaurant.

- The **customer** = Frontend
- The **waiter** = Route
- The **kitchen** = Backend code/database

The customer places an order.

The waiter (route) receives the order and takes it to the kitchen.

The kitchen prepares the food and sends it back through the waiter.

The same thing happens in an application.

```
Frontend
    │
    ▼
Request
    │
    ▼
Backend Route
    │
    ▼
Database or Data
    │
    ▼
Response
    │
    ▼
Frontend
```

The frontend never talks directly to the database.

It always goes through a route.

---

# What Does a Route Look Like?

Every Express route follows this basic structure.

```javascript
app.METHOD(PATH, (request, response) => {

  // Do something

});
```

Each part has a job.

| Part | Purpose |
|-------|----------|
| app | Your Express application |
| METHOD | The HTTP request (GET, POST, PUT, DELETE) |
| PATH | The URL the frontend calls |
| request | Information sent from the frontend |
| response | Information sent back to the frontend |

---

# Example Route

```javascript
app.get('/books', (request, response) => {

  response.send('List of books');

});
```

What happens here?

```
Browser

GET /books

      │

      ▼

Express Route

app.get('/books')

      │

      ▼

Response

"List of books"
```

---

# Where Should Routes Go?

Small applications sometimes place routes directly inside **server.js**.

```
project/

│

├── server.js

├── package.json

└── .env
```

Example:

```javascript
// server.js

app.get('/', (request, response) => {
  response.send('Hello World!');
});
```

---

# Larger Projects

As your application grows, you'll usually move routes into their own folder.

```
project/

│

├── server.js

├── routes/

│      ├── books.js

│      ├── movies.js

│      └── users.js

├── models/

└── package.json
```

This keeps your project organized.

---

# Registering Routes

Creating a route file is **not enough**.

You must also tell Express to use it.

This is called **registering** a route.

Example:

```javascript
import bookRoutes from './routes/books.js';

app.use('/books', bookRoutes);
```

Now every request that starts with:

```
/books
```

will be handled inside:

```
routes/books.js
```

---

# Example Route File

```javascript
import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {

  response.send('All Books');

});

export default router;
```

Notice we use:

```javascript
router.get()
```

instead of

```javascript
app.get()
```

because the route belongs to a router.

---

# RESTful APIs

REST stands for

**Representational State Transfer**

Don't worry about memorizing the name.

Just remember:

A REST API uses different HTTP methods to work with data.

The four most common methods are:

| Method | What It Does |
|----------|-------------|
| GET | Read data |
| POST | Create new data |
| PUT | Update existing data |
| DELETE | Remove data |

These four methods are also known as **CRUD**.

---

# CRUD vs REST

| CRUD | HTTP Method |
|-------|-------------|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

---

# GET Route

GET retrieves information.

Example:

```javascript
app.get('/books', (request, response) => {

  response.send([
    'Harry Potter',
    'The Hobbit'
  ]);

});
```

Frontend request:

```
GET /books
```

Server response:

```json
[
  "Harry Potter",
  "The Hobbit"
]
```

---

# POST Route

POST creates something new.

Example:

```javascript
app.post('/books', (request, response) => {

  const newBook = request.body;

  response.send(newBook);

});
```

Frontend sends:

```json
{
  "title": "Dune"
}
```

The backend receives it using:

```javascript
request.body
```

---

# PUT Route

PUT updates existing information.

Example:

```javascript
app.put('/books/:id', (request, response) => {

  const id = request.params.id;

  response.send(`Updated book ${id}`);

});
```

Example request:

```
PUT /books/3
```

The number

```
3
```

becomes

```javascript
request.params.id
```

---

# DELETE Route

DELETE removes information.

```javascript
app.delete('/books/:id', (request, response) => {

  const id = request.params.id;

  response.send(`Deleted book ${id}`);

});
```

Frontend request:

```
DELETE /books/3
```

---

# Route Parameters

Sometimes part of the URL changes.

Example:

```
/books/5

/books/12

/books/99
```

The changing part is called a **route parameter**.

```javascript
/books/:id
```

Retrieve it with:

```javascript
request.params.id
```

---

# Request vs Response

These two objects are used in nearly every route.

## request

Contains information coming **from the frontend**.

Examples:

```javascript
request.body

request.params

request.query
```

---

## response

Sends information **back to the frontend**.

Examples:

```javascript
response.send()

response.json()

response.status()
```

---

# How the Frontend Connects to the Backend

Suppose the frontend needs a list of books.

The frontend sends:

```javascript
fetch('http://localhost:3001/books')
```

That request travels to the backend.

The backend route runs.

```javascript
app.get('/books', (request, response) => {

  response.json(bookArray);

});
```

The backend sends data back.

The frontend receives it.

```javascript
const response = await fetch('http://localhost:3001/books');

const data = await response.json();
```

The data can now be displayed on the page.

---

# Complete Flow

```
User clicks button

        │

        ▼

Frontend

fetch('/books')

        │

        ▼

Backend Route

app.get('/books')

        │

        ▼

Database -- MongoDB

        │

        ▼

Route sends response

        │

        ▼

Frontend displays data
```

---

# Step-by-Step: Adding a New Route

## Step 1

Decide what the route should do.

Example:

```
Get all books
```

---

## Step 2

Choose the correct HTTP method.

```
GET
```

---

## Step 3

Choose the URL.

```
/books
```

---

## Step 4

Create the route.

```javascript
app.get('/books', (request, response) => {

  response.send('Books go here');

});
```

---

## Step 5

If using route files, place the route inside:

```
routes/books.js
```

---

## Step 6

Register the route in **server.js**.

```javascript
import bookRoutes from './routes/books.js';

app.use('/books', bookRoutes);
```

---

## Step 7

Restart the server if necessary.

```
npm run dev
```

or

```
node server.js
```

---

## Step 8

Test the route.

Use:

- Thunder Client
- Postman
- Browser (GET requests only)

Example URL:

```
http://localhost:3001/books
```

---

# Quick Reference

## GET

```javascript
app.get('/books', (request, response) => {

});
```

Reads data.

---

## POST

```javascript
app.post('/books', (request, response) => {

});
```

Creates data.

---

## PUT

```javascript
app.put('/books/:id', (request, response) => {

});
```

Updates data.

---

## DELETE

```javascript
app.delete('/books/:id', (request, response) => {

});
```

Deletes data.

---

# Common Beginner Mistakes

### Forgetting to register the route

Creating a route file isn't enough.

Remember:

```javascript
app.use('/books', bookRoutes);
```

---

### Using the wrong HTTP method

Trying to update data with:

```javascript
GET
```

instead of

```javascript
PUT
```

---

### Typing the wrong URL

These are different routes:

```
/book

/books

/books/1
```

The URL must match exactly.

---

### Forgetting to export the router

```javascript
export default router;
```

Without this line, Express cannot use your route file.

---

### Forgetting to import the route

```javascript
import bookRoutes from './routes/books.js';
```

Without importing it, the server won't know the route exists.

---

# Summary

✔ A **route** tells the server what to do when a request arrives.

✔ Routes use HTTP methods such as **GET**, **POST**, **PUT**, and **DELETE**.

✔ In small projects, routes often live in **server.js**.

✔ In larger projects, routes usually live inside a **routes/** folder.

✔ Route files must be **registered** with `app.use()` before Express can use them.

✔ The frontend sends requests (often with `fetch()`), the backend route processes them, and sends back a response.

✔ Every request follows the same basic flow:

```
Frontend
    ↓
Route
    ↓
Database or Data
    ↓
Response
    ↓
Frontend
```

Understanding routes is one of the most important building blocks of backend web development. Once you know how routes work, you'll be ready to connect your frontend to your server and build full-stack applications.