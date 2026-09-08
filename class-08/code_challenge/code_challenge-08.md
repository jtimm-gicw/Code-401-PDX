# 🔗 Code Challenge 8 — Zip Two Linked Lists

## 📋 Specifications

Read all of these instructions carefully before beginning.

- **Name things exactly as described.**
- Do all your work in your **`data-structures-and-algorithms`** public repository.
- Create a new branch in your repo named as noted below.
- Follow the language-specific instructions for the challenge type listed below.
- Update the **“Table of Contents”** in the `README` at the root of the repository with a link to this challenge’s `README` file.

---

# 🚀 Challenge Setup & Execution

### Branch Name

```text
linked-list-zip
```

### Challenge Type

**Code Challenge / Algorithm**

---

# 🎯 Feature Tasks

Write a function called:

```text
zip lists
```

### Arguments

- **2 linked lists**

### Return

- **New Linked List**, zipped as noted below.

### Requirements

- Zip the two linked lists together into one so that the nodes **alternate between the two lists**.
- Return a reference to the **zipped list**.
- Try and keep additional space down to **O(1)**.
- You have access to the `Node` class and all the properties on the `Linked List` class, as well as the methods created in previous challenges.

### 💡 Example

Given two linked lists:

```text
List 1: 1 → 3 → 2
List 2: 5 → 9 → 4
```

The zipped list should be:

```text
1 → 5 → 3 → 9 → 2 → 4
```

The nodes alternate between the two linked lists.

---

# 🧪 Unit Tests

On this, and all future challenges, write tests for any cases that help you ensure your code is working as expected.

Think through different **edge cases** to determine what tests will ensure your code is covered.

Your tests should include cases such as:

- **Happy Path** — Expected outcome
- **Expected Failure**
- **Edge Case** — if applicable/obvious

---

# 🌟 Stretch Goal

Once you’ve achieved a working solution, implement another function that:

> Merges two sorted linked lists into a single sorted linked list.

---

# 📤 Submission Instructions

## 1. 📁 Follow the Folder Structure

Work within the proper folder structure for your language, and as dictated by the challenge instructions.

---

## 2. 📝 Create a README

Create a new `README` for this challenge.

Use the **README Template** provided:

[README TEMPLATE](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE?utm_source=chatgpt.com)

---

## 3. 🧑‍💻 Complete the Whiteboard

Embed an image of your completed whiteboard.

Your whiteboard should match the example whiteboard layout:

[Whiteboarding Example](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding?utm_source=chatgpt.com)

---

## 4. 💻 Complete the Code & Tests

In addition to whiteboard drawing, optionally complete the code written on your whiteboard, along with a proper suite of tests.

[Testing Instructions](https://gicw.github.io/common_curriculum/challenges/code/testing?utm_source=chatgpt.com)

---

## 5. 🤖 Try a Chatbot

Try giving your algorithm to a chatbot and see if it can produce working code and tests.

---

# 🔀 Pull Request

Create a pull request from your branch to the **`________`** branch.

In your open pull request, comment with the following checklist of tasks.

> **Check off the actual steps that you completed.**

### ✅ Pull Request Checklist

- [ ] Top-level README **“Table of Contents”** is updated
- [ ] README for this challenge is complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
  - [ ] Picture of whiteboard
  - [ ] Link to code
- [ ] Feature tasks for this challenge are completed
- [ ] Unit tests written and passing
- [ ] **“Happy Path”** — Expected outcome
- [ ] **Expected failure**
- [ ] **Edge Case** — if applicable/obvious

---

# 📮 Submit Your Completed Work

Once your work is complete:

### 1. Submit the Pull Request

Copy the link to your **open pull request** and paste it into the assignment submission field.

### 2. Add Assignment Comments

Leave a description of **how long this assignment took you** in the comments box.

Add any additional comments to your grader about:

- Your process
- Any difficulties you may have had with the assignment
- Anything else you think your grader should know

---

# 🧹 Final Git Cleanup

After your work has been reviewed:

1. Merge your branch into **`________`**.
2. Delete your branch.

> **Don't worry — the PR link will still work.**

---

# 🎯 Challenge Summary

### What are you building?

A function that takes **two linked lists** and combines them by alternating their nodes.

### Key Concept

```text
List 1: A → B → C
List 2: D → E → F

          ↓ ZIP

Result:   A → D → B → E → C → F
```

### Main Goal

**Zip two linked lists together while keeping additional space at O(1).**

Good luck! 🚀
