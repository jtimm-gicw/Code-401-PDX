# Linked List Diagram

```test
  HEAD
  │
  ▼

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌────────────────┐     ┌──────────────┐
│ 🍕 Pizza     │ ──► │ 🌮 Tacos     │ ──► │ 🍣 Sushi     │ ──► │ 🍦 Ice Cream   │ ──► │ 🍪 Cookies   │ ──► null
│ next ───────►│     │ next ───────►│     │ next ───────►│     │ next ─────────►│     │ next = null │
└──────────────┘     └──────────────┘     └──────────────┘     └────────────────┘     └──────────────┘
```

## Explanation

The computer starts at the **Head**, which points to the first node in the linked list *(Pizza)*. It reads the value stored in the current node, then follows the **next pointer** to move to the next node. This process repeats one node at a time until it reaches the final node, whose next pointer is null, indicating there are no more nodes to visit. *Because linked lists do not use indexes, the computer must visit each node in order to reach the end*.
