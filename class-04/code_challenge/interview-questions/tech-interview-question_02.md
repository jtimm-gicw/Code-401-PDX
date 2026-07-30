# Interview Questions 2

## 🧩 Challenge: Generate the *n*th Fibonacci Number (Two Different Ways)

---

## 📋 Specifications

Read all of the following instructions carefully.

Act as an interviewer, giving a candidate a code challenge.

- Score the candidate according to the **Whiteboard Rubric**.
- You are free to offer suggestions or guidance (and see how they respond), but **do not solve the challenge for the candidate**.

---

## 🎯 Feature Tasks

As the interviewer:

- Familiarize yourself with the **Fibonacci Sequence**.
- Ask the candidate to write a function that:
  - Accepts an integer `n`.
  - Returns the **n**th number in the Fibonacci sequence.
- Verify their work for small values of `n` by checking that:

  `fib(n) = fib(n - 1) + fib(n - 2)`

- Encourage the candidate to work quickly toward an initial solution using **one** of the following approaches:
  - **Recursive**
  - **Iterative** (using a `while` or `for` loop)

- After the first solution is complete, ask the candidate to solve the problem using the **other approach**.
  - If they used an iterative solution first, ask for a recursive solution.
  - If they used a recursive solution first, ask for an iterative solution.

- Evaluate and compare the **Big O** time complexity of both solutions.

### Notes

- The recursive solution may be as inefficient as **O(2ⁿ)**, making it very slow for values of `n` greater than about **40**.
- The iterative solution should be approximately **O(n)**, allowing much larger values of `n` to be computed efficiently.
- There is also an **O(1)** mathematical formula for finding Fibonacci numbers. If time allows, try implementing this formula with the candidate.
- **Do not** utilize any built-in methods available to your programming language.

---

## 📝 Structure

Before beginning the interview:

- Familiarize yourself with the **Whiteboard Rubric**.
- Use the rubric to score the candidate throughout the interview.

During the interview, look for:

- Effective problem solving
- Efficient use of time
- Effective communication
- Good use of the available whiteboard space

Every solution may look a little different, but the candidate should be able to explain why their solution works.

When the interview is complete:

- Assign points for every item on the rubric.
- Add up the total score.
- Record the final score at the bottom of the rubric.

---

## 💻 Example

| Input (`n`) | Output |
|-------------|--------|
| `0` | `0` |
| `1` | `1` |
| `2` | `1` |
| `3` | `2` |
| `4` | `3` |
| `5` | `5` |
| `6` | `8` |
| `7` | `13` |
| `8` | `21` |
| `...` | `...` |
| `14` | `377` |
| `...` | `...` |
| `45` | `1134903170` |

---

## 📄 Documentation

Record detailed notes on the **Whiteboard Rubric** to share with the candidate when the interview is complete.

---

## ✅ Solution

The candidate should be prepared to discuss:

- **Algorithm**
- **Pseudocode**
- **Big O Analysis**
