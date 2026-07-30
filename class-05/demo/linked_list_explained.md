# Linked Lists Explained (ELI10)

## Class 5 - Data Structures

---

# What is a Linked List?

A **Linked List** is a collection of **Nodes** connected together in a chain.

Instead of storing everything side-by-side like an array, each node stores:

1. A value (the data)
2. A pointer (`next`) to the next node in the list

Think of it like a scavenger hunt:

- Each clue contains information.
- Each clue tells you where to find the next clue.
- The final clue says **"there are no more clues."**

That is exactly how a linked list works.

---

# Visual Diagram

```text
                    LINKED LIST

                  Head (Starting Point)
                         │
                         ▼

      ┌─────────────┐
      │ Value: Fire │
      │ Next:  ●────┼────────────────────┐
      └─────────────┘                    │
                                         ▼
                               ┌──────────────────┐
                               │ Value: Umbrella  │
                               │ Next:  ●─────────┼──────────────┐
                               └──────────────────┘              │
                                                                 ▼
                                                     ┌────────────────┐
                                                     │ Value: Water   │
                                                     │ Next:  ●───────┼────────────┐
                                                     └────────────────┘            │
                                                                                   ▼
                                                                         ┌─────────────────┐
                                                                         │ Value: Phone    │
                                                                         │ Next:  ●────────┼───────┐
                                                                         └─────────────────┘       │
                                                                                                   ▼
                                                                                           ┌─────────────┐
                                                                                           │ Value: Sail │
                                                                                           │ Next: null  │
                                                                                           └─────────────┘
```

---

# Breaking Down the Diagram

Let's look at one node.

```text
        Node

   ┌──────────────────┐
   │ value = "Fire"   │
   │                  │
   │ next = --------► │
   └──────────────────┘
```

Every node stores two things:

| Property | Purpose |
|----------|----------|
| `value` | The actual data |
| `next` | A reference (pointer) to the next node |

---

# What is the Head?

The Linked List itself only stores **one reference**:

The **Head**.

```text
Linked List

Head
 │
 ▼

Fire → Umbrella → Water → Phone → Sail → null
```

The **Head** always points to the **first node**.

Without the head, we would have no way to find the rest of the list.

---

# Why Does the Last Node Point to `null`?

The last node has nowhere else to go.

```text
Phone → Sail → null
```

`null` simply means:

> "This is the end of the list."

When our code reaches `null`, it knows to stop.

---

# How Traversal Works

Traversal means:

> Visit every node in the list.

Since linked lists do **not** have indexes, we must start at the head and follow each pointer.

## Step 1

```text
current

 ▼

Fire → Umbrella → Water → Phone → Sail → null
```

---

## Step 2

```text
current

         ▼

Fire → Umbrella → Water → Phone → Sail → null
```

---

## Step 3

```text
current

                      ▼

Fire → Umbrella → Water → Phone → Sail → null
```

---

## Step 4

```text
current

                                 ▼

Fire → Umbrella → Water → Phone → Sail → null
```

---

## Step 5

```text
current

                                          ▼

Fire → Umbrella → Water → Phone → Sail → null
```

Eventually:

```text
current = null
```

The loop stops because there are no more nodes.

---

# How Does This Code Work?

```javascript
let current = list.head;

while (current !== null) {
  console.log(current.value);
  current = current.next;
}
```

Let's look at each line.

### Start at the beginning

```javascript
let current = list.head;
```

```text
current

 ▼

Fire → Umbrella → Water → Phone → Sail
```

---

### Print the value

```javascript
console.log(current.value);
```

Prints:

```
Fire
```

---

### Move to the next node

```javascript
current = current.next;
```

Now:

```text
current

         ▼

Fire → Umbrella → Water → Phone → Sail
```

The loop repeats until `current` becomes `null`.

---

# How Adding to the Front Works

Suppose our list starts like this:

```text
Head

 ▼

Fire → Water → Phone → null
```

We create a new node.

```text
Medkit
```

Point it at the old head.

```text
Medkit → Fire → Water → Phone
```

Move the head.

```text
Head

 ▼

Medkit → Fire → Water → Phone
```

We never moved any existing nodes.

Only **two pointers changed**, making this operation **O(1)**.

---

# How Adding to the Back Works

Suppose we want to add **Anchor**.

Current list:

```text
Head

 ▼

Fire → Water → Phone → Sail → null
```

We must first find the last node.

```text
Fire
 ↓
Water
 ↓
Phone
 ↓
Sail
```

Once we're at the last node:

```text
Sail → Anchor → null
```

Final list:

```text
Head

 ▼

Fire → Water → Phone → Sail → Anchor → null
```

This takes **O(n)** because we may have to visit every node.

---

# Arrays vs. Linked Lists

## Array

```text
Index

0        1        2        3

+------+ +------+ +------+ +------+
| Fire | | Water| |Phone | | Sail |
+------+ +------+ +------+ +------+
```

Arrays let us jump directly to any index.

```javascript
array[2]
```

---

## Linked List

```text
Head

 ▼

Fire → Water → Phone → Sail → null
```

There are **no indexes**.

To reach **Phone**, we must follow every node before it.

---

# Real-Life Examples

## 🎵 Music Playlist

```text
Song 1 → Song 2 → Song 3 → Song 4
```

Each song knows which song comes next.

---

## 🌐 Browser History (Doubly Linked List)

```text
Page A ⇄ Page B ⇄ Page C ⇄ Page D
```

You can move:

- Forward
- Backward

---

## 🚂 Train Cars

```text
Engine → Car → Car → Car → Caboose
```

Each train car is connected to the next one.

---

## 📍 Navigation Route

```text
Home → Gas Station → Grocery Store → School
```

Each destination tells you where to go next.

---

# Big-O Summary

| Operation | Big-O | Why? |
|-----------|--------|------|
| Traverse | O(n) | Visit every node |
| Search | O(n) | Must walk through list |
| Add to Front | O(1) | Only update two pointers |
| Add to Back | O(n) | Must find the tail first |

---

# When Should You Use a Linked List?

Linked Lists are great when:

- ✅ You frequently insert new items.
- ✅ You frequently remove items.
- ✅ The size of your data changes often.
- ✅ You only move through data one item at a time.

Examples:

- Browser history
- Undo/Redo
- Music playlists
- Navigation routes
- Task queues
- Graphs

---

# When Should You Use an Array Instead?

Arrays are better when:

- ✅ You need fast access by index.
- ✅ You constantly access random elements.
- ✅ You rarely insert or delete data.

---

# Key Takeaways

- A **Node** stores a value and a pointer to the next node.
- A **Linked List** only remembers the first node (**Head**).
- Every node points to the next node.
- The final node points to **null**.
- Traversing means following each pointer until you reach `null`.
- Linked Lists have **no indexes**.
- Adding to the front is **O(1)**.
- Adding to the back is **O(n)** unless a tail pointer is also stored.
- Linked Lists trade fast insertion and deletion for slower searching.

---

# Mental Model to Remember

Think of a linked list like a treasure hunt.

```text
🏁 Head

 ▼

🗺️ Clue 1 → 🗺️ Clue 2 → 🗺️ Clue 3 → 🏆 Treasure → null
```

Each clue tells you where to find the next clue.

You cannot skip ahead—you must follow each clue one at a time.

That is exactly how a Linked List works.