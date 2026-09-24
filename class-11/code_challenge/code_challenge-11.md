# 🥞 Code Challenge — Queue Using Two Stacks

## `stack-queue-pseudo`

> **Challenge Type:** Code Challenge / Algorithm
> **Data Structure:** Queue + Stacks

---

# 🎯 Challenge Goal

Implement a **Queue** using **two Stack instances**.

The goal is to practice using one data structure to build another.

You will create a:

```text
PseudoQueue
```

The `PseudoQueue` will behave like a standard queue, but internally it will use:

```text
Stack 1
Stack 2
```

---

# 📋 Specifications

Read all of these instructions carefully.

## You must:

* Name things **exactly as described**.
* Do all your work in your **`data-structures-and-algorithms`** public repository.
* Create a new branch using the branch name specified below.
* Follow the language-specific instructions for your challenge type.
* Update the **Table of Contents** in the root `README` with a link to this challenge's README.

---

# 🌿 Challenge Setup

## Challenge Folder / Branch

```text
stack-queue-pseudo
```

Create your challenge work in the appropriate folder structure for your programming language.

---

# 🧠 What Are We Building?

A normal **Queue** follows:

```text
FIFO

First In
First Out
```

Think about a line at a restaurant:

```text
👤 A → 👤 B → 👤 C

First person in line
gets served first.
```

A Queue normally has:

```text
enqueue()
dequeue()
```

---

# 🥞 But There's a Catch!

For this challenge, you are **NOT allowed to use an existing Queue**.

Instead, you will create your own:

```text
PseudoQueue
```

The `PseudoQueue` must use:

```text
2 Stack instances
```

internally.

---

# 🎯 Feature Tasks

## 1. Create the `PseudoQueue` Class

Create a new class called:

```text
PseudoQueue
```

---

## 2. Do NOT Use an Existing Queue

⚠️ **IMPORTANT**

Do not use a built-in or existing Queue implementation.

You are creating the Queue behavior yourself.

Your `PseudoQueue` should use:

```text
Stack
Stack
```

---

# 🥞 Your Two Stacks

Internally, the `PseudoQueue` must utilize **two Stack instances** to create and manage the queue.

Think of them as:

```text
Stack 1                Stack 2
--------               --------
Input Stack            Output Stack
```

Your two Stack objects should be created inside the `PseudoQueue` constructor.

---

# 📦 Stack Requirements

The Stack instances have only these methods:

```text
push()
pop()
peek()
```

You should use **your own Stack implementation**.

Do not replace it with an existing data structure.

---

# 🏗️ PseudoQueue Constructor

Your `PseudoQueue` constructor should instantiate the two Stack objects.

Conceptually:

```text
PseudoQueue
     |
     +---- Stack 1
     |
     +---- Stack 2
```

The exact implementation depends on your programming language.

---

# ➕ Method 1 — `enqueue`

## Purpose

Adds a value to the PseudoQueue.

### Method

```text
enqueue
```

### Argument

```text
value
```

### What it does

Inserts a value into the `PseudoQueue`.

The enqueue operation should use a **Stack-based approach**.

---

## Example

Start with an empty PseudoQueue:

```text
PseudoQueue

[ empty ]
```

Enqueue:

```text
A
B
C
```

The Queue should represent:

```text
FRONT

A → B → C

             BACK
```

Remember:

```text
A was added first.
A must eventually be removed first.
```

---

# ➖ Method 2 — `dequeue`

## Purpose

Removes a value from the PseudoQueue.

### Method

```text
dequeue
```

### Arguments

```text
none
```

### What it does

Extracts a value from the `PseudoQueue`.

The dequeue operation should use a **Stack-based approach**.

---

# 🧠 The Big Problem to Solve

Stacks normally follow:

```text
LIFO

Last In
First Out
```

Example:

```text
     C  ← first out
     B
     A
```

But Queues follow:

```text
FIFO

First In
First Out
```

Example:

```text
A → B → C

A ← first out
```

Your challenge is to use **two LIFO Stacks** to create **FIFO Queue behavior**.

---

# 💡 Think About the Two Stacks

You can think of the two stacks as having different jobs:

```text
       PseudoQueue

      ┌──────────────┐
      │              │
      │   Stack 1    │
      │              │
      └──────────────┘
             ↓
      ┌──────────────┐
      │              │
      │   Stack 2    │
      │              │
      └──────────────┘
```

The important question you need to solve is:

> **How can moving values between two LIFO stacks produce FIFO behavior?**

---

# 🧪 Example Behavior

Suppose we enqueue:

```text
A
B
C
```

The expected Queue behavior is:

```text
enqueue(A)
enqueue(B)
enqueue(C)
```

Then:

```text
dequeue()
```

should return:

```text
A
```

The next:

```text
dequeue()
```

should return:

```text
B
```

The next:

```text
dequeue()
```

should return:

```text
C
```

Therefore:

```text
Input:

A → B → C


Output:

A
B
C
```

---

# ⚠️ !! IMPORTANT

You are **not** being asked to create a new Stack implementation for this challenge.

You should already have your own Stack implementation.

Your job is to use your Stack to build:

```text
PseudoQueue
```

---

# 🧩 Algorithm Challenge

Before writing code, work out the algorithm.

Ask yourself:

### Question 1

Where should a newly enqueued value go?

```text
Stack 1?
Stack 2?
```

### Question 2

When we dequeue, which Stack should we use?

```text
Stack 1?
Stack 2?
```

### Question 3

What happens when the Stack we need is empty?

### Question 4

How can we move values between the two Stacks?

### Question 5

How do we preserve:

```text
FIFO
```

Queue behavior?

---

# ✏️ Whiteboard First

Before coding, draw your solution.

Start with:

```text
PseudoQueue
```

Then draw:

```text
Stack 1        Stack 2
```

Show what happens when you:

```text
enqueue(A)
enqueue(B)
enqueue(C)
```

Then show:

```text
dequeue()
```

Your whiteboard should make it clear **why the first value added is the first value removed**.

---

# 🧪 Testing Requirements

Create a proper suite of tests.

Your tests should demonstrate that your `PseudoQueue` works correctly.

---

# ✅ Test 1 — Happy Path

### Expected outcome

Add several values:

```text
A
B
C
```

Then dequeue them.

Expected:

```text
A
B
C
```

This demonstrates:

```text
FIFO
```

behavior.

---

# ❌ Test 2 — Expected Failure

Test an invalid or unsupported situation where appropriate for your implementation.

Your test should demonstrate what your PseudoQueue does when the expected operation cannot be completed.

Follow the conventions of your existing test suite.

---

# ⚠️ Test 3 — Edge Case

Test an obvious edge case if applicable.

Possible examples to consider:

```text
Empty PseudoQueue
```

or:

```text
One item in the PseudoQueue
```

or:

```text
Multiple enqueue/dequeue operations
```

Choose the edge case that makes sense for your implementation.

---

# 🧪 Minimum Testing Checklist

Your tests should cover:

* [ ] Happy Path — expected outcome
* [ ] Expected Failure
* [ ] Edge Case, if applicable/obvious
* [ ] Unit tests are passing

---

# 🤖 Optional — Use a Chatbot

Try giving your algorithm to a chatbot and see if it can produce working code and tests.

### Suggested process

First create your own algorithm.

Then give the algorithm to the chatbot.

Ask it to:

```text
Turn this algorithm into working code.
```

Then:

```text
Create tests for the implementation.
```

⚠️ **Remember:**

You are responsible for understanding and testing the code.

Do not blindly submit generated code.

---

# 📝 Challenge README

Create a new README for this challenge.

Use the provided README Template:

[README Template](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE?utm_source=chatgpt.com)

Your README should include:

```text
Summary
Description
Approach & Efficiency
Solution
Whiteboard
Code
```

---

# 🧑‍🎨 Whiteboard Requirement

Embed a picture of your completed whiteboard in your challenge README.

Use the example whiteboard layout:

[Whiteboarding Example](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding?utm_source=chatgpt.com)

Your whiteboard should show your thinking process.

At minimum, demonstrate:

```text
PseudoQueue
     |
     +---- Stack 1
     |
     +---- Stack 2
```

And show how values move through the two stacks.

---

# 💻 Code Requirement

In addition to your whiteboard drawing, optionally complete the code represented on your whiteboard.

Your solution should include:

```text
PseudoQueue
enqueue()
dequeue()
```

Use your own Stack implementation.

---

# 🧪 Testing Resources

Use the testing guidance provided here:

[Testing Guide](https://gicw.github.io/common_curriculum/challenges/code/testing?utm_source=chatgpt.com)

Create a proper suite of unit tests.

---

# 📚 Root README Requirement

Update the **Table of Contents** in the root repository README.

Add a link to this challenge's README.

Your repository should make it easy to navigate to:

```text
stack-queue-pseudo
```

---

# 🔀 Pull Request

Create a pull request from your challenge branch to the required target branch.

Your open pull request should include the checklist below.

---

# ✅ Pull Request Checklist

Copy this checklist into your pull request description or comment.

```text
- [ ] Top-level README “Table of Contents” is updated

- [ ] README for this challenge is complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
  - [ ] Picture of whiteboard
  - [ ] Link to code

- [ ] Feature tasks for this challenge are completed

- [ ] Unit tests written and passing
  - [ ] Happy Path - Expected outcome
  - [ ] Expected failure
  - [ ] Edge Case (if applicable/obvious)
```

---

# 📤 Submission Instructions

When your work is complete:

## 1. Open your Pull Request

Make sure your pull request is open and contains your completed work.

---

## 2. Copy the Pull Request Link

Copy the link to your open pull request.

---

## 3. Submit the Link

Paste the Pull Request link into the assignment submission field.

---

## 4. Add Your Time

In the comments box, describe:

```text
How long did this assignment take you?
```

For example:

```text
This assignment took approximately 2 hours.
```

---

## 5. Add Additional Comments

Tell your grader about:

* Your process
* Anything you found difficult
* Problems you encountered
* Anything you learned
* Anything you would like your grader to know

---

# 🔄 Final Repository Step

After your pull request has been reviewed and you are ready to finish:

```text
Merge your branch
       ↓
into the required branch
       ↓
Delete your branch
```

⚠️ **Don't worry about deleting your branch.**

The Pull Request link will still work after the branch is deleted.

---

# 🎯 Final Student Checklist

Before submitting, make sure you can check every box:

## Repository

* [ ] Work is in the `data-structures-and-algorithms` public repository
* [ ] Correct challenge branch created
* [ ] Correct folder structure used
* [ ] Root README Table of Contents updated

## Implementation

* [ ] Created `PseudoQueue`
* [ ] Did NOT use an existing Queue
* [ ] Used two Stack instances
* [ ] Used my own Stack implementation
* [ ] Stack instances created in the PseudoQueue constructor
* [ ] Implemented `enqueue`
* [ ] Implemented `dequeue`

## README

* [ ] Challenge README created
* [ ] Summary completed
* [ ] Description completed
* [ ] Approach & Efficiency completed
* [ ] Solution included
* [ ] Whiteboard picture included
* [ ] Link to code included

## Tests

* [ ] Happy Path tested
* [ ] Expected Failure tested
* [ ] Edge Case tested, if applicable
* [ ] Unit tests pass

## Pull Request

* [ ] Pull Request created
* [ ] Checklist added
* [ ] Pull Request link copied
* [ ] Pull Request link submitted
* [ ] Time spent documented
* [ ] Additional comments added, if needed

## Final Cleanup

* [ ] Pull Request merged
* [ ] Branch deleted

---

# 🧠 What You Are Practicing

This challenge is really about understanding how one data structure can be used to create another.

```text
STACK
LIFO
Last In → First Out

        ↓
   TWO STACKS

        ↓

PSEUDOQUEUE
FIFO
First In → First Out
```

The most important question to answer is:

> **How can two LIFO Stacks work together to create FIFO Queue behavior?**

---

# 🏁 Challenge Complete!

When you can demonstrate:

```text
enqueue(A)
enqueue(B)
enqueue(C)

        ↓

dequeue() → A
dequeue() → B
dequeue() → C
```

you have demonstrated the core behavior of your `PseudoQueue`.

**Build it. Test it. Explain it. Submit it.**
