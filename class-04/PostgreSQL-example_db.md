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
