/* ===============================================================
   K-ARY TREES — JAVASCRIPT LESSON + THREE LIVE CODING EXERCISES
   Run in terminal: node k-ary-trees.js
   Or open k-ary-trees.html in your browser to use its buttons.

   KEY IDEA:
   "k-ary" means each node can have AT MOST k children.
   This example is a 3-ary tree: no node has more than 3 children.

   A tree needs:
   - Nodes: one value and an array of children
   - A root: the first (top) node
   - Connections: references from parents to their child nodes
   =============================================================== */

// ===============================================================
// PART 1 — CREATE THE CLASSES (USE IN ALL THREE EXERCISES)
// ===============================================================

// STEP 1: A node holds its own value and a list of children.
class Node {
  constructor(value) {
    this.value = value;
    this.children = []; // An array lets us store multiple children.
  }
}

// STEP 2: The tree only needs to know where its root is.
class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

// NOTE: This basic class does not enforce a maximum k.
// To build a 3-ary tree, we choose to add at most 3 children
// to each node. In a larger app, an addChild() method could
// check the maximum and reject extra children.

// ===============================================================
// EXERCISE 1 — BUILD A 3-ARY TREE
// GOAL: Practice creating nodes and connecting them.
// ===============================================================
// Diagram to build:
//          15
//        /  |  \
//       3   5   7
//      / \
//     30  8
//
// CODE-ALONG STEPS:
// 1. Create a root node with value 15.
// 2. Create children with values 3, 5, and 7.
// 3. Push those children into root.children.
// 4. Add values 30 and 8 below the node containing 3.
// 5. Wrap the root in a KaryTree.
// 6. Verify how many children the root has.

function exercise1BuildTree() {
  // STEP 1: Make the root.
  const root = new Node(15);

  // STEP 2: Make its three direct children.
  const child3 = new Node(3);
  const child5 = new Node(5);
  const child7 = new Node(7);

  // STEP 3: Connect the children to root.
  root.children.push(child3, child5, child7);

  // STEP 4: Give node 3 two children of its own.
  child3.children.push(new Node(30), new Node(8));

  // STEP 5: Make the whole tree object.
  const tree = new KaryTree(root);

  // STEP 6: Return it so the next exercises can reuse it.
  return tree;
}

// ===============================================================
// EXERCISE 2 — VISIT EVERY NODE WITH DEPTH-FIRST SEARCH (DFS)
// GOAL: Understand recursion and the order of traversal.
// ===============================================================
// Expected preorder DFS: 15 -> 3 -> 30 -> 8 -> 5 -> 7
//
// CODE-ALONG STEPS:
// 1. Create an empty list to collect visited values.
// 2. Write a helper function visit(node).
// 3. Add the CURRENT node's value to the list.
// 4. For every child, call visit(child) again (recursion).
// 5. Start at tree.root and return the collected values.
//
// WHY RECURSION?
// Each child might have children of its own. The same function
// can explore those next levels without us knowing the depth.

function exercise2DepthFirst(tree) {
  // STEP 1: This array will hold the values in visit order.
  const visited = [];

  // STEP 2: Define our helper.
  function visit(node) {
    // A missing node means there is nothing to visit.
    if (!node) return;

    // STEP 3: Record this node BEFORE exploring its children.
    visited.push(node.value);

    // STEP 4: Visit each child, one at a time.
    for (const child of node.children) {
      visit(child); // Recursion: the function calls itself.
    }
  }

  // STEP 5: Begin at the root, then return the answer.
  if (tree && tree.root) visit(tree.root);
  return visited;
}

// ===============================================================
// EXERCISE 3 — CREATE A NEW FIZZBUZZ TREE
// GOAL: Apply rules to each value and keep the original tree.
// ===============================================================
// RULES:
// - Divisible by BOTH 3 and 5 -> "FizzBuzz"
// - Divisible by 3            -> "Fizz"
// - Divisible by 5            -> "Buzz"
// - Otherwise                 -> number as a string
//
// CODE-ALONG STEPS:
// 1. Check for an empty tree.
// 2. Make a function that converts one number to a string.
// 3. Make a recursive function that creates a NEW node.
// 4. For each old child, create and attach its NEW child.
// 5. Return the NEW tree, not the old one.
//
// IMPORTANT: Check divisible by both FIRST.
// Example: 15 % 15 === 0, so 15 becomes "FizzBuzz".

function exercise3FizzBuzzTree(tree) {
  // STEP 1: An empty input returns an empty tree.
  if (!tree || !tree.root) return new KaryTree();

  // STEP 2: Convert ONE number using the FizzBuzz rules.
  function fizzBuzzValue(number) {
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return String(number); // Example: 7 becomes "7".
  }

  // STEP 3: Convert one node AND all nodes below it.
  function convertNode(oldNode) {
    // Create a DIFFERENT node with the new string value.
    const newNode = new Node(fizzBuzzValue(oldNode.value));

    // STEP 4: Convert each child and connect it to newNode.
    for (const oldChild of oldNode.children) {
      const newChild = convertNode(oldChild);
      newNode.children.push(newChild);
    }

    // Give the converted node back to its parent.
    return newNode;
  }

  // STEP 5: Start at root and return a whole NEW tree.
  const newRoot = convertNode(tree.root);
  return new KaryTree(newRoot);
}

// ===============================================================
// PART 2 — RUN THE THREE EXERCISES IN THE TERMINAL
// ===============================================================
// Each log verifies a milestone; no unnecessary logs in recursion.
// typeof window checks whether this is Node.js, not the browser.

if (typeof window === 'undefined') {
  const originalTree = exercise1BuildTree();
  console.log('EXERCISE 1 — Root:', originalTree.root.value,
    '| Direct children:', originalTree.root.children.map(child => child.value));

  const visitOrder = exercise2DepthFirst(originalTree);
  console.log('EXERCISE 2 — DFS order:', visitOrder.join(' -> '));

  const fizzBuzzTree = exercise3FizzBuzzTree(originalTree);
  console.log('EXERCISE 3 — FizzBuzz DFS:',
    exercise2DepthFirst(fizzBuzzTree).join(' -> '));
  console.log('ORIGINAL ROOT STILL NUMBER 15:', originalTree.root.value);
  console.log('NEW ROOT IS A DIFFERENT NODE:',
    originalTree.root !== fizzBuzzTree.root);

  // OPTIONAL STUDENT CHALLENGES (try after class):
  // A. Add another child to node 5. What happens to DFS order?
  // B. Create a tree with only one node (0). Expected: "FizzBuzz".
  // C. Pass an empty tree to exercise3FizzBuzzTree(). What is root?
}

// ===============================================================
// PART 3 — INTERACTIVE BUTTONS FOR THE HTML LESSON
// ===============================================================
// This section runs only if the browser page has these elements.
// It reuses the SAME functions from our live coding exercises.

if (typeof document !== 'undefined') {
  const nextButton = document.getElementById('dfs-next');
  const resetButton = document.getElementById('dfs-reset');
  const dfsOutput = document.getElementById('dfs-output');
  const fizzBuzzButton = document.getElementById('show-fizzbuzz');
  const fizzBuzzOutput = document.getElementById('fizzbuzz-output');

  if (nextButton && resetButton && dfsOutput) {
    const order = exercise2DepthFirst(exercise1BuildTree());
    let currentStep = 0;

    function renderDfsStep() {
      // Highlight visited circles to show progress through the tree.
      order.forEach((value, index) => {
        const node = document.getElementById(`dfs-node-${index}`);
        if (!node) return;
        const circle = node.querySelector('circle');
        const wasVisited = index < currentStep;
        circle.style.fill = wasVisited ? '#dc8319' : (index === 0 ? '#2563b4' : index === 2 || index === 3 ? '#804cca' : '#0c8c80');
        circle.style.stroke = wasVisited ? '#7c3c07' : '';
      });

      if (currentStep === 0) {
        dfsOutput.textContent = 'Start at the root: press Visit next node.';
      } else {
        const currentValue = order[currentStep - 1];
        const soFar = order.slice(0, currentStep).join(' → ');
        dfsOutput.textContent = `Step ${currentStep} of ${order.length}: visited ${currentValue}. Order so far: ${soFar}`;
      }
      nextButton.disabled = currentStep === order.length;
    }

    nextButton.addEventListener('click', () => {
      if (currentStep < order.length) currentStep++;
      renderDfsStep();
    });
    resetButton.addEventListener('click', () => {
      currentStep = 0;
      renderDfsStep();
    });
    renderDfsStep();
  }

  if (fizzBuzzButton && fizzBuzzOutput) {
    fizzBuzzButton.addEventListener('click', () => {
      const original = exercise1BuildTree();
      const converted = exercise3FizzBuzzTree(original);
      fizzBuzzOutput.textContent = `Original DFS: ${exercise2DepthFirst(original).join(' → ')} | New DFS: ${exercise2DepthFirst(converted).join(' → ')}. Same structure, new nodes!`;
    });
  }
}
