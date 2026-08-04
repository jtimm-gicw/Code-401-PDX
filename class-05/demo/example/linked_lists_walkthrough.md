# 🍕 Linked List Walkthrough

## Step-by-Step Tutorial: From Head to `null`

---

## Learning Objective

In this activity, you'll follow a Linked List from beginning to end.

## What is a Linked List?

A **Linked List** is a collection of **Nodes** connected together in a chain.

Instead of storing everything side-by-side like an array, each node stores:

1. A value (the data)
2. A pointer (`next`) to the next node in the list

Think of it like a scavenger hunt:

- Each clue contains information.
- Each clue tells you where to find the next clue.
- The final clue says **"there are no more clues."**

That is exactly how a linked list works.

***Remember:***

A Linked List does **not** have indexes like an array.

Instead, we must start at the **Head** and follow each node one at a time until we reach **`null`**.

---

## Our Linked List

```text
Head
 │
 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Think of each food as a **Node**.

Each node knows two things:

- 🍕 Its own value
- 👉 Where the next node is

---

## Step 1 - Start at the Head

The computer always begins at the **Head**.

```text
Head
 │
 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

In JavaScript, this usually looks like:

```javascript
let current = list.head;
```

### What happened?

The variable `current` is now pointing to the **Pizza** node.

It has **not** moved anywhere yet.

It is simply standing on the very first node.

---

## Step 2 - Read the Current Node

```text
current

 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

The computer can now read the value inside the node.

```javascript
console.log(current.value);
```

Output:

```text
Pizza
```

### What happened?

The computer looked inside the Pizza node and printed its value.

It has **not moved yet**.

---

## Step 3 - Move to the Next Node

Now we tell the computer to move forward.

```javascript
current = current.next;
```

Our list now looks like this:

```text
current

          ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

### What happened?

The Pizza node contained a pointer that said:

> "The next node is Tacos."

The computer followed that pointer.

Now `current` points to **Tacos**.

---

## Step 4 - Read the Tacos Node

```text
current

          ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

```javascript
console.log(current.value);
```

Output

```text
Tacos
```

### What happened?

The computer printed the value stored inside the Tacos node.

---

## Step 5 - Move Again

```javascript
current = current.next;
```

```text
current

                    ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

### What happened?

The Tacos node pointed to Sushi.

The computer followed the pointer.

---

## Step 6 - Read Sushi

```javascript
console.log(current.value);
```

Output

```text
Sushi
```

Current position

```text
current

                    ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

---

## Step 7 - Move Again

```javascript
current = current.next;
```

```text
current

                             ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

### What happened?

The Sushi node told the computer where Ice Cream was.

The computer followed the pointer.

---

# Step 8 - Read Ice Cream

```javascript
console.log(current.value);
```

Output

```text
Ice Cream
```

---

## Step 9 - Move Again

```javascript
current = current.next;
```

```text
current

                                           ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

### What happened?

The Ice Cream node pointed to Cookies.

The computer followed the pointer.

---

## Step 10 - Read Cookies

```javascript
console.log(current.value);
```

Output

```text
Cookies
```

---

## Step 11 - Move One Last Time

```javascript
current = current.next;
```

```text
current

                                                     ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

### What happened?

The Cookies node was the last node.

Its `next` property contained **`null`**.

That means:

> "There are no more nodes."

Now `current` equals `null`.

---

## Step 12 - Stop the Loop

Our `while` loop looks like this:

```javascript
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
```

Now that `current` is `null`, the condition becomes:

```javascript
while (null !== null)
```

Which is:

```javascript
false
```

The loop stops.

The computer is finished traversing the linked list.

---

## Complete Walkthrough

### Start

```text
current

 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Print

```
Pizza
```

↓

Move

---

```text
current

          ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Print

```
Tacos
```

↓

Move

---

```text
current

                    ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Print

```
Sushi
```

↓

Move

---

```text
current

                             ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Print

```
Ice Cream
```

↓

Move

---

```text
current

                                           ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Print

```
Cookies
```

↓

Move

---

```text
current

                                                     ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
```

Stop!

`current` is now `null`.

---

## Visualizing the Journey

```text
                 START

Head
 │
 ▼

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
  ▲
 current


                 STEP 2

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
          ▲
       current


                 STEP 3

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
                    ▲
                 current


                 STEP 4

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
                             ▲
                          current


                 STEP 5

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
                                           ▲
                                        current


                 FINISHED

Pizza → Tacos → Sushi → Ice Cream → Cookies → null
                                                     ▲
                                                  current
```

---

## Think About It 💭

Imagine you're walking across stepping stones in a river.

```text
🪨 Pizza → 🪨 Tacos → 🪨 Sushi → 🪨 Ice Cream → 🪨 Cookies
```

You can only step to the **next stone**.

You cannot jump straight to Cookies.

A Linked List works exactly the same way.

You must follow each node one at a time until you reach the end.

---

## Key Takeaways

- ✅ Every Linked List starts at the **Head**.
- ✅ `current` begins at the Head.
- ✅ `current.value` reads the data stored in the node.
- ✅ `current.next` moves to the next node.
- ✅ Every node points to the next node.
- ✅ The last node points to **`null`**.
- ✅ When `current` becomes `null`, traversal is complete.
- ✅ Linked Lists have **no indexes**, so every node must be visited in order.
