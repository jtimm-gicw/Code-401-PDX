# 🌳 Code Challenge 16: Find the Maximum Value in a Binary Tree

> **Challenge type:** Extending an Implementation
> **Branch name:** `tree-max`
> **Repository:** Your public `data-structures-and-algorithms` repository

## 🎯 Challenge Overview

**Goal:** Find the largest numeric value stored anywhere in a Binary Tree.

Extend your existing `BinaryTree` class by adding a method that searches the tree and returns its maximum value. You may assume all values in the tree are numeric.

---

## 📋 Specifications

- [ ] Read **all** instructions carefully.
- [ ] Name files, branches, classes, and methods exactly as described.
- [ ] Complete your work in your public `data-structures-and-algorithms` repository.
- [ ] Create a new branch named **`tree-max`**.
- [ ] Follow the language-specific instructions and required folder structure.
- [ ] Update the **Table of Contents** in your repository's root `README.md` with a link to this challenge's README.

## 🛠️ Challenge Setup & Execution

| Item | Requirement |
|---|---|
| **Challenge** | `tree-max` |
| **Challenge type** | Extending an Implementation |
| **Class to extend** | `BinaryTree` |
| **Method** | `findMaximumValue()` (JavaScript method naming) |
| **Arguments** | None |
| **Returns** | Number |

### Feature Task

Write a method for your **Binary Tree** class that:

1. Finds the maximum value stored anywhere in the tree.
2. Accepts **no arguments**.
3. Returns the largest numeric value.

> **Important:** A regular Binary Tree is not necessarily sorted. The largest value may appear on either side of the tree.

### 🌱 Example

```text
          10
         /  \
        5    20
       / \   / \
      30  8 15  25
```

**Expected result:** `30` — even though `30` appears in the left subtree.

---

## 📚 Submission Instructions

### 1. Prepare your challenge README

- [ ] Work in the proper folder structure for your programming language.
- [ ] Create a new README for this challenge using the [README Template](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE).
- [ ] Include a **Summary**, **Description**, **Approach & Efficiency**, and **Solution**.
- [ ] Embed an image of your completed whiteboard, following the [Whiteboarding Layout Guide](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding).
- [ ] Provide a link to your code.

### 2. Optional implementation and testing

Beyond drawing the whiteboard, you may also:

- Implement the code from your whiteboard.
- Create a proper suite of tests using the [Testing Guide](https://gicw.github.io/common_curriculum/challenges/code/testing).
- Give your algorithm to a chatbot and see whether it can generate working code and tests.

### 3. Open a pull request

Create a pull request from your **`tree-max`** branch into your repository's designated target branch (typically `main`; confirm your course's required target branch).

In your **open pull request**, paste the following checklist and check off only the work you actually completed:

```markdown
## Code Challenge 16 — Pull Request Checklist

- [ ] Top-level README Table of Contents is updated
- [ ] README for this challenge is complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
  - [ ] Picture of whiteboard
  - [ ] Link to code
- [ ] Feature tasks for this challenge are completed
- [ ] Unit tests written and passing
  - [ ] Happy Path — expected outcome
  - [ ] Expected failure
  - [ ] Edge Case (if applicable/obvious)
```

> **Note:** The original assignment text does not specify the PR's target branch. Use the branch required by your instructor or repository workflow.

### 4. Submit your completed work

1. **Copy the URL** of your open pull request.
2. Paste it into the assignment's **submission field**.
3. In the **comments box**, describe how long the assignment took.
4. Add any notes for your grader about your approach or challenges you encountered.
5. After submitting, **merge** your branch into the designated target branch and **delete** the feature branch. The pull request link will still work.

---

## ✅ Final Submission Check

Before submitting, make sure your pull request link is correct, your whiteboard image is included, and your README explains your algorithm and its efficiency.

**Remember:** The core requirement is to extend `BinaryTree` so its maximum-value method returns the largest number in the tree.
