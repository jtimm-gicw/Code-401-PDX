# 📚 Implementation: Stacks and Queues

## 📋 Specifications

* Read all of these instructions carefully.
* Name things exactly as described.
* Do all your work in a your **data-structures-and-algorithms** public repository.
* Create a new branch in your repo named as noted below.
* Follow the language-specific instructions for the challenge type listed below.
* Update the **“Table of Contents”** - in the README at the root of the repository - with a link to this challenge’s README file.

---

# 🛠️ Challenge Setup & Execution

## `stack-and-queue`

### New Implementation Features

Using a Linked List as the underlying data storage mechanism, implement both a **Stack** and a **Queue** and a **Node**.

---

# 🔗 Node

* Create a **Node** class that has properties for:

  * The value stored in the Node
  * A pointer to the next node

---

# 📚 Stack

Create a **Stack** class that has a `top` property.

It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to `top` when the stack is created.

The class should contain the following methods:

### `push`

**Arguments:** `value`

* Adds a new node with that value to the **top** of the stack.
* Must have an **O(1) Time performance**.

### `pop`

**Arguments:** none

**Returns:** the value from node from the top of the stack

* Removes the node from the top of the stack.
* Should raise exception when called on empty stack.

### `peek`

**Arguments:** none

**Returns:** Value of the node located at the top of the stack

* Should raise exception when called on empty stack.

### `is empty`

**Arguments:** none

**Returns:** Boolean indicating whether or not the stack is empty.

---

# 🚶 Queue

Create a **Queue** class that has a `front` property.

It creates an empty Queue when instantiated.

This object should be aware of a default empty value assigned to `front` when the queue is created.

The class should contain the following methods:

### `enqueue`

**Arguments:** `value`

* Adds a new node with that value to the **back** of the queue.
* Must have an **O(1) Time performance**.

### `dequeue`

**Arguments:** none

**Returns:** the value from node from the front of the queue

* Removes the node from the front of the queue.
* Should raise exception when called on empty queue.

### `peek`

**Arguments:** none

**Returns:** Value of the node located at the front of the queue

* Should raise exception when called on empty stack.

### `is empty`

**Arguments:** none

**Returns:** Boolean indicating whether or not the queue is empty.

---

## 🔗 Linked List Access

You have access to the **Node class** and all the properties on the **Linked List class**.

---

# 🧪 Structure and Testing

## Single-Responsibility Principle

Utilize the **Single-responsibility principle**:

> Any methods you write should be clean, reusable, abstract component parts to the whole challenge.

You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

---

## 🏷️ Naming Conventions

Be sure to follow your language/frameworks standard naming conventions.

For example:

> uses PascalCasing for all method and class names

---

## ⚠️ Error Handling

Any exceptions or errors that come from your code should be:

* Contextual
* Descriptive
* Capture-able

For example, rather than a default error thrown by your language, your code should raise/throw a **custom error** that describes what went wrong in calling the methods you wrote for this lab.

---

# ✅ Required Tests

Write tests to prove the following functionality:

## Stack Tests

* [ ] Can successfully push onto a stack
* [ ] Can successfully push multiple values onto a stack
* [ ] Can successfully pop off the stack
* [ ] Can successfully empty a stack after multiple pops
* [ ] Can successfully peek the next item on the stack
* [ ] Can successfully instantiate an empty stack
* [ ] Calling `pop` or `peek` on empty stack raises exception

## Queue Tests

* [ ] Can successfully enqueue into a queue
* [ ] Can successfully enqueue multiple values into a queue
* [ ] Can successfully dequeue out of a queue the expected value
* [ ] Can successfully peek into a queue, seeing the expected value
* [ ] Can successfully empty a queue after multiple dequeues
* [ ] Can successfully instantiate an empty queue
* [ ] Calling `dequeue` or `peek` on empty queue raises exception

> **Important:** Ensure your tests are passing before you submit your solution.

---

# 📤 Submission Instructions

## 📁 Project Structure

* Work within the proper folder structure for your language, and as dictated by the challenge instructions.

---

## 📝 Challenge README

Create a new README for this challenge, using the **README TEMPLATE** provided.

[README TEMPLATE](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE)

---

## 🧑‍💻 Whiteboard

Embed an image of your completed whiteboard, matching the **example whiteboard layout**.

[Whiteboarding Example](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding)

---

## 💻 Code & Tests

In addition to whiteboard drawing, optionally complete the code written on your whiteboard, along with a **proper suite of tests**.

[Testing Instructions](https://gicw.github.io/common_curriculum/challenges/code/testing)

---

## 🤖 Try a Chatbot

Try giving your algorithm to a chatbot and see if it can produce working code and test.

---

# 🔀 Pull Request

Create a pull request from your branch to the **branch**.

In your open pull request, comment with the following checklist of tasks:

> Check off the actual steps that you completed.

### 📋 Pull Request Checklist

* [ ] Top-level README **“Table of Contents”** is updated
* [ ] README for this challenge is complete

  * [ ] Summary, Description, Approach & Efficiency, Solution
  * [ ] Picture of whiteboard
  * [ ] Link to code
* [ ] Feature tasks for this challenge are completed
* [ ] Unit tests written and passing
* [ ] “Happy Path” - Expected outcome
* [ ] Expected failure
* [ ] Edge Case (if applicable/obvious)

---

# 📮 Submit Your Completed Work

## 1. Submit the Pull Request

Copy the link to your open pull request and paste it into the assignment submission field.

## 2. Assignment Time

Leave a description of how long this assignment took you in the comments box.

## 3. Additional Comments

Add any additional comments to your grader about:

* Your process
* Any difficulties you may have had with the assignment

---

# 🔀 Merge & Clean Up

Merge your branch into **` `**, and delete your branch.

> **Don’t worry, the PR link will still work.**

---

# 🎯 Final Checklist

Before considering the challenge complete, make sure you have:

* [ ] Created the required branch
* [ ] Implemented the Node class
* [ ] Implemented the Stack class
* [ ] Implemented the Queue class
* [ ] Implemented all required methods
* [ ] Used a Linked List as the underlying data storage mechanism
* [ ] Used O(1) performance where required
* [ ] Added appropriate error handling
* [ ] Written all required tests
* [ ] Confirmed all tests are passing
* [ ] Created the challenge README
* [ ] Added the whiteboard image
* [ ] Added the code link
* [ ] Updated the top-level README Table of Contents
* [ ] Created the pull request
* [ ] Completed the pull request checklist
* [ ] Submitted the PR link
* [ ] Added assignment time information
* [ ] Added any relevant comments for the grader
* [ ] Merged the branch
* [ ] Deleted the branch
