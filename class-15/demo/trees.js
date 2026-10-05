/*
============================================================
TREES, BINARY TREES, AND BINARY SEARCH TREES
Student Learning File
============================================================

Open index.html in a browser.
Then open Developer Tools -> Console.

This file follows the challenge in small milestones.

BIG IDEA:
A tree is made of Nodes.

A Binary Tree lets each node have up to TWO children.

A Binary Search Tree (BST) adds a sorting rule:

      SMALLER -> LEFT
      LARGER  -> RIGHT
*/


// ==========================================================
// MILESTONE 1: BUILD ONE NODE
// ==========================================================

console.log("===== MILESTONE 1: NODE =====");

class Node {
  constructor(value) {

    // The information stored inside this node
    this.value = value;

    // At first, the node has no children
    this.left = null;
    this.right = null;
  }
}


// Let's create ONE node.

const practiceNode = new Node(10);

console.log("We created one Node:");

console.log(practiceNode);

console.log("Node value:", practiceNode.value);

console.log("Left child starts as:", practiceNode.left);

console.log("Right child starts as:", practiceNode.right);


/*
OUR NODE LOOKS LIKE THIS:

        ┌─────────────┐
        │     10      │
        ├─────────────┤
        │ left: null  │
        │ right: null │
        └─────────────┘

The value is 10.

But it does not have any children yet.
*/


// ==========================================================
// MILESTONE 2: BUILD A BINARY TREE
// ==========================================================

console.log("\n===== MILESTONE 2: BINARY TREE =====");


class BinaryTree {

  constructor() {

    /*
    ROOT means the TOP of the tree.

    A brand-new tree does not have any nodes.

    So:

    root = null
    */

    this.root = null;
  }


  // ========================================================
  // PRE ORDER
  // ========================================================

  /*
  PRE ORDER:

  ROOT
  LEFT
  RIGHT

  Easy memory trick:

  PRE = ROOT FIRST
  */

  preOrder() {

    // This array will hold our answers.

    const results = [];


    /*
    walk() means:

    "Visit this node and continue moving
    through the tree."
    */

    function walk(node) {


      // ----------------------------------------------------
      // BASE CASE
      // ----------------------------------------------------

      /*
      If there is no node here,
      there is nothing else to visit.

      Stop going down this path.
      */

      if (node === null) {
        return;
      }


      // ----------------------------------------------------
      // STEP 1: ROOT
      // ----------------------------------------------------

      results.push(node.value);


      // ----------------------------------------------------
      // STEP 2: LEFT
      // ----------------------------------------------------

      walk(node.left);


      // ----------------------------------------------------
      // STEP 3: RIGHT
      // ----------------------------------------------------

      walk(node.right);
    }


    // Start walking at the ROOT.

    walk(this.root);


    // Give back the completed array.

    return results;
  }


  // ========================================================
  // IN ORDER
  // ========================================================

  /*
  IN ORDER:

  LEFT
  ROOT
  RIGHT

  Easy memory trick:

  The ROOT is IN the middle.
  */

  inOrder() {

    const results = [];


    function walk(node) {

      if (node === null) {
        return;
      }


      // STEP 1: LEFT

      walk(node.left);


      // STEP 2: ROOT

      results.push(node.value);


      // STEP 3: RIGHT

      walk(node.right);
    }


    walk(this.root);


    return results;
  }


  // ========================================================
  // POST ORDER
  // ========================================================

  /*
  POST ORDER:

  LEFT
  RIGHT
  ROOT

  Easy memory trick:

  POST = ROOT LAST
  */

  postOrder() {

    const results = [];


    function walk(node) {

      if (node === null) {
        return;
      }


      // STEP 1: LEFT

      walk(node.left);


      // STEP 2: RIGHT

      walk(node.right);


      // STEP 3: ROOT

      results.push(node.value);
    }


    walk(this.root);


    return results;
  }
}


// ==========================================================
// MILESTONE 3: MANUALLY BUILD A BINARY TREE
// ==========================================================

console.log("\n===== MILESTONE 3: CONNECT NODES =====");


const binaryTree = new BinaryTree();


/*
First create our ROOT.

            10
*/

binaryTree.root = new Node(10);


console.log("Created root:", binaryTree.root.value);


// ----------------------------------------------------------
// ADD TWO CHILDREN
// ----------------------------------------------------------

/*

Now:

            10
           /  \
          5    15

*/

binaryTree.root.left = new Node(5);

binaryTree.root.right = new Node(15);


console.log(
  "Root's left child:",
  binaryTree.root.left.value
);

console.log(
  "Root's right child:",
  binaryTree.root.right.value
);


// ----------------------------------------------------------
// ADD ANOTHER LEVEL
// ----------------------------------------------------------

binaryTree.root.left.left = new Node(2);

binaryTree.root.left.right = new Node(7);

binaryTree.root.right.left = new Node(12);

binaryTree.root.right.right = new Node(20);


/*
OUR COMPLETE TREE:

                 10
               /    \
              5      15
             / \    /  \
            2   7  12   20


IMPORTANT:

This is a BINARY TREE because every node
has at most TWO children.

A node can have:

0 children
1 child
2 children

But NOT more than 2.
*/


console.log("Binary Tree has been created.");


// ==========================================================
// MILESTONE 4: PRE ORDER
// ==========================================================

console.log("\n===== MILESTONE 4A: PRE ORDER =====");


/*
Remember:

ROOT
LEFT
RIGHT


Our tree:

                 10
               /    \
              5      15
             / \    /  \
            2   7  12   20


PRE ORDER should visit:

10
5
2
7
15
12
20
*/


const preOrderResult = binaryTree.preOrder();


console.log("PRE ORDER");

console.log("ROOT -> LEFT -> RIGHT");

console.log("Result:", preOrderResult);


/*
EXPECTED:

[
  10,
  5,
  2,
  7,
  15,
  12,
  20
]
*/


// ==========================================================
// MILESTONE 4B: IN ORDER
// ==========================================================

console.log("\n===== MILESTONE 4B: IN ORDER =====");


/*
Remember:

LEFT
ROOT
RIGHT


IN ORDER should visit:

2
5
7
10
12
15
20
*/


const inOrderResult = binaryTree.inOrder();


console.log("IN ORDER");

console.log("LEFT -> ROOT -> RIGHT");

console.log("Result:", inOrderResult);


/*
EXPECTED:

[
  2,
  5,
  7,
  10,
  12,
  15,
  20
]
*/


// ==========================================================
// MILESTONE 4C: POST ORDER
// ==========================================================

console.log("\n===== MILESTONE 4C: POST ORDER =====");


/*
Remember:

LEFT
RIGHT
ROOT


POST ORDER should visit:

2
7
5
12
20
15
10
*/


const postOrderResult = binaryTree.postOrder();


console.log("POST ORDER");

console.log("LEFT -> RIGHT -> ROOT");

console.log("Result:", postOrderResult);


/*
EXPECTED:

[
  2,
  7,
  5,
  12,
  20,
  15,
  10
]
*/


// ==========================================================
// MILESTONE 5: BINARY SEARCH TREE
// ==========================================================

console.log(
  "\n===== MILESTONE 5: BINARY SEARCH TREE ====="
);


/*
A BINARY SEARCH TREE is a special type
of Binary Tree.


The BIG rule is:


             CURRENT NODE
              /        \
             /          \
        SMALLER         LARGER
         LEFT            RIGHT


Example:

               10
              /  \
             5    15


5 is smaller than 10.

So 5 goes LEFT.


15 is larger than 10.

So 15 goes RIGHT.
*/


// ==========================================================
// EXTENDS
// ==========================================================

/*
Notice:

BinarySearchTree extends BinaryTree


"extends" means:

BinarySearchTree receives the features
from BinaryTree.


That means our BST ALREADY has:

preOrder()

inOrder()

postOrder()


We do NOT have to write those again.


We only need to add:

add()

contains()
*/


class BinarySearchTree extends BinaryTree {


  // ========================================================
  // ADD A VALUE
  // ========================================================

  add(value) {


    // First create the new Node.

    const newNode = new Node(value);


    // ------------------------------------------------------
    // EDGE CASE:
    // EMPTY TREE
    // ------------------------------------------------------

    /*
    If there is no root yet,
    this new Node becomes the root.
    */

    if (this.root === null) {

      this.root = newNode;

      return;
    }


    // ------------------------------------------------------
    // START AT THE ROOT
    // ------------------------------------------------------

    /*
    current means:

    "The node I am looking at right now."
    */

    let current = this.root;


    // Keep looking until we find
    // an empty position.

    while (true) {


      // ====================================================
      // IS THE NEW VALUE SMALLER?
      // ====================================================

      if (value < current.value) {


        /*
        SMALLER = GO LEFT
        */


        // Is the left position empty?

        if (current.left === null) {


          // YES!
          // We found where the Node belongs.

          current.left = newNode;


          // We are finished.

          return;
        }


        /*
        The left position already has a Node.

        Move there and compare again.
        */

        current = current.left;
      }


      // ====================================================
      // OTHERWISE GO RIGHT
      // ====================================================

      else {


        /*
        LARGER OR EQUAL = GO RIGHT
        */


        // Is the right position empty?

        if (current.right === null) {


          // YES!
          // Put our Node here.

          current.right = newNode;


          return;
        }


        /*
        The right position already has a Node.

        Move there and compare again.
        */

        current = current.right;
      }
    }
  }


  // ========================================================
  // CONTAINS
  // ========================================================

  contains(value) {


    /*
    Start searching at the ROOT.
    */

    let current = this.root;


    /*
    Keep searching while there is
    still a Node to inspect.
    */

    while (current !== null) {


      console.log(
        `Searching for ${value}: currently checking ${current.value}`
      );


      // ----------------------------------------------------
      // DID WE FIND IT?
      // ----------------------------------------------------

      if (value === current.value) {


        console.log(
          `Found ${value}!`
        );


        return true;
      }


      // ----------------------------------------------------
      // IS OUR VALUE SMALLER?
      // ----------------------------------------------------

      if (value < current.value) {


        console.log(
          `${value} is smaller than ${current.value}`
        );


        console.log(
          "Move LEFT"
        );


        current = current.left;
      }


      // ----------------------------------------------------
      // OTHERWISE MOVE RIGHT
      // ----------------------------------------------------

      else {


        console.log(
          `${value} is larger than ${current.value}`
        );


        console.log(
          "Move RIGHT"
        );


        current = current.right;
      }
    }


    /*
    If we get here, we reached null.

    That means there are no more Nodes
    to search.

    The value is NOT in the tree.
    */

    console.log(
      `${value} was not found.`
    );


    return false;
  }
}


// ==========================================================
// MILESTONE 6: BUILD A BST USING add()
// ==========================================================

console.log("\n===== MILESTONE 6: BST ADD =====");


const bst = new BinarySearchTree();


// ----------------------------------------------------------
// ADD 10
// ----------------------------------------------------------

console.log("\nAdding 10");

bst.add(10);


/*
Tree:

        10
*/


// ----------------------------------------------------------
// ADD 5
// ----------------------------------------------------------

console.log("Adding 5");

bst.add(5);


/*
5 is smaller than 10.

Go LEFT.


        10
       /
      5
*/


// ----------------------------------------------------------
// ADD 15
// ----------------------------------------------------------

console.log("Adding 15");

bst.add(15);


/*
15 is larger than 10.

Go RIGHT.


        10
       /  \
      5    15
*/


// ----------------------------------------------------------
// ADD 2
// ----------------------------------------------------------

console.log("Adding 2");

bst.add(2);


/*
Compare 2 with 10.

2 < 10

LEFT


Compare 2 with 5.

2 < 5

LEFT


        10
       /  \
      5    15
     /
    2
*/


// ----------------------------------------------------------
// ADD 7
// ----------------------------------------------------------

console.log("Adding 7");

bst.add(7);


/*
7 < 10

LEFT


7 > 5

RIGHT


        10
       /  \
      5    15
     / \
    2   7
*/


// ----------------------------------------------------------
// ADD 12
// ----------------------------------------------------------

console.log("Adding 12");

bst.add(12);


/*
12 > 10

RIGHT


12 < 15

LEFT
*/


// ----------------------------------------------------------
// ADD 20
// ----------------------------------------------------------

console.log("Adding 20");

bst.add(20);


/*
20 > 10

RIGHT


20 > 15

RIGHT
*/


/*
FINAL BST:


                 10
               /    \
              5      15
             / \    /  \
            2   7  12   20
*/


console.log("\nBST created!");


// ==========================================================
// TEST THE BST WITH IN ORDER
// ==========================================================

console.log("\nBST IN ORDER:");

console.log(
  bst.inOrder()
);


/*
RESULT:

[
  2,
  5,
  7,
  10,
  12,
  15,
  20
]


NOTICE SOMETHING IMPORTANT!


IN ORDER on a Binary Search Tree gives us:

SMALLEST -> LARGEST


That happens because:

LEFT = smaller

ROOT = current

RIGHT = larger
*/


console.log(
  "Notice: In Order on a BST gives values from smaller to larger."
);


// ==========================================================
// MILESTONE 7: TEST contains()
// ==========================================================

console.log(
  "\n===== MILESTONE 7: BST CONTAINS ====="
);


// ----------------------------------------------------------
// SEARCH FOR 12
// ----------------------------------------------------------

console.log("\nDoes the tree contain 12?");


const contains12 = bst.contains(12);


console.log(
  "Answer:",
  contains12
);


/*
SEARCH PATH:


Start:

10


Is 12 === 10?

NO


Is 12 smaller than 10?

NO


GO RIGHT.


Now:

15


Is 12 === 15?

NO


Is 12 smaller than 15?

YES


GO LEFT.


Now:

12


FOUND IT!


return true
*/


// ----------------------------------------------------------
// SEARCH FOR 100
// ----------------------------------------------------------

console.log("\nDoes the tree contain 100?");


const contains100 = bst.contains(100);


console.log(
  "Answer:",
  contains100
);


/*
SEARCH PATH:


10

100 > 10

RIGHT


15

100 > 15

RIGHT


20

100 > 20

RIGHT


null


There are no more Nodes.


return false
*/


// ==========================================================
// MILESTONE 8: EDGE CASES
// ==========================================================

console.log(
  "\n===== MILESTONE 8: EDGE CASES ====="
);


// ----------------------------------------------------------
// EMPTY BINARY TREE
// ----------------------------------------------------------

const emptyTree = new BinaryTree();


console.log(
  "Empty Pre Order:",
  emptyTree.preOrder()
);


console.log(
  "Empty In Order:",
  emptyTree.inOrder()
);


console.log(
  "Empty Post Order:",
  emptyTree.postOrder()
);


/*
EXPECTED:

[]

[]

[]
*/


// ----------------------------------------------------------
// EMPTY BST CONTAINS
// ----------------------------------------------------------

const emptyBST = new BinarySearchTree();


console.log(
  "\nDoes an empty BST contain 10?"
);


console.log(
  "Answer:",
  emptyBST.contains(10)
);


/*
EXPECTED:

false
*/


// ----------------------------------------------------------
// FIRST BST VALUE
// ----------------------------------------------------------

console.log(
  "\nAdding the first value to an empty BST..."
);


emptyBST.add(50);


console.log(
  "Root should now be 50:",
  emptyBST.root.value
);


/*
EXPECTED:

50
*/


// ==========================================================
// MILESTONE 9: BIG-O
// ==========================================================

console.log(
  "\n===== MILESTONE 9: BIG-O ====="
);


/*
============================================================
TREE TRAVERSALS
============================================================

Pre Order

In Order

Post Order


All three visit EVERY Node.


If we have:

7 Nodes

we visit:

7 Nodes


If we have:

100 Nodes

we visit:

100 Nodes


TIME COMPLEXITY:

O(n)


n = number of Nodes
*/


console.log(
  "Traversal Big-O: O(n)"
);


/*
============================================================
BST ADD AND CONTAINS
============================================================

A well-organized BST lets us ignore part
of the tree after every comparison.


Example:


                 50
               /    \
             25      75
            /  \    /  \
          10   30  60   90


Suppose we want 90.


Check:

50

90 > 50

RIGHT


Check:

75

90 > 75

RIGHT


Check:

90

FOUND!


We did NOT need to inspect every Node.


A BALANCED BST is approximately:

O(log n)
*/


console.log(
  "BST Add/Contains balanced: O(log n)"
);


/*
============================================================
WORST CASE
============================================================

A BST could become badly unbalanced.


Example:


10
  \
   20
     \
      30
        \
         40
           \
            50


This starts behaving like a Linked List.


Searching for 50 requires:

10
20
30
40
50


Worst case:

O(n)
*/


console.log(
  "BST Add/Contains worst case: O(n)"
);


// ==========================================================
// QUICK REVIEW
// ==========================================================

console.log(
  "\n===== QUICK REVIEW ====="
);


console.log(`
NODE:
Stores:
- value
- left
- right


BINARY TREE:
Each Node can have at most TWO children.


PRE ORDER:
ROOT -> LEFT -> RIGHT


IN ORDER:
LEFT -> ROOT -> RIGHT


POST ORDER:
LEFT -> RIGHT -> ROOT


BINARY SEARCH TREE:

SMALLER -> LEFT

LARGER -> RIGHT


BST ADD:
Compare values until an empty position is found.


BST CONTAINS:
Compare values until:
1. the value is found, OR
2. we reach null.
`);


// ==========================================================
// WEBSITE VISUALIZATION CODE
// ==========================================================

/*
STOP HERE FOR THE CORE CODE CHALLENGE.

Everything BELOW this point powers the interactive
index.html teaching page.

Students should understand the classes ABOVE before
worrying about the visualization code below.
*/


let visualBST = new BinarySearchTree();


const startingValues = [
  10,
  5,
  15,
  2,
  7,
  12,
  20
];


function fillStartingBST() {

  visualBST = new BinarySearchTree();


  startingValues.forEach(
    value => visualBST.add(value)
  );
}


fillStartingBST();


// ==========================================================
// TRAVERSAL ANIMATION
// ==========================================================

const traversalOrders = {

  pre: [
    10,
    5,
    2,
    7,
    15,
    12,
    20
  ],

  in: [
    2,
    5,
    7,
    10,
    12,
    15,
    20
  ],

  post: [
    2,
    7,
    5,
    12,
    20,
    15,
    10
  ]
};


let traversalTimer = null;


function startTraversal(type) {

  resetTraversal();


  const order = traversalOrders[type];


  const names = {

    pre:
      "Pre Order: ROOT → LEFT → RIGHT",

    in:
      "In Order: LEFT → ROOT → RIGHT",

    post:
      "Post Order: LEFT → RIGHT → ROOT"
  };


  const nodes = [
    ...document.querySelectorAll(
      "#binary .node"
    )
  ];


  const visited = [];


  let i = 0;


  document.getElementById(
    "traversalOutput"
  ).textContent = names[type];


  traversalTimer = setInterval(
    () => {

      if (i >= order.length) {

        clearInterval(traversalTimer);


        document.getElementById(
          "traversalOutput"
        ).textContent =
          `${names[type]} | Result: [${visited.join(", ")}]`;


        return;
      }


      nodes.forEach(
        node =>
          node.classList.remove("active")
      );


      const value = order[i];


      const node = nodes.find(
        n =>
          Number(
            n.querySelector("text").textContent
          ) === value
      );


      if (node) {

        node.classList.add("active");
      }


      visited.push(value);


      document.getElementById(
        "traversalOutput"
      ).textContent =
        `${names[type]} | Visited: [${visited.join(", ")}]`;


      i++;

    },

    700
  );
}


// ==========================================================
// RESET TRAVERSAL
// ==========================================================

function resetTraversal() {

  if (traversalTimer) {

    clearInterval(traversalTimer);
  }


  document.querySelectorAll(
    "#binary .node"
  ).forEach(
    node =>
      node.classList.remove("active")
  );


  const output =
    document.getElementById(
      "traversalOutput"
    );


  if (output) {

    output.textContent =
      "Choose a traversal to watch the visit order.";
  }
}


// ==========================================================
// DRAW THE INTERACTIVE BST
// ==========================================================

function renderBST() {

  const stage =
    document.getElementById(
      "bstStage"
    );


  if (!stage) {

    return;
  }


  if (!visualBST.root) {

    stage.innerHTML =
      "<p>The tree is empty.</p>";

    return;
  }


  const positions = [];


  /*
  place() calculates where each Node
  should appear on the webpage.
  */

  function place(
    node,
    x,
    y,
    gap
  ) {

    if (!node) {

      return;
    }


    positions.push({
      node,
      x,
      y
    });


    place(
      node.left,
      x - gap,
      y + 95,
      gap * 0.55
    );


    place(
      node.right,
      x + gap,
      y + 95,
      gap * 0.55
    );
  }


  place(
    visualBST.root,
    400,
    55,
    175
  );


  let lines = "";

  let circles = "";


  // --------------------------------------------------------
  // DRAW CONNECTION LINES
  // --------------------------------------------------------

  positions.forEach(
    ({ node, x, y }) => {

      for (
        const child of [
          node.left,
          node.right
        ]
      ) {

        if (child) {

          const childPosition =
            positions.find(
              position =>
                position.node === child
            );


          if (childPosition) {

            lines += `
              <line
                class="edge"
                x1="${x}"
                y1="${y}"
                x2="${childPosition.x}"
                y2="${childPosition.y}"
              />
            `;
          }
        }
      }
    }
  );


  // --------------------------------------------------------
  // DRAW NODES
  // --------------------------------------------------------

  positions.forEach(
    ({ node, x, y }) => {

      circles += `
        <g
          class="node"
          data-value="${node.value}"
        >

          <circle
            cx="${x}"
            cy="${y}"
            r="34">
          </circle>

          <text
            x="${x}"
            y="${y}">
            ${node.value}
          </text>

        </g>
      `;
    }
  );


  const height =
    Math.max(
      ...positions.map(
        position => position.y
      )
    ) + 65;


  stage.innerHTML = `

    <svg
      viewBox="0 0 800 ${height}"
      style="height:${Math.max(
        340,
        height
      )}px"
    >

      ${lines}

      ${circles}

    </svg>
  `;
}


// ==========================================================
// WEBSITE: ADD VALUE
// ==========================================================

function addBSTFromPage() {

  const input =
    document.getElementById(
      "addValue"
    );


  const value =
    Number(input.value);


  if (!Number.isFinite(value)) {

    return;
  }


  visualBST.add(value);


  renderBST();


  document.getElementById(
    "bstMessage"
  ).textContent =
    `Added ${value}. Follow the comparisons: smaller → left, larger/equal → right.`;


  console.log(
    `WEBSITE: Added ${value}`
  );


  console.log(
    "BST In Order now:",
    visualBST.inOrder()
  );
}


// ==========================================================
// WEBSITE: SEARCH / CONTAINS
// ==========================================================

function searchBSTFromPage() {

  const input =
    document.getElementById(
      "searchValue"
    );


  const value =
    Number(input.value);


  if (!Number.isFinite(value)) {

    return;
  }


  const found =
    visualBST.contains(value);


  document.querySelectorAll(
    "#bstStage .node"
  ).forEach(
    node =>
      node.classList.remove("found")
  );


  if (found) {

    const target =
      document.querySelector(
        `#bstStage .node[data-value="${value}"]`
      );


    if (target) {

      target.classList.add("found");
    }
  }


  document.getElementById(
    "bstMessage"
  ).textContent =
    found

      ? `TRUE — ${value} is in the tree.`

      : `FALSE — ${value} is not in the tree.`;
}


// ==========================================================
// WEBSITE: RESET BST
// ==========================================================

function resetBST() {

  fillStartingBST();


  renderBST();


  document.getElementById(
    "bstMessage"
  ).textContent =
    "Starting values: 10, 5, 15, 2, 7, 12, 20";
}


// ==========================================================
// START WEBSITE
// ==========================================================

document.addEventListener(
  "DOMContentLoaded",
  renderBST
);