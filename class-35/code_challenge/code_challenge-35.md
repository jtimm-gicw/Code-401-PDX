# Mock Interview - 3

## Find the Maximum Value in a Binary Tree

**Topic:** Binary trees · Tree traversal · Recursion

---

### Problem Domain

A company records its daily sales totals in a **binary tree**. Each node stores a number representing the sales for one day. Each node can have up to **two children**: a left child and a right child.

At the end of the month, the sales manager wants to identify the **highest sales total** in the tree. The numbers are **not sorted**, so the largest value could be anywhere in the tree.

Your job is to search the tree and find the **maximum value** (the largest number).

### Task

Write a function named `findMaxValue(root)` that:

- Takes the **root node** of a binary tree as its argument.
- Returns the **largest numeric value** found in the tree.
- Checks **both the left and right sides** of the tree as needed to find the maximum.
- Works with **positive numbers, negative numbers, and zero**.
- Does **not change** the original tree.
- Returns `null` if the tree is empty.
- Does **not assume** the tree is a **binary search tree (BST)** or that its values are sorted.

**Assume:** Each node has this shape: `{ value, left, right }`. Every `value` is a number, and a missing child is `null`. An empty tree has a `null` root.

### Example

```text
               12
              /  \
             7    3
            / \    \
          -4  25    19
```

**Input:** The root of the binary tree shown above.

**Expected output:**

```js
25
```

**Remember:** A regular **binary tree is not necessarily sorted**. The largest value might appear on either side or at any level. For the mock interview, be prepared to explain your approach, draw the nodes you visit, discuss edge cases, and describe the **time and space complexity (Big-O)** of your solution.
