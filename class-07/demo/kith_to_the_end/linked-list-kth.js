/*
==========================================================
CODE CHALLENGE 7: LINKED LIST — KTH FROM THE END
==========================================================

Goal:
Find the value of the node that is k places from the
END (tail) of a linked list.

Remember:

k = 0 → last node
k = 1 → one node before the last
k = 2 → two nodes before the last

Example:

A → B → C → D → E → null

k = 0 → E
k = 1 → D
k = 2 → C
k = 3 → B
k = 4 → A


THE TWO-POINTER APPROACH

We use two pointers:

FAST
SLOW

1. Start both pointers at the HEAD.
2. Move FAST forward k positions.
3. Move FAST and SLOW together.
4. When FAST reaches the tail, SLOW is the answer.

Time Complexity: O(n)
Space Complexity: O(1)
*/


// ==========================================================
// NODE CLASS
// ==========================================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// ==========================================================
// LINKED LIST CLASS
// ==========================================================

class LinkedList {
  constructor() {
    this.head = null;
  }


  // --------------------------------------------------------
  // APPEND
  // Add a new node to the end of the linked list.
  // --------------------------------------------------------

  append(value) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head.
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Start at the head.
    let current = this.head;

    // Move until we reach the last node.
    while (current.next !== null) {
      current = current.next;
    }

    // Add the new node.
    current.next = newNode;
  }


  // --------------------------------------------------------
  // KTH FROM END
  // --------------------------------------------------------

  kthFromEnd(k) {

    console.log("\n======================================");
    console.log(`Finding k = ${k} from the end`);
    console.log("======================================");


    // ------------------------------------------------------
    // EDGE CASE #1: EMPTY LIST
    // ------------------------------------------------------

    if (this.head === null) {
      console.log("The linked list is empty.");
      console.log("There is no node to return.");

      return null;
    }


    // ------------------------------------------------------
    // INVALID K
    // ------------------------------------------------------

    if (k < 0) {
      console.log("ERROR: k cannot be negative.");

      return null;
    }


    // ------------------------------------------------------
    // STEP 1: CREATE TWO POINTERS
    // ------------------------------------------------------

    let fast = this.head;
    let slow = this.head;

    console.log("\nSTEP 1");
    console.log("--------------------");
    console.log(`FAST starts at: ${fast.value}`);
    console.log(`SLOW starts at: ${slow.value}`);


    // ------------------------------------------------------
    // STEP 2: MOVE FAST k POSITIONS
    // ------------------------------------------------------

    console.log("\nSTEP 2");
    console.log("--------------------");
    console.log(`Move FAST ${k} position(s) forward.`);

    for (let i = 0; i < k; i++) {

      // If FAST cannot move another position,
      // k is too large.
      if (fast.next === null) {
        console.log("\nERROR:");
        console.log("k is larger than the valid range.");
        console.log("No node exists at this position.");

        return null;
      }

      console.log(
        `FAST: ${fast.value} → ${fast.next.value}`
      );

      fast = fast.next;
    }


    console.log(`FAST is now at: ${fast.value}`);
    console.log(`SLOW is still at: ${slow.value}`);


    // ------------------------------------------------------
    // STEP 3: MOVE BOTH POINTERS
    // ------------------------------------------------------

    console.log("\nSTEP 3");
    console.log("--------------------");
    console.log(
      "Move FAST and SLOW together until FAST reaches the tail."
    );

    while (fast.next !== null) {

      console.log(
        `FAST = ${fast.value} | SLOW = ${slow.value}`
      );

      fast = fast.next;
      slow = slow.next;
    }


    // ------------------------------------------------------
    // STEP 4: FIND THE ANSWER
    // ------------------------------------------------------

    console.log("\nSTEP 4");
    console.log("--------------------");

    console.log(`FAST reached the tail: ${fast.value}`);

    console.log(
      `SLOW is ${k} position(s) from the tail.`
    );

    console.log(`ANSWER: ${slow.value}`);

    return slow.value;
  }
}


// ==========================================================
// HELPER FUNCTION
// Display the linked list.
// ==========================================================

function displayList(list) {

  let current = list.head;
  const values = [];

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  console.log(
    `Linked List: ${values.join(" → ")} → null`
  );
}


// ==========================================================
// EXAMPLE 1
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 1 — k = 0");
console.log("######################################");

const list1 = new LinkedList();

list1.append("A");
list1.append("B");
list1.append("C");
list1.append("D");
list1.append("E");

displayList(list1);

console.log("\nExpected answer: E");

list1.kthFromEnd(0);


// ==========================================================
// EXAMPLE 2
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 2 — k = 1");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: D");

list1.kthFromEnd(1);


// ==========================================================
// EXAMPLE 3
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 3 — k = 2");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: C");

list1.kthFromEnd(2);


// ==========================================================
// EXAMPLE 4
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 4 — k = 4");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: A");

list1.kthFromEnd(4);


// ==========================================================
// EDGE CASE #1
// k IS TOO LARGE
// ==========================================================

console.log("\n\n######################################");
console.log("EDGE CASE #1 — k IS TOO LARGE");
console.log("######################################");

displayList(list1);

console.log("\nTrying k = 5");
console.log("The list contains only 5 nodes.");
console.log("Valid k values are 0 through 4.");

list1.kthFromEnd(5);


// ==========================================================
// EDGE CASE #2
// EMPTY LIST
// ==========================================================

console.log("\n\n######################################");
console.log("EDGE CASE #2 — EMPTY LIST");
console.log("######################################");

const emptyList = new LinkedList();

displayList(emptyList);

console.log("\nTrying k = 0");

emptyList.kthFromEnd(0);


// ==========================================================
// EXTRA EXAMPLE WITH NUMBERS
// ==========================================================

console.log("\n\n######################################");
console.log("EXTRA EXAMPLE — NUMBERS");
console.log("######################################");

const numberList = new LinkedList();

numberList.append(10);
numberList.append(20);
numberList.append(30);
numberList.append(40);
numberList.append(50);
numberList.append(60);

displayList(numberList);

console.log("\nFinding k = 2");
console.log("Expected answer: 40");

numberList.kthFromEnd(2);


// ==========================================================
// STUDENT SUMMARY
// ==========================================================

console.log("\n\n======================================");
console.log("STUDENT SUMMARY");
console.log("======================================");

console.log(`
The kthFromEnd() method finds a node based on its
distance from the tail.

Remember:

k = 0 → tail
k = 1 → one node before tail
k = 2 → two nodes before tail

TWO-POINTER PROCESS:

1. FAST and SLOW start at HEAD.
2. Move FAST k positions forward.
3. Move FAST and SLOW together.
4. When FAST reaches the tail,
   SLOW points to the answer.

Advantages:

• We do not reverse the list.
• We do not create another list.
• We only use two pointers.

Time Complexity: O(n)
Space Complexity: O(1)
`);

