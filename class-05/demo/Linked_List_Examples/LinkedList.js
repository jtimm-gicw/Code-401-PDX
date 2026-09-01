'use strict';

/*
========================================================
LINKED LIST DEMO
Class 5 - Data Structures

Fantasy Theme:
🪄 Magic Wand
🫥 Invisibility Cloak
🔥 Flaming Sword
📖 Spellbook
========================================================
*/


/*
========================================================
NODE
========================================================

A Node is one item in our linked list.

Every Node contains TWO things:

1. value
   → The actual data we want to store.

2. next
   → A reference/pointer to the next Node.

Think of each Node like a magical item that
points us toward the next magical item.
========================================================
*/

class Node {

  constructor(value) {

    // The data stored in this node.
    this.value = value;

    // Points to the next node.
    // We start with null because we don't
    // know what comes next yet.
    this.next = null;

    // Doubly linked lists would also have:
    // this.previous = null;
  }

}


/*
========================================================
SINGLY vs DOUBLY LINKED LIST
========================================================

Singly Linked List:

🪄 → 🫥 → 🔥 → 📖 → null

Each node points in ONE direction.

Doubly Linked List:

🪄 ⇄ 🫥 ⇄ 🔥 ⇄ 📖 ⇄ null

Each node can point forward AND backward.
========================================================
*/


/*
========================================================
LINKED LIST
========================================================

The LinkedList keeps track of the beginning
of the list.

That beginning is called the HEAD.

HEAD
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
null
========================================================
*/

class LinkedList {

  constructor() {

    // The list starts empty.
    this.head = null;

  }

}


/*
========================================================
CREATE OUR LINKED LIST
========================================================
*/

let list = new LinkedList();


/*
========================================================
BUILD THE LINKED LIST
========================================================

We will create our magical items and connect
each Node to the next Node.

The final Node points to null.
========================================================
*/

list.head = new Node('Magic Wand');

list.head.next = new Node('Invisibility Cloak');

list.head.next.next = new Node('Flaming Sword');

list.head.next.next.next = new Node('Spellbook');


/*
At this point our linked list looks like:

HEAD
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
null
*/


/*
========================================================
TRAVERSE
========================================================

Traversal means:

"Visit every node in the linked list."

We start at the HEAD.

Then we follow the next pointer.

We continue until current becomes null.

Big O:

Time: O(n)
Space: O(1)

Why?

We may need to visit every node,
but we only create one current variable.
========================================================
*/

function traverse(list) {

  // Start at the beginning of the list.
  let current = list.head;

  console.log('--- Traversing the Magical Linked List ---');

  while (current !== null) {

    // Print the value stored in the current node.
    console.log('✨ Found:', current.value);

    // Move to the next node.
    current = current.next;

  }

  console.log('🏁 Reached null — end of the list!');

}


/*
========================================================
ADD TO FRONT
========================================================

Adding to the front means:

1. Create a new Node.
2. Point the new Node at the current HEAD.
3. Make the new Node the new HEAD.

Example:

BEFORE:

HEAD
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak

AFTER:

HEAD
 ↓
🛡️ Magic Shield
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak

Big O:

Time: O(1)
Space: O(1)

We don't have to search through the list.
We simply update two references.
========================================================
*/

function addToFront(value, list) {

  // Create the new Node.
  let newHead = new Node(value);

  // Point the new Node at the old HEAD.
  newHead.next = list.head;

  // Make the new Node the new HEAD.
  list.head = newHead;

}


/*
========================================================
ADD TO BACK
========================================================

Adding to the back means:

1. Start at the HEAD.
2. Follow next until we reach the last Node.
3. Create a new Node.
4. Point the last Node at the new Node.

Example:

BEFORE:

🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
null

AFTER:

🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
💎 Magic Crystal
 ↓
null

Big O:

Time: O(n)
Space: O(1)

Why?

We may have to walk through every Node
to find the end of the list.
========================================================
*/

function addToBack(value, list) {

  // Start at the HEAD.
  let current = list.head;

  // Keep moving until current is the last Node.
  //
  // The last Node's next property is null.
  while (current.next !== null) {

    current = current.next;

  }

  // Create the new Node.
  let newTail = new Node(value);

  // Connect the old last Node to the new Node.
  current.next = newTail;

}


/*
========================================================
DEMO
========================================================
*/


console.log('');
console.log('🏰 =======================================');
console.log('🏰   MAGICAL LINKED LIST ADVENTURE');
console.log('🏰 =======================================');
console.log('');


/*
--------------------------------------------------------
STEP 1: TRAVERSE THE ORIGINAL LIST
--------------------------------------------------------
*/

console.log('🗺️ STEP 1: Explore the original list');
console.log('');

traverse(list);


/*
Expected output:

✨ Found: Magic Wand
✨ Found: Invisibility Cloak
✨ Found: Flaming Sword
✨ Found: Spellbook
🏁 Reached null — end of the list!
*/


/*
--------------------------------------------------------
STEP 2: ADD SOMETHING TO THE FRONT
--------------------------------------------------------

Let's add a Magic Shield.

The Magic Shield becomes the new HEAD.
--------------------------------------------------------
*/

console.log('');
console.log('🛡️ STEP 2: Add Magic Shield to the FRONT');
console.log('');

addToFront('Magic Shield', list);


/*
The list is now:

HEAD
 ↓
🛡️ Magic Shield
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
null
*/


traverse(list);


/*
--------------------------------------------------------
STEP 3: ADD SOMETHING TO THE BACK
--------------------------------------------------------

Let's add a Magic Crystal to the end.
--------------------------------------------------------
*/

console.log('');
console.log('💎 STEP 3: Add Magic Crystal to the BACK');
console.log('');

addToBack('Magic Crystal', list);


/*
The final list is:

HEAD
 ↓
🛡️ Magic Shield
 ↓
🪄 Magic Wand
 ↓
🫥 Invisibility Cloak
 ↓
🔥 Flaming Sword
 ↓
📖 Spellbook
 ↓
💎 Magic Crystal
 ↓
null
*/


traverse(list);


/*
========================================================
FINAL LINKED LIST
========================================================

               HEAD
                 ↓
          🛡️ Magic Shield
                 ↓
           🪄 Magic Wand
                 ↓
       🫥 Invisibility Cloak
                 ↓
          🔥 Flaming Sword
                 ↓
            📖 Spellbook
                 ↓
           💎 Magic Crystal
                 ↓
               null


The important idea:

HEAD
 ↓
VALUE
 ↓
NEXT
 ↓
VALUE
 ↓
NEXT
 ↓
VALUE
 ↓
NEXT
 ↓
null


Every Node knows:

"What is my value?"

and

"Where is the next Node?"
========================================================
*/


/*
========================================================
BIG-O SUMMARY
========================================================

Operation          Time        Space

Traverse           O(n)        O(1)

Search             O(n)        O(1)

Add to Front       O(1)        O(1)

Add to Back        O(n)        O(1)


Remember:

O(1) = Doesn't depend on the size of the list.

O(n) = May need to visit every Node.

========================================================
*/
