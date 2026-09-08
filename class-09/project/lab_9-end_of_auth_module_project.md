# 🔐 Auth Module Final Project

## 🚀 Project Overview

Create a new application using your **API Server** and **Authentication System** learnings.

Your team will be responsible for **planning, executing, and presenting** an application that showcases a **Content Management System (CMS)** using full **RESTful CRUD operations**.

---

# 🎯 The Goal and The Why

> **Time to build something cool!**

You’ve learned so much and as a class we’ve covered a lot of material.

By giving you the opportunity to **build and deploy an Auth Server**, you gain fluency, foster understanding, and put your new skills to work.

You may build something that looks and functions similar to **lab-08**, or perhaps you build something that surpasses lab-08.

Either way, the goal of this lab is to **reinforce any learnings that might need reinforcing**.

---

# ✅ Requirements

Your application must employ the following programming concepts:

* [ ] **API Auth server must be deployed.**
* [ ] A **single, backend application** is expected.
* [ ] Use of your **API server to perform database operations**.
* [ ] Use of **login/auth/ACL** to control access to your resources.

---

# 🎤 Presentation

On the due-date, your team will present a **working version of your project** to the class showcasing the following:

### Your presentation should include:

1. **General Functionality**
2. **Wiring** — quick overview
3. **Code Review**

⏱️ **Presentation Time**

Plan for approximately **15 minutes** for your team’s presentation.

> **Note:** Actual presentation time may be adjusted based on class needs.

---

# 💡 Project Ideas

## 🍦 Business Model

A business model with a specific problem domain:

### Ice Cream Shop

An ice cream shop with a loyalty program.

Possible database tables:

* Users
* Flavors
* Favorites

Some relations between these tables might make sense.

---

### 🐕 Pet Rescue

A pet rescue application that screens users and has multiple pet options, such as:

* Dogs
* Cats
* Possibly more

The application could accommodate more specific human/animal needs or preferences.

Possible database tables:

* Users
* Dogs
* Cats

These tables might have relations.

> **💡 Bonus Possibility:**
> A 3rd party API could be used to find actual adoptable pets in the user’s area.

---

# 💻 Command Line Application

A command line application that prompts a user to:

1. Create an account with a password.
2. Login with an account.
3. Edit account details.
4. Delete an account.

---

# 🌐 HTTP REST Client Clone

A clone of an **HTTP REST client** that can:

* Run requests against your API easily.
* Show the results.

---

# 📝 Notes Application

A command line application that lets you:

1. Enter a note (a sentence).
2. Store the note in a database.
3. Later get a list of your notes.

---

# 🔨 Recommended Workflow

> ### ⚠️ Reminder
>
> **Proof of life as you develop is the sustainable and logical workflow.**

Follow these steps as you build your application.

### 1. 📐 Draw a UML

Create a **UML diagram** to plan the structure of your application.

---

### 2. 📁 Document Your File Structure

Document your expected file structure.

Create files as needed.

---

### 3. 🏗️ Build Your Repo From Scratch

Build your repository from scratch using the planning you have completed.

---

### 4. 👥 Pair Program

**Pair program and do not divide & conquer.**

Get the most benefit from your teammate perspectives.

> **The goal is to work together and learn from each other.**

---

### 5. 🧪 Demonstrate Proof of Life at Every Step

At every stage, demonstrate that your application is working.

Use:

* **TDD**
* **Console logs**
* **Run your server**
* **REST client tools**

Confirm each step **before moving on to the next one**.

---

# 🔄 Development Checklist

Work through the following steps in order:

### Step 1 — Express

* [ ] Express app runs.

### Step 2 — Sequelize & Database

* [ ] Sequelize wired up.
* [ ] Database is created.

### Step 3 — Models

* [ ] Models work.
* [ ] Tables are created.

### Step 4 — Basic Authentication

* [ ] Basic auth middleware works.

### Step 5 — Bearer Authentication

* [ ] Bearer auth middleware works.

### Step 6 — User Functionality

* [ ] User functionality works.

> Now that user functionality works, create your other model routes.

### Step 7 — Model Routes

* [ ] Create other model routes.
* [ ] Confirm the routes work.

### Step 8 — RBAC

* [ ] Enforce **RBAC**.

**RBAC = Role-Based Access Control**
This controls what users are allowed to do based on their role.

### Step 9 — End-to-End Testing

* [ ] Confirm **end-to-end functionality**.

---

# 🧭 Recommended Development Path

```text
UML
 ↓
File Structure
 ↓
Build Repository
 ↓
Pair Program
 ↓
Express App Runs
 ↓
Sequelize + Database
 ↓
Models + Tables
 ↓
Basic Auth Middleware
 ↓
Bearer Auth Middleware
 ↓
User Functionality
 ↓
Other Model Routes
 ↓
RBAC
 ↓
End-to-End Functionality
 ↓
🚀 Presentation
```

---

# 🏁 Final Goal

By the end of the project, your team should have a **working, deployed application** that demonstrates:

* A backend API
* Database operations
* Authentication
* Authorization / ACL
* Role-Based Access Control (RBAC)
* Full RESTful CRUD operations
* End-to-end functionality
* A working project presentation

> **Build it. Test it. Prove it works. Then present it.** 🚀
