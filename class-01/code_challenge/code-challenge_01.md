# Code Challenge: Reverse an Array

## Specifications

Read all of the following instructions carefully.

- Name things exactly as described.
- Do all your work in a public repository called **`data-structures-and-algorithms`**.
- Create a new branch in your repository called **`array-reverse`**.
- Make a directory for this challenge, named according to your language's conventions, containing a **`README.md`** file.
- Update the **Table of Contents** in the root `README.md` with a link to this challenge's `README.md`.

> **Note:** This is a **whiteboard-only** challenge.
>
> Write out code as part of your whiteboard process, but don't worry about creating external program files.

---

# Feature Tasks

Write a function called **`reverseArray`** that:

- Takes an array as an argument.
- Returns a new array with the elements in **reverse order**.
- **Do not** use any built-in methods provided by your programming language (such as `.reverse()` in JavaScript).

---

# Example

| Input | Output |
|-------|--------|
| `[1, 2, 3, 4, 5, 6]` | `[6, 5, 4, 3, 2, 1]` |
| `[89, 2354, 3546, 23, 10, -923, 823, -12]` | `[-12, 823, -923, 10, 23, 3546, 2354, 89]` |
| `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]` | `[199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]` |

---

# Structure and Testing

Follow the **Single Responsibility Principle**.

Any functions or methods you write should:

- Be clean
- Be reusable
- Solve one specific task

Avoid writing one large, complicated function that tries to solve everything at once.

---

# Stretch Goal

Once you've completed a working solution, solve the problem **a second way** using a different approach.

Some ideas include:

- Using loops
- Using recursion
- Using indexes differently
- Modifying the original array directly
- Building a new array

Afterward, compare the two solutions by discussing:

- Efficiency
- Readability
- Flexibility
- Ease of understanding

---

# Submission Instructions

Complete the following steps:

1. Work within the correct folder structure for your programming language.
2. Create a new `README.md` using the provided README template.
3. Embed an image of your completed whiteboard that matches the required layout.
4. (Optional) Complete the code from your whiteboard and write a full set of unit tests.
5. Try giving your algorithm to an AI chatbot and compare its generated solution with your own.
6. Create a Pull Request from your **`array-reverse`** branch into the **`main`** branch.

---

# Pull Request Checklist

In your Pull Request, include the following checklist and check off each completed task.

```markdown
- [ ] Top-level README "Table of Contents" is updated

- [ ] README for this challenge is complete
  - [ ] Summary
  - [ ] Description
  - [ ] Approach & Efficiency
  - [ ] Solution
  - [ ] Picture of whiteboard
  - [ ] Link to code

- [ ] Feature tasks for this challenge are completed

- [ ] Unit tests written and passing
  - [ ] Happy Path (Expected outcome)
  - [ ] Expected failure
  - [ ] Edge Case (if applicable)
```

---

# Final Submission

When you are finished:

1. Copy the link to your **open Pull Request**.
2. Paste the Pull Request link into the assignment submission.
3. In the comments section, include:
   - Approximately how long the assignment took.
   - Any challenges or difficulties you encountered.
   - Any additional notes for your grader.
4. Merge your Pull Request into **`main`**.
5. Delete your **`array-reverse`** branch after it has been merged.

> **Note:** Deleting the branch will **not** remove your Pull Request. Your Pull Request link will continue to work.