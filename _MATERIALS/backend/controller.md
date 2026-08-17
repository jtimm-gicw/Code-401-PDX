# What Is a Controller Function? 🤔

Think about a restaurant.

When you order food:

```text
Customer
   ↓
Waiter
   ↓
Kitchen
   ↓
Waiter
   ↓
Customer
```

The waiter doesn't cook the food.

The waiter doesn't eat the food.

The waiter simply coordinates everything.

A **controller function** works the same way.

---

# What Is a Controller Function?

A **controller function** is a function that sits between:

```text
Request
   ↓
Controller
   ↓
Data / Logic
   ↓
Response
```

Its job is to:

1. Receive a request
2. Decide what needs to happen
3. Get data
4. Send a response

---

# Why Do We Use Controllers?

Imagine putting everything inside a route:

```javascript
app.get('/books', (req, res) => {

  // 50 lines of database code

  // 30 lines of validation

  // 20 lines of formatting

  // 10 lines of error handling

});
```

😬 This gets messy quickly.

---

Instead we separate responsibilities.

### Route File

```javascript
router.get('/books', getBooks);
```

### Controller File

```javascript
function getBooks(req, res) {
  res.send('Books');
}
```

Now the route is easy to read.

---

# Real World Analogy

Think of a controller as a manager.

```text
Customer Request
        ↓
     Manager
        ↓
    Employees
        ↓
     Manager
        ↓
Customer Response
```

The manager coordinates work.

The controller coordinates code.

---

# What Does a Controller Actually Do?

A controller usually:

### 1. Receives the Request

```javascript
function getBooks(req, res) {
```

The controller gets:

```javascript
req
```

(Request)

and

```javascript
res
```

(Response)

---

### 2. Gets Data

Maybe from:

- MongoDB
- PostgreSQL
- Weather API
- Movies API

Example:

```javascript
const books = await Book.find();
```

---

### 3. Handles Errors

```javascript
try {

} catch(error) {

}
```

---

### 4. Sends a Response

```javascript
res.status(200).json(books);
```

---

# Example Without Controllers

### server.js

```javascript
app.get('/books', async (req, res) => {

  try {

    const books = await Book.find();

    res.json(books);

  } catch(error) {

    res.status(500).send(error.message);

  }

});
```

Works fine.

But imagine 20 routes like this.

😵 Huge file.

---

# Example With Controllers

## booksController.js

```javascript
async function getBooks(req, res) {

  try {

    const books = await Book.find();

    res.json(books);

  } catch(error) {

    res.status(500).send(error.message);

  }

}

module.exports = {
  getBooks
};
```

---

## booksRoutes.js

```javascript
const express = require('express');
const router = express.Router();

const { getBooks } = require('./booksController');

router.get('/', getBooks);

module.exports = router;
```

---

# Why Is This Better?

### Before

```text
server.js
 ├── Routes
 ├── Database Logic
 ├── Error Handling
 ├── Validation
 └── Responses
```

Everything mixed together.

---

### After

```text
routes/
  booksRoutes.js

controllers/
  booksController.js

models/
  Book.js
```

Each file has one responsibility.

---

# In Your React + Express Projects

The flow often looks like:

```text
React Button Click
        ↓
Axios Request
        ↓
Express Route
        ↓
Controller Function
        ↓
Database/API
        ↓
Controller
        ↓
Response
        ↓
React Updates UI
```

Example:

```text
User clicks "Get Weather"
        ↓
/weather route
        ↓
getWeather controller
        ↓
Weather API
        ↓
Send weather data
        ↓
React displays forecast
```

---

# Memory Trick 🧠

Think:

```text
Routes
=
WHERE to go

Controllers
=
WHAT to do
```

Or:

```text
Route
=
Address

Controller
=
Worker
```

---

# Typical Project Structure

```text
project/
│
├── server.js
│
├── routes/
│   ├── booksRoutes.js
│   └── weatherRoutes.js
│
├── controllers/
│   ├── booksController.js
│   └── weatherController.js
│
├── models/
│   └── Book.js
│
└── services/
    └── weatherService.js
```

This structure keeps code organized as applications grow.

---

# Quick Interview Answer

## What is a controller function?

A controller function handles incoming requests, performs the necessary business logic (such as calling a database or API), and sends a response back to the client.

---

## Why do we use controllers?

Controllers help:

- Keep route files clean
- Organize code into responsibilities
- Make applications easier to maintain
- Reduce duplication
- Improve readability
- Make debugging easier

---

# Quick Review Questions

### 1. What is the main job of a controller?

**Answer:** To handle a request, perform logic, and send a response.

---

### 2. What is the difference between a route and a controller?

**Answer:**

- Route = WHERE the request goes
- Controller = WHAT happens when it gets there

---

### 3. Why not put all the code directly in routes?

**Answer:** Route files become difficult to read and maintain as applications grow.

---

### 4. What objects are usually passed into a controller?

**Answer:**

```javascript
req
res
```

- `req` = Request from the client
- `res` = Response sent back to the client

---

### 5. What is a good memory trick?

```text
Route = Address

Controller = Worker
```

The route tells Express where to go.

The controller does the work.
