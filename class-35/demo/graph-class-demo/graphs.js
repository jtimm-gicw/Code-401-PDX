'use strict';

/* =====================================================================
   JAVASCRIPT GRAPHS — BEGINNER CLASS DEMO + 3 STUDENT EXERCISES
   =====================================================================

   WHAT IS A GRAPH?
   A graph is a group of things and their connections.

   - Vertex (also called node): one thing, like a city.
   - Edge: a connection between two things, like a road.
   - Weight: a number on an edge, like the distance between cities.
   - Neighbor: a vertex directly connected to another vertex.

   WHAT IS AN ADJACENCY LIST?
   We keep a list of neighbors for EACH vertex.

   Example (an undirected graph):
     A -> B (5), C (2)
     B -> A (5)
     C -> A (2)

   "Undirected" means the edge works BOTH ways.
   This is why A's list includes B, AND B's list includes A.

   CLASSROOM SETUP
   1. Keep index.html and graphs.js in the same folder.
   2. Open index.html in a web browser.
   3. Open graphs.js in VS Code.
   4. Scroll to "PART 3: STUDENT EXERCISES" below.
   5. Fill in the TODO sections. Save. Refresh the browser.
   6. Click "Run check" for each exercise on the page.

   WHY IS THE GRAPH CLASS ALREADY WRITTEN?
   The page needs a working Graph to show a live diagram immediately.
   Students can READ the comments, then USE the methods in three
   progressively harder live coding exercises.

   NOTE: Console logs are intentionally limited to the exercise checker.
   The interactive page displays most outputs directly on screen.
   ===================================================================== */

/* =====================================================================
   PART 1: CREATE A VERTEX
   Each vertex is a small object holding a value.
   Using objects lets two vertices have the same displayed value,
   if needed, while remaining separate vertices.
   ===================================================================== */
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

/* =====================================================================
   PART 2: BUILD THE GRAPH WITH AN ADJACENCY LIST

   We use a Map:
     key   = a Vertex object
     value = an array of that vertex's connected edges

   Example of ONE entry:
     A -> [ { vertex: B, weight: 5 }, { vertex: C, weight: 2 } ]

   Each method does ONE job (single-responsibility principle).
   ===================================================================== */
class Graph {
  // STEP 1: Start with an empty graph.
  constructor() {
    this.adjacencyList = new Map();
  }

  // STEP 2: Add one vertex.
  // Example: const A = graph.addVertex('A');
  // A starts with an EMPTY list of neighbors.
  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  // STEP 3: Make one undirected connection.
  // Example: graph.addEdge(A, B, 5);
  // weight = 1 is used when the caller leaves out the weight.
  addEdge(vertexA, vertexB, weight = 1) {
    // Always check that BOTH vertices were added first.
    if (!this.adjacencyList.has(vertexA) || !this.adjacencyList.has(vertexB)) {
      throw new Error('Both vertices must already be in the graph.');
    }

    // A weight should be a real, non-negative number for this city demo.
    if (typeof weight !== 'number' || !Number.isFinite(weight) || weight < 0) {
      throw new Error('Weight must be a non-negative number.');
    }

    // Save B in A's list, including the weight.
    this.adjacencyList.get(vertexA).push({ vertex: vertexB, weight });

    // Save A in B's list because our graph is UNDIRECTED.
    // If A and B are the same vertex, we add two entries for a self-loop.
    this.adjacencyList.get(vertexB).push({ vertex: vertexA, weight });
  }

  // STEP 4: Return every vertex (even if it has no connections).
  // Map.keys() lists the keys; [...] makes a normal array.
  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  // STEP 5: Return the neighbors and their weights.
  // We return a new array so code outside this class cannot directly
  // push an item into our stored adjacency list.
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Cannot find neighbors: vertex is not in this graph.');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  // STEP 6: Count vertices, NOT edges.
  // Map.size stores how many keys are in the Map.
  size() {
    return this.adjacencyList.size;
  }
}

/* =====================================================================
   PART 3: STUDENT EXERCISES — WORK ON THESE LIVE IN CLASS

   IMPORTANT: Replace the TODO lines. The functions intentionally return
   null at first so students can see a helpful "Not complete" result.

   You do not need to edit the HTML to solve these exercises.
   Save graphs.js and REFRESH the browser before pressing Run check.
   ===================================================================== */

// ---------------------------------------------------------------------
// EXERCISE 1: Add and count vertices (easy)
// Goal: Make a Graph with Home, School, and Park. Return your graph.
// ---------------------------------------------------------------------
function exercise1() {
  // TODO 1: Create a new Graph object.
  // Hint: const myGraph = new Graph();

  // TODO 2: Use addVertex() three times:
  //         'Home', 'School', 'Park'
  // Hint: myGraph.addVertex('Home');

  // TODO 3: Return your graph. Its size() should equal 3.

  return null; // Remove this placeholder when your solution is ready.
}

// ---------------------------------------------------------------------
// EXERCISE 2: Connect vertices with weights (medium)
// Goal: Create A, B, C, then A-B (5) and A-C (2).
// ---------------------------------------------------------------------
function exercise2() {
  // TODO 1: Create a NEW Graph (do not reuse Exercise 1's graph).

  // TODO 2: Add vertices 'A', 'B', and 'C'.
  // IMPORTANT: SAVE each returned vertex in a variable.
  // Hint: const A = myGraph.addVertex('A');

  // TODO 3: Add an edge between A and B with weight 5.
  // Hint: myGraph.addEdge(A, B, 5);

  // TODO 4: Add an edge between A and C with weight 2.

  // TODO 5: Return your graph. The checker will inspect both sides.

  return null; // Remove this placeholder when your solution is ready.
}

// ---------------------------------------------------------------------
// EXERCISE 3: Neighbors, default weights, and errors (challenge)
// Goal: Create X-Y without passing a weight, then handle a bad lookup.
// ---------------------------------------------------------------------
function exercise3() {
  // TODO 1: Create a NEW Graph with vertices 'X' and 'Y'.
  //         Save each vertex in a variable.

  // TODO 2: Connect X and Y WITHOUT passing a weight.
  // Hint: myGraph.addEdge(X, Y);
  // The Graph method should automatically use weight 1.

  // TODO 3: Get X's neighbors and save them in a variable.
  // Hint: const neighbors = myGraph.getNeighbors(X);

  // TODO 4: Make a vertex that is NOT in this graph.
  // Hint: const missing = new Vertex('Missing');

  // TODO 5: Use try/catch to call getNeighbors(missing).
  // Save the caught error's .message in a variable named errorMessage.
  // Hint:
  //   let errorMessage = '';
  //   try {
  //     myGraph.getNeighbors(missing);
  //   } catch (error) {
  //     errorMessage = error.message;
  //   }

  // TODO 6: Return this object (replace the variable names if needed):
  // return { graph: myGraph, neighbors, errorMessage };

  return null; // Remove this placeholder when your solution is ready.
}

/* =====================================================================
   PART 4: OPTIONAL REFERENCE SOLUTIONS FOR THE INSTRUCTOR

   These working solutions are intentionally not used by the Run check
   buttons. Students can solve the TODOs without accidentally seeing
   answers. The instructor may show these after everyone attempts them.
   ===================================================================== */
const instructorSolutions = {
  exercise1() {
    const graph = new Graph();
    graph.addVertex('Home');
    graph.addVertex('School');
    graph.addVertex('Park');
    return graph;
  },
  exercise2() {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    graph.addEdge(A, B, 5);
    graph.addEdge(A, C, 2);
    return graph;
  },
  exercise3() {
    const graph = new Graph();
    const X = graph.addVertex('X');
    const Y = graph.addVertex('Y');
    graph.addEdge(X, Y);
    const neighbors = graph.getNeighbors(X);
    let errorMessage = '';
    try {
      graph.getNeighbors(new Vertex('Missing'));
    } catch (error) {
      errorMessage = error.message;
    }
    return { graph, neighbors, errorMessage };
  }
};

/* =====================================================================
   PART 5: BROWSER INTERACTION CODE

   This section powers the buttons, SVG drawing, and exercise checks.
   Students do not need to edit it for the three exercises.
   ===================================================================== */

// Make a graph that matches our classroom example.
let demoGraph;
let selectedVertex = null;

function buildExample() {
  const graph = new Graph();
  const A = graph.addVertex('A');
  const B = graph.addVertex('B');
  const C = graph.addVertex('C');
  graph.addEdge(A, B, 5);
  graph.addEdge(A, C, 2);
  return graph;
}

// Turn text into safe text for SVG and HTML.
function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

// Find the vertex with the requested display value.
// For the UI, we keep vertex names unique so students can choose by name.
function findVertex(value) {
  return demoGraph.getVertices().find(vertex => String(vertex.value) === value);
}

// Create an unduplicated list of edges for drawing.
// The graph stores A->B AND B->A, but we only need to draw one line.
function getUniqueEdges(graph) {
  const vertices = graph.getVertices();
  const indexes = new Map(vertices.map((vertex, index) => [vertex, index]));
  const edges = [];
  vertices.forEach(vertex => {
    graph.getNeighbors(vertex).forEach(neighbor => {
      const from = indexes.get(vertex);
      const to = indexes.get(neighbor.vertex);
      // Only draw the entry where the first index is smaller.
      // A self-loop is intentionally excluded from the playground drawing.
      if (from < to) edges.push({ from, to, weight: neighbor.weight });
    });
  });
  return edges;
}

// Draw vertices in a circle so graphs with several vertices stay readable.
function renderGraphSvg() {
  const svg = document.querySelector('#graph-svg');
  const vertices = demoGraph.getVertices();
  const edges = getUniqueEdges(demoGraph);
  const width = 560;
  const height = 390;
  const radius = vertices.length <= 3 ? 135 : 145;
  const positions = vertices.map((vertex, index) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / Math.max(1, vertices.length);
    return { vertex, x: width / 2 + radius * Math.cos(angle), y: height / 2 + radius * Math.sin(angle) };
  });

  // For an empty graph, show a helpful message instead of a blank canvas.
  if (!vertices.length) {
    svg.innerHTML = '<text x="280" y="190" text-anchor="middle" fill="#71809c" font-size="19">Your graph is empty. Add a vertex!</text>';
    return;
  }

  // SVG is an image format made of lines, circles, and text.
  const edgeMarkup = edges.map(edge => {
    const a = positions[edge.from];
    const b = positions[edge.to];
    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2 - 11;
    return `<g><line class="graph-edge" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />` +
      `<text class="edge-weight" x="${midX}" y="${midY}" text-anchor="middle">${escapeHtml(edge.weight)}</text></g>`;
  }).join('');

  const colors = ['#cbb8ff', '#b5d5ff', '#b7ebcf', '#ffdcaa', '#ffd1e6', '#b8edf1', '#f0e2a1', '#dbdbf5'];
  const vertexMarkup = positions.map(({ vertex, x, y }, index) => {
    const selected = vertex === selectedVertex ? 'is-selected' : '';
    return `<g class="graph-node-group ${selected}" data-vertex-index="${index}" tabindex="0" role="button" aria-label="Inspect vertex ${escapeHtml(vertex.value)}">` +
      `<circle class="graph-node" cx="${x}" cy="${y}" r="36" fill="${colors[index % colors.length]}" />` +
      `<text class="node-label" x="${x}" y="${y + 2}">${escapeHtml(vertex.value)}</text></g>`;
  }).join('');

  svg.innerHTML = edgeMarkup + vertexMarkup;

  // Select a vertex when someone clicks a circle or presses Enter/Space.
  svg.querySelectorAll('[data-vertex-index]').forEach(element => {
    const select = () => {
      selectedVertex = vertices[Number(element.dataset.vertexIndex)];
      render();
    };
    element.addEventListener('click', select);
    element.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        select();
      }
    });
  });
}

// Update the text output that mirrors the graph drawing.
function renderAdjacencyList() {
  const vertices = demoGraph.getVertices();
  const lines = vertices.map(vertex => {
    const neighbors = demoGraph.getNeighbors(vertex);
    const text = neighbors.length
      ? neighbors.map(({ vertex: next, weight }) => `${next.value} (${weight})`).join(', ')
      : '(no neighbors yet)';
    return `${vertex.value} → ${text}`;
  });
  document.querySelector('#adjacency-output').textContent = lines.join('\n') || '(empty graph)';
  document.querySelector('#vertex-count').textContent = String(demoGraph.size());
  document.querySelector('#edge-count').textContent = String(getUniqueEdges(demoGraph).length);
}

// Fill the dropdown menus with the latest vertex names.
function renderSelects() {
  const vertices = demoGraph.getVertices();
  ['#from-vertex', '#to-vertex', '#inspect-vertex'].forEach(selector => {
    const select = document.querySelector(selector);
    const old = select.value;
    select.innerHTML = vertices.map(vertex => `<option value="${escapeHtml(vertex.value)}">${escapeHtml(vertex.value)}</option>`).join('');
    if (vertices.some(vertex => String(vertex.value) === old)) select.value = old;
  });
  const inspector = document.querySelector('#inspect-vertex');
  if (!selectedVertex || !vertices.includes(selectedVertex)) selectedVertex = vertices[0] || null;
  if (selectedVertex) inspector.value = String(selectedVertex.value);
}

// Show neighbors and their weights for the selected vertex.
function renderNeighbors() {
  const output = document.querySelector('#neighbor-output');
  if (!selectedVertex) {
    output.textContent = 'Add a vertex to begin.';
    return;
  }
  const neighbors = demoGraph.getNeighbors(selectedVertex);
  if (!neighbors.length) {
    output.textContent = `${selectedVertex.value} has no neighbors yet.`;
    return;
  }
  output.innerHTML = `${escapeHtml(selectedVertex.value)} connects to: ` +
    neighbors.map(({ vertex, weight }) => `<span class="pill">${escapeHtml(vertex.value)} (weight ${escapeHtml(weight)})</span>`).join('');
}

function render() {
  renderSelects();
  renderGraphSvg();
  renderAdjacencyList();
  renderNeighbors();
}

function showStatus(message, kind = '') {
  const status = document.querySelector('#status');
  status.textContent = message;
  status.className = `status ${kind}`.trim();
}

// --------------------- LIVE BUTTON HANDLERS ---------------------------
function setupPlayground() {
  demoGraph = buildExample();
  selectedVertex = demoGraph.getVertices()[0];
  render();

  document.querySelector('#reset-btn').addEventListener('click', () => {
    demoGraph = buildExample();
    selectedVertex = demoGraph.getVertices()[0];
    render();
    showStatus('Example reset: A connects to B (5) and C (2).', 'success');
  });

  document.querySelector('#vertex-form').addEventListener('submit', event => {
    event.preventDefault(); // Stay on the page instead of reloading it.
    const input = document.querySelector('#vertex-name');
    const value = input.value.trim();
    if (!value) {
      showStatus('Please type a vertex name.', 'error');
      return;
    }
    if (demoGraph.getVertices().some(vertex => String(vertex.value).toLowerCase() === value.toLowerCase())) {
      showStatus(`A vertex named ${value} already exists. Choose a different name.`, 'error');
      return;
    }
    if (demoGraph.size() >= 8) {
      showStatus('The visual demo supports up to 8 vertices. Reset to start over.', 'error');
      return;
    }
    selectedVertex = demoGraph.addVertex(value);
    input.value = '';
    render();
    showStatus(`Added ${value}. It has no neighbors yet.`, 'success');
  });

  document.querySelector('#edge-form').addEventListener('submit', event => {
    event.preventDefault();
    const from = findVertex(document.querySelector('#from-vertex').value);
    const to = findVertex(document.querySelector('#to-vertex').value);
    const rawWeight = document.querySelector('#edge-weight').value.trim();
    const weight = rawWeight === '' ? 1 : Number(rawWeight);

    // Keep the visual lesson simple: no self-loops or duplicate edges.
    if (!from || !to) {
      showStatus('Add both vertices before connecting them.', 'error');
      return;
    }
    if (from === to) {
      showStatus('Choose two different vertices for this visual demo.', 'error');
      return;
    }
    if (demoGraph.getNeighbors(from).some(edge => edge.vertex === to)) {
      showStatus('Those vertices are already connected.', 'error');
      return;
    }
    try {
      demoGraph.addEdge(from, to, weight);
      selectedVertex = from;
      render();
      showStatus(`Connected ${from.value} and ${to.value} with weight ${weight}.`, 'success');
    } catch (error) {
      showStatus(error.message, 'error');
    }
  });

  document.querySelector('#inspect-vertex').addEventListener('change', event => {
    selectedVertex = findVertex(event.target.value);
    render();
  });
}

/* =====================================================================
   PART 6: EXERCISE CHECKERS

   We check what the student code RETURNS, not what they named their
   local variables. The messages explain exactly what is missing.
   ===================================================================== */
function checkExercise1() {
  const graph = exercise1();
  if (!(graph instanceof Graph)) return 'Not complete: exercise1() must return a Graph object.';
  const values = graph.getVertices().map(vertex => vertex.value);
  if (graph.size() !== 3) return `You have ${graph.size()} vertices. You need 3.`;
  if (['Home', 'School', 'Park'].some(value => !values.includes(value))) return 'Use the names Home, School, and Park.';
  return 'PASS: Home, School, and Park were added. size() returns 3.';
}

function checkExercise2() {
  const graph = exercise2();
  if (!(graph instanceof Graph)) return 'Not complete: exercise2() must return a Graph object.';
  const vertices = graph.getVertices();
  if (vertices.length !== 3) return 'Add exactly three vertices: A, B, and C.';
  const byName = name => vertices.find(vertex => vertex.value === name);
  const [A, B, C] = ['A', 'B', 'C'].map(byName);
  if (!A || !B || !C) return 'Name your vertices A, B, and C.';
  const hasEdge = (from, to, weight) => graph.getNeighbors(from).some(edge => edge.vertex === to && edge.weight === weight);
  if (![hasEdge(A, B, 5), hasEdge(B, A, 5), hasEdge(A, C, 2), hasEdge(C, A, 2)].every(Boolean)) {
    return 'Check the two edges, both directions, and the weights 5 and 2.';
  }
  return 'PASS: A ↔ B (5) and A ↔ C (2). Each edge works both ways.';
}

function checkExercise3() {
  const result = exercise3();
  if (!result || !(result.graph instanceof Graph)) return 'Not complete: return { graph, neighbors, errorMessage }.';
  const { graph, neighbors, errorMessage } = result;
  const vertices = graph.getVertices();
  if (vertices.length !== 2 || !vertices.some(v => v.value === 'X') || !vertices.some(v => v.value === 'Y')) {
    return 'Your graph should have two vertices named X and Y.';
  }
  const X = vertices.find(v => v.value === 'X');
  const Y = vertices.find(v => v.value === 'Y');
  if (!Array.isArray(neighbors) || !neighbors.some(edge => edge.vertex === Y && edge.weight === 1)) {
    return 'neighbors should be the result of getNeighbors(X), with Y at weight 1.';
  }
  if (!graph.getNeighbors(Y).some(edge => edge.vertex === X && edge.weight === 1)) {
    return 'Check that Y also has X as a neighbor at weight 1.';
  }
  if (typeof errorMessage !== 'string' || !errorMessage.trim()) {
    return 'Use try/catch and return a descriptive errorMessage.';
  }
  return `PASS: Default weight is 1, neighbors work, and error was caught: "${errorMessage}"`;
}

function setupExerciseButtons() {
  const checkers = { '1': checkExercise1, '2': checkExercise2, '3': checkExercise3 };
  document.querySelectorAll('[data-exercise]').forEach(button => {
    button.addEventListener('click', () => {
      const number = button.dataset.exercise;
      const output = document.querySelector(`#exercise${number}-result`);
      try {
        const message = checkers[number]();
        const passed = message.startsWith('PASS:');
        output.textContent = message;
        output.className = passed ? 'result' : 'result error';
        // Only log when a student explicitly runs a check.
        console.log(`Exercise ${number}: ${message}`);
      } catch (error) {
        output.textContent = `Error: ${error.message}`;
        output.className = 'result error';
        console.log(`Exercise ${number}: ${error.message}`);
      }
    });
  });
}

// Run setup ONLY after the browser has finished parsing the HTML.
// The script uses defer, so these HTML elements already exist.
setupPlayground();
setupExerciseButtons();
