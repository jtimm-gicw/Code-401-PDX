/*
==========================================================
CODE CHALLENGE 7: LINKED LIST — KTH FROM THE END
==========================================================

GOAL
----
Find the value of the node that is k places from the END
of a linked list.

The simple way to think about this is:

1. COUNT the nodes.
2. CALCULATE the target position.
3. WALK to the target.
4. RETURN the value.

Example:

A → B → C → D → E → null

k = 0 → E
k = 1 → D
k = 2 → C
k = 3 → B
k = 4 → A

IMPORTANT:
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

    // If the list is empty,
    // the new node becomes the head.
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Start at the head.
    let current = this.head;

    // Walk until we reach the last node.
    while (current.next !== null) {
      current = current.next;
    }

    // Connect the new node to the end.
    current.next = newNode;
  }


  // --------------------------------------------------------
  // COUNT NODES
  // Find out how many nodes are in the list.
  // --------------------------------------------------------

  countNodes() {

    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }


  // --------------------------------------------------------
  // KTH FROM END
  // --------------------------------------------------------

  kthFromEnd(k) {

    console.log("\n======================================");
    console.log(`Finding k = ${k} from the end`);
    console.log("======================================");


    // ------------------------------------------------------
    // CHECK #1: EMPTY LIST
    // ------------------------------------------------------

    if (this.head === null) {

      console.log("The linked list is empty.");
      console.log("There is no node to return.");

      return null;
    }


    // ------------------------------------------------------
    // CHECK #2: INVALID K
    // ------------------------------------------------------

    if (k < 0) {

      console.log("ERROR: k cannot be negative.");

      return null;
    }


    // ------------------------------------------------------
    // STEP 1: COUNT
    // ------------------------------------------------------

    const length = this.countNodes();

    console.log("\nSTEP 1 — COUNT");
    console.log("--------------------");
    console.log(
      `The linked list has ${length} nodes.`
    );


    // ------------------------------------------------------
    // CHECK #3: K IS TOO LARGE
    // ------------------------------------------------------

    if (k >= length) {

      console.log("\nERROR");
      console.log(`k = ${k} is too large.`);
      console.log(
        `Valid k values are 0 through ${length - 1}.`
      );

      return null;
    }


    // ------------------------------------------------------
    // STEP 2: CALCULATE
    // ------------------------------------------------------

    const targetIndex = length - 1 - k;

    console.log("\nSTEP 2 — CALCULATE");
    console.log("--------------------");

    console.log(`length = ${length}`);
    console.log(`k = ${k}`);

    console.log(
      `target index = ${length} - 1 - ${k}`
    );

    console.log(
      `target index = ${targetIndex}`
    );


    // ------------------------------------------------------
    // STEP 3: WALK
    // ------------------------------------------------------

    console.log("\nSTEP 3 — WALK");
    console.log("--------------------");

    console.log(
      `Walk ${targetIndex} step(s) from HEAD.`
    );

    let current = this.head;

    for (let i = 0; i < targetIndex; i++) {

      console.log(
        `Step ${i + 1}: ${current.value} → ${current.next.value}`
      );

      current = current.next;
    }


    // ------------------------------------------------------
    // STEP 4: RETURN ANSWER
    // ------------------------------------------------------

    console.log("\nSTEP 4 — ANSWER");
    console.log("--------------------");

    console.log(
      `The target node is: ${current.value}`
    );

    console.log(
      `ANSWER: ${current.value}`
    );

    return current.value;
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
// EXAMPLE 1 — k = 0
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
// EXAMPLE 2 — k = 1
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 2 — k = 1");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: D");

list1.kthFromEnd(1);


// ==========================================================
// EXAMPLE 3 — k = 2
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 3 — k = 2");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: C");

list1.kthFromEnd(2);


// ==========================================================
// EXAMPLE 4 — k = 4
// ==========================================================

console.log("\n\n######################################");
console.log("EXAMPLE 4 — k = 4");
console.log("######################################");

displayList(list1);

console.log("\nExpected answer: A");

list1.kthFromEnd(4);


// ==========================================================
// EDGE CASE #1 — k IS TOO LARGE
// ==========================================================

console.log("\n\n######################################");
console.log("EDGE CASE #1 — k IS TOO LARGE");
console.log("######################################");

displayList(list1);

console.log("\nTrying k = 5");

console.log(
  "The list contains 5 nodes."
);

console.log(
  "Valid k values are 0 through 4."
);

list1.kthFromEnd(5);


// ==========================================================
// EDGE CASE #2 — EMPTY LIST
// ==========================================================

console.log("\n\n######################################");
console.log("EDGE CASE #2 — EMPTY LIST");
console.log("######################################");

const emptyList = new LinkedList();

displayList(emptyList);

console.log("\nTrying k = 0");

emptyList.kthFromEnd(0);


// ==========================================================
// EXTRA EXAMPLE — NUMBERS
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

KTH FROM THE END

Think:

1. COUNT the nodes.
2. CALCULATE the target index.
3. WALK from HEAD to that index.
4. RETURN the value.


Example:

A → B → C → D → E

There are 5 nodes.

If k = 2:

target index = 5 - 1 - 2

target index = 2


Index:

0    1    2    3    4

A → B → C → D → E
          ↑
        ANSWER


So:

list.kthFromEnd(2)

returns:

C


Remember:

k = 0 → last node
k = 1 → one node before last
k = 2 → two nodes before last


Simple Process:

COUNT → CALCULATE → WALK → RETURN


Time Complexity: O(n)

Space Complexity: O(1)

`);

