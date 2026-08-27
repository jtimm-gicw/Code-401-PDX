# PostgreSQL Connection & Database Demo

---

# Part 1: Understanding the Connection Command

Let's break down this command:

```bash
psql -U postgres -h localhost -W
```

Each part has a job:

| Part | Meaning |
|---|---|
| `psql` | Start the PostgreSQL command-line program |
| `-U postgres` | Connect using the `postgres` database user |
| `-h localhost` | Connect to PostgreSQL running on this computer |
| `-W` | Ask for the user's password |

### Think of it like this

```text
psql
  |
  ├── Who am I?
  │     └── postgres
  |
  ├── Where is the server?
  │     └── localhost
  |
  └── Do I need a password?
        └── Yes
```

---

# Part 2: List Existing Databases

Once you successfully connect, you will see:

```text
postgres=#
```

PostgreSQL comes with a few databases already.

Run:

```text
\l
```

This means:

```text
\l = list databases
```

You will see something similar to:

```text
                                  List of databases
   Name    |  Owner   | Encoding | Locale Provider |   Access privileges
-----------+----------+----------+-----------------+-----------------------
 postgres  | postgres | UTF8     | libc            |
 template0 | postgres | UTF8     | libc            | =c/postgres
 template1 | postgres | UTF8     | libc            | =c/postgres
```

> **Note:** The exact output may be different on your computer.

---

# Part 3: DEMO — Create an Example Database

## 👨‍🏫 Instructor Demo

Now we will create a database that our backend application could use.

Let's create a database called:

```text
demo_db
```

While inside PostgreSQL:

```text
postgres=#
```

Run:

```sql
CREATE DATABASE demo_db;
```

You should see:

```text
CREATE DATABASE
```

🎉 **Congratulations!**

You just created a PostgreSQL database.

---

# Part 4: Verify the Database

Run:

```text
\l
```

You should now see:

```text
demo_db
```

in the database list.

---

# Part 5: Connect to the New Database

We can switch into our new database using:

```text
\c demo_db
```

You should see something similar to:

```text
You are now connected to database "class4_demo" as user "postgres".
```

Your prompt may now look like:

```text
demo_db=#
```

## Why Does the Prompt Change?

Previously:

```text
postgres=#
```

meant:

```text
You are connected to the postgres database.
```

Now:

```text
demo_db=#
```

means:

```text
You are connected to the demo_db database.
```

💡 **The prompt tells you which database you are currently working inside.**

---

# Part 6: Create a Simple Table

> **Optional Instructor Demonstration**

We can create a simple table directly inside PostgreSQL.

Run:

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER
);
```

You should see:

```text
CREATE TABLE
```

We have now created a table called:

```text
people
```

### What Did We Create?

```text
people
   |
   ├── id
   ├── name
   └── age
```

---

# Part 7: Add Example Data

Let's add a few records:

```sql
INSERT INTO people (name, age)
VALUES
  ('Alice', 25),
  ('Bob', 30),
  ('Charlie', 22);
```

You should see:

```text
INSERT 0 3
```

That means **three records were inserted**.

---

# Part 8: View the Data

Run:

```sql
SELECT * FROM people;
```

You should see something similar to:

```text
 id |  name   | age
----+---------+-----
  1 | Alice   |  25
  2 | Bob     |  30
  3 | Charlie |  22
```

> **Note:** The exact formatting may be different.

### What Happened?

We asked PostgreSQL:

```sql
SELECT * FROM people;
```

In simple terms:

```text
SELECT *
   ↓
Give me all columns

FROM people
   ↓
From the people table
```

---

# Part 9: See the Tables in the Database

Run:

```text
\dt
```

You should see something similar to:

```text
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | people | table | postgres
```

Remember:

```text
Database
   |
   └── Tables
         |
         └── Rows
```

Our example looks like:

```text
demo_db
   |
   └── people
         |
         ├── Alice
         ├── Bob
         └── Charlie
```

### The Big Picture

Think of PostgreSQL like a filing cabinet:

```text
PostgreSQL Server
       |
       ├── Database
       │      |
       │      ├── Table
       │      │     |
       │      │     ├── Row
       │      │     ├── Row
       │      │     └── Row
       │      |
       │      └── Table
       |
       └── Database
```

---

# Part 10: Test the Database from the Terminal

Exit PostgreSQL:

```text
\q
```

Now we can connect directly to our new database from the normal terminal:

```bash
psql -U postgres -h localhost -W -d demo_db
```

The additional option:

```text
-d demo_db
```

means:

```text
Connect to the demo_db database.
```

Enter your PostgreSQL password.

If successful, you should see:

```text
demo_db=#
```

---

# Part 11: Understanding Our Database Connection

We now have all the information needed to build a PostgreSQL connection string.

For our example:

```text
Username: postgres
Password: your password
Host:     localhost
Port:     5432
Database: demo_db
```

These pieces can be combined into:

```text
postgres://postgres:your_password@localhost:5432/demo_db
```

For example:

```text
postgres://postgres:eXamplePw123@localhost:5432/demo_db
```

> ⚠️ **IMPORTANT:** The password above is only an example. Do not use it as your real password.

---

# Part 12: Our `.env` File

Later, when we connect Sequelize to PostgreSQL, we can put the connection string into our `.env` file:

```env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/demo_db
```

For example:

```env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/demo_db
```

## 🔐 IMPORTANT: Do NOT Commit `.env`

Your `.env` file contains secrets.

Make sure your `.gitignore` contains:

```text
.env
```

### Never Push Your Real PostgreSQL Password to GitHub!

```text
.env
   |
   ├── DATABASE_URL
   ├── username
   └── password
          ↓
      KEEP SECRET
```

---

# Part 13: PostgreSQL Connection Cheat Sheet

## 🚀 Start PostgreSQL

```bash
sudo -u postgres psql
```

---

## 🔑 Set or Change the Password

```sql
ALTER USER postgres WITH PASSWORD 'your_password';
```

---

## 🚪 Exit PostgreSQL

```text
\q
```

---

## 🔐 Connect Using a Password

```bash
psql -U postgres -h localhost -W
```

---

## 📋 List Databases

```text
\l
```

---

## 🗄️ Create a Database

```sql
CREATE DATABASE demo_db;
```

---

## 🔌 Connect to a Database

```text
\c demo_db
```

---

## 📋 List Tables

```text
\dt
```

---

## 🏗️ Create a Table

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER
);
```

---

## 👀 View Table Data

```sql
SELECT * FROM people;
```

---

## 🚪 Exit PostgreSQL

```text
\q
```

---

# 🎯 The Big Picture

By this point, you should understand this basic flow:

```text
Terminal
   |
   | psql -U postgres -h localhost -W
   ↓
PostgreSQL Server
   |
   └── class4_demo
          |
          └── people
                |
                ├── Alice, 25
                ├── Bob, 30
                └── Charlie, 22
```

Later, Sequelize will allow our **Node/Express backend** to communicate with this PostgreSQL database using our `DATABASE_URL`.

```text
Node / Express
      |
      ↓
   Sequelize
      |
      ↓
PostgreSQL
      |
      ↓
class4_demo
      |
      ↓
people table
```

This is the connection we will build in the next part of the class.

# Part 14: PostgreSQL Command Cheat Sheet & Tables

This section is a quick reference for common PostgreSQL commands.

You will practice how to:

- Create tables
- Add rows
- View rows
- Edit rows
- Delete rows
- Edit tables
- Delete tables

---

## 🏗️ Create an Example Table

Create a `people` table:

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER
);
```

### What does this create?

```text
people
  |
  ├── id
  ├── name
  └── age
```

---

## 📋 See All Tables

```text
\dt
```

---

## 🔍 See a Table's Structure

Use:

```text
\d people
```

This shows information about the table's columns, data types, and other details.

---

# ➕ Adding Rows

## Add One Row

```sql
INSERT INTO people (name, age)
VALUES ('Alice', 25);
```

---

## Add Multiple Rows

```sql
INSERT INTO people (name, age)
VALUES
  ('Alice', 25),
  ('Bob', 30),
  ('Charlie', 22);
```

---

# 👀 Viewing Rows

## View Everything

```sql
SELECT * FROM people;
```

---

## View Specific Columns

```sql
SELECT name, age
FROM people;
```

---

## Find a Specific Row

```sql
SELECT *
FROM people
WHERE id = 2;
```

---

## Find Rows Using a Condition

```sql
SELECT *
FROM people
WHERE age > 25;
```

---

# ✏️ Editing Rows

The `UPDATE` command changes existing rows.

## Change One Row

For example, change Bob's age:

```sql
UPDATE people
SET age = 31
WHERE id = 2;
```

Check your work:

```sql
SELECT * FROM people;
```

### ⚠️ IMPORTANT

Always be careful with the `WHERE` clause.

This:

```sql
UPDATE people
SET age = 31
WHERE id = 2;
```

changes **one row**.

But this:

```sql
UPDATE people
SET age = 31;
```

changes **EVERY ROW** in the table.

---

## Change Multiple Columns

```sql
UPDATE people
SET name = 'Robert',
    age = 31
WHERE id = 2;
```

---

# 🗑️ Deleting Rows

The `DELETE` command removes rows from a table.

## Delete One Row

For example, delete the person with ID 3:

```sql
DELETE FROM people
WHERE id = 3;
```

Check your work:

```sql
SELECT * FROM people;
```

---

## Delete Multiple Specific Rows

For example, delete IDs 4, 5, and 6:

```sql
DELETE FROM people
WHERE id IN (4, 5, 6);
```

This is useful when you accidentally insert duplicate data.

---

## Delete Rows Based on a Condition

For example, delete everyone younger than 25:

```sql
DELETE FROM people
WHERE age < 25;
```

---

## ⚠️ Delete ALL Rows

This removes every row from the table:

```sql
DELETE FROM people;
```

The table itself still exists.

Think:

```text
DELETE FROM people;

people table
     |
     ├── ❌ Row
     ├── ❌ Row
     └── ❌ Row

Table still exists
```

---

# 🏗️ Editing Tables

There is an important difference between:

```text
Editing a ROW
    ↓
UPDATE
```

and:

```text
Editing a TABLE
    ↓
ALTER TABLE
```

---

## ➕ Add a Column

Add an email column:

```sql
ALTER TABLE people
ADD COLUMN email VARCHAR(255);
```

Now the table contains:

```text
people
  |
  ├── id
  ├── name
  ├── age
  └── email
```

---

## ✏️ Rename a Column

Rename `name` to `full_name`:

```sql
ALTER TABLE people
RENAME COLUMN name TO full_name;
```

---

## 🗑️ Delete a Column

Remove the `email` column:

```sql
ALTER TABLE people
DROP COLUMN email;
```

⚠️ This permanently removes the column and the data stored in it.

---

## ✏️ Change a Column's Data Type

For example:

```sql
ALTER TABLE people
ALTER COLUMN age TYPE BIGINT;
```

Be careful when changing data types because PostgreSQL may not be able to convert existing data.

---

# 🗑️ Deleting Tables

## Delete a Table

```sql
DROP TABLE people;
```

This deletes the entire table.

That means:

```text
people table
     |
     ├── columns ❌
     ├── rows ❌
     └── data ❌
```

### ⚠️ IMPORTANT

`DROP TABLE` is very different from `DELETE`.

```sql
DELETE FROM people;
```

means:

> Delete the rows, but keep the table.

While:

```sql
DROP TABLE people;
```

means:

> Delete the entire table.

---

## 🛑 Safer Table Deletion

If you aren't sure whether a table exists, you can use:

```sql
DROP TABLE IF EXISTS people;
```

This prevents PostgreSQL from throwing an error if the table doesn't exist.

---

# 🏗️ Create Another Example Table

Let's create a simple `recipes` table:

```sql
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(50),
  servings INTEGER
);
```

Add some example data:

```sql
INSERT INTO recipes (name, category, servings)
VALUES
  ('Spaghetti', 'Italian', 4),
  ('Tacos', 'Mexican', 6),
  ('Curry', 'Indian', 4);
```

View the data:

```sql
SELECT * FROM recipes;
```

---

# 🔗 Create Related Example Tables

We can also create two tables that are related.

For example:

```text
people
  |
  └── person

recipes
  |
  └── recipe
```

Create a `people` table:

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);
```

Create a `recipes` table:

```sql
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  person_id INTEGER REFERENCES people(id)
);
```

The `person_id` creates a relationship between the two tables.

```text
people
  |
  ├── id: 1
  └── name: Alice
        |
        ↓
recipes
  |
  ├── id: 1
  ├── name: Spaghetti
  └── person_id: 1
```

In simple terms:

> Alice is connected to the Spaghetti recipe.

This is the basic idea behind **database relationships and foreign keys**.

---

# 🧹 Reset an Example Table

If you want to completely start over with a table during a demonstration:

```sql
DROP TABLE IF EXISTS people;
```

Then recreate it:

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER
);
```

Add the example data again:

```sql
INSERT INTO people (name, age)
VALUES
  ('Alice', 25),
  ('Bob', 30),
  ('Charlie', 22);
```

---

# 🎯 Quick CRUD Cheat Sheet

CRUD describes the four basic things we do with data.

| CRUD | SQL Command | What It Does |
|---|---|---|
| **Create** | `INSERT` | Add rows |
| **Read** | `SELECT` | View rows |
| **Update** | `UPDATE` | Change rows |
| **Delete** | `DELETE` | Remove rows |

Think:

```text
CRUD

Create
  ↓
INSERT

Read
  ↓
SELECT

Update
  ↓
UPDATE

Delete
  ↓
DELETE
```

---

# 🧠 Table vs. Row Cheat Sheet

One of the most important things to understand is the difference between changing a **row** and changing a **table**.

### Working with Rows

```sql
INSERT INTO people ...
```

Add rows.

```sql
SELECT * FROM people;
```

Read rows.

```sql
UPDATE people ...
```

Edit rows.

```sql
DELETE FROM people ...
```

Delete rows.

---

### Working with Tables

```sql
CREATE TABLE people (...);
```

Create a table.

```sql
ALTER TABLE people ...
```

Change a table.

```sql
DROP TABLE people;
```

Delete a table.

---

# 🚨 Common Commands to Remember

```text
\l
```

List databases.

```text
\c demo_db
```

Connect to a database.

```text
\dt
```

List tables.

```text
\d people
```

Describe a table.

```text
\q
```

Quit PostgreSQL.

---

## ⭐ Most Important SQL Commands

```sql
-- Create a table
CREATE TABLE people (...);

-- Add rows
INSERT INTO people (...) VALUES (...);

-- View rows
SELECT * FROM people;

-- Edit rows
UPDATE people
SET age = 31
WHERE id = 2;

-- Delete rows
DELETE FROM people
WHERE id = 2;

-- Add a column
ALTER TABLE people
ADD COLUMN email VARCHAR(255);

-- Delete a column
ALTER TABLE people
DROP COLUMN email;

-- Delete the entire table
DROP TABLE people;
```

### Remember

```text
DATABASE
   ↓
TABLE
   ↓
ROWS
   ↓
DATA
```

And when working with SQL:

```text
INSERT  → Add data
SELECT  → Read data
UPDATE  → Change data
DELETE  → Remove data

ALTER TABLE → Change the table
DROP TABLE  → Delete the table
```

These commands form the foundation for working with PostgreSQL before connecting it to **Sequelize and a Node/Express application**.
