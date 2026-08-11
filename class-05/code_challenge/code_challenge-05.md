# 🌟 Code Challenge 5: Implementation - Singly Linked Lists

---

# 📚 Before You Begin

Please read the following resources before starting the challenge:

- 📖 Big O: Analysis of Algorithm Efficiency *(through "Linear Complexity Growth")*
- 📖 Linked Lists
- 📖 What's a Linked List, Anyway? Part 1
- 📖 What's a Linked List, Anyway? Part 2

---

# 📂 Challenge Setup

## Repository

Complete this assignment in your **public** Data Structures & Algorithms repository.

---

## 🌿 Create a New Branch

Create a new branch named:

```bash
linked-list
```

---

## 📑 Update Your Repository README

Don't forget to update the **Table of Contents** in your repository's main `README.md`.

Add a link to this challenge's README.

---

# 🏗️ Challenge Overview

Your goal is to build your **own implementation** of a **Singly Linked List**.

You are **not** using an existing library.

You are creating everything from scratch.

---

# 🧱 Part 1 — Create the Node Class

Create a class called:

```javascript
Node
```

Each Node should contain two properties.

| Property | Description |
|----------|-------------|
| `value` | Stores the data inside the node |
| `next` | Points to the next node in the linked list |

When a node is first created, its `next` property should point to:

```javascript
null
```

### Visual Example

```text
+------------------+
| value = Pizza    |
| next = null      |
+------------------+
```

---

# 🧱 Part 2 — Create the LinkedList Class

Create another class called:

```javascript
LinkedList
```

Your Linked List should have one property:

```javascript
head
```

When a new linked list is created, it should be empty.

```text
Head
 │
 ▼

null
```

---

# 🛠️ Required Methods

Your `LinkedList` class must include the following methods.

---

## 1️⃣ insert()

### Arguments

```javascript
value
```

### Returns

Nothing

### Purpose

Insert a new node **at the beginning** of the linked list.

The new node becomes the **Head**.

### Example

Before

```text
Head

 ▼

Pizza → Tacos → null
```

Insert

```javascript
insert("Sushi")
```

After

```text
Head

 ▼

Sushi → Pizza → Tacos → null
```

### Big-O Requirement

```
Time: O(1)
```

Your solution should not loop through the list.

---

## 2️⃣ includes()

### Arguments

```javascript
value
```

### Returns

```javascript
true
```

or

```javascript
false
```

### Purpose

Search the linked list to determine whether a value exists.

### Example

```javascript
includes("Pizza")
```

Returns

```javascript
true
```

---

Example

```javascript
includes("Hamburger")
```

Returns

```javascript
false
```

---

## 3️⃣ toString()

### Arguments

None

### Returns

A formatted string representing the linked list.

Required format:

```text
{ Pizza } -> { Tacos } -> { Sushi } -> NULL
```

Example

```javascript
list.toString();
```

Returns

```text
{ Pizza } -> { Tacos } -> { Sushi } -> NULL
```

---

# 🧩 Example Linked List

Your linked list might look like this:

```text
Head
 │
 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Each node stores:

- A value
- A pointer to the next node

The final node always points to:

```text
null
```

which means

> "End of the list."

---

# 🧪 Testing Requirements

Write unit tests that prove your code works correctly.

Your tests should verify the following:

---

## ✅ Empty Linked List

Can successfully create an empty linked list.

Example

```javascript
const list = new LinkedList();
```

Expected

```javascript
list.head === null
```

---

## ✅ Insert One Node

Can properly insert a node into the linked list.

---

## ✅ Head Points to the First Node

After inserting a node, the Head should point to it.

Example

```text
Head

 ▼

Pizza
```

---

## ✅ Insert Multiple Nodes

Verify multiple insertions work correctly.

Example

```text
Head

 ▼

Cookies → Ice Cream → Sushi → Pizza
```

Remember:

Each new insertion becomes the new Head.

---

## ✅ includes() Returns True

Searching for a value that exists should return:

```javascript
true
```

---

## ✅ includes() Returns False

Searching for a value that does not exist should return:

```javascript
false
```

---

## ✅ toString()

Should return every value in the list.

Example

```text
{ Cookies } -> { Ice Cream } -> { Sushi } -> { Pizza } -> NULL
```

---

# 🏛️ Code Quality Requirements

Follow the **Single Responsibility Principle**.

This means:

✅ Write small methods.

✅ Each method should have one job.

❌ Don't write one giant function that does everything.

---

# 🚨 Error Handling

If your code throws an error:

Make the error meaningful.

Good example:

```javascript
throw new Error("Cannot search an empty linked list.");
```

Avoid vague or default error messages whenever possible.

---

# ⚡ Big-O Expectations

| Method | Time Complexity |
|---------|-----------------|
| insert() | **O(1)** |
| includes() | **O(n)** |
| toString() | **O(n)** |

Be prepared to explain **why** each method has its time complexity.

---

# 🌟 Stretch Goal (Optional)

Create a **new branch** named:

```bash
doubly-linked-list
```

Then implement a **Doubly Linked List** completely from scratch.

Unlike a singly linked list, each node should contain:

```javascript
value
next
previous
```

Example

```text
null ← Pizza ⇄ Tacos ⇄ Sushi ⇄ Cookies → null
```

---

# 📤 Submission Checklist

Before submitting, make sure you've completed everything below.

## Repository

- [ ] Created the `linked-list` branch
- [ ] Updated the top-level README Table of Contents

---

## Challenge README

- [ ] Summary
- [ ] Description
- [ ] Approach & Efficiency
- [ ] Solution
- [ ] Whiteboard image included
- [ ] Link to your code

---

## Features

- [ ] Node class completed
- [ ] LinkedList class completed
- [ ] insert() completed
- [ ] includes() completed
- [ ] toString() completed

---

## Unit Tests

- [ ] Empty linked list
- [ ] Insert one node
- [ ] Insert multiple nodes
- [ ] Head points correctly
- [ ] includes() returns true
- [ ] includes() returns false
- [ ] toString() returns formatted string
- [ ] Happy Path tests
- [ ] Expected Failure tests
- [ ] Edge Cases (when appropriate)

---

# 🚀 Final Submission Steps

1. Create a Pull Request from `linked-list` into `main`.

2. Copy the Pull Request URL.

3. Submit the Pull Request link in Canvas.

4. In the submission comments include:

- ⏱️ Approximately how long the assignment took
- 💬 Any challenges you encountered
- 📝 Anything you'd like your grader to know

5. After your assignment has been graded (or according to your course workflow):

- Merge your Pull Request into `main`
- Delete the `linked-list` branch

---

# 🎉 Success Criteria

You have successfully completed this challenge when:

- ✅ Your Linked List works correctly
- ✅ All required methods are implemented
- ✅ Your unit tests pass
- ✅ Your README is complete
- ✅ Your Pull Request is submitted

---

# 💡 Instructor Tip

As you work through this challenge, **draw your linked list on paper**. Visualizing how the `head` and `next` pointers change after each `insert()` makes it much easier to understand what your code is doing. Remember, linked lists are about **connections between nodes**, not indexes like arrays.
