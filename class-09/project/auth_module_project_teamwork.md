# 🍦 Auth Module Final Project

## 3-Person Team Example: Ice Cream Shop Loyalty Program

### Project Concept

Our team will build an **Ice Cream Shop Loyalty Program** using a backend API, database, authentication, authorization, and RESTful CRUD operations.

The application will allow customers to:

* Create an account
* Log in
* View ice cream flavors
* Add flavors to their favorites
* View their favorite flavors
* Manage their account
* Participate in a loyalty program

Administrators will have additional permissions for managing flavors and users.

---

# 👥 Team Members

| Team Member     | Primary Responsibility       | Secondary Responsibility   |
| --------------- | ---------------------------- | -------------------------- |
| 👤 **Person 1** | Authentication & Users       | Database                   |
| 👤 **Person 2** | Flavors & CRUD Routes        | Testing                    |
| 👤 **Person 3** | Favorites & Loyalty Features | Frontend / API Integration |

> ⚠️ **Important:** These are **primary responsibilities**, not separate projects. The team should pair program and work together throughout the project.

---

# 🗄️ Database Design

Our application will start with three main tables:

```text
┌──────────────┐
│    Users     │
├──────────────┤
│ id           │
│ username     │
│ password     │
│ email        │
│ role         │
│ points       │
└──────┬───────┘
       │
       │ has many
       │
       ▼
┌──────────────┐
│  Favorites   │
├──────────────┤
│ id           │
│ userId       │
│ flavorId     │
└──────┬───────┘
       │
       │ belongs to
       │
       ▼
┌──────────────┐
│   Flavors    │
├──────────────┤
│ id           │
│ name         │
│ description  │
│ category     │
└──────────────┘
```

### Relationships

**User → Favorites**

A user can have many favorite flavors.

```text
User
  ↓
hasMany
  ↓
Favorites
```

**Favorite → User**

Each favorite belongs to one user.

```text
Favorite
  ↓
belongsTo
  ↓
User
```

**Flavor → Favorites**

A flavor can be favorited by many users.

```text
Flavor
  ↓
hasMany
  ↓
Favorites
```

**Favorite → Flavor**

Each favorite belongs to one flavor.

```text
Favorite
  ↓
belongsTo
  ↓
Flavor
```

---

# 👤 Person 1 — Authentication & Users

## Primary Responsibilities

Person 1 takes the lead on:

* User model
* User registration
* Login
* Password handling
* Authentication middleware
* Bearer token authentication
* User routes
* User roles

### Example User Routes

| Method | Route        | Purpose           |
| ------ | ------------ | ----------------- |
| POST   | `/signup`    | Create an account |
| POST   | `/signin`    | Log in            |
| GET    | `/users`     | Get users — admin |
| GET    | `/users/:id` | Get one user      |
| PUT    | `/users/:id` | Update user       |
| DELETE | `/users/:id` | Delete user       |

### User Data Example

```text
User

id: 1
username: "jason"
email: "jason@example.com"
password: "hashed password"
role: "user"
points: 125
```

---

## Person 1's Development Checklist

* [ ] Create User model
* [ ] Create User table
* [ ] Create signup route
* [ ] Create signin route
* [ ] Hash passwords
* [ ] Create authentication middleware
* [ ] Create bearer authentication
* [ ] Add user roles
* [ ] Create user CRUD routes
* [ ] Test authentication
* [ ] Test user permissions

---

# 🍨 Person 2 — Flavors & CRUD

## Primary Responsibilities

Person 2 takes the lead on the **Ice Cream Flavors** portion of the application.

The goal is to demonstrate full RESTful CRUD operations.

### Example Flavor Routes

| Method | Route          | Purpose         |
| ------ | -------------- | --------------- |
| GET    | `/flavors`     | Get all flavors |
| GET    | `/flavors/:id` | Get one flavor  |
| POST   | `/flavors`     | Create a flavor |
| PUT    | `/flavors/:id` | Update a flavor |
| DELETE | `/flavors/:id` | Delete a flavor |

### Example Flavor Data

```text
Flavor

id: 1
name: "Mint Chocolate Chip"
description: "Mint ice cream with chocolate chips"
category: "Classic"
```

Another example:

```text
Flavor

id: 2
name: "Strawberry Cheesecake"
description: "Strawberry ice cream with cheesecake pieces"
category: "Specialty"
```

---

## Role-Based Access

Regular users might be able to:

```text
GET /flavors
GET /flavors/:id
```

Administrators might be able to:

```text
POST /flavors
PUT /flavors/:id
DELETE /flavors/:id
```

This demonstrates **RBAC — Role-Based Access Control**.

> RBAC means that a user's role determines what they are allowed to do.

---

## Person 2's Development Checklist

* [ ] Create Flavor model
* [ ] Create Flavor table
* [ ] Create flavor routes
* [ ] Implement GET
* [ ] Implement POST
* [ ] Implement PUT
* [ ] Implement DELETE
* [ ] Add authentication to protected routes
* [ ] Add RBAC
* [ ] Test flavor CRUD
* [ ] Test administrator permissions

---

# ❤️ Person 3 — Favorites & Loyalty Program

## Primary Responsibilities

Person 3 takes the lead on the **Favorites** system and loyalty program.

Users should be able to save their favorite ice cream flavors.

### Example Favorite Routes

| Method | Route            | Purpose              |
| ------ | ---------------- | -------------------- |
| GET    | `/favorites`     | Get user's favorites |
| GET    | `/favorites/:id` | Get one favorite     |
| POST   | `/favorites`     | Add a favorite       |
| PUT    | `/favorites/:id` | Update a favorite    |
| DELETE | `/favorites/:id` | Remove a favorite    |

### Example Favorite Data

```text
Favorite

id: 1
userId: 1
flavorId: 2
```

This means:

```text
Jason
  ↓
favorited
  ↓
Strawberry Cheesecake
```

---

# ⭐ Loyalty Program

The application can use the `points` field on the User table.

Example:

```text
User

username: "jason"
points: 125
```

The application could award points when a customer performs certain actions.

For example:

```text
Create account
      ↓
Earn points
      ↓
Favorite a flavor
      ↓
Earn points
      ↓
Reach loyalty level
```

Possible loyalty levels:

|  Points | Level            |
| ------: | ---------------- |
|    0–99 | 🥄 New Customer  |
| 100–249 | 🍦 Ice Cream Fan |
| 250–499 | 🍨 Super Fan     |
|    500+ | 👑 Ice Cream VIP |

> These loyalty levels are an example of how the team could extend the project. The core requirement remains the authentication, database, CRUD, and access-control functionality.

---

# 👥 How the Team Works Together

## 🚫 Don't Divide & Conquer

The project instructions specifically recommend:

> **Pair program and do not divide & conquer; Get the most benefit from teammate perspectives.**

This means Person 1 should not disappear for two days and return with authentication completely finished.

Instead, the team should work together while one person takes the lead.

---

# 🔄 Example Pair-Programming Workflow

### Session 1 — Plan Together

**All 3 people**

```text
Discuss project idea
      ↓
Draw UML
      ↓
Design database
      ↓
Plan routes
      ↓
Plan authentication
      ↓
Plan RBAC
```

Everyone should understand the overall application.

---

# 🏗️ Session 2 — Build the Foundation

**All 3 people work together**

### Person 1 leads:

```text
Express setup
User model
Authentication
```

### Person 2 contributes:

```text
Database setup
Sequelize configuration
Models
```

### Person 3 contributes:

```text
Testing setup
REST client testing
Documentation
```

Then everyone tests the application together.

---

# 🗄️ Session 3 — Database

Build and test:

```text
Users
  ↓
Favorites
  ↓
Flavors
```

Confirm:

* [ ] Database connects
* [ ] Tables are created
* [ ] Models work
* [ ] Relationships work
* [ ] Data can be created
* [ ] Data can be retrieved

---

# 🔐 Session 4 — Authentication

Person 1 leads while everyone participates.

Test:

```text
Signup
  ↓
Login
  ↓
Token
  ↓
Protected Route
```

Everyone should understand how authentication works.

---

# 🍨 Session 5 — Flavor CRUD

Person 2 leads.

Test:

```text
POST
 ↓
Create Flavor

GET
 ↓
Read Flavor

PUT
 ↓
Update Flavor

DELETE
 ↓
Delete Flavor
```

The team confirms each operation works before moving forward.

---

# ❤️ Session 6 — Favorites

Person 3 leads.

Test:

```text
Login
  ↓
Get User
  ↓
Choose Flavor
  ↓
Add Favorite
  ↓
View Favorites
  ↓
Remove Favorite
```

---

# 🛡️ Session 7 — RBAC

The entire team works together to confirm permissions.

### Regular User

```text
Can:
✓ Login
✓ View flavors
✓ Add favorites
✓ View favorites
✓ Edit own account

Cannot:
✗ Create flavors
✗ Delete flavors
✗ Manage other users
```

### Admin

```text
Can:
✓ Login
✓ View users
✓ Manage flavors
✓ Create flavors
✓ Update flavors
✓ Delete flavors
✓ Manage appropriate resources
```

---

# 🧪 Session 8 — End-to-End Testing

The team tests the entire application as a real user.

### Customer Test

```text
Create Account
      ↓
Login
      ↓
Receive Token
      ↓
View Flavors
      ↓
Choose Flavor
      ↓
Add Favorite
      ↓
View Favorites
      ↓
Check Loyalty Points
```

### Admin Test

```text
Login as Admin
      ↓
Receive Token
      ↓
View Flavors
      ↓
Create Flavor
      ↓
Update Flavor
      ↓
Delete Flavor
      ↓
Manage Appropriate Resources
```

---

# 📋 Final Project Checklist

## API & Server

* [ ] Express app runs
* [ ] API server is deployed
* [ ] Single backend application is used
* [ ] Routes work
* [ ] RESTful CRUD operations work

## Database

* [ ] Sequelize is wired up
* [ ] Database is created
* [ ] User table works
* [ ] Flavor table works
* [ ] Favorites table works
* [ ] Relationships work

## Authentication

* [ ] Signup works
* [ ] Login works
* [ ] Passwords are protected
* [ ] Basic auth middleware works
* [ ] Bearer auth middleware works
* [ ] Protected routes work

## Authorization

* [ ] User roles exist
* [ ] RBAC is enforced
* [ ] Regular users have appropriate access
* [ ] Admin users have appropriate access

## Favorites

* [ ] Users can add favorites
* [ ] Users can view favorites
* [ ] Users can remove favorites
* [ ] Favorites connect users to flavors

## Loyalty

* [ ] User loyalty points are stored
* [ ] Loyalty functionality works
* [ ] Loyalty information can be demonstrated

## Testing

* [ ] Routes tested
* [ ] Authentication tested
* [ ] Authorization tested
* [ ] CRUD tested
* [ ] Relationships tested
* [ ] End-to-end functionality confirmed

---

# 🎤 Presentation Plan — 15 Minutes

The team can divide the presentation into approximately three sections.

### 👤 Person 1 — General Functionality

**~5 minutes**

Demonstrate:

* Create account
* Login
* Authentication
* User functionality
* Loyalty program

---

### 👤 Person 2 — Wiring

**~5 minutes**

Give a quick overview of:

* Express
* Routes
* Sequelize
* Database
* Models
* Relationships
* Authentication middleware

---

### 👤 Person 3 — Code Review

**~5 minutes**

Show:

* CRUD routes
* Favorites
* RBAC
* Tests
* Important code decisions

> ⏱️ Plan for approximately **15 minutes** for the team's presentation. Actual presentation time may be adjusted based on class needs.

---

# 🚀 Final Application

By the end of the project, the application should demonstrate the complete flow:

```text
                  🍦 ICE CREAM SHOP 🍦
                          │
                          ▼
                    Create Account
                          │
                          ▼
                        Login
                          │
                          ▼
                    Authentication
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
          👤 CUSTOMER              👑 ADMIN
              │                       │
              ▼                       ▼
        View Flavors            Manage Flavors
              │                       │
              ▼                       ▼
       Add Favorites              CRUD
              │
              ▼
       Earn Loyalty Points
              │
              ▼
        Loyalty Level
```

## 🎯 The Goal

The goal is not simply to make an ice cream application.

The goal is to demonstrate that your team understands how to:

**Plan → Build → Authenticate → Authorize → Store Data → Perform CRUD → Test → Deploy → Present**

> **Build something cool, prove that it works, and be able to explain how you built it.** 🍦🚀
