/*
==========================================================
CODE CHALLENGE 10: STACKS & QUEUES
Instructor Demo / Student Reference

Goal:
Review LIFO and FIFO, then connect those ideas to
implementing Stack and Queue with Linked List Nodes.

==========================================================
*/


// ========================================================
// PART 1 — QUICK MEMORY REFRESH
// ========================================================

console.log("\n==============================");
console.log("📚 STACK = LIFO");
console.log("==============================");

console.log("LIFO means: Last In, First Out.");
console.log("Think: a stack of plates.");
console.log("The last plate you put on is the first plate you take off.");

console.log("\nStack words:");
console.log("push()  → add to the TOP");
console.log("pop()   → remove from the TOP");
console.log("peek()  → look at the TOP");
console.log("isEmpty() → check if the Stack is empty");


console.log("\n==============================");
console.log("🚶 QUEUE = FIFO");
console.log("==============================");

console.log("FIFO means: First In, First Out.");
console.log("Think: people waiting in a line.");
console.log("The first person in line is the first person served.");

console.log("\nQueue words:");
console.log("enqueue()  → add to the BACK");
console.log("dequeue()  → remove from the FRONT");
console.log("peek()     → look at the FRONT");
console.log("isEmpty()  → check if the Queue is empty");


// ========================================================
// PART 2 — NODE
// ========================================================

console.log("\n==============================");
console.log("🔗 NODE");
console.log("==============================");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const demoNode = new Node("A");

console.log("A Node stores:");
console.log("value:", demoNode.value);
console.log("next:", demoNode.next);

console.log("\nThink of a Node like this:");
console.log("[ value | next ]");


// ========================================================
// PART 3 — STACK
// ========================================================

console.log("\n==============================");
console.log("📚 STACK DEMO");
console.log("==============================");

class Stack {
  constructor() {
    // An empty Stack has no top Node.
    this.top = null;
  }

  push(value) {
    console.log(`\nPUSH: adding "${value}" to the TOP.`);

    const newNode = new Node(value);

    // New Node points to the old top.
    newNode.next = this.top;

    // New Node becomes the new top.
    this.top = newNode;

    console.log("Stack top is now:", this.top.value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Cannot pop: Stack is empty.");
    }

    const value = this.top.value;

    console.log(`\nPOP: removing "${value}" from the TOP.`);

    // Move top down to the next Node.
    this.top = this.top.next;

    console.log(
      "New top:",
      this.top ? this.top.value : "null — Stack is empty"
    );

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek: Stack is empty.");
    }

    console.log(`\nPEEK: top value is "${this.top.value}".`);

    return this.top.value;
  }

  isEmpty() {
    const empty = this.top === null;

    console.log("\nIS EMPTY?", empty);

    return empty;
  }
}


// --------------------------------------------------------
// STACK EXAMPLE
// --------------------------------------------------------

const stack = new Stack();

console.log("\nCreated an empty Stack.");
console.log("top:", stack.top);

stack.isEmpty();

stack.push("A");
stack.push("B");
stack.push("C");

console.log("\nCurrent Stack:");
console.log("TOP → C → B → A");

stack.peek();

console.log("\nNotice what happens next:");
console.log("The LAST value added was C.");
console.log("Therefore C comes out FIRST.");

stack.pop();
stack.pop();
stack.pop();

stack.isEmpty();


// ========================================================
// PART 4 — QUEUE
// ========================================================

console.log("\n==============================");
console.log("🚶 QUEUE DEMO");
console.log("==============================");

class Queue {
  constructor() {
    // An empty Queue has no front Node.
    this.front = null;

    // We keep track of the back so enqueue()
    // can be O(1).
    this.back = null;
  }

  enqueue(value) {
    console.log(`\nENQUEUE: adding "${value}" to the BACK.`);

    const newNode = new Node(value);

    // If the Queue is empty, the new Node is both
    // the front AND the back.
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;

      console.log("Queue was empty.");
      console.log("Front and Back are now:", value);

      return;
    }

    // Connect the current back Node to the new Node.
    this.back.next = newNode;

    // Move back to the new Node.
    this.back = newNode;

    console.log("Front:", this.front.value);
    console.log("Back:", this.back.value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue: Queue is empty.");
    }

    const value = this.front.value;

    console.log(`\nDEQUEUE: removing "${value}" from the FRONT.`);

    // Move front forward one Node.
    this.front = this.front.next;

    // If front becomes null, the Queue is now empty.
    if (this.front === null) {
      this.back = null;
    }

    console.log(
      "New front:",
      this.front ? this.front.value : "null — Queue is empty"
    );

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek: Queue is empty.");
    }

    console.log(`\nPEEK: front value is "${this.front.value}".`);

    return this.front.value;
  }

  isEmpty() {
    const empty = this.front === null;

    console.log("\nIS EMPTY?", empty);

    return empty;
  }
}


// --------------------------------------------------------
// QUEUE EXAMPLE
// --------------------------------------------------------

const queue = new Queue();

console.log("\nCreated an empty Queue.");
console.log("front:", queue.front);
console.log("back:", queue.back);

queue.isEmpty();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log("\nCurrent Queue:");
console.log("FRONT → A → B → C ← BACK");

queue.peek();

console.log("\nNotice what happens next:");
console.log("The FIRST value added was A.");
console.log("Therefore A comes out FIRST.");

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.isEmpty();


// ========================================================
// PART 5 — STACK VS QUEUE
// ========================================================

console.log("\n==============================");
console.log("⚖️ STACK VS QUEUE");
console.log("==============================");

console.log("\n📚 STACK");
console.log("Rule: LIFO");
console.log("Last In, First Out");
console.log("Add: push() → TOP");
console.log("Remove: pop() → TOP");
console.log("Look: peek() → TOP");

console.log("\n🚶 QUEUE");
console.log("Rule: FIFO");
console.log("First In, First Out");
console.log("Add: enqueue() → BACK");
console.log("Remove: dequeue() → FRONT");
console.log("Look: peek() → FRONT");


// ========================================================
// PART 6 — REAL-WORLD EXAMPLES
// ========================================================

console.log("\n==============================");
console.log("🌎 REAL-WORLD EXAMPLES");
console.log("==============================");

console.log("\nSTACK examples:");
console.log("• Stack of plates");
console.log("• Undo history");
console.log("• Browser back/history behavior");
console.log("• Function call stack");

console.log("\nQUEUE examples:");
console.log("• People waiting in line");
console.log("• Printer jobs");
console.log("• Messages waiting to be processed");
console.log("• Restaurant orders waiting to be handled");


// ========================================================
// PART 7 — CHALLENGE CONNECTION
// ========================================================

console.log("\n==============================");
console.log("🚀 CONNECTING TO THE CHALLENGE");
console.log("==============================");

console.log("The challenge uses Linked List Nodes.");
console.log("The Node is the building block.");
console.log("Stack and Queue give those Nodes different rules.");

console.log("\nSTACK:");
console.log("Node → Node → Node");
console.log("↑");
console.log("TOP");

console.log("\nQUEUE:");
console.log("FRONT → Node → Node → Node ← BACK");

console.log("\nThe big idea:");
console.log("Stack = add/remove at TOP.");
console.log("Queue = add at BACK, remove at FRONT.");
console.log("Stack = LIFO.");
console.log("Queue = FIFO.");


// ========================================================
// PART 8 — EMPTY STRUCTURE TESTS
// ========================================================

console.log("\n==============================");
console.log("🧪 EMPTY STRUCTURE TESTS");
console.log("==============================");

const emptyStack = new Stack();
const emptyQueue = new Queue();

console.log("\nEmpty Stack:");
console.log("top:", emptyStack.top);
console.log("isEmpty():", emptyStack.isEmpty());

console.log("\nEmpty Queue:");
console.log("front:", emptyQueue.front);
console.log("back:", emptyQueue.back);
console.log("isEmpty():", emptyQueue.isEmpty());


// ========================================================
// PART 9 — EXPECTED ERRORS
// ========================================================

console.log("\n==============================");
console.log("⚠️ EMPTY STACK / QUEUE ERRORS");
console.log("==============================");

try {
  emptyStack.pop();
} catch (error) {
  console.log("Stack pop error:", error.message);
}

try {
  emptyStack.peek();
} catch (error) {
  console.log("Stack peek error:", error.message);
}

try {
  emptyQueue.dequeue();
} catch (error) {
  console.log("Queue dequeue error:", error.message);
}

try {
  emptyQueue.peek();
} catch (error) {
  console.log("Queue peek error:", error.message);
}


// ========================================================
// FINAL STUDENT CHECK
// ========================================================

console.log("\n==============================");
console.log("🎯 FINAL CHECK");
console.log("==============================");

console.log("Can you answer these without looking?");
console.log("1. What does LIFO mean?");
console.log("2. What does FIFO mean?");
console.log("3. Where does a Stack add?");
console.log("4. Where does a Stack remove?");
console.log("5. Where does a Queue add?");
console.log("6. Where does a Queue remove?");
console.log("7. What does peek() do?");
console.log("8. What does isEmpty() return?");
console.log("9. Why does an empty Stack have top = null?");
console.log("10. Why does an empty Queue have front = null?");

console.log("\n🎉 Ready to build Stack and Queue!");