# 🌳 Code Challenge: Tree FizzBuzz

> **Challenge type:** Code Challenge / Algorithm
> **Branch name:** `tree-fizz-buzz`
> **Repository:** `data-structures-and-algorithms`

---

## 🎯 Challenge Overview

**Conduct “FizzBuzz” on a k-ary tree while traversing it to create a new tree.**

Visit every node in an existing tree, apply the FizzBuzz rules to its value, and build **a new tree with the same structure**. The original tree should remain unchanged.

### 🌱 What is a k-ary tree?

A **k-ary tree** is a tree data structure in which each node can have **up to `k` children**. Unlike a binary tree, which allows at most two children per node, a k-ary tree may have more.

---

## 📋 Specifications

Please read all instructions carefully before beginning.

- [ ] Read all challenge requirements.
- [ ] Use the required names exactly as described.
- [ ] Complete the work in your public `data-structures-and-algorithms` repository.
- [ ] Create a new branch named **`tree-fizz-buzz`**.
- [ ] Follow the language-specific instructions for this type of challenge.
- [ ] Update the **Table of Contents** in the repository's root `README.md` with a link to this challenge's README.

---

## 🧩 Feature Tasks

Write a function named **`fizzBuzzTree`** (JavaScript naming convention).

| Requirement | Description |
|:--|:--|
| **Input** | A k-ary tree containing number values |
| **Output** | A **new** k-ary tree containing string values |
| **Tree structure** | Preserve the original parent-child relationships |
| **Original tree** | Do not change its nodes or values |

### 🔄 FizzBuzz Rules

For each node, examine its numeric value and assign the corresponding string to the new node:

| Condition | New node value | Example |
|:--|:--|:--|
| Divisible by **both 3 and 5** | `"FizzBuzz"` | `15 → "FizzBuzz"` |
| Divisible by **3** (but not 5) | `"Fizz"` | `9 → "Fizz"` |
| Divisible by **5** (but not 3) | `"Buzz"` | `10 → "Buzz"` |
| Divisible by **neither** | Convert the number to a string | `7 → "7"` |

> 💡 **Tip:** Check divisibility by **both** 3 and 5 **first**. In JavaScript, the modulo operator `%` checks the remainder: `15 % 3 === 0` and `15 % 5 === 0`.

---

## 🌈 Example: Original Tree → New FizzBuzz Tree

<table>
<tr><th>Original k-ary tree</th><th>New FizzBuzz tree</th></tr>
<tr><td>

```text
        15
       / | \
      3  5  7
     / \
    30  8
```

</td><td>

```text
      "FizzBuzz"
       /   |   \
    "Fizz" "Buzz" "7"
     / \
"FizzBuzz" "8"
```

</td></tr>
</table>

**Notice:** Both trees have **six nodes** in the **same positions**. Only the values have changed.

### ✅ Expected Transformations

```text
15 → "FizzBuzz"
 3 → "Fizz"
 5 → "Buzz"
 7 → "7"
30 → "FizzBuzz"
 8 → "8"
```

---

## 🧪 Suggested Test Cases

| Test | Expected result |
|:--|:--|
| Empty tree | Return an empty tree |
| Tree with one node containing `3` | New root value is `"Fizz"` |
| Tree with one node containing `5` | New root value is `"Buzz"` |
| Tree with one node containing `15` | New root value is `"FizzBuzz"` |
| Tree with one node containing `7` | New root value is `"7"` |
| Tree with multiple levels | Every node is converted; structure stays the same |
| Any valid input tree | Original tree remains unchanged |

---

## 🧠 Think About Your Approach

Before writing code, consider:

1. How will you **visit every node** of the k-ary tree?
2. How will you **create a new node** for each existing node?
3. How will you **preserve the child relationships** in the new tree?
4. What should the function return if the input tree is **empty**?
5. How will you confirm that the **original tree was not changed**?

> **Hint:** A depth-first traversal (DFS) using recursion is one possible approach. You may also explore breadth-first traversal (BFS).

---

## 📈 Complexity Discussion

After implementing your solution, be ready to explain:

- **Time complexity:** How many nodes must be visited as the tree gets larger?
- **Space complexity:** How much memory is needed to build the new tree?

**Target explanation:** If the original tree has `n` nodes, visiting each node once takes **O(n) time**. A new tree with `n` nodes requires **O(n) space**.

---

## 🚀 Submission Checklist

- [ ] Created the `tree-fizz-buzz` branch.
- [ ] Implemented `fizzBuzzTree`.
- [ ] Applied all four FizzBuzz cases correctly.
- [ ] Returned a **new** k-ary tree with the same structure.
- [ ] Left the original tree unchanged.
- [ ] Tested typical and edge cases.
- [ ] Documented the approach and Big-O complexity.
- [ ] Added the challenge README to the root Table of Contents.

---

**🏁 Goal:** Demonstrate that you can traverse a tree, apply conditions to every node, and create a **new data structure** without modifying the original.
