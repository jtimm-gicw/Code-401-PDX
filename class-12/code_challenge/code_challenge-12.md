````markdown
# 🐶🐱 Code Challenge: First-In, First-Out Animal Shelter

## 🎯 Code Challenge

**First-In, First-Out Animal Shelter**

In this challenge, you will create an animal shelter that holds **only dogs and cats**.

The shelter should follow a **First-In, First-Out (FIFO)** approach.

> **FIFO means:** The animal that has been waiting the longest should be the first one considered for adoption when it matches the requested preference.

---

# 📋 Specifications

Before you begin:

- Read all of these instructions carefully.
- Name things exactly as described.
- Do all of your work in your public `data-structures-and-algorithms` repository.
- Create a new branch in your repository using the branch name listed below.
- Follow the language-specific instructions for this challenge.
- Update the **Table of Contents** in the README at the root of your repository.
- Add a link in the Table of Contents to this challenge's README file.

---

# 🛠️ Challenge Setup & Execution

### Branch Name

`stack-queue-animal-shelter`

### Challenge Type

**Code Challenge / Algorithm**

---

# 🧠 The Main Idea

Imagine an animal shelter where cats and dogs arrive throughout the day.

For example:

`Buddy 🐶 → Luna 🐱 → Max 🐶 → Milo 🐱`

The shelter needs to remember the order in which the animals arrived.

When someone wants to adopt a dog, the shelter should return the **dog that has been waiting the longest**.

When someone wants to adopt a cat, the shelter should return the **cat that has been waiting the longest**.

---

# ✅ Feature Tasks

## 1. Create the `AnimalShelter` Class

Create a class called:

`AnimalShelter`

The shelter should hold **only dogs and cats**.

The shelter operates using a **First-In, First-Out (FIFO)** approach.

---

# 🐾 2. `enqueue`

Implement a method called:

`enqueue`

### Argument

`animal`

The `animal` can be either a **dog object** or a **cat object**.

Each animal must have:

- A `species` property.
- The `species` must be either `"cat"` or `"dog"`.
- A `name` property.
- The `name` must be a string.

### Example Animal Objects

```javascript
const dog = {
  species: "dog",
  name: "Buddy"
};

const cat = {
  species: "cat",
  name: "Luna"
};
````

### Purpose

`enqueue()` adds an animal to the shelter.

Example:

```text
Shelter:

FRONT                                   BACK
  ↓                                       ↓
Buddy 🐶 → Luna 🐱 → Max 🐶 → Milo 🐱
```

Buddy has been waiting the longest.

Milo arrived most recently.

---

# 🏠 3. `dequeue`

Implement a method called:

`dequeue`

### Argument

`pref`

The `pref` argument represents the adopter's preferred animal.

It can be:

`"dog"`

or

`"cat"`

---

## Return

Return either a dog or a cat based on the preference.

For example:

```javascript
shelter.dequeue("dog");
```

should return the **dog that has been waiting the longest**.

If the shelter currently looks like this:

```text
Buddy 🐶 → Luna 🐱 → Max 🐶 → Milo 🐱
```

then:

```javascript
shelter.dequeue("dog");
```

should return:

```text
Buddy 🐶
```

The shelter would then contain:

```text
Luna 🐱 → Max 🐶 → Milo 🐱
```

---

# ⚠️ Invalid Preference

If `pref` is NOT:

`"dog"`

or

`"cat"`

return:

```javascript
null
```

For example:

```javascript
shelter.dequeue("rabbit");
```

should return:

```javascript
null
```

---

# ⭐ Stretch Goal

If a cat or dog **isn't preferred**, return whichever animal has been waiting in the shelter the longest.

For example:

```text
Buddy 🐶 → Luna 🐱 → Max 🐶
```

Buddy has been waiting the longest.

If no specific preference is provided, the stretch goal would return:

```text
Buddy 🐶
```

---

# 🧪 Think About Testing

Your tests should check that your shelter works correctly.

Consider testing situations such as:

### Happy Path

Add several cats and dogs.

Then request:

```javascript
dequeue("dog");
```

Confirm that the dog that has been waiting the longest is returned.

---

### Different Preference

Add several cats and dogs.

Then request:

```javascript
dequeue("cat");
```

Confirm that the cat that has been waiting the longest is returned.

---

### Invalid Preference

Try:

```javascript
dequeue("rabbit");
```

Expected result:

```javascript
null
```

---

### Edge Cases

Think about situations such as:

* What happens if the shelter is empty?
* What happens if someone requests a dog but there are no dogs?
* What happens if someone requests a cat but there are no cats?
* What happens if several dogs arrive before any cats?
* What happens if several cats arrive before any dogs?

---

# 📝 Submission Instructions

Work within the proper folder structure for your programming language and follow the challenge instructions.

Create a new README for this challenge using the provided:

[README Template](https://gicw.github.io/common_curriculum/challenges/code/README-TEMPLATE)

Your README should include:

* Summary
* Description
* Approach
* Efficiency
* Solution

---

# 🖼️ Whiteboard

Create a whiteboard for your solution.

Your whiteboard should follow the provided:

[Example Whiteboard Layout](https://gicw.github.io/common_curriculum/challenges/code/whiteboarding)

Embed an image of your completed whiteboard inside your challenge README.

Your whiteboard should help explain:

1. The problem
2. Example inputs and outputs
3. Important edge cases
4. A visual representation of the shelter
5. Your algorithm
6. Pseudocode
7. Big O time and space complexity

---

# 💻 Code and Tests

In addition to your whiteboard drawing, you may optionally complete the code written on your whiteboard.

You should also create a proper suite of tests.

See:

[Testing Guide](https://gicw.github.io/common_curriculum/challenges/code/testing)

Try giving your algorithm to a chatbot and see if it can produce working code and tests.

Compare the generated solution with the algorithm you created.

---

# 🔀 Pull Request

Create a pull request from your challenge branch.

Your branch should be:

`stack-queue-animal-shelter`

In your open pull request, add the following checklist.

Copy and paste this checklist into your pull request:

```text
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
  - [ ] "Happy Path" — Expected outcome
  - [ ] Expected failure
  - [ ] Edge Case (if applicable/obvious)
```

Check off the steps that you actually completed.

Example:

```text
- [x] Top-level README "Table of Contents" is updated
- [x] README for this challenge is complete
- [ ] Unit tests written and passing
```

---

# 📤 Submit Your Completed Work

When you are finished:

1. Copy the link to your **open pull request**.
2. Paste the pull request link into the assignment submission field.
3. In the comments box, describe **how long the assignment took you**.
4. Add any additional comments for your grader about:

   * Your process
   * Problems you encountered
   * Difficulties you had
   * Anything you would like your grader to know
5. Merge your branch.
6. Delete your branch.

> 💡 Don't worry — the pull request link will still work after the branch has been merged and deleted.

---

# 🧠 Quick Reminder

The main idea of this challenge is:

```text
FIRST IN → FIRST OUT
```

Think of it like a line at an animal shelter:

```text
First to arrive                         Most recent
      ↓                                      ↓

Buddy 🐶 → Luna 🐱 → Max 🐶 → Milo 🐱
```

If someone asks for a dog:

```text
dequeue("dog")
```

Return:

```text
Buddy 🐶
```

If someone asks for a cat:

```text
dequeue("cat")
```

Return:

```text
Luna 🐱
```

The key question is:

> **Which animal of the requested species has been waiting the longest?**

```

I added the **FIFO explanation, visual shelter examples, testing ideas, and edge-case prompts** so students can understand what the challenge is asking before they begin designing their solution.
```
