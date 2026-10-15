
/*
============================================================
CODE CHALLENGE 16 — FIND MAXIMUM VALUE IN A BINARY TREE
Branch: tree-max
============================================================

LEARNING GOALS

1. Build a binary tree from connected Node objects.

2. Visit EVERY node using depth-first, preorder traversal:
   current node -> left subtree -> right subtree.

3. Keep the largest number seen so far in a variable: max.

4. Return the largest numeric value in the tree.


HOW TO RUN

- Open index.html in your browser. It loads this file.
- Open Developer Tools -> Console to see the exercise results.

OR run:

node tree-max.js


TEACHER NOTE:
A Binary Tree is NOT necessarily sorted.

Do not assume the largest value is the farthest-right node!
*/


// ============================================================
// MILESTONE 1: CREATE A NODE
// ============================================================

// Each Node has a number and two links to other nodes.

class Node {
  constructor(value) {

    this.value = value;  // The number saved in this node

    this.left = null;    // No left child yet

    this.right = null;   // No right child yet
  }
}


// ============================================================
// MILESTONE 2: CREATE A BINARY TREE
// ============================================================

// The root is the starting (top) node.

class BinaryTree {
  constructor() {

    this.root = null;  // An empty tree begins with no root

  }


  // ==========================================================
  // MILESTONE 3: FIND THE MAXIMUM
  // ==========================================================

  // No arguments are required.
  // A populated tree returns a number.
  // Classroom choice: an empty tree returns null.

  findMaximumValue() {

    // STEP 1:
    // No nodes means no maximum exists.

    if (this.root === null) {
      return null;
    }


    // STEP 2:
    // Use the first real number as our starting maximum.
    //
    // Do NOT use 0!
    // All values in the tree could be negative.

    let max = this.root.value;


    // STEP 3:
    // Helper function: visit one node,
    // then visit its children.

    const traverse = (node) => {

      // BASE CASE:
      // No node here.
      // Stop going down this path.

      if (node === null) {
        return;
      }


      // STEP 4:
      // CHECK CURRENT NODE
      //
      // Is its number the biggest so far?

      if (node.value > max) {
        max = node.value;
      }


      // STEP 5:
      // RECURSION
      //
      // Follow the entire left side,
      // then the entire right side.

      traverse(node.left);

      traverse(node.right);

    };


    // STEP 6:
    // Begin traversing at the root.

    traverse(this.root);


    // STEP 7:
    // Return only after EVERY node
    // has been visited.

    return max;

  }
}


// ============================================================
// OPTIONAL TEACHING HELPER: TRACE THE TRAVERSAL
// ============================================================

// This helper records every visited node
// and any changes to the maximum.
//
// It is for visualization ONLY.
//
// The required findMaximumValue() method above
// stays simple.

function traceMaximum(tree) {

  if (tree.root === null) {
    return [];
  }

  const steps = [];

  let max = tree.root.value;

  const visit = (node) => {

    if (node === null) {
      return;
    }

    const previousMax = max;

    if (node.value > max) {
      max = node.value;
    }

    steps.push({
      value: node.value,
      previousMax,
      max,
      updated: max !== previousMax
    });

    visit(node.left);

    visit(node.right);
  };

  visit(tree.root);

  return steps;
}


// ============================================================
// LIVE EXERCISE 1
// BUILD A TREE AND FIND THE MAXIMUM
//
// Time: Approximately 5 minutes
// Difficulty: BEGINNER
// ============================================================

/*

OUR TREE:

          10
         /  \
        5    20
       / \   / \
      30  8 15 25


STEP 1:
Create an empty BinaryTree.

STEP 2:
Attach a root Node with the value 10.

STEP 3:
Attach left and right children: 5 and 20.

STEP 4:
Add 30, 8, 15, and 25 using .left and .right.

STEP 5:
Predict the answer BEFORE running the method.

STEP 6:
Run findMaximumValue().

QUESTION:
Why isn't the answer 25?

*/

// Create the tree.

const exercise1 = new BinaryTree();


// Add the root.

exercise1.root = new Node(10);


// Add the root's children.

exercise1.root.left = new Node(5);

exercise1.root.right = new Node(20);


// Add children to the left side.

exercise1.root.left.left = new Node(30);

exercise1.root.left.right = new Node(8);


// Add children to the right side.

exercise1.root.right.left = new Node(15);

exercise1.root.right.right = new Node(25);


// Find the maximum.

console.log(
  'Exercise 1 maximum:',
  exercise1.findMaximumValue()
);

// Expected output: 30


// OPTIONAL LIVE DEMO:
//
// Show the traversal progression in the console.
//
// This table records:
// - The current node
// - The previous maximum
// - The maximum after checking the node
// - Whether max was updated

console.table(traceMaximum(exercise1));


// ============================================================
// LIVE EXERCISE 2
// CHANGE THE TREE AND PREDICT THE RESULT
//
// Time: Approximately 5 minutes
// Difficulty: INTERMEDIATE
// ============================================================

/*

OUR TREE:

          42
         /  \
        17   60
             / \
            9   55


STEP 1:
Read the starter tree below and draw it on the board.

STEP 2:
Predict the output.

STEP 3:
CHALLENGE!

Add a new node with value 99 as the
left child of node 9.

Use:

exercise2.root.right.left.left = new Node(99);

STEP 4:
Predict the answer again.

Which nodes will traversal visit?

STEP 5:
Uncomment the marked line and run the file.

*/

// Create a new Binary Tree.

const exercise2 = new BinaryTree();


// Create the root.

exercise2.root = new Node(42);


// Add left and right children.

exercise2.root.left = new Node(17);

exercise2.root.right = new Node(60);


// Add children to node 60.

exercise2.root.right.left = new Node(9);

exercise2.root.right.right = new Node(55);


// STUDENTS:
//
// Uncomment the next line when ready.
//
// exercise2.root.right.left.left = new Node(99);


// Check the maximum.

console.log(
  'Exercise 2 maximum:',
  exercise2.findMaximumValue()
);

// Before adding 99: 60
// After adding 99: 99


// ============================================================
// LIVE EXERCISE 3
// EDGE CASES AND INDEPENDENT PRACTICE
//
// Time: Approximately 7 minutes
// Difficulty: CHALLENGE
// ============================================================

/*

STEP 1:
Make a new tree with -10 as its root.

STEP 2:
Add -30 on the left and -5 on the right.

STEP 3:
Before you run it, predict the maximum.

STEP 4:
Run it and explain why starting max at 0 fails.

STEP 5:
Create an empty tree.

What should the method return?

BONUS:
Add two nodes with the same maximum.

Does it still work?


NEGATIVE VALUE TREE:

         -10
         / \
       -30  -5


EXPECTED MAXIMUM:

         -5

*/

// Create a new Binary Tree.

const exercise3 = new BinaryTree();


// Add the root.

exercise3.root = new Node(-10);


// Add negative values.

exercise3.root.left = new Node(-30);

exercise3.root.right = new Node(-5);


// Find the maximum.

console.log(
  'Exercise 3 maximum:',
  exercise3.findMaximumValue()
);

// Expected output: -5


// ============================================================
// EDGE CASE: EMPTY TREE
// ============================================================

// Create a Binary Tree without any nodes.

const emptyTree = new BinaryTree();

console.log(
  'Empty tree result:',
  emptyTree.findMaximumValue()
);

// Expected output: null


// ============================================================
// EXPORTS FOR NODE.JS
// ============================================================

// This allows other JavaScript files to use
// our Node class, BinaryTree class,
// and traceMaximum helper.
//
// It does not affect the browser lesson.

if (typeof module !== 'undefined' && module.exports) {

  module.exports = {
    Node,
    BinaryTree,
    traceMaximum
  };

}


// ============================================================
// BROWSER-ONLY VISUALIZATION
// ============================================================

// Connect our JavaScript example to the HTML diagram.
//
// This does NOT change the BinaryTree algorithm.
//
// The browser will use this section to:
// - Draw nodes
// - Draw connecting lines
// - Highlight visited nodes
// - Highlight the maximum
// - Update the traversal progression
//
// This code only runs in a browser.

if (typeof document !== 'undefined') {

  const svg = document.getElementById('tree-diagram');

  if (svg) {

    // Positions for each node in our diagram.

    const nodes = [
      { value: 10, x: 270, y: 46, parent: -1 },
      { value: 5, x: 142, y: 151, parent: 0 },
      { value: 30, x: 68, y: 275, parent: 1 },
      { value: 8, x: 216, y: 275, parent: 1 },
      { value: 20, x: 399, y: 151, parent: 0 },
      { value: 15, x: 333, y: 275, parent: 4 },
      { value: 25, x: 470, y: 275, parent: 4 }
    ];


    // Preorder traversal:
    // Current node -> Left -> Right.

    const steps = traceMaximum(exercise1);

    let count = 0;

    const namespace = 'http://www.w3.org/2000/svg';


    // Helper for creating SVG elements.

    const element = (name, attrs, parent) => {

      const el = document.createElementNS(
        namespace,
        name
      );

      Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, value);
      });

      parent.appendChild(el);

      return el;
    };


    // Draw or update the diagram.

    const draw = () => {

      svg.replaceChildren();


      // STEP 1:
      // Draw the lines connecting nodes.

      const links = element(
        'g',
        { class: 'links' },
        svg
      );

      nodes.forEach((node) => {

        if (node.parent !== -1) {

          const parent = nodes[node.parent];

          element(
            'line',
            {
              x1: parent.x,
              y1: parent.y,
              x2: node.x,
              y2: node.y
            },
            links
          );
        }
      });


      // STEP 2:
      // Identify already visited nodes.

      const visited = steps
        .slice(0, count)
        .map(step => step.value);


      // STEP 3:
      // Draw each node with its current color.

      nodes.forEach((node) => {

        const isActive =
          count > 0 &&
          steps[count - 1].value === node.value;

        const isMax =
          count === steps.length &&
          node.value === 30;

        const klass = isMax
          ? 'node maximum'
          : isActive
            ? 'node active'
            : visited.includes(node.value)
              ? 'node visited'
              : 'node';


        const group = element(
          'g',
          { class: klass },
          svg
        );

        element(
          'circle',
          {
            cx: node.x,
            cy: node.y,
            r: 34
          },
          group
        );

        const textNode = element(
          'text',
          {
            x: node.x,
            y: node.y + 2
          },
          group
        );

        textNode.textContent = String(node.value);

      });


      // STEP 4:
      // Update the HTML labels.

      const last = steps[count - 1];

      document.getElementById(
        'visited-count'
      ).textContent = `${count} / ${steps.length}`;

      document.getElementById(
        'current-value'
      ).textContent = last ? last.value : '—';

      document.getElementById(
        'max-value'
      ).textContent = last ? last.max : '—';


      // STEP 5:
      // Explain what happened during this visit.

      document.getElementById(
        'step-message'
      ).textContent = !last
        ? 'Start at the root (10). No nodes have been visited yet.'
        : count === steps.length
          ? 'Finished! Every node was visited once. The largest value is 30.'
          : last.updated
            ? `Visited ${last.value}. This beats ${last.previousMax}, so update max to ${last.max}.`
            : `Visited ${last.value}. It does not beat ${last.max}, so max stays ${last.max}.`;


      // STEP 6:
      // Display the traversal order.

      const chips = document.getElementById(
        'visit-chips'
      );

      chips.replaceChildren();

      steps.forEach((step, index) => {

        const chip = document.createElement('span');

        chip.className =
          'chip' +
          (index < count ? ' done' : '') +
          (index === count - 1 ? ' current' : '') +
          (
            count === steps.length &&
            step.value === 30
              ? ' top'
              : ''
          );

        chip.textContent = `${index + 1}. ${step.value}`;

        chips.appendChild(chip);

      });


      // Disable Next after finishing the traversal.

      document.getElementById(
        'next'
      ).disabled = count === steps.length;

    };


    // ========================================================
    // INTERACTIVE BUTTONS
    // ========================================================

    // NEXT NODE:
    // Move forward one step.

    document.getElementById('next').addEventListener(
      'click',
      () => {
        count = Math.min(count + 1, steps.length);
        draw();
      }
    );


    // RESET:
    // Return to the beginning.

    document.getElementById('reset').addEventListener(
      'click',
      () => {
        count = 0;
        draw();
      }
    );


    // SHOW ALL:
    // Complete the traversal immediately.

    document.getElementById('all').addEventListener(
      'click',
      () => {
        count = steps.length;
        draw();
      }
    );


    // Draw the original tree.

    draw();

  }
}
