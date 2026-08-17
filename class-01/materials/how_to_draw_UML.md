# UML Guide for Frontend & Backend Applications

> **Code 401 Student Reference**
>
> Before you start writing code, spend a few minutes planning your application. One of the easiest ways to do that is by creating a **UML (Unified Modeling Language) diagram**. A UML diagram is simply a visual map that shows how the different parts of your application communicate with one another.

---

## What is a UML?

A **UML (Unified Modeling Language)** diagram is a simple drawing that helps you organize your ideas before you write code.

Think of it as a **road map** for your application.

Instead of asking:

> "What code should I write first?"

You'll ask:

> "How should my application work?"

Professional developers almost always sketch out their application before they begin coding.

---

## Why Should We Create a UML?

A UML helps you:

- 📋 Plan before coding
- 🧠 Organize your ideas
- 🤝 Explain your app to teammates
- 🐞 Find missing pieces before writing code
- ⚡ Save time by avoiding unnecessary changes later

---

## The Basic Flow

Almost every web application follows this pattern:

```text
User
   ↓
Frontend
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
Frontend
   ↓
User
```

Think of it like ordering food at a restaurant.

- The **customer** places an order.
- The **server** takes the order to the kitchen.
- The **kitchen** prepares the food.
- The **server** brings it back.
- The **customer** receives the meal.

Web applications work almost the same way.

---

### Step 1 — Identify the User

Every application starts with someone using it.

Ask yourself:

- Who is using this application?
- What do they want to accomplish?

Example:

```text
User
```

---

### Step 2 — Identify the Frontend

The frontend is everything the user sees.

Examples:

- React App
- HTML
- CSS
- Buttons
- Forms
- Images
- Navigation

Example:

```text
User
   ↓
React Frontend
```

---

### Step 3 — Identify the Backend

The backend does the work the user cannot see.

Examples:

- Express Server
- API Routes
- Authentication
- Business Logic

Example:

```text
User
   ↓
React Frontend
   ↓
Express Server
```

---

### Step 4 — Identify the Database

Most applications save information somewhere.

Examples:

- PostgreSQL
- MongoDB
- DynamoDB

Example:

```text
User
   ↓
React Frontend
   ↓
Express Server
   ↓
Database
```

---

### Step 5 — Show the Response

Remember:

Data doesn't stop at the database.

It comes back.

```
User

↓

React Frontend

↓

Express Server

↓

Database

↑

Express Server

↑

React Frontend

↑

User
```

---

## Frontend + Backend UML Example

Imagine you're building a simple Weather App.

The user searches for a city.

The application finds the weather.

Here's the UML.

```text
                    Weather Application

+------------------+
|      User        |
+------------------+
          |
          | Search "Seattle"
          |
          v
+------------------+
| React Frontend   |
| Search Form      |
| Weather Display  |
+------------------+
          |
          | GET /weather
          |
          v
+------------------+
| Express Server   |
| API Routes       |
+------------------+
          |
          | Request Weather Data
          |
          v
+----------------------+
| Weather API          |
+----------------------+
          |
          | Weather JSON
          |
          ^
+------------------+
| Express Server   |
+------------------+
          |
          | Send Response
          |
          ^
+------------------+
| React Frontend   |
+------------------+
          |
          | Display Weather
          |
          ^
+------------------+
| User             |
+------------------+
```

---

## Example 2 — Books Application

Imagine you're building a Books App.

Users can:

- View books
- Add books
- Delete books

Here's the UML.

```text
                    Books Application

+------------------+
|      User        |
+------------------+
          |
          | Click "Add Book"
          |
          v
+------------------+
| React Frontend   |
| Book Form        |
| Book List        |
+------------------+
          |
          | POST /books
          |
          v
+------------------+
| Express Server   |
| Routes           |
| Controllers      |
+------------------+
          |
          | Save Book
          |
          v
+----------------------+
| PostgreSQL Database  |
+----------------------+
          |
          | Saved Book
          |
          ^
+------------------+
| Express Server   |
+------------------+
          |
          | Updated Book List
          |
          ^
+------------------+
| React Frontend   |
+------------------+
          |
          | Display Books
          |
          ^
+------------------+
| User             |
+------------------+
```

---

## Example 3 — Authentication Login

```text
                  Login Application

+------------------+
| User             |
+------------------+
          |
          | Enter Email & Password
          |
          v
+------------------+
| React Login Page |
+------------------+
          |
          | POST /login
          |
          v
+------------------+
| Express Server   |
+------------------+
          |
          | Check User
          |
          v
+----------------------+
| Database             |
+----------------------+
          |
          | User Found
          |
          ^
+------------------+
| Express Server   |
| Create Token     |
+------------------+
          |
          | Send Token
          |
          ^
+------------------+
| React Frontend   |
+------------------+
          |
          | Login Successful
          |
          ^
+------------------+
| User             |
+------------------+
```

---

## UML Planning Checklist

Before you write any code, ask yourself:

- ✅ Who is the user?
- ✅ What does the user want to do?
- ✅ What pages will the frontend have?
- ✅ What requests will the frontend send?
- ✅ What routes will the backend need?
- ✅ Will data be stored?
- ✅ Where does the response go?
- ✅ What should the user see?

If you can answer these questions, you're ready to start coding.

---

## UML Tips

✔ Keep it simple.

Your UML doesn't need to include every detail.

Focus on the **flow of information**, not the code.

✔ Draw boxes.

✔ Connect them with arrows.

✔ Label each arrow.

✔ Show requests and responses.

---

## Example Template

Copy this template before starting a new project.

```text
                Project Name

+------------------+
| User             |
+------------------+
          |
          |
          v
+------------------+
| Frontend         |
+------------------+
          |
          |
          v
+------------------+
| Backend          |
+------------------+
          |
          |
          v
+------------------+
| Database / API   |
+------------------+
          |
          |
          ^
+------------------+
| Backend          |
+------------------+
          |
          |
          ^
+------------------+
| Frontend         |
+------------------+
          |
          |
          ^
+------------------+
| User             |
+------------------+
```

---

## Key Takeaways

- UML stands for **Unified Modeling Language**.
- A UML diagram helps you **plan your application before writing code**.
- Every web application follows a similar flow:
  - User → Frontend → Backend → Database/API → Backend → Frontend → User
- A good UML doesn't have to be complicated. Simple boxes and arrows are enough to communicate your application's design.
- Spending a few minutes creating a UML can save hours of debugging and rewriting code later.

> **Remember:** Professional developers don't start coding right away—they start by making a plan.
