'use strict';

/*
==========================================================
LINKED LIST ZIP
==========================================================

GOAL:

Take TWO Linked Lists and combine them by alternating
between their nodes.

Example:

List 1:

A → C → E → null


List 2:

B → D → F → null


After zipping:

A → B → C → D → E → F → null


The big idea to remember:

SAVE → CONNECT → MOVE → REPEAT
==========================================================
*/


console.log('======================================');
console.log('🔗 LINKED LIST ZIP DEMO');
console.log('======================================');



/*
==========================================================
MILESTONE 1
CREATE A NODE
==========================================================

A Node is one item inside a Linked List.

Each Node stores:

1. A value
2. A connection to the next Node

Example:

A → B → C → null

A, B, and C are Nodes.
*/


class Node {

  constructor(value) {

    // Store the value inside the node.
    this.value = value;

    // When the node is first created,
    // it does not point anywhere yet.
    this.next = null;

  }

}


console.log('\n--------------------------------------');
console.log('MILESTONE 1: Create a Node');
console.log('--------------------------------------');

let exampleNode = new Node('Pizza');

console.log('Our new node:');
console.log(exampleNode);

console.log('Node value:', exampleNode.value);
console.log('Node next:', exampleNode.next);



/*
==========================================================
MILESTONE 2
CREATE A LINKED LIST
==========================================================

A Linked List needs to know where it starts.

That starting Node is called the HEAD.

Example:

HEAD
 ↓
A → B → C → null
*/


class LinkedList {

  constructor() {

    // An empty Linked List has no head yet.
    this.head = null;

  }


  /*
  --------------------------------------------------------
  APPEND
  --------------------------------------------------------

  append() adds a new Node to the END of the list.

  We are using this method to make our examples easier
  to build.
  */

  append(value) {

    const newNode = new Node(value);


    // If the list is empty,
    // the new Node becomes the head.
    if (!this.head) {

      this.head = newNode;

      return;

    }


    // Start at the beginning.
    let current = this.head;


    // Move until we reach the final Node.
    while (current.next) {

      current = current.next;

    }


    // Connect the final Node to our new Node.
    current.next = newNode;

  }


  /*
  --------------------------------------------------------
  TO ARRAY
  --------------------------------------------------------

  This helper method converts our Linked List into
  an array.

  We are only using this to make console.log output
  easier for students to read.
  */

  toArray() {

    const values = [];

    let current = this.head;


    while (current) {

      values.push(current.value);

      current = current.next;

    }


    return values;

  }


  /*
  --------------------------------------------------------
  PRINT
  --------------------------------------------------------

  This gives us a visual representation such as:

  A → B → C → null
  */

  print() {

    const values = this.toArray();

    return values.join(' → ') + ' → null';

  }

}



console.log('\n--------------------------------------');
console.log('MILESTONE 2: Create a Linked List');
console.log('--------------------------------------');


const practiceList = new LinkedList();

practiceList.append('Pizza');
practiceList.append('Tacos');
practiceList.append('Sushi');


console.log('Our practice Linked List:');

console.log(practiceList.print());


// Expected:
//
// Pizza → Tacos → Sushi → null



/*
==========================================================
MILESTONE 3
WHAT DOES ZIP MEAN?
==========================================================

Imagine these two lists:

LIST 1:

A → C → E


LIST 2:

B → D → F


We want to alternate between them:

Take A from List 1.

Then B from List 2.

Then C from List 1.

Then D from List 2.

And so on.


RESULT:

A → B → C → D → E → F
*/


console.log('\n--------------------------------------');
console.log('MILESTONE 3: What Does ZIP Mean?');
console.log('--------------------------------------');


const demoList1 = new LinkedList();

demoList1.append('A');
demoList1.append('C');
demoList1.append('E');


const demoList2 = new LinkedList();

demoList2.append('B');
demoList2.append('D');
demoList2.append('F');


console.log('List 1:');
console.log(demoList1.print());

console.log('List 2:');
console.log(demoList2.print());


console.log('\nOur goal is:');

console.log(
  'A → B → C → D → E → F → null'
);



/*
==========================================================
MILESTONE 4
THE IMPORTANT PROBLEM
==========================================================

We need to CHANGE the next connections.

But we have to be careful!


Imagine:

A → C → E


Suppose current1 is A.

current1.next is currently C.


If we immediately say:

current1.next = B;


then we changed:

A → C


into:

A → B


But now we still need to remember where C was!


SOLUTION:

SAVE the next Node BEFORE changing the connection.


let next1 = current1.next;


Think of next1 like a BOOKMARK.

It remembers where we need to go next.
*/


console.log('\n--------------------------------------');
console.log('MILESTONE 4: Save Before Changing');
console.log('--------------------------------------');


const saveExample = new LinkedList();

saveExample.append('A');
saveExample.append('C');
saveExample.append('E');


let currentExample = saveExample.head;


console.log('Current node:');
console.log(currentExample.value);


// Save where A was originally pointing.

let savedNextExample = currentExample.next;


console.log('Saved next node:');
console.log(savedNextExample.value);


console.log(
  'We remembered C BEFORE changing A.next.'
);



/*
==========================================================
MILESTONE 5
THE FOUR MAIN STEPS
==========================================================

When zipping our lists, remember:

1. SAVE
2. CONNECT
3. MOVE
4. REPEAT


Let's look at ONE round manually.
*/


console.log('\n--------------------------------------');
console.log('MILESTONE 5: One Round of Zipping');
console.log('--------------------------------------');


const roundList1 = new LinkedList();

roundList1.append('A');
roundList1.append('C');
roundList1.append('E');


const roundList2 = new LinkedList();

roundList2.append('B');
roundList2.append('D');
roundList2.append('F');


let current1 = roundList1.head;
let current2 = roundList2.head;


console.log('BEFORE:');

console.log('List 1:', roundList1.print());
console.log('List 2:', roundList2.print());


/*
STEP 1: SAVE

Remember where each Node was originally pointing.
*/

let next1 = current1.next;

let next2 = current2.next;


console.log('\n1️⃣ SAVE');

console.log(
  'After A comes:',
  next1.value
);

console.log(
  'After B comes:',
  next2.value
);



/*
STEP 2: CONNECT

Originally:

A → C

B → D


Change A so that it points to B.
*/

current1.next = current2;


// Now:
//
// A → B


/*
Then connect B to C.
*/

current2.next = next1;


// Now:
//
// A → B → C


console.log('\n2️⃣ CONNECT');

console.log(
  'After changing the connections:'
);

console.log(roundList1.print());



/*
STEP 3: MOVE

We finished working with A and B.

Now move forward to:

C and D
*/

current1 = next1;
current2 = next2;


console.log('\n3️⃣ MOVE');

console.log(
  'current1 is now:',
  current1.value
);

console.log(
  'current2 is now:',
  current2.value
);



console.log('\n4️⃣ REPEAT');

console.log(
  'We can now perform the same process with C and D.'
);



/*
==========================================================
MILESTONE 6
THE COMPLETE ZIP FUNCTION
==========================================================

Now we can turn our idea into a function.

Remember:

SAVE
CONNECT
MOVE
REPEAT
*/


function zipLists(list1, list2) {


  /*
  --------------------------------------------------------
  EDGE CASE:
  LIST 1 IS EMPTY
  --------------------------------------------------------

  If List 1 has nothing inside it, there is nothing
  to alternate with.

  Just return List 2.
  */

  if (!list1.head) {

    return list2;

  }


  /*
  --------------------------------------------------------
  EDGE CASE:
  LIST 2 IS EMPTY
  --------------------------------------------------------

  If List 2 is empty, List 1 can simply stay the same.
  */

  if (!list2.head) {

    return list1;

  }


  /*
  --------------------------------------------------------
  START AT BOTH HEADS
  --------------------------------------------------------
  */

  let current1 = list1.head;

  let current2 = list2.head;



  /*
  --------------------------------------------------------
  KEEP GOING WHILE BOTH NODES EXIST
  --------------------------------------------------------
  */

  while (current1 && current2) {


    /*
    ================================================
    STEP 1: SAVE
    ================================================

    Save where both Nodes were originally pointing.

    These are our bookmarks.
    */

    let next1 = current1.next;

    let next2 = current2.next;



    console.log('\n--- ZIP STEP ---');

    console.log(
      'Current List 1 node:',
      current1.value
    );

    console.log(
      'Current List 2 node:',
      current2.value
    );


    /*
    ================================================
    STEP 2: CONNECT
    ================================================

    Connect the current Node from List 1
    to the current Node from List 2.
    */

    current1.next = current2;


    /*
    If List 1 has ended, we are done.

    Example:

    List 1:

    A → null

    List 2:

    B → D → F


    After connecting A to B:

    A → B → D → F

    We don't want to reconnect B back to null.
    */

    if (next1 === null) {

      console.log(
        'List 1 has no more nodes.'
      );

      break;

    }


    /*
    Connect the List 2 Node back to the
    saved List 1 Node.
    */

    current2.next = next1;


    console.log(
      'Connected:',
      current1.value,
      '→',
      current2.value,
      '→',
      next1.value
    );



    /*
    ================================================
    STEP 3: MOVE
    ================================================

    Move to the Nodes we saved earlier.
    */

    current1 = next1;

    current2 = next2;



    /*
    ================================================
    STEP 4: REPEAT
    ================================================

    The while loop takes us back to the top.
    */

  }


  /*
  List 1 contains the beginning of our newly
  zipped list.

  Return it.
  */

  return list1;

}



/*
==========================================================
MILESTONE 7
EXAMPLE 1 — SAME LENGTH
==========================================================

List 1:

A → C → E


List 2:

B → D → F


Expected:

A → B → C → D → E → F
*/


console.log('\n======================================');
console.log('MILESTONE 7: SAME LENGTH');
console.log('======================================');


const list1 = new LinkedList();

list1.append('A');
list1.append('C');
list1.append('E');


const list2 = new LinkedList();

list2.append('B');
list2.append('D');
list2.append('F');


console.log('\nBEFORE ZIPPING');

console.log(
  'List 1:',
  list1.print()
);

console.log(
  'List 2:',
  list2.print()
);


const zippedList = zipLists(list1, list2);


console.log('\nAFTER ZIPPING');

console.log(
  zippedList.print()
);


// Expected:
//
// A → B → C → D → E → F → null



/*
==========================================================
MILESTONE 8
EXAMPLE 2 — LIST 1 IS LONGER
==========================================================

List 1:

A → C → E → G


List 2:

B → D


Expected:

A → B → C → D → E → G
*/


console.log('\n======================================');
console.log('MILESTONE 8: LIST 1 IS LONGER');
console.log('======================================');


const longerList1 = new LinkedList();

longerList1.append('A');
longerList1.append('C');
longerList1.append('E');
longerList1.append('G');


const shorterList2 = new LinkedList();

shorterList2.append('B');
shorterList2.append('D');


console.log('\nBEFORE ZIPPING');

console.log(
  'List 1:',
  longerList1.print()
);

console.log(
  'List 2:',
  shorterList2.print()
);


const zippedLongerFirst = zipLists(
  longerList1,
  shorterList2
);


console.log('\nAFTER ZIPPING');

console.log(
  zippedLongerFirst.print()
);


// Expected:
//
// A → B → C → D → E → G → null



/*
==========================================================
MILESTONE 9
EXAMPLE 3 — LIST 2 IS LONGER
==========================================================

List 1:

A → C


List 2:

B → D → F → H


Expected:

A → B → C → D → F → H
*/


console.log('\n======================================');
console.log('MILESTONE 9: LIST 2 IS LONGER');
console.log('======================================');


const shorterList1 = new LinkedList();

shorterList1.append('A');
shorterList1.append('C');


const longerList2 = new LinkedList();

longerList2.append('B');
longerList2.append('D');
longerList2.append('F');
longerList2.append('H');


console.log('\nBEFORE ZIPPING');

console.log(
  'List 1:',
  shorterList1.print()
);

console.log(
  'List 2:',
  longerList2.print()
);


const zippedLongerSecond = zipLists(
  shorterList1,
  longerList2
);


console.log('\nAFTER ZIPPING');

console.log(
  zippedLongerSecond.print()
);


// Expected:
//
// A → B → C → D → F → H → null



/*
==========================================================
MILESTONE 10
EDGE CASE — EMPTY LIST
==========================================================
*/


console.log('\n======================================');
console.log('MILESTONE 10: EMPTY LIST');
console.log('======================================');


const emptyList = new LinkedList();


const foodList = new LinkedList();

foodList.append('Pizza');
foodList.append('Tacos');
foodList.append('Sushi');


console.log('\nBEFORE ZIPPING');

console.log(
  'Empty List:',
  emptyList.print()
);

console.log(
  'Food List:',
  foodList.print()
);


const emptyResult = zipLists(
  emptyList,
  foodList
);


console.log('\nAFTER ZIPPING');

console.log(
  emptyResult.print()
);


// Expected:
//
// Pizza → Tacos → Sushi → null



/*
==========================================================
FINAL REVIEW
==========================================================

What does zipLists() do?

It takes:

List 1:

A → C → E


and:

List 2:

B → D → F


and changes the connections so we get:

A → B → C → D → E → F


----------------------------------------------------------

THE FOUR IMPORTANT STEPS:

1. SAVE

   Remember the next Nodes before changing anything.


2. CONNECT

   Change the .next references.


3. MOVE

   Move to the Nodes that were saved.


4. REPEAT

   Continue until one of the lists runs out.


----------------------------------------------------------

EASY MEMORY TRICK:

SAVE → CONNECT → MOVE → REPEAT

==========================================================
*/


console.log('\n======================================');
console.log('🎉 FINAL REVIEW');
console.log('======================================');

console.log(
  'Remember: SAVE → CONNECT → MOVE → REPEAT'
);

console.log(
  'Linked List Zip demo complete!'
);
