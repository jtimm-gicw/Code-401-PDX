# 🧪 Jest + Supertest

## What is Jest?

**Jest** is a tool that automatically tests your JavaScript code.

Think of it like a **robot that checks your code for you**.

Without Jest, you might manually check:

> Does `GET /favorites` return the favorites?

With Jest, you write a test once, and Jest checks it for you.

Example result:

```text
PASS  server.test.js

✓ GET /favorites returns 200
✓ POST /favorites creates a favorite
✓ DELETE /favorites/:id deletes a favorite
```

---

## 🧩 Jest + Supertest

Jest and Supertest often work together, but they have different jobs:

| Tool | Simple Job |
|---|---|
| Jest |Runs tests and checks whether they pass" |
| Supertest| Pretends to be a client making HTTP requests to your server |

*Think of it like:*

**Jest** = the teacher grading the test 📝

**Supertest** = the student pretending to use your API 🌐

---

### 📁 Example File Structure

A simple project might look like this:

```text
my-project/
├── server.js
├── server.test.js
├── package.json
└── routes/
    └── favorites.js
```

Your test file could be: *server.test.js*

### 📦 Install Jest and Supertest

From your project folder, run: `npm install --save-dev jest supertest`

## 🧪 Example Test

*server.test.js*

```js
const request = require('supertest');
const app = require('./server');

test('GET /favorites returns 200', async () => {
  const response = await request(app)
    .get('/favorites');

  expect(response.status).toBe(200);
});
```

**What is happening?**
`test()`

Jest says:
>"Let's run a test."

```js
`request(app)`
```

Supertest uses your Express app.
`.get('/favorites')`

Supertest pretends a client made a GET request to /favorites.
`expect(response.status).toBe(200)`

Jest checks whether the response status is 200.

### 🚀 Running the Test

Add a test script to package.json:

```json
"scripts": {
  "test": "jest"
}
```

Then run: `npm test`
Jest will run your test and report whether it PASS or FAIL.

---

## ⭐ Big Idea

- **Jest** tests whether our code *does what we expect*.
- **Supertest** lets us *test our API endpoints as if a real client were making requests*.
