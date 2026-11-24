# Mock Interview - 5

## Photo Printing Queue Using Two Stacks

**Topic:** Stacks · Queues · First In, First Out (FIFO)

---

### Problem Domain

A photo-printing kiosk receives print jobs from customers throughout the day. Each time someone submits a photo, the kiosk adds that job to its waiting list.

The printer must process jobs in the **same order they were received**. The **first job submitted must be the first job printed**, even if several newer jobs arrive while others are waiting. This is called **First In, First Out (FIFO)**.

There is one challenge: the kiosk's software can only store and move jobs using **stacks**, which follow **Last In, First Out (LIFO)**. In a stack, the most recently added item is the first one removed.

Your job is to use **two stacks** to make the printer behave like a queue, so customers receive their photos in the correct order.

### Task

Create a class named `PhotoPrintQueue` that:

- Uses **two stacks** to manage waiting print jobs. You may represent each stack with a JavaScript array.
- Has an `enqueue(job)` method that **adds a new print job** to the waiting queue.
- Has a `dequeue()` method that **removes and returns the oldest waiting job** (the next job to print).
- Processes jobs in **First In, First Out (FIFO)** order, even though the underlying stacks use LIFO.
- Uses **stack operations** such as `push()` and `pop()`; do **not** use `shift()`, `unshift()`, or a built-in queue library.
- Returns `null` from `dequeue()` if there are **no waiting jobs**.
- Works correctly when more jobs are added **after some jobs have already been printed**.

**Assume:** Each `job` is a string identifying a customer's photo-print request (for example, `"Graduation Photo"`). Jobs do not need to be edited or sorted.

### Example

```js
const printer = new PhotoPrintQueue();

printer.enqueue('Graduation Photo');
printer.enqueue('Family Portrait');
printer.enqueue('Passport Photo');

printer.dequeue(); // 'Graduation Photo'
printer.dequeue(); // 'Family Portrait'

printer.enqueue('Birthday Photo');

printer.dequeue(); // 'Passport Photo'
printer.dequeue(); // 'Birthday Photo'
printer.dequeue(); // null
```

**Expected print order:**

```text
Graduation Photo → Family Portrait → Passport Photo → Birthday Photo
```

**Remember:** A **stack** removes the newest item first (**LIFO**), while a **queue** removes the oldest item first (**FIFO**). For the mock interview, be prepared to **draw the two stacks**, explain how jobs move between them, discuss **edge cases**, and describe the **time and space complexity (Big-O)** of your solution.
