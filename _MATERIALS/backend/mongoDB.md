# 🚀 MongoDB & Mongoose Setup Guide for Ubuntu

> A beginner-friendly guide to installing, verifying, and connecting MongoDB with Node.js using Mongoose.

---

# 📚 What You'll Learn

By the end of this guide, you will know how to:

* Verify that MongoDB is running
* Start MongoDB if it is stopped
* Connect to MongoDB using the Mongo Shell (`mongosh`)
* Configure MongoDB to start automatically
* Run MongoDB silently in the background
* Install Mongoose in a Node.js project
* Connect your Express application to MongoDB

---

# Step 1️⃣ Check if MongoDB is Running

MongoDB runs as a background service called **mongod**.

Open a terminal and run:

```bash
sudo systemctl status mongod
```

## ✅ Success

If MongoDB is running, you'll see:

```text
active (running)
```

This means MongoDB is healthy and ready to accept connections.

---

## ⚠️ Inactive

If you see:

```text
inactive (dead)
```

Start MongoDB with:

```bash
sudo systemctl start mongod
```

Then check the status again:

```bash
sudo systemctl status mongod
```

---

## ❌ Failed

If you see:

```text
failed
```

MongoDB crashed while starting.

Common causes include:

* Configuration errors
* Missing folders
* Incorrect permissions

Check the logs for more information:

```bash
sudo journalctl -u mongod
```

---

### Exit the Status Screen

Press:

```text
q
```

to return to the normal terminal prompt.

---

# Step 2️⃣ Test the Connection with Mongosh

Even if the service appears to be running, the best test is connecting to the database directly.

Run:

```bash
mongosh
```

---

## ✅ Success

You'll see a prompt similar to:

```text
test>
```

or

```text
Enterprise>
```

This confirms MongoDB is running and accepting connections.

Exit the shell:

```bash
exit
```

---

## ❌ Failure

If you see an error like:

```text
ECONNREFUSED
```

MongoDB is not accepting connections and may not have started correctly.

---

# Step 3️⃣ Enable Automatic Startup

To make MongoDB start automatically whenever Ubuntu boots:

```bash
sudo systemctl enable mongod
```

---

## Why Enable It?

Without this command:

```text
Restart Computer
      ↓
MongoDB Off
      ↓
Must Start Manually
```

With this command:

```text
Restart Computer
      ↓
MongoDB Starts Automatically
      ↓
Ready To Use
```

---

# Step 4️⃣ Run MongoDB Silently in the Background

Good news!

Once you've run:

```bash
sudo systemctl start mongod
```

and

```bash
sudo systemctl enable mongod
```

MongoDB runs automatically in the background.

You do **not** need:

* An extra terminal tab
* A running command window
* Manual startup every session

Ubuntu handles everything for you.

---

## Before

```text
Tab 1 → MongoDB
Tab 2 → Backend Server
Tab 3 → Frontend
```

## After

```text
MongoDB → Hidden Background Service

Tab 1 → Backend Server
Tab 2 → Frontend
```

Much cleaner!

---

# Step 5️⃣ Install Mongoose

Mongoose is a library that helps Node.js communicate with MongoDB.

Inside your project folder run:

```bash
npm install mongoose
```

---

## Verify Installation

You should now see:

```json
"mongoose": "^8.x.x"
```

inside your:

```text
package.json
```

---

# Step 6️⃣ Import Mongoose

At the top of your server file:

```js
import mongoose from 'mongoose';
```

---

# Step 7️⃣ Connect to MongoDB

Add this code near the top of your server:

```js
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');

console.log('Connected to MongoDB');
```

---

## What Does This Mean?

```text
mongodb://
```

Tells Node.js we're connecting to MongoDB.

```text
127.0.0.1
```

Means:

```text
This Computer
```

```text
27017
```

MongoDB's default port number.

```text
myDatabase
```

The name of the database.

MongoDB will create it automatically if it doesn't exist.

---

# Recommended Production Connection

Store your connection string in a `.env` file.

### .env

```env
MONGO_URI=mongodb://127.0.0.1:27017/myDatabase
```

### server.js

```js
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

console.log('Connected to MongoDB');
```

---

# Quick Mongoose Schema Example

```js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteLanguage: String,
  isEnrolled: Boolean
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
```

---

# Understanding the Schema

Think of a schema as a registration form.

```text
Name: _______________

Age: _______________

Favorite Language: _______________

Currently Enrolled? Yes / No
```

The questions are the:

```text
Keys
```

The answers are the:

```text
Values
```

---

## Keys Available

```js
{
  name: String,
  age: Number,
  favoriteLanguage: String,
  isEnrolled: Boolean
}
```

Keys:

* name
* age
* favoriteLanguage
* isEnrolled

---

# MongoDB + Mongoose Workflow

```text
MongoDB Running
        ↓
Node Server Starts
        ↓
Mongoose Connects
        ↓
Schemas Define Data
        ↓
Documents Saved
        ↓
Data Retrieved
```

---

# 🏁 Final Checklist

## MongoDB

* [ ] MongoDB Installed
* [ ] MongoDB Running
* [ ] `mongosh` Connects Successfully
* [ ] Automatic Startup Enabled

## Mongoose

* [ ] Installed with npm
* [ ] Imported into Project
* [ ] Connected to MongoDB
* [ ] Schema Created
* [ ] Model Exported

---

# 🎉 Congratulations!

You now have:

✅ MongoDB running on Ubuntu

✅ MongoDB automatically starting at boot

✅ Mongoose installed

✅ Node.js connected to MongoDB

✅ A schema ready to store data

You're ready to start building full-stack applications with persistent data storage!
