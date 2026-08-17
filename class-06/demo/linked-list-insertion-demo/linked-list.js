/*
===========================================================
LINKED LIST INSERTION - JAVASCRIPT DEMO
===========================================================

WHAT IS A LINKED LIST?

A linked list is a data structure made up of nodes.

Each node contains two things:

1. value
   - The information stored in the node.

2. next
   - A reference to the next node in the list.

Example:

head -> {1} -> {3} -> {2} -> X

The "head" points to the first node.

Each node points to the next node.

X represents null, which means there is no next node.
===========================================================
*/


// =========================================================
// NODE CLASS
// =========================================================

class Node {

  constructor(value) {

    // Store the data inside the node.
    this.value = value;

    // Every new node starts by pointing to nothing.
    this.next = null;
  }
}


// =========================================================
// LINKED LIST CLASS
// =========================================================

class LinkedList {

  constructor() {

    // An empty linked list has no head.
    this.head = null;
  }


  // =======================================================
  // APPEND
  // =======================================================

  /*
    APPEND

    Arguments:
      value - the value we want to add

    Purpose:
      Adds a new node to the END of the list.

    Example:

      Before:

      head -> {1} -> {3} -> {2} -> X

      append(5)

      After:

      head -> {1} -> {3} -> {2} -> {5} -> X
  */

  append(value) {

    // Create a new node.
    const newNode = new Node(value);


    // -----------------------------------------------------
    // SPECIAL CASE: EMPTY LIST
    // -----------------------------------------------------

    /*
      If the list is empty, the new node becomes
      the head.

      Before:

      head -> X

      After:

      head -> {1} -> X
    */

    if (this.head === null) {

      this.head = newNode;

      return;
    }


    // -----------------------------------------------------
    // FIND THE LAST NODE
    // -----------------------------------------------------

    /*
      Start at the head.

      We will move through the list until we find
      the last node.

      The last node is the node whose next property
      is null.
    */

    let current = this.head;


    while (current.next !== null) {

      current = current.next;
    }


    // -----------------------------------------------------
    // CONNECT THE NEW NODE
    // -----------------------------------------------------

    /*
      current is now the last node.

      We connect the last node to our new node.

      Before:

      {1} -> {3} -> {2} -> X

      After:

      {1} -> {3} -> {2} -> {5} -> X
    */

    current.next = newNode;
  }


  // =======================================================
  // INSERT BEFORE
  // =======================================================

  /*
    INSERT BEFORE

    Arguments:
      targetValue - the value we are looking for
      newValue    - the value of the new node

    Purpose:
      Adds a new node immediately BEFORE the first node
      containing targetValue.

    Example:

      Before:

      head -> {1} -> {3} -> {2} -> X

      insertBefore(3, 5)

      After:

      head -> {1} -> {5} -> {3} -> {2} -> X
  */

  insertBefore(targetValue, newValue) {


    // -----------------------------------------------------
    // EMPTY LIST
    // -----------------------------------------------------

    /*
      If there is no head, there is nothing to insert before.
    */

    if (this.head === null) {

      return;
    }


    // -----------------------------------------------------
    // TARGET IS THE HEAD
    // -----------------------------------------------------

    /*
      This is an important special case.

      Suppose we have:

      head -> {1} -> {3} -> {2} -> X

      insertBefore(1, 5)

      The new node must become the new head.

      Result:

      head -> {5} -> {1} -> {3} -> {2} -> X
    */

    if (this.head.value === targetValue) {

      const newNode = new Node(newValue);

      // The new node points to the old head.
      newNode.next = this.head;

      // The new node becomes the new head.
      this.head = newNode;

      return;
    }


    // -----------------------------------------------------
    // SEARCH FOR THE TARGET
    // -----------------------------------------------------

    /*
      We start at the head.

      For insertBefore(), we need to find the node
      BEFORE the target.

      Example:

      {1} -> {3}

      If 3 is our target, we need to be standing
      on the {1} node.

      Therefore, we check current.next.
    */

    let current = this.head;


    while (current.next !== null) {


      // Is the NEXT node our target?
      if (current.next.value === targetValue) {

        const newNode = new Node(newValue);


        // -------------------------------------------------
        // CONNECT THE NEW NODE TO THE TARGET
        // -------------------------------------------------

        /*
          Before:

          {1} -> {3}

          newNode = {5}

          We first make:

          {5} -> {3}
        */

        newNode.next = current.next;


        // -------------------------------------------------
        // CONNECT THE PREVIOUS NODE TO THE NEW NODE
        // -------------------------------------------------

        /*
          Now we make:

          {1} -> {5} -> {3}
        */

        current.next = newNode;


        // We are finished.
        return;
      }


      // Move to the next node.
      current = current.next;
    }


    // If we reach here, the target was not found.
    // The list remains unchanged.
  }


  // =======================================================
  // INSERT AFTER
  // =======================================================

  /*
    INSERT AFTER

    Arguments:
      targetValue - the value we are looking for
      newValue    - the value of the new node

    Purpose:
      Adds a new node immediately AFTER the first node
      containing targetValue.

    Example:

      Before:

      head -> {1} -> {3} -> {2} -> X

      insertAfter(3, 5)

      After:

      head -> {1} -> {3} -> {5} -> {2} -> X
  */

  insertAfter(targetValue, newValue) {


    // Start at the head.
    let current = this.head;


    // Walk through the list.
    while (current !== null) {


      // Have we found the target?
      if (current.value === targetValue) {

        const newNode = new Node(newValue);


        // -------------------------------------------------
        // CONNECT NEW NODE TO THE NEXT NODE
        // -------------------------------------------------

        /*
          Before:

          {3} -> {2}

          We want:

          {3} -> {5} -> {2}

          First, make the new node point to {2}.
        */

        newNode.next = current.next;


        // -------------------------------------------------
        // CONNECT TARGET TO NEW NODE
        // -------------------------------------------------

        /*
          Now make {3} point to {5}.

          Result:

          {3} -> {5} -> {2}
        */

        current.next = newNode;


        // We are finished.
        return;
      }


      // Move to the next node.
      current = current.next;
    }


    // If the target was not found,
    // the list remains unchanged.
  }


  // =======================================================
  // DISPLAY THE LIST
  // =======================================================

  /*
    This method is not part of the required feature tasks.

    It is simply a helper method that allows us to see
    what the linked list looks like.
  */

  display() {

    let current = this.head;

    let result = "head -> ";


    // Walk through the list.
    while (current !== null) {

      result += `{${current.value}} -> `;

      current = current.next;
    }


    // Add X to represent null.
    result += "X";


    return result;
  }
}


// =========================================================
// DEMONSTRATION
// =========================================================

console.log("=================================");
console.log("LINKED LIST INSERTION DEMO");
console.log("=================================");


// =========================================================
// APPEND EXAMPLE
// =========================================================

console.log("\n--- APPEND ---");

const list = new LinkedList();

console.log("Starting list:");
console.log(list.display());


// Add 1.
list.append(1);

console.log("\nAfter append(1):");
console.log(list.display());


// Add 3.
list.append(3);

console.log("\nAfter append(3):");
console.log(list.display());


// Add 2.
list.append(2);

console.log("\nAfter append(2):");
console.log(list.display());


// Add 5.
list.append(5);

console.log("\nAfter append(5):");
console.log(list.display());


// =========================================================
// INSERT BEFORE EXAMPLE
// =========================================================

console.log("\n--- INSERT BEFORE ---");


/*
  Current list:

  head -> {1} -> {3} -> {2} -> {5} -> X
*/

list.insertBefore(3, 10);

console.log("\nAfter insertBefore(3, 10):");
console.log(list.display());


// =========================================================
// INSERT BEFORE HEAD
// =========================================================

/*
  Current list:

  head -> {1} -> {10} -> {3} -> {2} -> {5} -> X

  Insert 20 before 1.
*/

list.insertBefore(1, 20);

console.log("\nAfter insertBefore(1, 20):");
console.log(list.display());


// =========================================================
// INSERT AFTER EXAMPLE
// =========================================================

console.log("\n--- INSERT AFTER ---");


/*
  Insert 30 after 3.
*/

list.insertAfter(3, 30);

console.log("\nAfter insertAfter(3, 30):");
console.log(list.display());


// =========================================================
// INSERT AFTER LAST NODE
// =========================================================

/*
  Insert 40 after 5.

  This is effectively adding a node to the end.
*/

list.insertAfter(5, 40);

console.log("\nAfter insertAfter(5, 40):");
console.log(list.display());


// =========================================================
// DUPLICATE VALUES
// =========================================================

console.log("\n--- DUPLICATE VALUES ---");


const duplicateList = new LinkedList();

duplicateList.append(1);
duplicateList.append(2);
duplicateList.append(2);

console.log("\nStarting list:");
console.log(duplicateList.display());


/*
  There are two nodes containing 2.

  insertBefore() should use the FIRST 2.
*/

duplicateList.insertBefore(2, 5);

console.log("\nAfter insertBefore(2, 5):");
console.log(duplicateList.display());


// =========================================================
// INSERT AFTER DUPLICATE
// =========================================================

/*
  Again, insertAfter() uses the FIRST matching 2.
*/

duplicateList.insertAfter(2, 9);

console.log("\nAfter insertAfter(2, 9):");
console.log(duplicateList.display());


// =========================================================
// TARGET NOT FOUND
// =========================================================

console.log("\n--- TARGET NOT FOUND ---");


/*
  There is no node containing 100.

  Therefore, the list should not change.
*/

duplicateList.insertBefore(100, 500);

console.log("\nAfter insertBefore(100, 500):");
console.log(duplicateList.display());


/*
===========================================================
KEY CONCEPT
===========================================================

The most important thing to understand about linked-list
insertion is that we are changing REFERENCES.

For example:

Before:

{1} -> {3}

We want to insert {5} between them.

First:

{5} -> {3}

Then:

{1} -> {5}

Final result:

{1} -> {5} -> {3}


INSERT BEFORE:

We need to change the previous node's "next" reference.

INSERT AFTER:

We change the target node's "next" reference.

The nodes themselves do not need to be moved.

We are simply changing the connections between them.

===========================================================
*/
