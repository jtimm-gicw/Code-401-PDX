# Sequelize + PostgreSQL: A Student-Friendly Guide

## 🎯 What You Will Learn

By the end of this guide, you should understand:

- What Sequelize is
- What PostgreSQL is
- How Sequelize and PostgreSQL work together
- What a Sequelize model is
- How model schemas describe database tables
- How to connect a backend server to PostgreSQL
- How to create, read, update, and delete database records
- The difference between common Sequelize methods
- Where Sequelize code belongs in a backend project
- How to use Sequelize from the terminal
- How to troubleshoot common Sequelize problems

---

# 1. Prerequisites

Before using Sequelize with PostgreSQL, install the following packages.

From your backend project directory:

```bash
npm install sequelize pg pg-hstore dotenv
```

If you are building an Express backend, you will also need:

```bash
npm install express
```

For testing:

```bash
npm install --save-dev jest supertest
```

## What do these packages do?

| Package | Purpose |
|---|---|
| `sequelize` | ORM that lets JavaScript communicate with the database |
| `pg` | PostgreSQL driver used by Sequelize |
| `pg-hstore` | Support package used by Sequelize with PostgreSQL |
| `dotenv` | Loads environment variables from `.env` |
| `express` | Creates our backend server |
| `jest` | Runs automated tests |
| `supertest` | Tests HTTP requests to our server |

### Important idea

You need both:

```bash
sequelize
```

and:

```bash
pg
```

Sequelize is the tool we use in JavaScript.

PostgreSQL is the actual database.

`pg` is the driver that allows Sequelize to communicate with PostgreSQL.

Think of it like this:

```text
JavaScript Backend
       |
       ↓
   Sequelize
       |
       ↓
      pg
       |
       ↓
 PostgreSQL
       |
       ↓
   Database
```

---

# 2. What Is PostgreSQL?

**PostgreSQL** is a relational database.

A database stores information for our application.

For example, imagine we are building an API for people.

Our database might contain:

```text
people

id | name        | age
---|-------------|----
1  | Alice       | 25
2  | Bob         | 31
3  | Charlie     | 22
```

PostgreSQL stores this information.

It organizes information into:

- databases
- tables
- columns
- rows
- relationships

---

# 3. What Is Sequelize?

Sequelize is an **ORM**.

ORM means:

> Object-Relational Mapping

That sounds complicated, but the basic idea is simple:

> Sequelize lets us work with database tables using JavaScript.

Without Sequelize, we could write SQL directly:

```sql
SELECT * FROM people;
```

With Sequelize, we can write JavaScript:

```javascript
const people = await Person.findAll();
```

Sequelize translates our JavaScript request into SQL that PostgreSQL understands.

Think:

```text
JavaScript
    ↓
Sequelize
    ↓
SQL
    ↓
PostgreSQL
```

---

# 4. Why Use Sequelize?

Without an ORM, our application might contain lots of SQL:

```javascript
const result = await db.query(
  'SELECT * FROM people WHERE id = $1',
  [id]
);
```

Sequelize lets us write:

```javascript
const person = await Person.findByPk(id);
```

This can make our backend code easier to read and organize.

Sequelize also gives us:

- Models
- Schemas
- Validation
- Relationships
- CRUD methods
- Database connections
- SQL generation

---

# 5. The Most Important Concept

There are three different things students often confuse:

```text
PostgreSQL
     ↓
Database

Sequelize
     ↓
JavaScript ↔ Database translator

Model
     ↓
JavaScript representation of a database table
```

For example:

```text
PostgreSQL Table
       ↓
     people
       ↓
Sequelize Model
       ↓
     Person
       ↓
JavaScript code
```

---

# 6. How Our Backend Is Organized

A simple backend might look like this:

```text
server-from-scratch/
│
├── src/
│   ├── server.js
│   │
│   ├── models/
│   │   ├── index.js
│   │   └── Person.js
│   │
│   └── routes/
│       └── people.js
│
├── __tests__/
│   └── server.test.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

Each part has a job.

### `server.js`

Creates and configures the Express server.

### `models/`

Contains our Sequelize models.

### `models/index.js`

Creates the database connection and loads models.

### `Person.js`

Describes the structure of a person in the database.

### `routes/people.js`

Uses the model to perform CRUD operations.

---

# 7. Environment Variables

We should NOT put our database password directly into our JavaScript files.

Instead, create:

```text
.env
```

Example:

```env
DATABASE_URL=postgres://username:password@localhost:5432/my_database
```

Or we can store the individual pieces:

```env
DB_NAME=my_database
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

Then load them with:

```javascript
require('dotenv').config();
```

---

# 8. Connecting Sequelize to PostgreSQL

A common place for the database connection is:

```text
src/models/index.js
```

Example:

```javascript
'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;
```

Now Sequelize knows:

> "Use this PostgreSQL database."

---

# 9. What Is a Sequelize Model?

A model describes the structure of a database table.

Imagine our PostgreSQL table is:

```text
people

id
name
age
email
```

Our Sequelize model describes those columns.

Example:

```javascript
'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Person = sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Person;
```

---

# 10. Understanding the Model

This:

```javascript
sequelize.define('Person', {
```

means:

> "Create a Sequelize model called Person."

Then:

```javascript
name: {
  type: DataTypes.STRING,
}
```

means:

> "The name column stores text."

And:

```javascript
age: {
  type: DataTypes.INTEGER,
}
```

means:

> "The age column stores a whole number."

---

# 11. Common Sequelize Data Types

Some common Sequelize data types are:

```javascript
DataTypes.STRING
DataTypes.TEXT
DataTypes.INTEGER
DataTypes.FLOAT
DataTypes.BOOLEAN
DataTypes.DATE
```

Examples:

```javascript
name: DataTypes.STRING
description: DataTypes.TEXT
age: DataTypes.INTEGER
price: DataTypes.FLOAT
active: DataTypes.BOOLEAN
createdAt: DataTypes.DATE
```

---

# 12. What Does `allowNull` Mean?

Consider:

```javascript
name: {
  type: DataTypes.STRING,
  allowNull: false,
}
```

`allowNull: false` means:

> This field cannot be empty.

For example:

```javascript
{
  name: "Alice"
}
```

is valid.

But:

```javascript
{
  name: null
}
```

is not valid.

---

# 13. Primary Keys

Database tables normally need a unique identifier.

For example:

```text
id
```

A model might contain:

```javascript
id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
}
```

This means:

- `primaryKey` → uniquely identifies the record
- `autoIncrement` → PostgreSQL automatically creates the next number

So our records might look like:

```text
1 → Alice
2 → Bob
3 → Charlie
```

---

# 14. Model vs Schema

These words are related but not exactly identical.

A **schema** describes the structure of data.

For example:

```text
Person

name → STRING
age  → INTEGER
email → STRING
```

A **Sequelize model** is the JavaScript object that represents that structure and provides methods for working with the database.

Think:

```text
Schema
   ↓
Describes structure

Model
   ↓
Structure + database operations
```

---

# 15. Synchronizing Models With PostgreSQL

Sequelize can synchronize models with the database.

For example:

```javascript
await sequelize.sync();
```

This tells Sequelize to make sure the database tables exist based on our models.

For development, you may see:

```javascript
await sequelize.sync({ alter: true });
```

This attempts to update tables when the model changes.

Be careful with:

```javascript
await sequelize.sync({ force: true });
```

`force: true` can delete and recreate tables.

That can destroy existing data.

Do not casually use `force: true` on a real production database.

---

# 16. CRUD With Sequelize

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

Sequelize provides methods for all four.

---

# 17. CREATE

To create one record:

```javascript
const person = await Person.create({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
});
```

This creates a new database record.

Conceptually:

```text
Person.create()
      ↓
Sequelize
      ↓
SQL INSERT
      ↓
PostgreSQL
```

---

# 18. `create()` vs `build()`

These two methods are easy to confuse.

### `create()`

Creates the object AND saves it to the database.

```javascript
const person = await Person.create({
  name: 'Alice',
});
```

Think:

```text
create()
   ↓
build object
   ↓
save to database
```

### `build()`

Creates the Sequelize object but does NOT save it.

```javascript
const person = Person.build({
  name: 'Alice',
});
```

Then we must save it:

```javascript
await person.save();
```

So:

```javascript
Person.create()
```

is roughly like:

```javascript
const person = Person.build();

await person.save();
```

For beginners, `create()` is usually easier.

---

# 19. READ: `findAll()`

Use:

```javascript
findAll()
```

when you want multiple records.

Example:

```javascript
const people = await Person.findAll();
```

This means:

> "Give me all people."

Conceptually:

```sql
SELECT * FROM people;
```

---

# 20. READ: `findByPk()`

Use:

```javascript
findByPk()
```

when you know the primary key.

Example:

```javascript
const person = await Person.findByPk(3);
```

This means:

> "Find the person whose primary key is 3."

Conceptually:

```sql
SELECT * FROM people
WHERE id = 3;
```

---

# 21. READ: `findOne()`

Use:

```javascript
findOne()
```

when you want one record that matches a condition.

Example:

```javascript
const person = await Person.findOne({
  where: {
    email: 'alice@example.com',
  },
});
```

Think:

> "Find one person whose email matches."

---

# 22. `findOne()` vs `findAll()`

This is important.

### `findAll()`

Returns an array:

```javascript
[
  { name: 'Alice' },
  { name: 'Bob' }
]
```

### `findOne()`

Returns one object:

```javascript
{
  name: 'Alice'
}
```

Think:

```text
findAll()
   ↓
many records
   ↓
array

findOne()
   ↓
one record
   ↓
object
```

---

# 23. `findByPk()` vs `findOne()`

These are also similar.

### `findByPk()`

Use when searching by primary key:

```javascript
Person.findByPk(5);
```

### `findOne()`

Use when searching by another condition:

```javascript
Person.findOne({
  where: {
    email: 'alice@example.com',
  },
});
```

---

# 24. Filtering With `where`

Sequelize uses:

```javascript
where
```

to describe conditions.

Example:

```javascript
const people = await Person.findAll({
  where: {
    age: 25,
  },
});
```

This means:

> Find all people whose age is 25.

---

# 25. UPDATE

There are several ways to update records.

One approach is:

```javascript
const person = await Person.findByPk(1);

person.name = 'Alice Smith';

await person.save();
```

We:

1. Find the record.
2. Change a property.
3. Save it.

---

# 26. Using `update()`

We can also use:

```javascript
await Person.update(
  {
    name: 'Alice Smith',
  },
  {
    where: {
      id: 1,
    },
  }
);
```

This means:

> Update the person whose ID is 1.

---

# 27. `save()` vs `update()`

### `save()`

Usually works with an object we already retrieved or built.

```javascript
const person = await Person.findByPk(1);

person.name = 'Alice';

await person.save();
```

### `update()`

Can directly update matching database records.

```javascript
await Person.update(
  { name: 'Alice' },
  { where: { id: 1 } }
);
```

Think:

```text
save()
↓
I already have this object.
Change it.
Save it.

update()
↓
Find matching database records.
Change them.
```

---

# 28. DELETE

Use:

```javascript
destroy()
```

to delete records.

Example:

```javascript
await Person.destroy({
  where: {
    id: 1,
  },
});
```

This means:

> Delete the person whose ID is 1.

---

# 29. CRUD Cheat Sheet

| Goal | Sequelize Method |
|---|---|
| Create one record | `create()` |
| Get all records | `findAll()` |
| Get one by ID | `findByPk()` |
| Get one matching condition | `findOne()` |
| Update an object | `save()` |
| Update matching records | `update()` |
| Delete matching records | `destroy()` |
| Build without saving | `build()` |

---

# 30. How Routes Use Models

Our Express route should use the model.

Example:

```text
GET /people
```

might use:

```javascript
const people = await Person.findAll();
```

Our request flow becomes:

```text
Browser / Client
       ↓
GET /people
       ↓
Express Route
       ↓
Person.findAll()
       ↓
Sequelize
       ↓
PostgreSQL
       ↓
Database records
       ↓
Sequelize
       ↓
Express
       ↓
JSON Response
```

---

# 31. Example Route

File:

```text
src/routes/people.js
```

Example:

```javascript
'use strict';

const express = require('express');
const router = express.Router();

const Person = require('../models/Person');

// GET /people
// Return all people.
router.get('/people', async (req, res, next) => {
  try {
    const people = await Person.findAll();

    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
```

---

# 32. POST Route

A POST route can create a record.

```javascript
router.post('/people', async (req, res, next) => {
  try {
    const person = await Person.create(req.body);

    res.status(201).json(person);
  } catch (error) {
    next(error);
  }
});
```

The flow:

```text
POST /people
     ↓
req.body
     ↓
Person.create()
     ↓
Sequelize
     ↓
PostgreSQL
     ↓
New record
     ↓
JSON response
```

---

# 33. GET By ID

```javascript
router.get('/people/:id', async (req, res, next) => {
  try {
    const person = await Person.findByPk(req.params.id);

    if (!person) {
      return res.status(404).json({
        error: 'Person not found',
      });
    }

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
});
```

Notice:

```javascript
req.params.id
```

comes from:

```text
/people/:id
```

For:

```text
GET /people/3
```

we get:

```javascript
req.params.id
```

which is:

```text
3
```

---

# 34. PUT Route

A PUT route can update a record.

```javascript
router.put('/people/:id', async (req, res, next) => {
  try {
    const person = await Person.findByPk(req.params.id);

    if (!person) {
      return res.status(404).json({
        error: 'Person not found',
      });
    }

    await person.update(req.body);

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
});
```

The important Sequelize method here is:

```javascript
person.update()
```

---

# 35. DELETE Route

```javascript
router.delete('/people/:id', async (req, res, next) => {
  try {
    const person = await Person.findByPk(req.params.id);

    if (!person) {
      return res.status(404).json({
        error: 'Person not found',
      });
    }

    await person.destroy();

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});
```

The important Sequelize method is:

```javascript
person.destroy();
```

---

# 36. Why Do We Use `async` and `await`?

Database operations take time.

For example:

```javascript
const people = await Person.findAll();
```

The application has to:

```text
Ask PostgreSQL
     ↓
Wait for PostgreSQL
     ↓
Receive data
```

That is why Sequelize methods commonly use:

```javascript
async
await
```

Example:

```javascript
async function getPeople() {
  const people = await Person.findAll();

  return people;
}
```

---

# 37. Why Do We Use `try/catch`?

Database operations can fail.

For example:

- Database is offline
- Wrong password
- Invalid data
- Database connection failed
- SQL error
- Constraint violation

So we commonly write:

```javascript
try {
  const people = await Person.findAll();

  res.json(people);
} catch (error) {
  next(error);
}
```

This allows our Express error-handling middleware to handle the problem.

---

# 38. Sequelize + Express + PostgreSQL

The three major pieces work together:

```text
                 BACKEND SERVER

             Express
                │
                ↓
             Routes
                │
                ↓
          Sequelize Model
                │
                ↓
             Sequelize
                │
                ↓
                pg
                │
                ↓
            PostgreSQL
                │
                ↓
              Tables
```

Each tool has a different job.

### Express

Handles HTTP requests.

### Routes

Decide what should happen for each URL.

### Sequelize

Provides JavaScript methods for working with the database.

### `pg`

Allows Sequelize to communicate with PostgreSQL.

### PostgreSQL

Actually stores the data.

---

# 39. What Happens During a GET Request?

Suppose the client sends:

```http
GET /people
```

Our server receives it.

```text
1. Browser sends GET request
             ↓
2. Express receives request
             ↓
3. Express matches /people route
             ↓
4. Route calls Person.findAll()
             ↓
5. Sequelize creates SQL
             ↓
6. PostgreSQL executes SQL
             ↓
7. PostgreSQL returns rows
             ↓
8. Sequelize converts rows into objects
             ↓
9. Express sends JSON
             ↓
10. Browser receives response
```

This is one of the most important backend concepts to understand.

---

# 40. Using Sequelize in the Terminal

Sequelize is primarily used by our JavaScript application.

However, we also use terminal commands to install packages, run our application, and manage databases.

Install Sequelize:

```bash
npm install sequelize
```

Install PostgreSQL support:

```bash
npm install pg pg-hstore
```

Install dotenv:

```bash
npm install dotenv
```

Check installed packages:

```bash
npm list sequelize
```

Check PostgreSQL:

```bash
psql --version
```

Start your backend:

```bash
npm start
```

Or:

```bash
node src/server.js
```

Run tests:

```bash
npm test
```

---

# 41. PostgreSQL Terminal Commands

If PostgreSQL is installed, you may use:

```bash
psql
```

to open the PostgreSQL command-line interface.

List databases:

```sql
\l
```

Connect to a database:

```sql
\c my_database
```

List tables:

```sql
\dt
```

Describe a table:

```sql
\d people
```

Exit PostgreSQL:

```sql
\q
```

---

# 42. Sequelize CLI

Sequelize also has a command-line tool.

Install it as a development dependency:

```bash
npm install --save-dev sequelize-cli
```

Then you can use:

```bash
npx sequelize-cli
```

You may see commands for:

- migrations
- models
- seeders
- database creation

For example:

```bash
npx sequelize-cli model:generate \
--name Person \
--attributes name:string,age:integer,email:string
```

This can generate model and migration files.

---

# 43. What Is a Migration?

A migration is a version-controlled description of a database change.

For example:

```text
Version 1
Create people table

       ↓

Version 2
Add email column

       ↓

Version 3
Add age column
```

Instead of manually changing the database, we record the changes in migration files.

This becomes especially important when working with a team.

---

# 44. Models vs Migrations

Students often confuse these.

### Model

Describes how our JavaScript application works with the data.

```text
Person.js
```

### Migration

Describes a change to the actual database structure.

```text
create-person.js
```

Think:

```text
MODEL
"What does a Person look like to my application?"

MIGRATION
"What change should happen to the database?"
```

---

# 45. Seeders

A seeder is used to add starting or test data.

For example:

```text
Alice
Bob
Charlie
```

A seeder can populate a database with sample records.

This is useful when students need test data.

---

# 46. Common Sequelize Mistakes

## Mistake 1: Forgetting `await`

Incorrect:

```javascript
const people = Person.findAll();
```

Correct:

```javascript
const people = await Person.findAll();
```

---

## Mistake 2: Forgetting `async`

Incorrect:

```javascript
router.get('/people', (req, res) => {
  const people = await Person.findAll();
});
```

Correct:

```javascript
router.get('/people', async (req, res) => {
  const people = await Person.findAll();
});
```

---

# 47. Mistake 3: Confusing `findAll()` With `findByPk()`

Incorrect idea:

```javascript
Person.findAll(5);
```

If you want the record with primary key 5:

```javascript
Person.findByPk(5);
```

If you want all records:

```javascript
Person.findAll();
```

---

# 48. Mistake 4: Forgetting `where`

Incorrect:

```javascript
Person.update({
  name: 'Alice',
});
```

This does not tell Sequelize which record to update.

For a model-level update:

```javascript
Person.update(
  {
    name: 'Alice',
  },
  {
    where: {
      id: 5,
    },
  }
);
```

The `where` tells Sequelize which records should change.

---

# 49. Mistake 5: Using `force: true`

Be careful with:

```javascript
sequelize.sync({ force: true });
```

This can drop tables and recreate them.

It is dangerous if you have important data.

For learning and temporary development databases, you may see it used, but understand what it does before running it.

---

# 50. Mistake 6: Database Is Not Running

You might see an error such as:

```text
ECONNREFUSED
```

This often means:

> Your application tried to connect to PostgreSQL, but PostgreSQL was not available at the expected location.

Check that PostgreSQL is running.

Then check:

```env
DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
```

---

# 51. Mistake 7: Wrong Database Credentials

If your username, password, database name, or host is wrong, Sequelize cannot connect.

Check your:

```text
.env
```

file.

Remember:

```text
.env
```

should generally NOT be committed to GitHub when it contains passwords or secrets.

Add it to:

```text
.gitignore
```

Example:

```gitignore
.env
node_modules/
```

---

# 52. A Simple Mental Model

When learning Sequelize, remember this:

```text
PostgreSQL
= The place where the data lives

Sequelize
= JavaScript tool for talking to PostgreSQL

Model
= JavaScript description of a database table

Route
= HTTP endpoint that uses the model

Express
= Web server that receives the request
```

---

# 53. Sequelize CRUD Mental Model

Memorize these first:

```javascript
// CREATE
Person.create()

// READ MANY
Person.findAll()

// READ ONE BY ID
Person.findByPk()

// READ ONE BY CONDITION
Person.findOne()

// UPDATE
person.update()
Person.update()

// DELETE
person.destroy()
Person.destroy()
```

You do NOT need to memorize every Sequelize method immediately.

Start with these.

---

# 54. Complete Request Flow

Here is the big picture:

```text
                   CLIENT
                     │
                     │ HTTP Request
                     ↓
                  EXPRESS
                     │
                     ↓
                   ROUTE
                     │
                     ↓
                SEQUELIZE
                     │
                     ↓
                  MODEL
                     │
                     ↓
               PostgreSQL
                     │
                     ↓
                  TABLE
                     │
                     ↓
                 DATABASE
                     │
                     ↓
               Return Data
                     │
                     ↓
                SEQUELIZE
                     │
                     ↓
                  EXPRESS
                     │
                     ↓
               HTTP Response
                     │
                     ↓
                   CLIENT
```

---

# 55. The Most Important Student Takeaway

Do not think of Sequelize as the database.

It is not.

```text
PostgreSQL = database
Sequelize  = ORM
pg         = PostgreSQL driver
Express    = web server
Model      = JavaScript representation of database structure
Route      = API endpoint
```

Together:

```text
Express
   ↓
Routes
   ↓
Models
   ↓
Sequelize
   ↓
pg
   ↓
PostgreSQL
```

Once you understand this flow, Sequelize becomes much less mysterious.

---

# 56. Suggested Learning Order

If this is your first time using Sequelize, learn it in this order:

### Step 1

Install:

```bash
npm install sequelize pg pg-hstore dotenv
```

### Step 2

Make sure PostgreSQL is installed and running.

### Step 3

Create a database.

### Step 4

Create your `.env` file.

### Step 5

Create the Sequelize connection.

### Step 6

Create a model.

### Step 7

Connect the model to your route.

### Step 8

Practice:

```javascript
findAll()
```

### Step 9

Practice:

```javascript
findByPk()
```

### Step 10

Practice:

```javascript
create()
```

### Step 11

Practice:

```javascript
update()
```

### Step 12

Practice:

```javascript
destroy()
```

### Step 13

Test your API with:

```text
GET
POST
PUT
DELETE
```

### Step 14

Use Jest and Supertest to automate your tests.

---

# 🧠 Final Cheat Sheet

```text
POSTGRESQL
↓
Stores the actual data

SEQUELIZE
↓
Lets JavaScript communicate with PostgreSQL

PG
↓
PostgreSQL driver used by Sequelize

MODEL
↓
Describes a database table and provides Sequelize methods

ROUTE
↓
Uses the model to respond to HTTP requests

EXPRESS
↓
Runs the backend server
```

### CRUD

```javascript
// CREATE
Person.create()

// READ
Person.findAll()
Person.findByPk()
Person.findOne()

// UPDATE
person.update()
Person.update()

// DELETE
person.destroy()
Person.destroy()
```

### Database flow

```text
HTTP Request
     ↓
Express
     ↓
Route
     ↓
Sequelize Model
     ↓
Sequelize
     ↓
pg
     ↓
PostgreSQL
     ↓
Data
     ↓
Response
```

**If you can explain that flow, you understand the foundation of using Sequelize with PostgreSQL in a Node/Express backend.**