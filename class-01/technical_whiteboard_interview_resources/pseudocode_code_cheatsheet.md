# 🧠 Technical Interview Pseudocode Cheat Sheet

> **Goal:** Pseudocode is a way to explain your solution **without worrying about programming language syntax.**
>
> Think of it as writing your plan in plain English using programming ideas.

---

## ⭐ General Rules

✅ Focus on **logic**, not syntax.

✅ Use simple words.

✅ Indent code to show blocks.

✅ Explain what you're doing.

❌ Don't worry about semicolons, brackets, or exact JavaScript syntax.

---

## 📦 Create Variables

### Template

```text
SET variable TO value
```

### Example

```text
SET total TO 0
SET count TO 0
SET largestNumber TO first number
```

---

# 📥 Input

### Template

```text
INPUT data
```

### Example

```text
INPUT array of numbers
INPUT user's name
INPUT string
```

---

## 📤 Return Output

### Template

```text
RETURN value
```

### Example

```text
RETURN total

RETURN true

RETURN largestNumber

RETURN "Not Found"
```

---

## 🔁 Loop Through an Array

## For Each

### Template

```text
FOR EACH item IN array
    DO something
END FOR
```

### Example

```text
FOR EACH number IN numbers
    ADD number TO total
END FOR
```

---

## Traditional For Loop

### Template

```text
FOR i FROM 0 TO length - 1
    DO something
END FOR
```

### Example

```text
FOR i FROM 0 TO array length - 1
    PRINT array[i]
END FOR
```

---

## 🔍 If Statements

### Template

```text
IF condition
    DO something
END IF
```

### Example

```text
IF number > largest
    SET largest TO number
END IF
```

---

## 🔀 If / Else

### Template

```text
IF condition
    DO something
ELSE
    DO something else
END IF
```

### Example

```text
IF age >= 18
    RETURN "Adult"
ELSE
    RETURN "Minor"
END IF
```

---

## 🔁 If / Else If / Else

### Template

```text
IF condition
    ...
ELSE IF condition
    ...
ELSE
    ...
END IF
```

### Example

```text
IF score >= 90
    RETURN "A"
ELSE IF score >= 80
    RETURN "B"
ELSE
    RETURN "Keep Practicing"
END IF
```

---

## 🔎 Search for Something

### Example

```text
FOR EACH item IN array

    IF item equals target

        RETURN item

    END IF

END FOR

RETURN "Not Found"
```

---

## 🔢 Count Things

### Example

```text
SET count TO 0

FOR EACH item IN array

    IF item is even

        ADD 1 TO count

    END IF

END FOR

RETURN count
```

---

## ➕ Add Numbers Together

### Example

```text
SET total TO 0

FOR EACH number IN numbers

    ADD number TO total

END FOR

RETURN total
```

---

## ⭐ Find the Largest Number

### Example

```text
SET largest TO first number

FOR EACH number IN numbers

    IF number > largest

        SET largest TO number

    END IF

END FOR

RETURN largest
```

---

## ⭐ Find the Smallest Number

### Example

```text
SET smallest TO first number

FOR EACH number IN numbers

    IF number < smallest

        SET smallest TO number

    END IF

END FOR

RETURN smallest
```

---

## 🔄 Update a Variable

### Template

```text
SET variable TO new value
```

### Example

```text
SET total TO total + number

SET count TO count + 1

SET max TO current number
```

---

## 📚 Build a New List

### Example

```text
CREATE empty list

FOR EACH item IN array

    IF item meets condition

        ADD item TO new list

    END IF

END FOR

RETURN new list
```

---

## 🚪 Exit Early

Sometimes you already know the answer.

### Example

```text
FOR EACH number IN numbers

    IF number equals target

        RETURN true

    END IF

END FOR

RETURN false
```

---

## 🧩 Nested Loops

### Example

```text
FOR EACH student

    FOR EACH grade

        PRINT grade

    END FOR

END FOR
```

---

## 📦 Using a Hash Map (Dictionary)

Useful for fast lookups.

### Create

```text
CREATE empty hash map
```

### Store

```text
STORE value USING key
```

### Check

```text
IF key exists

    RETURN true

END IF
```

### Example (Duplicates)

```text
CREATE empty hash map

FOR EACH number IN array

    IF number already exists

        RETURN true

    STORE number

END FOR

RETURN false
```

---

### 📚 Using a Stack

Last In, First Out (LIFO)

### Push

```text
PUSH item
```

### Pop

```text
POP item
```

### Peek

```text
LOOK at top item
```

Example:

```text
PUSH first value

PUSH second value

POP top value

RETURN top value
```

---

## 🚶 Using a Queue

First In, First Out (FIFO)

### Add

```text
ENQUEUE item
```

### Remove

```text
DEQUEUE item
```

### Peek

```text
LOOK at front item
```

---

## 🌳 Tree Traversal

### Visit Every Node

```text
VISIT node

VISIT left child

VISIT right child
```

---

## 🔗 Linked List Traversal

```text
SET current TO head

WHILE current exists

    PRINT current value

    MOVE current TO next node

END WHILE
```

---

## 🔁 While Loop

### Template

```text
WHILE condition

    DO something

END WHILE
```

### Example

```text
WHILE current is not null

    PRINT current value

    MOVE current TO next node

END WHILE
```

---

## 🔂 Repeat Until

```text
REPEAT

    DO work

UNTIL finished
```

---

## 🛑 Break Out of a Loop

```text
IF answer found

    STOP LOOP

END IF
```

---

## 🧠 Common Technical Interview Patterns

## Sum

```text
SET total TO 0

FOR EACH item

    ADD item TO total

RETURN total
```

---

## Count

```text
SET count TO 0

FOR EACH item

    IF condition

        ADD 1 TO count

RETURN count
```

---

## Find Maximum

```text
SET max TO first value

FOR EACH item

    IF item > max

        SET max TO item

RETURN max
```

---

## Find Minimum

```text
SET min TO first value

FOR EACH item

    IF item < min

        SET min TO item

RETURN min
```

---

## Search

```text
FOR EACH item

    IF item equals target

        RETURN item

RETURN "Not Found"
```

---

## Filter

```text
CREATE empty list

FOR EACH item

    IF condition

        ADD item TO list

RETURN list
```

---

## Transform

```text
CREATE empty list

FOR EACH item

    MODIFY item

    ADD modified item TO list

RETURN list
```

---

## Detect Duplicates

```text
CREATE empty hash map

FOR EACH item

    IF item exists

        RETURN true

    STORE item

RETURN false
```

---

## 🎤 What to Say During the Interview

Instead of silently writing code, explain your thinking.

Example:

> "First, I'll create a variable to keep track of the total."

```text
SET total TO 0
```

> "Next, I'll loop through every number."

```text
FOR EACH number IN array
```

> "I'll add each number to the total."

```text
ADD number TO total
```

> "Finally, I'll return the answer."

```text
RETURN total
```

---

## 🚀 The Technical Interview Workflow

1. Understand the problem.
2. Ask clarifying questions.
3. Identify inputs and outputs.
4. Write test cases.
5. Visualize the data.
6. Write pseudocode.
7. Explain your algorithm.
8. Analyze Time Complexity.
9. Analyze Space Complexity.
10. Write the actual code.
11. Test your solution.
12. Improve your solution if possible.

---

## 💡 Remember

Interviewers are **not grading your syntax first**.

They want to see that you can:

- ✅ Break a problem into smaller steps
- ✅ Explain your reasoning
- ✅ Use logical thinking
- ✅ Communicate clearly
- ✅ Correct mistakes when you find them

Strong communication and problem-solving often matter more than writing perfect code on the first try.