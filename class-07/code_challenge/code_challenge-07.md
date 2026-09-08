# 🌟 Code Challenge: Linked List Insertions

## 🎯 Learning Objectives

By the end of this challenge, you will be able to:

- ✅ Add new nodes to the **end** of a linked list.
- ✅ Insert nodes **before** another node.
- ✅ Insert nodes **after** another node.
- ✅ Write **unit tests** to verify your code works correctly.
- ✅ Practice writing **small, reusable methods** instead of one large function.

---

# 📚 Before You Begin

## 📝 Read Carefully

Please read **all** instructions before writing any code.

---

## 📂 Repository Requirements

Complete all work in your:

> **data-structures-and-algorithms** public GitHub repository

---

## 🌿 Create a New Branch

Branch name:

```text
linked-list-insertions
```

---

## 📖 Update Your Main README

Don't forget to update the **Table of Contents** in the root README with a link to this challenge.

---

# 🧠 Challenge Overview

You already have a Linked List.

Now you're going to make it more powerful by adding **three new methods.**

---

# ✨ Feature Tasks

## 1️⃣ append()

### Purpose

Add a new node to the **end** of the linked list.

### Arguments

```javascript
append(newValue)
```

### Example

Before

```text
head
 ↓
{1} → {3} → {2} → X
```

Call

```javascript
append(5)
```

After

```text
head
 ↓
{1} → {3} → {2} → {5} → X
```

---

### Empty List Example

Before

```text
head → X
```

Call

```javascript
append(1)
```

After

```text
head
 ↓
{1} → X
```

---

# 2️⃣ insertBefore()

### Purpose

Insert a new node **before** the **first** node containing the specified value.

### Arguments

```javascript
insertBefore(value, newValue)
```

---

### Example 1

Before

```text
head
 ↓
{1} → {3} → {2} → X
```

Call

```javascript
insertBefore(3, 5)
```

After

```text
head
 ↓
{1} → {5} → {3} → {2} → X
```

---

### Example 2

Insert before the head.

Before

```text
head
 ↓
{1} → {3} → {2}
```

Call

```javascript
insertBefore(1, 5)
```

After

```text
head
 ↓
{5} → {1} → {3} → {2}
```

---

### Example 3

Duplicate values

Before

```text
head
 ↓
{1} → {2} → {2}
```

Call

```javascript
insertBefore(2, 5)
```

After

```text
head
 ↓
{1} → {5} → {2} → {2}
```

Only the **first matching node** should be modified.

---

### Example 4

Value not found

Before

```text
head
 ↓
{1} → {3} → {2}
```

Call

```javascript
insertBefore(4, 5)
```

Result

```text
❌ Throw an exception (error)
```

---

# 3️⃣ insertAfter()

### Purpose

Insert a new node **after** the **first** node containing the specified value.

### Arguments

```javascript
insertAfter(value, newValue)
```

---

### Example 1

Before

```text
head
 ↓
{1} → {3} → {2}
```

Call

```javascript
insertAfter(3, 5)
```

After

```text
head
 ↓
{1} → {3} → {5} → {2}
```

---

### Example 2

Insert after the last node

Before

```text
head
 ↓
{1} → {3} → {2}
```

Call

```javascript
insertAfter(2, 5)
```

After

```text
head
 ↓
{1} → {3} → {2} → {5}
```

---

### Example 3

Duplicate values

Before

```text
head
 ↓
{1} → {2} → {2}
```

Call

```javascript
insertAfter(2, 5)
```

After

```text
head
 ↓
{1} → {2} → {5} → {2}
```

Only insert after the **first matching node**.

---

### Example 4

Value not found

Before

```text
head
 ↓
{1} → {3} → {2}
```

Call

```javascript
insertAfter(4, 5)
```

Result

```text
❌ Throw an exception (error)
```

---

# 🧩 Visual Summary

## append()

```text
Before

head
 ↓
A → B → C → X

append(D)

After

head
 ↓
A → B → C → D → X
```

---

## insertBefore()

```text
Before

A → B → C

insertBefore(B, X)

After

A → X → B → C
```

---

## insertAfter()

```text
Before

A → B → C

insertAfter(B, X)

After

A → B → X → C
```

---

# 🧪 Unit Tests

Write tests that prove your methods work correctly.

Your tests should verify that you can:

- ✅ Add one node to the end of the list.
- ✅ Add multiple nodes to the end.
- ✅ Insert before a middle node.
- ✅ Insert before the first node.
- ✅ Insert after a middle node.
- ✅ Insert after the last node.

---

## Don't Forget!

Your tests should include:

### 😊 Happy Path

The method works correctly.

Example:

```javascript
append(5)
```

produces

```text
1 → 2 → 5
```

---

### ❌ Expected Failure

Your code should properly handle invalid input.

Example:

```javascript
insertBefore(100, 5)
```

should throw an exception because **100** is not in the list.

---

### ⚠️ Edge Cases

Think about unusual situations.

Examples:

- empty list
- one-node list
- duplicate values
- inserting before the head
- inserting after the tail

---

# 💡 Coding Tip

Follow the **Single Responsibility Principle (SRP).**

### What is SRP?

Each method should do **one job** and do it well.

✅ Good

```javascript
findNode()
insertNode()
append()
```

❌ Avoid

```javascript
megaLinkedListMethodThatDoesEverything()
```

Small methods are:

- Easier to understand
- Easier to debug
- Easier to test
- Easier to reuse

---

# 🌟 Stretch Goal

After everything works...

Add a new method:

```javascript
delete(value)
```

### Purpose

Remove the first node containing the specified value.

Example

Before

```text
1 → 3 → 2
```

Call

```javascript
delete(3)
```

After

```text
1 → 2
```

---

# 📋 Submission Checklist

## Repository

- [ ] Use the correct folder structure
- [ ] Create a README using the provided template
- [ ] Update the main README Table of Contents

---

## README

Include:

- [ ] Summary
- [ ] Description
- [ ] Approach & Efficiency
- [ ] Solution
- [ ] Whiteboard image
- [ ] Link to your code

---

## Code

- [ ] append()
- [ ] insertBefore()
- [ ] insertAfter()

---

## Testing

- [ ] Happy Path tests
- [ ] Expected Failure tests
- [ ] Edge Case tests
- [ ] All tests passing

---

## Pull Request

Create a Pull Request from

```text
linked-list-insertions
```

➡️

```text
main
```

---

### Include this checklist in your Pull Request comment

```markdown
- [ ] Top-level README "Table of Contents" updated

- [ ] README complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
  - [ ] Whiteboard image
  - [ ] Link to code

- [ ] Feature tasks completed

- [ ] Unit tests written and passing
  - [ ] Happy Path
  - [ ] Expected Failure
  - [ ] Edge Case
```

---

# 🚀 Final Submission

Submit:

- ✅ Link to your Pull Request
- ✅ Time spent on the assignment
- ✅ Any comments for your grader
- ✅ Merge your branch into `main`
- ✅ Delete your feature branch

---

# 🏆 Success Criteria

You are finished when:

- ✅ All three methods work correctly.
- ✅ All required tests pass.
- ✅ Your README is complete.
- ✅ Your whiteboard image is included.
- ✅ Your Pull Request is submitted.

---

## 🎉 Challenge Complete!

This challenge builds on everything you've learned about linked lists so far. By the end, you'll have a linked list that can:

- ➕ Append new nodes
- ⬅️ Insert before existing nodes
- ➡️ Insert after existing nodes
- 🧪 Verify everything with automated tests
