/*
===========================================================
CODE CHALLENGE 17 — BREADTH-FIRST TRAVERSAL (BFS)
===========================================================

Save this file beside breadth-first.html, then open the HTML.

Open DevTools > Console to see the practice checks.

BIG IDEA:
Visit every node one level at a time (left to right).
A QUEUE helps us remember the next node (FIFO).

NODE = one value and two possible links (left/right)
BINARY TREE = a structure with a root node
ROOT = the first/top node in the tree

We build the tree manually here to make every link visible.

This is NOT a Binary Search Tree insertion demonstration.

The numerical values do not need to be in sorted order.
*/

// =========================================================
// PART 1: HOW TO CREATE A BINARY TREE
// =========================================================

// STEP 1: A Node holds one value and two possible children.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;  // No left child yet
    this.right = null; // No right child yet
  }
}

// STEP 2: A BinaryTree starts empty. Its root points to
// the very first node once we create that node.
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

// STEP 3: Link nodes to make the shape we want.

// Example: root 10, with children 5 and 20.
const simpleTree = new BinaryTree();
simpleTree.root = new Node(10);
simpleTree.root.left = new Node(5);
simpleTree.root.right = new Node(20);

// We added exactly three nodes. BFS should give [10, 5, 20].

// =========================================================
// PART 2: THE COMPLETE BREADTH-FIRST FUNCTION
// =========================================================

function breadthFirst(tree) {
  const result = []; // Values in the order we visit them

  // EDGE CASE: There is no root to visit.
  if (!tree || !tree.root) return result;

  // QUEUE: Start with the root node. Queue entries are
  // Node objects, not just their numbers, so we can reach
  // their left and right child links.
  const queue = [tree.root];

  // "front" points to the NEXT queue position to read.
  // This imitates dequeue without using array.shift().
  let front = 0;

  while (front < queue.length) {
    // 1. Read the next waiting node.
    const current = queue[front];
    front += 1;

    // 2. Save its value.
    result.push(current.value);

    // 3. Add LEFT child first (if it exists).
    if (current.left) queue.push(current.left);

    // 4. Add RIGHT child second (if it exists).
    if (current.right) queue.push(current.right);
  }

  // When front reaches the queue's length, no nodes remain.
  return result;
}

// One short check to connect the code to the HTML lesson:
console.log("Example — simple tree:", breadthFirst(simpleTree));
// Expected: [10, 5, 20]

// =========================================================
// PART 3: THREE LIVE STUDENT EXERCISES
// =========================================================
// INSTRUCTOR TIP:
// Work on these ONE AT A TIME. Students should first draw
// each tree and predict the values before running the code.

// Toggle RUN_EXERCISES to true when ready for console checks.
const RUN_EXERCISES = true;

// ---------------------------------------------------------
// EXERCISE 1 — BUILD YOUR OWN BINARY TREE
// Focus: Node, root, left child, right child
// ---------------------------------------------------------
// Draw this tree on the whiteboard:
//
//               10
//              /  \
//             5    20
//            / \   / \
//           3   7 15 25
//
// STEP A: Create a new BinaryTree.

// STEP B: Set its root to a Node with value 10.

// STEP C: Attach Nodes 5 and 20 as left and right children.

// STEP D: Attach 3 and 7 to Node 5.

// STEP E: Attach 15 and 25 to Node 20.

// STEP F: Predict the array, THEN run the check.

// Students: replace TODO comments with code. The first
// line is supplied to help you start.

const exercise1Tree = new BinaryTree();
// TODO 1: exercise1Tree.root = new Node(10);
// TODO 2: exercise1Tree.root.left = new Node(5);
// TODO 3: exercise1Tree.root.right = new Node(20);
// TODO 4: exercise1Tree.root.left.left = new Node(3);
// TODO 5: exercise1Tree.root.left.right = new Node(7);
// TODO 6: exercise1Tree.root.right.left = new Node(15);
// TODO 7: exercise1Tree.root.right.right = new Node(25);

// ---------------------------------------------------------
// EXERCISE 2 — TRACE AN UNEVEN TREE
// Focus: Missing children do not stop BFS
// ---------------------------------------------------------
//
//                8
//               / \
//              4   12
//               \    \
//                6    14
//
// STEP A: Study the code below that builds the tree.

// STEP B: Without running code, write down each level.

// STEP C: Predict what breadthFirst() returns.

// STEP D: In class, trace the QUEUE after processing each node.

// STEP E: Check your prediction in the console.

const exercise2Tree = new BinaryTree();
exercise2Tree.root = new Node(8);
exercise2Tree.root.left = new Node(4);
exercise2Tree.root.right = new Node(12);
exercise2Tree.root.left.right = new Node(6);
exercise2Tree.root.right.right = new Node(14);

// TODO: Fill in the expected output BEFORE looking below.

// Example format: const exercise2Prediction = [8, ...];
const exercise2Prediction = []; // TODO: replace [] with your prediction

// Talking prompt: After visiting node 4, what is in the queue?
// Answer for instructor: [12, 6]. (12 was already waiting.)

// ---------------------------------------------------------
// EXERCISE 3 — IMPLEMENT BFS FROM THE PSEUDOCODE
// Focus: queue + loop + return value + edge cases
// ---------------------------------------------------------
// Complete this function without reading the finished
// breadthFirst() solution above.
//
// STEP A: Create an empty result array.

// STEP B: If tree or tree.root is missing, return result.

// STEP C: Create a queue containing the root.

// STEP D: Create a front index starting at 0.

// STEP E: While front is less than queue.length:
//           - Get queue[front], then increase front.
//           - Push current.value into result.
//           - If left exists, push left into queue.
//           - If right exists, push right into queue.

// STEP F: Return the result array.
function breadthFirstPractice(tree) {
  // TODO: implement the steps above.
  return []; // Placeholder so the page still loads before you code.
}

// TEST INPUTS for Exercise 3
const emptyTree = new BinaryTree();
const oneNodeTree = new BinaryTree();
oneNodeTree.root = new Node(99);

// =========================================================
// PART 4: OPTIONAL CONSOLE CHECKS (FEW LOGS, ON PURPOSE)
// =========================================================
// These checks show output only after the relevant lesson.

// An unfinished exercise will display the student's current
// output, plus the expected result for comparison.
if (RUN_EXERCISES) {
  console.log("Exercise 1 — current:", breadthFirst(exercise1Tree), "| expected:", [10, 5, 20, 3, 7, 15, 25]);

  console.log("Exercise 2 — prediction:", exercise2Prediction, "| actual:", breadthFirst(exercise2Tree));

  console.log("Exercise 3 — one node:", breadthFirstPractice(oneNodeTree), "| expected:", [99]);
  console.log("Exercise 3 — empty:", breadthFirstPractice(emptyTree), "| expected:", []);
  console.log("Exercise 3 — uneven:", breadthFirstPractice(exercise2Tree), "| expected:", [8, 4, 12, 6, 14]);
}

// =========================================================
// PART 5: HTML ANIMATION
// =========================================================
// The visual lesson shows the SAME BFS steps as the code.

// Each snapshot represents the queue and values AFTER one
// node was processed. No extra console.logs are needed.

const bfsSteps = [
  { current: null, queue: [10], result: [], message: "Start: put the root (10) into the queue." },
  { current: 10, queue: [5, 20], result: [10], message: "Process 10. Save 10. Add left child 5, then right child 20." },
  { current: 5, queue: [20, 3, 7], result: [10, 5], message: "Process 5. Save 5. Add its children 3 and 7 BEHIND 20." },
  { current: 20, queue: [3, 7, 15, 25], result: [10, 5, 20], message: "Process 20. Save 20. Add its children 15 and 25." },
  { current: 3, queue: [7, 15, 25], result: [10, 5, 20, 3], message: "Process 3. It has no children, so only save its value." },
  { current: 7, queue: [15, 25], result: [10, 5, 20, 3, 7], message: "Process 7. It has no children." },
  { current: 15, queue: [25], result: [10, 5, 20, 3, 7, 15], message: "Process 15. It has no children." },
  { current: 25, queue: [], result: [10, 5, 20, 3, 7, 15, 25], message: "Process 25. The queue is empty! Return the result array." }
];

function initializeWalkthrough() {
  const queueDisplay = document.getElementById("queue-display");
  if (!queueDisplay) return; // Allows the JS to run outside HTML.

  const resultDisplay = document.getElementById("result-display");
  const message = document.getElementById("step-message");
  const counter = document.getElementById("step-counter");
  const previousBtn = document.getElementById("previous-btn");
  const nextBtn = document.getElementById("next-btn");
  const resetBtn = document.getElementById("reset-btn");
  let stepIndex = 0;

  function fillChips(container, values) {
    container.replaceChildren();
    if (values.length === 0) {
      const span = document.createElement("span");
      span.className = "dim";
      span.textContent = "Empty []";
      container.appendChild(span);
      return;
    }
    values.forEach((value) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = value;
      container.appendChild(chip);
    });
  }

  function render() {
    const step = bfsSteps[stepIndex];
    fillChips(queueDisplay, step.queue);
    fillChips(resultDisplay, step.result);
    message.textContent = step.message;
    counter.textContent = `Step ${stepIndex} of ${bfsSteps.length - 1}`;

    document.querySelectorAll("#tree-nodes .node").forEach((element) => {
      const value = Number(element.dataset.value);
      element.classList.remove("current", "waiting", "visited");
      if (value === step.current) element.classList.add("current");
      else if (step.result.includes(value)) element.classList.add("visited");
      else if (step.queue.includes(value)) element.classList.add("waiting");
    });
    
    previousBtn.disabled = stepIndex === 0;
    nextBtn.disabled = stepIndex === bfsSteps.length - 1;
  }

  previousBtn.addEventListener("click", () => { stepIndex--; render(); });
  nextBtn.addEventListener("click", () => { stepIndex++; render(); });
  resetBtn.addEventListener("click", () => { stepIndex = 0; render(); });
  render();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeWalkthrough);
  } else {
    initializeWalkthrough();
  }
}
