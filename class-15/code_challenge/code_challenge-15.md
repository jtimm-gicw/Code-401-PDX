# Code Challenge 15: Binary Tree and BST Implementation

## Implementation: Trees

## Specifications

- Read all of these instructions carefully.
- Name things exactly as described.
- Do all your work in your `data-structures-and-algorithms` public repository.
- Create a new branch in your repository named as noted below.
- Follow the language-specific instructions for the challenge type listed below.
- Update the **Table of Contents** in the README at the root of the repository with a link to this challenge's README file.

---

# Challenge Setup & Execution

**Branch Name:** `trees`

**Challenge Type:** New Implementation

---

# Features

## Node

Create a `Node` class that has properties for:

- The value stored in the node
- The left child node
- The right child node

---

## Binary Tree

Create a `Binary Tree` class.

Define a method for each of the following **depth-first traversals**:

- Pre Order
- In Order
- Post Order

Each depth-first traversal method should return an **array of values**, ordered appropriately.

### Traversal Order Reference

**Pre Order**

```text
ROOT → LEFT → RIGHT
```

**In Order**

```text
LEFT → ROOT → RIGHT
```

**Post Order**

```text
LEFT → RIGHT → ROOT
```

---

# Binary Search Tree

Create a `Binary Search Tree` class.

This class should be a **subclass**, or your language's equivalent, of the `Binary Tree` class.

The Binary Search Tree should include the following additional methods.

---

## Add

**Arguments:** `value`

**Returns:** Nothing

Adds a new node containing the given value in the correct location in the Binary Search Tree.

Remember the basic Binary Search Tree rule:

```text
          CURRENT NODE
           /        \
          /          \
   smaller            larger
     LEFT              RIGHT
```

---

## Contains

**Argument:** `value`

**Returns:** Boolean

Returns:

```text
true
```

if the value exists in the tree at least once.

Returns:

```text
false
```

if the value does not exist in the tree.

---

# Structure and Testing

Utilize the **Single-Responsibility Principle**.

Any methods you write should be clean, reusable, and abstract component parts of the whole challenge.

You will be given feedback and may be marked down if you attempt to define a large, complex algorithm inside one function definition.

Be sure to follow your language/framework's standard naming conventions.

For example, some languages use `PascalCasing` for class or method names.

Any exceptions or errors that come from your code should be:

- Contextual
- Descriptive
- Capture-able

For example, rather than relying only on a default error thrown by your programming language, your code should raise or throw a custom error that clearly describes what went wrong when calling the methods written for this lab.

---

# Required Tests

Write tests to prove the following functionality.

- [ ] Can successfully instantiate an empty tree.
- [ ] Can successfully instantiate a tree with a single root node.
- [ ] For a Binary Search Tree, can successfully add a left child and right child properly to a node.
- [ ] Can successfully return a collection from a Pre Order traversal.
- [ ] Can successfully return a collection from an In Order traversal.
- [ ] Can successfully return a collection from a Post Order traversal.
- [ ] Returns `true` or `false` for the `contains` method when given an existing or non-existing node value.

Ensure your tests are passing before submitting your solution.

---

# Stretch Goal

Create a new branch called:

```text
k-ary-tree
```

Using the resources available to you online, implement a **K-ary Tree**.

Unlike a Binary Tree, where each node can have at most two children, a K-ary Tree allows a node to have multiple children.

---

# Submission Instructions

## 1. Repository Structure

Work within the proper folder structure for your programming language and as dictated by the challenge instructions.

---

## 2. Create a README

Create a new README for this challenge using the provided README template:

https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE

Your README should include the required sections such as:

- Summary
- Description
- Approach & Efficiency
- Solution

---

## 3. Complete Your Whiteboard

Embed an image of your completed whiteboard.

Follow the example whiteboard layout:

https://gicw.github.io/common_curriculum/challenges/code/whiteboarding

Your whiteboard should clearly communicate how you plan to solve the problem.

---

## 4. Code and Testing

In addition to your whiteboard drawing, optionally complete the code written on your whiteboard along with a proper suite of tests.

Testing resource:

https://gicw.github.io/common_curriculum/challenges/code/testing

---

## 5. Test Your Algorithm With a Chatbot

Try giving your algorithm to a chatbot and see if it can produce working code and tests from your instructions.

This is a good way to determine whether your algorithm is clear enough for someone else to follow.

---

# Pull Request

Create a pull request from your challenge branch to the appropriate branch.

In your open pull request, comment with the following checklist.

## Pull Request Checklist

Check off the actual steps that you completed.

```text
- [ ] Top-level README "Table of Contents" is updated
- [ ] README for this challenge is complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
- [ ] Picture of whiteboard
- [ ] Link to code
- [ ] Feature tasks for this challenge are completed
- [ ] Unit tests written and passing
- [ ] "Happy Path" - Expected outcome
- [ ] Expected failure
- [ ] Edge Case (if applicable/obvious)
```

---

# Submit Your Completed Work

1. Copy the link to your **open pull request**.
2. Paste the link into the assignment submission field.
3. Leave a description in the comments box explaining **how long the assignment took you**.
4. Add any additional comments for your grader about:
   - Your process
   - Problems you encountered
   - Difficulties you had with the assignment
5. Merge your branch.
6. Delete your branch.

> **Note:** Don't worry—the pull request link will still work after the branch has been merged and deleted.

---

# 🌳 Quick Reference

```text
NODE
│
├── value
├── left
└── right


BINARY TREE
│
├── Pre Order
│     ROOT → LEFT → RIGHT
│
├── In Order
│     LEFT → ROOT → RIGHT
│
└── Post Order
      LEFT → RIGHT → ROOT


BINARY SEARCH TREE extends BINARY TREE
│
├── inherits traversal methods
│
├── add(value)
│
│     smaller → LEFT
│     larger  → RIGHT
│
└── contains(value)
      │
      ├── found     → true
      │
      └── not found → false
```

## Main Goal

By the end of this challenge, you should be able to explain the relationship:

```text
Node
  ↓
Binary Tree
  ↓
Binary Search Tree
```

A **Node** is one piece of the structure.

A **Binary Tree** connects nodes and allows us to traverse them.

A **Binary Search Tree** is a Binary Tree that adds rules for where values belong, allowing us to add and search for values more efficiently.