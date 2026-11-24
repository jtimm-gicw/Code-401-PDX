# Final Mock Interview

## Reverse a Delivery Route

**Topic:** Linked Lists · Pointer Reassignment · Reversing Nodes

**Difficulty:** Medium
**Interview Time:** 30 minutes

---

### Problem Domain

A delivery company stores a driver's scheduled stops in a **singly linked list**. Each node represents **one delivery location** and points to the **next stop** along the route.

Sometimes a driver needs to travel the route in the **opposite order**—starting at the final delivery location and ending at the original first stop.

The company wants to reverse the route **without creating a new linked list**. Your job is to change the connections between the existing nodes so the route can be followed backward.

### Task

Write a function named `reverseList(head)` that:

- Takes the **head node** of a singly linked list as its argument.
- **Reverses the order of the nodes** in the list.
- Returns the **new head** of the reversed list.
- Reuses the **existing nodes** by updating their `next` references; **do not create replacement data nodes**.
- Does **not copy node values into an array** or use built-in array reversal methods.
- Handles an **empty list** and a list containing **only one node**.
- Ensures the **last node** in the reversed list points to `null`.

**Assume:** Each node has this shape: `{ value, next }`. A missing next node is `null`. An empty list has a `null` head.

### Example

**Original delivery route:**

```text
HEAD
 ↓
[A] → [B] → [C] → [D] → null
```

**Input:** The head of the linked list shown above.

**Expected result:**

```text
HEAD
 ↓
[D] → [C] → [B] → [A] → null
```

**Expected return value:** A reference to the existing node containing `D` (the **new head**).

> **Remember:** In a singly linked list, each node only points to the **next** node. Be careful not to **lose access to the rest of the list** while changing those connections. During the whiteboard interview, explain your approach, draw how the pointers change, identify edge cases, test your result, and discuss the **time and space complexity (Big-O)** of your solution.

---

### Whiteboard Interview Checklist

- [ ] Explain the problem in your own words and ask clarifying questions.
- [ ] Identify test cases and edge cases.
- [ ] Draw the list before and after reversal.
- [ ] Describe your algorithm in plain English.
- [ ] Write pseudocode before writing JavaScript.
- [ ] Walk through your solution with the example.
- [ ] Explain the time and space complexity (Big-O).

**Do not look up a completed solution during the interview.** Focus on explaining your reasoning and communicating clearly with your interviewer.
