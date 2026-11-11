# Mock Interview - 2

## Breadth-First Binary Tree Traversal

**Topic:** Binary trees · Breadth-first traversal · Queues

---

### Problem Domain

A warehouse company organizes its storage locations in a **binary tree**. Each location can have up to **two connected locations**: a left child and a right child.

During a daily inspection, the warehouse team wants to visit locations **one level at a time**, starting at the main entrance (the root). At each level, they must inspect locations **from left to right** before moving down to the next level.

This visiting order is called **breadth-first traversal** (also known as *level-order traversal*).

### Task

Write a function named `breadthFirst(tree)` that:

- Takes a **binary tree** as its argument.
- Returns an **array of node values** in the order the locations are visited.
- Starts at the **root**, then visits each level **from left to right**.
- Uses a **queue** to keep track of which node to visit next.
- Does **not change** the original tree.
- Returns an **empty array** if the tree is empty.

**Assume:** The tree has a `root` property. Each node has this shape: `{ value, left, right }`. A missing child is `null`.

### Example

```text
              A
            /   \
           B     C
          / \     \
         D   E     F
```

**Input:** A binary tree with the structure shown above.

**Expected output:**

```js
['A', 'B', 'C', 'D', 'E', 'F']
```

**Remember:** Visit **across each level** before moving down. For the mock interview, be prepared to explain your approach, draw the traversal order, discuss edge cases, and describe the time and space complexity.
