/*
==========================================================
PSEUDOQUEUE DEMO
IMPLEMENT A QUEUE USING TWO STACKS
==========================================================

BIG IDEA:

STACK = LIFO
Last In, First Out

QUEUE = FIFO
First In, First Out

We want Queue behavior, but we are only going to use
two Stack objects.

inputStack:
- receives new values

outputStack:
- provides the oldest value when we dequeue

Moving values from one Stack to another REVERSES
their order.
==========================================================
*/


// ========================================================
// MILESTONE 1: CREATE A NODE
// ========================================================

// A Node is a small container.
// It stores:
// 1. a value
// 2. a connection to the next Node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// ========================================================
// MILESTONE 2: CREATE OUR STACK
// ========================================================

class Stack {
  constructor(name = "Stack") {
    this.top = null;
    this.name = name;
  }

  // PUSH = add a new value to the TOP of the Stack.
  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;

    return value;
  }

  // POP = remove the value currently at the TOP.
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.top.value;

    this.top = this.top.next;

    return removedValue;
  }

  // PEEK = look at the top value without removing it.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.value;
  }

  // A Stack is empty when there is no top Node.
  isEmpty() {
    return this.top === null;
  }

  // This helper is ONLY for our classroom demo.
  // It lets us easily see the Stack in the console.
  toArray() {
    const values = [];

    let current = this.top;

    while (current !== null) {
      values.push(current.value);

      current = current.next;
    }

    return values;
  }
}


// ========================================================
// MILESTONE 3: PRACTICE WITH ONE STACK
// ========================================================

console.log("========================================");
console.log("MILESTONE 1: HOW A STACK WORKS");
console.log("========================================");

const practiceStack = new Stack("Practice Stack");


// --------------------------------------------------------
// PUSH BOOK A
// --------------------------------------------------------

practiceStack.push("Book A");

console.log("PUSH Book A");

console.log(
  "Stack top -> bottom:",
  practiceStack.toArray()
);


// --------------------------------------------------------
// PUSH BOOK B
// --------------------------------------------------------

practiceStack.push("Book B");

console.log("PUSH Book B");

console.log(
  "Stack top -> bottom:",
  practiceStack.toArray()
);


// --------------------------------------------------------
// PUSH BOOK C
// --------------------------------------------------------

practiceStack.push("Book C");

console.log("PUSH Book C");

console.log(
  "Stack top -> bottom:",
  practiceStack.toArray()
);


// --------------------------------------------------------
// PEEK
// --------------------------------------------------------

console.log(
  "PEEK:",
  practiceStack.peek()
);


// --------------------------------------------------------
// POP
// --------------------------------------------------------

console.log(
  "POP:",
  practiceStack.pop()
);


console.log(
  "Stack after POP:",
  practiceStack.toArray()
);


console.log(
  "RESULT: Book C was added last and removed first."
);

console.log(
  "That is LIFO: Last In, First Out."
);


// ========================================================
// MILESTONE 4: CREATE THE PSEUDOQUEUE
// ========================================================

class PseudoQueue {
  constructor() {

    /*
    -------------------------------------------------------
    INPUT STACK

    New values enter our Queue here.

    Think:

    "Someone new joins the line."
    -------------------------------------------------------
    */

    this.inputStack = new Stack("Input Stack");


    /*
    -------------------------------------------------------
    OUTPUT STACK

    Values leave our Queue from here.

    Think:

    "The person at the front leaves the line."
    -------------------------------------------------------
    */

    this.outputStack = new Stack("Output Stack");
  }


  // ======================================================
  // ENQUEUE
  // ======================================================

  /*
  ENQUEUE means:

  Add a new value to the BACK of the Queue.

  Example:

  Queue:

  Ana -> Ben

  enqueue("Carlos")

  becomes:

  Ana -> Ben -> Carlos


  Our solution:

  Push the new value onto inputStack.
  */

  enqueue(value) {

    console.log("\n----------------------------------------");

    console.log(
      `📥 ENQUEUE: ${value}`
    );

    console.log("----------------------------------------");


    // Put the new value on inputStack.

    this.inputStack.push(value);


    console.log(
      `${value} was pushed onto inputStack.`
    );


    console.log(
      "inputStack top -> bottom:",
      this.inputStack.toArray()
    );


    console.log(
      "outputStack top -> bottom:",
      this.outputStack.toArray()
    );


    return value;
  }


  // ======================================================
  // DEQUEUE
  // ======================================================

  /*
  DEQUEUE means:

  Remove the OLDEST value from the Queue.


  EXAMPLE:

  Ana -> Ben -> Carlos

  dequeue()

  should remove:

  Ana


  But we have a problem.

  inputStack looks like:

       Carlos  <- TOP
       Ben
       Ana


  If we pop inputStack...

  Carlos would leave first.

  THAT IS WRONG FOR A QUEUE!


  -------------------------------------------------------
  THE TRICK
  -------------------------------------------------------

  Move everything from inputStack into outputStack.

  BEFORE:

  inputStack

  Carlos <- TOP
  Ben
  Ana


  AFTER:

  outputStack

  Ana <- TOP
  Ben
  Carlos


  The order has been REVERSED!

  Now Ana can leave first.
  */

  dequeue() {

    console.log("\n----------------------------------------");

    console.log(
      "📤 DEQUEUE requested"
    );

    console.log("----------------------------------------");


    // ====================================================
    // STEP 1
    // Check outputStack.
    // ====================================================

    /*
    We only need to move values if outputStack is empty.

    If outputStack already contains values, those values
    are already in the correct Queue order.
    */

    if (this.outputStack.isEmpty()) {

      console.log(
        "outputStack is empty."
      );


      console.log(
        "We need to reverse the order."
      );


      console.log(
        "Moving values from inputStack -> outputStack."
      );


      // ==================================================
      // STEP 2
      // Move everything from inputStack to outputStack.
      // ==================================================

      while (!this.inputStack.isEmpty()) {


        // Remove the top value from inputStack.

        const movedValue = this.inputStack.pop();


        console.log(
          `Moving ${movedValue}`
        );


        // Put that value on outputStack.

        this.outputStack.push(movedValue);


        // Show students what happened.

        console.log(
          "  inputStack:",
          this.inputStack.toArray()
        );


        console.log(
          "  outputStack:",
          this.outputStack.toArray()
        );
      }


      console.log(
        "Finished moving the values."
      );


      console.log(
        "The oldest value is now on TOP of outputStack."
      );
    }


    // ====================================================
    // EDGE CASE
    // What if BOTH Stacks are empty?
    // ====================================================

    if (this.outputStack.isEmpty()) {

      console.log(
        "⚠️ The Queue is empty."
      );


      console.log(
        "There is nothing to dequeue."
      );


      return null;
    }


    // ====================================================
    // STEP 3
    // Remove the oldest value.
    // ====================================================

    const removedValue = this.outputStack.pop();


    console.log(
      `✅ Removed from Queue: ${removedValue}`
    );


    console.log(
      "inputStack top -> bottom:",
      this.inputStack.toArray()
    );


    console.log(
      "outputStack top -> bottom:",
      this.outputStack.toArray()
    );


    return removedValue;
  }
}


// ========================================================
// MILESTONE 5: CREATE OUR PSEUDOQUEUE
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 2: CREATE A PSEUDOQUEUE");
console.log("========================================");


const studentLine = new PseudoQueue();


console.log(
  "PseudoQueue created!"
);


console.log(
  "It contains TWO Stacks:"
);


console.log(
  "1. inputStack  -> new values enter here"
);


console.log(
  "2. outputStack -> old values leave here"
);


// ========================================================
// MILESTONE 6: ENQUEUE STUDENTS
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 3: ENQUEUE STUDENTS");
console.log("========================================");


/*
Imagine students joining a line.

Ana arrives first.

Then Ben.

Then Carlos.

Our Queue should remember that order:

FRONT                    BACK

Ana -> Ben -> Carlos
*/


studentLine.enqueue("Ana");

studentLine.enqueue("Ben");

studentLine.enqueue("Carlos");


console.log("\nAfter adding everyone:");

console.log(
  "inputStack:",
  studentLine.inputStack.toArray()
);


console.log(
  "outputStack:",
  studentLine.outputStack.toArray()
);


console.log("\nRemember:");

console.log(
  "Ana entered FIRST."
);


console.log(
  "So Ana must leave FIRST."
);


// ========================================================
// MILESTONE 7: FIRST DEQUEUE
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 4: FIRST DEQUEUE");
console.log("========================================");


console.log(
  "We need Ana to leave first."
);


console.log(
  "But Ana is at the BOTTOM of inputStack."
);


console.log(
  "Watch what happens when we move the values."
);


const firstStudent = studentLine.dequeue();


console.log("\nMILESTONE RESULT:");

console.log(
  firstStudent,
  "left the Queue first."
);


console.log(
  "That is correct because Ana entered first."
);


// ========================================================
// WHAT JUST HAPPENED?
// ========================================================

console.log("\n----------------------------------------");

console.log(
  "WHAT JUST HAPPENED?"
);

console.log("----------------------------------------");


console.log(
  "Before moving:"
);


console.log(
  "inputStack had Carlos -> Ben -> Ana"
);


console.log(
  "\nMoving them reversed the order."
);


console.log(
  "\noutputStack became:"
);


console.log(
  "Ana -> Ben -> Carlos"
);


console.log(
  "\nNow the oldest value was on top."
);


// ========================================================
// MILESTONE 8: SECOND DEQUEUE
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 5: SECOND DEQUEUE");
console.log("========================================");


console.log(
  "Now we want the next person in line."
);


console.log(
  "outputStack already contains values."
);


console.log(
  "So we DO NOT need to move everything again."
);


const secondStudent = studentLine.dequeue();


console.log("\nMILESTONE RESULT:");

console.log(
  secondStudent,
  "left second."
);


// ========================================================
// MILESTONE 9
// ADD A NEW VALUE AFTER DEQUEUEING
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 6: SOMEONE NEW JOINS");
console.log("========================================");


/*
Current situation:

Carlos is still waiting.

Now Diana joins.

Carlos was there FIRST.

Therefore:

Carlos must leave before Diana.
*/


studentLine.enqueue("Diana");


console.log("\nCarlos was already waiting.");

console.log(
  "Diana joined AFTER Carlos."
);


console.log(
  "Therefore Carlos must leave before Diana."
);


// ========================================================
// MILESTONE 10
// DEQUEUE CARLOS
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 7: DEQUEUE AGAIN");
console.log("========================================");


const thirdStudent = studentLine.dequeue();


console.log("\nMILESTONE RESULT:");

console.log(
  "Third person out:",
  thirdStudent
);


// ========================================================
// IMPORTANT TEACHING MOMENT
// ========================================================

console.log("\n----------------------------------------");

console.log(
  "IMPORTANT:"
);

console.log("----------------------------------------");


console.log(
  "outputStack is now empty."
);


console.log(
  "But inputStack contains Diana."
);


console.log(
  "The next dequeue will move Diana"
);


console.log(
  "from inputStack to outputStack."
);


// ========================================================
// MILESTONE 11
// DEQUEUE DIANA
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 8: FINAL STUDENT");
console.log("========================================");


const fourthStudent = studentLine.dequeue();


console.log("\nMILESTONE RESULT:");

console.log(
  "Fourth person out:",
  fourthStudent
);


// ========================================================
// VERIFY THE ORDER
// ========================================================

console.log("\n\n========================================");
console.log("VERIFY OUR QUEUE ORDER");
console.log("========================================");


console.log(
  "Students entered:"
);


console.log(
  "Ana -> Ben -> Carlos -> Diana"
);


console.log(
  "\nStudents left:"
);


console.log(
  `${firstStudent} -> ${secondStudent} -> ${thirdStudent} -> ${fourthStudent}`
);


console.log(
  "\n✅ FIRST IN was FIRST OUT."
);


// ========================================================
// MILESTONE 12
// EMPTY QUEUE EDGE CASE
// ========================================================

console.log("\n\n========================================");
console.log("MILESTONE 9: EMPTY QUEUE");
console.log("========================================");


console.log(
  "Everyone has left the Queue."
);


console.log(
  "What happens if we dequeue again?"
);


const nobody = studentLine.dequeue();


console.log(
  "Returned value:",
  nobody
);


// ========================================================
// FINAL SUMMARY
// ========================================================

console.log("\n\n========================================");
console.log("FINAL SUMMARY");
console.log("========================================");


console.log("\nSTACK:");

console.log(
  "LIFO = Last In, First Out"
);


console.log("\nQUEUE:");

console.log(
  "FIFO = First In, First Out"
);


console.log("\nPSEUDOQUEUE:");

console.log(
  "Uses TWO Stacks to behave like a Queue."
);


console.log("\nINPUT STACK:");

console.log(
  "Receives new values."
);


console.log("\nOUTPUT STACK:");

console.log(
  "Removes the oldest values."
);


console.log("\nTHE KEY TRICK:");

console.log(
  "Moving values from one Stack to another"
);


console.log(
  "REVERSES their order."
);


console.log("\nSo:");

console.log(
  "Two LIFO Stacks can work together"
);


console.log(
  "to create FIFO behavior."
);


console.log("\nExpected Queue order:");

console.log(
  "Ana -> Ben -> Carlos -> Diana"
);


console.log("\n🎉 Demo complete!");