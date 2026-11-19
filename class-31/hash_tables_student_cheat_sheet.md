# 📘 Hash Tables — Student Cheat Sheet

**Code 401 | Data Structures & Algorithms | JavaScript**

> 🎯 **Goal:** Understand what hash tables are, how they store information, how to implement them in JavaScript, and how to explain them during a technical interview.

---

## 1. What is a hash table?

A **hash table** is a data structure that stores information as **key–value pairs**, allowing us to find information quickly using a key.

Think of a hash table like a filing cabinet:

- **Key:** The label on the folder.
- **Value:** The information inside the folder.
- **Hash function:** A rule that decides which drawer to use.
- **Bucket:** The drawer where information is stored.

### Simple example

```javascript
// Key = "Alice"
// Value = 95

grades.set("Alice", 95);
grades.get("Alice"); // 95
```

We use `"Alice"` to find her grade, `95`.

---

## 2. Important vocabulary

| Term | Simple definition |
|---|---|
| **Hash Table** | Stores information using keys and values. |
| **Key** | A name or identifier used to find data. |
| **Value** | Information connected to a key. |
| **Hash Function** | Converts a key into a bucket index. |
| **Index** | The numbered position inside an array. |
| **Bucket** | A storage location inside the table. |
| **Collision** | Two different keys get the same index. |
| **Chaining** | Stores multiple entries in the same bucket. |

---

## 3. How does hashing work?

Imagine we have **5 buckets**, numbered `0` through `4`.

```text
        KEY             HASH FUNCTION         BUCKET
       "cat"  ───────────────► 2 ─────────────► 2

       Index      Stored key–value pair
       ─────      ─────────────────────
         0        Empty
         1        Empty
     👉  2        "cat" → "Milo"
         3        Empty
         4        Empty
```

### Steps to remember

1. Give the hash function a **key**.
2. The hash function calculates an **index**.
3. Find that index in the array.
4. Store or retrieve the **key–value pair**.

> 💡 **Remember:** The same key must produce the same index when using the same hash function and table size.

---

## 4. The five required hash table methods

| Method | Purpose | Return |
|---|---|---|
| `set(key, value)` | Add or update an entry | Nothing |
| `get(key)` | Retrieve a value | Value |
| `has(key)` | Check whether a key exists | `true` or `false` |
| `keys()` | Return all keys | Array of keys |
| `hash(key)` | Calculate a bucket index | Number |

### JavaScript examples

```javascript
const grades = new Hashtable(5);

// 1. Store information.
grades.set("Amy", 95);

// 2. Retrieve information.
grades.get("Amy"); // 95

// 3. Check if a key exists.
grades.has("Amy"); // true

// 4. Retrieve every key.
grades.keys(); // ["Amy"]

// 5. Calculate an index.
grades.hash("Amy"); // 0
```

*These examples use the beginner hash function shown below.*

---

## 5. How to create a hash function

A hash function converts a string into a number that fits inside the table.

```javascript
hash(key) {
  let total = 0;

  // Go through every character.
  for (let i = 0; i < key.length; i++) {
    // Add the character's numeric code.
    total += key.charCodeAt(i);
  }

  // Return an index within the table.
  return total % this.size;
}
```

### Example: Hashing `"cat"`

| Character | Code |
|---|---:|
| c | 99 |
| a | 97 |
| t | 116 |
| **Total** | **312** |

Now calculate:

```text
312 % 5 = 2
```

The `%` operator is called **modulo**. It gives the remainder after division.

Our result is `2`, so `"cat"` goes into bucket `2`.

> **Note:** This is a simple teaching hash function. Real applications use stronger hash functions that spread keys more evenly.

---

## 6. What is a collision?

A **collision** happens when two different keys produce the same bucket index.

Example:

```javascript
hash("cat"); // 2
hash("act"); // 2
```

Both keys go into bucket `2`.

```text
"cat" ──┐
        ├──► Bucket 2: ["cat" → "Milo", "act" → "Action"]
"act" ──┘
```

### How do we solve collisions?

Use **separate chaining**.

Instead of replacing the first entry, store both entries inside the same bucket.

Buckets can contain linked lists or small arrays.

**Important:** Always compare the actual key, not just the index.

---

## 7. Basic implementation pattern

This example shows how to start a custom hash table using JavaScript.

```javascript
class Hashtable {
  constructor(size = 5) {
    // Create an array of buckets.
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    // Create a bucket if it doesn't exist.
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    // Update an existing key.
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    // Add a new key-value pair.
    bucket.push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return undefined;

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (const entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }

    return false;
  }

  keys() {
    const result = [];

    for (const bucket of this.buckets) {
      if (!bucket) continue;

      for (const entry of bucket) {
        result.push(entry.key);
      }
    }

    return result;
  }
}
```

*This is a simplified classroom implementation assuming valid string keys and a positive table size. For the full assignment, students should also validate inputs and throw descriptive errors when needed.*

---

## 8. Big-O: How efficient are hash tables?

**Big-O** describes how the amount of work grows when the amount of data increases.

| Method | Average | Worst case |
|---|---|---|
| `set()` | O(1) | O(n) |
| `get()` | O(1) | O(n) |
| `has()` | O(1) | O(n) |
| `keys()` | O(n) | O(n) |

These are standard estimates for well-sized hash tables with good key distribution and bounded-length keys.

- **O(1) — Constant time:** Usually finds the correct bucket quickly.
- **O(n) — Linear time:** May have to check many entries, especially when collisions happen.

For our classroom hash function, processing a key takes **O(k)**, where *k* is the number of characters in the key. Its five-bucket table also becomes slower as more entries collide, because it doesn't resize.

### Interview explanation

> "Hash tables are usually fast because the hash function tells us which bucket to search. The average lookup can be O(1). However, if many keys collide, we may need to search through several entries, making the worst case O(n)."

---

## 9. Hash Tables vs. Arrays

| Arrays | Hash Tables |
|---|---|
| Find items by numbered index | Find values using keys |
| Search by value may require a loop | Usually fast key-based lookup |
| Example: `colors[0]` | Example: `grades.get("Amy")` |
| Good for ordered collections | Good for quick lookup |

### When should you use a hash table?

Use hash tables when you need to:

- Look up information using an identifier.
- Check whether something already exists.
- Count repeated words.
- Store usernames and account information.
- Keep track of inventory or prices.

---

## 10. Technical Whiteboard Interview Checklist

Use these seven steps when solving a hash table challenge.

- [ ] **1. Problem Domain:** What am I trying to solve?
- [ ] **2. Test Cases:** What should work? What might go wrong?
- [ ] **3. Visualization:** Draw the buckets and key–value pairs.
- [ ] **4. Algorithm:** Explain the steps in plain English.
- [ ] **5. Pseudocode:** Write the steps without worrying about exact syntax.
- [ ] **6. Verification:** Walk through a normal test and a collision.
- [ ] **7. Big-O:** Explain average and worst-case performance.

---

## 11. Quick Practice Questions

**1. What does a hash function return?**

- A. A bucket index
- B. A complete array
- C. A Boolean

**2. What happens if two keys produce the same index?**

- A. The program crashes
- B. A collision occurs
- C. Both keys are deleted

**3. Which method checks whether a key exists?**

- A. `get()`
- B. `keys()`
- C. `has()`

**4. What should `set()` do when a key already exists?**

- A. Update its value
- B. Create a duplicate entry
- C. Delete the bucket

<details>
<summary>✅ Show answer key</summary>

1. **A — A bucket index:** The hash function calculates the index used to locate a bucket.
2. **B — A collision occurs:** Two different keys sharing a bucket is called a collision.
3. **C — `has()`:** It returns `true` or `false` depending on whether the key exists.
4. **A — Update its value:** Existing keys should have their values updated.

</details>

---

## ⭐ Final Review — Remember These Five Things

1. A hash table stores **key–value pairs**.
2. A hash function converts a key into a **bucket index**.
3. A collision happens when **two keys share the same bucket**.
4. `set()`, `get()`, `has()`, `keys()`, and `hash()` are the five methods you must implement.
5. Hash tables usually provide **fast lookups**, but collisions can affect performance.

> 👨‍🏫 **Teacher's tip:** Have students draw a five-bucket table, insert `"cat"` and `"act"`, and explain why both entries can exist in the same bucket. If they can explain that diagram and demonstrate how `get()` finds the correct value, they understand the most important concept behind hash tables.
