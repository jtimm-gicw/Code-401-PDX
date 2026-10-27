
# Code Challenge 17: Breadth-First Traversal

> **Challenge Type:** Code Challenge / Algorithm
> **Branch Name:** `tree-breadth-first`
> **Topic:** Binary Trees — Breadth-First Traversal (BFS)

---

## 📋 Specifications

- Read all of these instructions carefully.
- Name things exactly as described.
- Do all your work in your public `data-structures-and-algorithms` repository.
- Create a new branch in your repository named as noted below.
- Follow the language-specific instructions for the challenge type listed below.
- Update the **Table of Contents** in the README at the root of your repository with a link to this challenge's README file.

---

## 🚀 Challenge Setup & Execution

### Branch Name

`tree-breadth-first`

### Challenge Type

**Code Challenge / Algorithm**

---

## 🎯 Feature Tasks

Write a function called **breadth first**.

### Function Requirements

- **Function:** `breadthFirst(tree)` (JavaScript naming convention)
- **Arguments:** `tree` — a binary tree
- **Return:** A list (array) of all values in the tree, in the order they were encountered.
- **Traversal Method:** Breadth-First Traversal (BFS)

### What Your Function Must Do

1. Begin at the root of the binary tree.
2. Visit each node level by level.
3. Process nodes from left to right within each level.
4. Continue until every node has been visited.
5. Return an array containing the values in traversal order.

### Example

Given the following binary tree:

```text
         10
        /  \
       5    20
      / \   / \
     3   7 15 25
```

**Expected Output:**

```javascript
[10, 5, 20, 3, 7, 15, 25]
```

**Explanation:**

Breadth-first traversal visits the tree one level at a time:

- **Level 0:** 10
- **Level 1:** 5, 20
- **Level 2:** 3, 7, 15, 25

**Hint:** Consider using a **Queue (FIFO — First In, First Out)** to track which node should be visited next.

---

## 📝 Submission Instructions

### Step 1: Repository Setup

- Work within the proper folder structure for your programming language.
- Follow the challenge instructions for your repository.
- Create a new branch named `tree-breadth-first`.

### Step 2: Create Your Challenge README

Create a new README for this challenge using the provided:

📄 [README Template](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE)

Your README should include:

- **Summary:** Briefly explain the challenge.
- **Description:** Describe the problem you are solving.
- **Approach & Efficiency:** Explain your algorithm and its Big-O time and space complexity.
- **Solution:** Explain how your implementation solves the problem.

### Step 3: Complete Your Whiteboard

Create a whiteboard showing your approach to solving the challenge.

Your whiteboard should include:

1. Problem Domain
2. Test Cases and Edge Cases
3. Visualization / Diagram
4. Algorithm
5. Pseudocode
6. Verification with a Test Case
7. Big-O Time and Space Complexity

Use the following resource:

📄 [Whiteboarding Guide and Example Layout](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding)

**Required:** Embed an image of your completed whiteboard in your challenge README.

### Step 4: Code Implementation (Optional)

In addition to your whiteboard drawing, you may:

- Implement the code written on your whiteboard.
- Write a proper suite of tests.
- Verify that your solution produces the expected output.

📄 [Code Testing Guide](https://gicw.github.io/common_curriculum/challenges/code/testing)

### Step 5: Test Your Algorithm with AI

Try giving your algorithm to a chatbot.

Ask it to:

- Convert your algorithm into working JavaScript code.
- Generate tests to verify the solution.
- Identify potential edge cases.

Compare its implementation with your original algorithm.

---

## 🔀 Pull Request Instructions

1. Commit your work to your `tree-breadth-first` branch.
2. Push your branch to GitHub.
3. Create a pull request from your challenge branch to your repository's default branch (typically `main`).
4. Leave the pull request **OPEN** for grading.
5. Add the following checklist to your pull request description or comment.

### ✅ Pull Request Checklist

Check off only the tasks you actually completed.

#### Repository & Documentation

- [ ] Top-level README Table of Contents is updated.
- [ ] README for this challenge is complete.
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
- [ ] Picture of whiteboard is included.
- [ ] Link to code is included.

#### Feature Tasks

- [ ] Feature tasks for this challenge are completed.

#### Testing (If Implemented)

- [ ] Unit tests are written and passing.
- [ ] Happy Path — Expected outcome is tested.
- [ ] Expected failure is tested.
- [ ] Edge Case is tested (if applicable/obvious).

---

## 📤 Submit Your Completed Work

### Assignment Submission

1. Copy the link to your **OPEN pull request**.
2. Paste the link into the assignment submission field.
3. In the comments box, describe how long the assignment took you.
4. Add any additional comments for your grader, including:
   - Your problem-solving process.
   - Challenges or difficulties encountered.
   - Anything you learned while completing the challenge.

### After Submission

Once your pull request has been reviewed and graded:

1. Merge your challenge branch into your repository's default branch (`main`, unless instructed otherwise).
2. Delete your challenge branch.

**Note:** Your pull request link will still work after the branch has been merged and deleted.

---

## 💡 Key Takeaways

By completing this challenge, you should be able to:

- Explain what Breadth-First Traversal (BFS) means.
- Identify the root, left child, and right child of a binary tree.
- Demonstrate how BFS visits nodes level by level.
- Understand how a Queue (FIFO) helps with breadth-first traversal.
- Create a clear algorithm and pseudocode.
- Analyze the time and space complexity of your solution.

### Big-O Review

| Complexity | Big-O | Explanation |
|------------|-------|-------------|
| Time | O(n) | Every node is visited once. |
| Space | O(n) | Additional memory is needed to store the traversal results and queue. |

**Remember:** In a technical whiteboard interview, explaining your thought process is just as important as writing the final code.

---

**Code Challenge 17 — Breadth-First Traversal (BFS)**
**Code 401: Advanced JavaScript**
