# Mock Interview - 1

## Zip Two Service-Ticket Lists

**Topic:** Singly linked lists · Pointer reassignment

### Problem Domain

A help desk has two linked lists of open tickets: **priority** tickets and **regular** tickets. To prevent one group from being ignored, the help desk wants to alternate them: priority, regular, priority, regular, and so on. The order of tickets **within each original list** must stay the same.

### Task

Write a function named `zipLists(head1, head2)` that:

- Takes the heads of two singly linked lists.
- Returns the head of **one alternating list**, beginning with a node from `head1`.
- Keeps any leftover nodes at the end if one list is longer.
- Reuses the **existing nodes** by updating `next` references; do not create replacement data nodes or copy values into an array.
- Handles either list being empty.

**Assume:** The lists do not already share nodes. Node shape: `{ value, next }`.
