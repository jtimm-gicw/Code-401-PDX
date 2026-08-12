# 🖊️ Technical Whiteboard Interviews

## A Beginner's Guide for Coding Students

---

## 🎯 Learning Objectives

By the end of this guide, you should be able to:

- Explain what a technical whiteboard interview is.
- Break a programming problem into smaller steps.
- Draw simple diagrams to organize your thinking.
- Create an algorithm before writing code.
- Write pseudocode.
- Verify (test) your solution.
- Explain the difference between Time Complexity and Space Complexity.

---

## What is a Technical Whiteboard Interview?

A **technical whiteboard interview** is a problem-solving exercise used during many software developer interviews.

Despite the name, you may not actually use a whiteboard. Some companies use:

- A whiteboard
- A shared online document
- A coding interview website
- A piece of paper

The goal is **not** to see if you can memorize code.

Instead, interviewers want to see **how you think through a problem.**

They want to know:

- Can you understand the problem?
- Can you explain your thinking?
- Can you organize your ideas?
- Can you solve problems one step at a time?

Think of it like showing your work in a math class.

---

## The Whiteboard Process

Successful software engineers usually follow the same general process.

```text
Understand Problem
        ↓
Create Test Cases
        ↓
Visualize the Solution
        ↓
Create an Algorithm
        ↓
Write Pseudocode
        ↓
Write JavaScript
        ↓
Verify Your Solution
        ↓
Analyze Big-O
```

---

## Example Problem

Throughout this guide we will use one simple interview question.

> Given an array of numbers, return **true** if the array contains duplicate values. Otherwise return **false**.

Example

```javascript
Input

[3, 8, 1, 8]

Output

true
```

---

### Step 1 — Problem Domain

#### What is the Problem Domain?

The **Problem Domain** is simply:

> What problem are we trying to solve?

Don't think about JavaScript yet.

First, understand what the interviewer is asking.

---

## Vocabulary

### Problem Domain

The situation or problem you are trying to solve.

Think of it like reading directions before starting a road trip.

---

### Input

The information your function receives.

Example

```javascript
[3,8,1,8]
```

---

### Output

The answer your function should return.

Example

```javascript
true
```

---

## Ask Questions

Professional developers ask questions before they start coding.

Examples:

- Can the array be empty?
- Can numbers repeat?
- Should I return true/false or the duplicate number?
- Will there always be an array?

Asking questions shows that you are thinking carefully.

---

### Step 2 — Test Cases

#### What is a Test Case?

A **Test Case** is simply an example.

It lets you check whether your solution works correctly.

Think of it like checking your homework with an answer key.

---

## Vocabulary

### Test Case

An example input and its expected output.

---

## Good Test Cases

### Example 1

```javascript
Input

[3,8,1,8]

Output

true
```

---

### Example 2

```javascript
Input

[5,2,9]

Output

false
```

---

### Example 3

```javascript
Input

[]

Output

false
```

---

### Example 4

```javascript
Input

[7]

Output

false
```

---

## Why Create Multiple Test Cases?

Different examples help us catch mistakes before writing code.

Good programmers test lots of situations—not just one.

---

### Step 3 — Visualize the Solution

#### Why Draw Pictures?

Pictures help us understand problems faster than code.

Software engineers draw diagrams every day.

---

## Draw the Array

```text
Index

0   1   2   3

┌───┬───┬───┬───┐
│ 3 │ 8 │ 1 │ 8 │
└───┴───┴───┴───┘
```

Now walk through each number.

```text
3

↓

8

↓

1

↓

8
```

Eventually we reach

```text
8

↓

Already seen!

↓

Duplicate found!
```

Drawing the problem helps you understand what information your program needs to remember.

---

## Vocabulary

### Visualize

Draw the problem so it is easier to understand.

---

### Step 4 — Algorithm

#### What is an Algorithm?

An **Algorithm** is simply a recipe.

It is a list of steps for solving a problem.

Think about baking cookies.

You follow instructions in order.

Programming works the same way.

---

## Vocabulary

### Algorithm

A step-by-step plan for solving a problem.

---

## Example Algorithm

1. Create an empty Set.
2. Look at each number.
3. If the number is already inside the Set,
   return true.
4. Otherwise,
   save the number in the Set.
5. If the loop finishes,
   return false.

Notice...

There is no JavaScript yet.

Only ideas.

---

### Step 5 — Pseudocode

#### What is Pseudocode?

Pseudocode is fake code.

It looks like programming but doesn't follow JavaScript rules.

Its purpose is to help you organize your thinking.

---

## Vocabulary

### Pseudocode

Code-like instructions written in plain language.

---

## Example

```text
Create empty Set

FOR every number

IF number already exists

Return true

ELSE

Add number

Return false
```

Notice that this is still **not JavaScript.**

It is simply a bridge between your algorithm and your code.

---

### Step 6A — Verify

#### What Does Verify Mean?

To **Verify** means:

> Check that your solution works correctly.

Never assume your code works.

Always test it.

---

## Walk Through Your Solution

Start with an empty Set.

```text
{}
```

Visit

```text
3

↓

{3}
```

Visit

```text
8

↓

{3,8}
```

Visit

```text
1

↓

{3,8,1}
```

Visit

```text
8

↓

Already exists!

↓

Return true
```

This is called **tracing** your solution.

Pretend you are the computer.

Follow every step one at a time.

---

## Vocabulary

### Verify

Testing your solution to make sure it works correctly.

---

### Step 6B — Big-O

#### What is Big-O?

Big-O describes how efficient your program is.

Interviewers usually ask:

> "How efficient is your solution?"

There are two types of efficiency.

---

### Time Complexity

#### What is Time Complexity?

Time Complexity measures

> **How much work the program performs.**

It does **not** measure seconds on a clock.

Instead, it measures how the amount of work changes as the input gets larger.

---

## Example

Imagine checking lockers at school.

If there are more lockers,

you have more work to do.

Programming works the same way.

---

Our example

```text
3

↓

8

↓

1

↓

8
```

We visit every number one time.

Time Complexity

```text
O(n)
```

---

## Vocabulary

### Time Complexity

How the amount of work changes as the input gets larger.

---

### Space Complexity

#### What is Space Complexity?

Space Complexity measures

> **How much extra memory your program needs while it runs.**

---

## Example

Imagine carrying books in a backpack.

The bigger your backpack,

the more things you can carry.

Programs also need temporary storage.

---

Our Set grows as we visit numbers.

```text
{}

↓

{3}

↓

{3,8}

↓

{3,8,1}
```

Worst case

Every number is unique.

The Set grows to the same size as the array.

Space Complexity

```text
O(n)
```

---

## Vocabulary

### Space Complexity

How much extra memory your program needs while solving a problem.

---

## Time vs Space

These two ideas measure different things.

### Time Complexity

Measures

- How much work the program performs.
- How many steps it takes.

Think

> "How long does this task take?"

---

### Space Complexity

Measures

- How much extra memory is needed.

Think

> "How much storage do I need?"

---

## Example

Imagine moving into a new apartment.

Time Complexity asks:

> How long will moving take?

Space Complexity asks:

> How many moving boxes do I need?

Both are important.

Some programs run very fast but use lots of memory.

Others use very little memory but take longer to finish.

Software engineers try to find a good balance between the two.

---

## Complete Whiteboard Example

```text
Problem

↓

Understand the Question

↓

Create Test Cases

↓

Draw the Data

↓

Build an Algorithm

↓

Write Pseudocode

↓

Write JavaScript

↓

Verify with Test Cases

↓

Analyze Time Complexity

↓

Analyze Space Complexity
```

---

## Interview Tips

✅ Read the problem carefully.

✅ Ask questions before writing code.

✅ Create several test cases.

✅ Draw pictures.

✅ Explain your thinking out loud.

✅ Build an algorithm before coding.

✅ Write pseudocode first.

✅ Test your solution.

✅ Explain your Time Complexity and Space Complexity.

---

### Common Mistakes

❌ Jumping directly into JavaScript.

❌ Never asking questions.

❌ Forgetting edge cases.

❌ Never testing your solution.

❌ Ignoring Time Complexity.

❌ Ignoring Space Complexity.

---

## Final Thoughts

Technical interviews are **not about memorizing code.**

They are about showing that you can solve problems in a clear and organized way.

The strongest software engineers usually follow this process:

```text
Understand

↓

Test

↓

Visualize

↓

Algorithm

↓

Pseudocode

↓

Code

↓

Verify

↓

Big-O
```

If you practice this process consistently, you'll become more confident, write better code, and be better prepared for technical interviews.
