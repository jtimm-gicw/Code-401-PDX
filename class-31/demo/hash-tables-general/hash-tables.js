"use strict";

/* ============================================================
   CODE 401 — HASH TABLES: FIRST-TIME STUDENT DEMO
   ------------------------------------------------------------
   GOAL: Understand how to create and implement a hash table.

   Key   = the label used to find information ("cat")
   Value = the information we store ("Milo")
   Hash  = rule that decides which bucket to use
   Bucket = an array slot that stores one or more entries

   LEARNING ORDER:
   1. Read the HashTable class below.
   2. Practice Exercise 1: calculating indexes.
   3. Practice Exercise 2: adding, getting, and updating values.
   4. Practice Exercise 3: handling collisions.
   5. Try the interactive buttons in index.html.

   Note: This uses arrays inside buckets (separate chaining).
   A linked list can be used instead for each bucket if required.
   The hash function is intentionally simple for teaching.
   ============================================================ */

// ============================================================
// PART 1 — IMPLEMENT THE HASHTABLE CLASS
// ============================================================

class Hashtable {
  // STEP 1: Create an array to hold the buckets.
  // "size" is the number of possible bucket indexes.
  constructor(size = 5) {
    if (!Number.isInteger(size) || size <= 0) {
      throw new RangeError("Hashtable size must be a positive integer.");
    }

    this.size = size;
    this.buckets = new Array(size);
  }

  // STEP 2: Reuse one helper to check keys.
  // We use string keys so hash() can read each character.
  validateKey(key) {
    if (typeof key !== "string" || key.length === 0) {
      throw new TypeError("Hashtable key must be a non-empty string.");
    }
  }

  // STEP 3: Implement hash(key).
  // (A) Start with zero.
  // (B) Add each character's numeric code.
  // (C) Use % to keep the index between 0 and size - 1.
  hash(key) {
    this.validateKey(key);
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  // STEP 4: Implement set(key, value).
  // (A) Hash the key to find the bucket index.
  // (B) Create the bucket if it doesn't exist.
  // (C) If this exact key exists, update its value.
  // (D) Otherwise, add a new key-value pair to the bucket.
  // Return nothing, as required by the assignment.
  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value; // Update, do NOT duplicate this key.
        return;
      }
    }

    bucket.push({ key, value });
  }

  // STEP 5: Implement get(key).
  // (A) Find the correct bucket with hash().
  // (B) Check each entry because collisions are possible.
  // (C) Return the matching value, or undefined if missing.
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return undefined;

    for (const entry of bucket) {
      if (entry.key === key) return entry.value;
    }

    return undefined;
  }

  // STEP 6: Implement has(key).
  // Search for the actual key; don't just check its value.
  // A key may exist even when its value is undefined!
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (const entry of bucket) {
      if (entry.key === key) return true;
    }

    return false;
  }

  // STEP 7: Implement keys().
  // Go through every bucket and collect each stored key.
  keys() {
    const allKeys = [];

    for (const bucket of this.buckets) {
      if (!bucket) continue; // Empty bucket: nothing to add.

      for (const entry of bucket) {
        allKeys.push(entry.key);
      }
    }

    return allKeys;
  }
}

// ============================================================
// PART 2 — THREE LIVE CLASSROOM EXERCISES
// ============================================================

/* ============================================================
   EXERCISE 1 — HOW DO WE IMPLEMENT A HASH FUNCTION?
   ------------------------------------------------------------
   STUDENT TASK: Before reading the code, write the steps:

   1. Create a hash table with exactly 5 buckets.
   2. Pick the key "cat".
   3. Loop through its characters, adding their codes.
      c = 99, a = 97, t = 116. Total = 312.
   4. Calculate 312 % 5 (the answer is bucket 2).
   5. Try "dog". Predict the index before you run it.

   PRACTICE CHANGE: Replace "cat" with your own word.
   WHY: Hashing decides WHERE an entry belongs.
   ============================================================ */
function exercise1() {
  const table = new Hashtable(5);
  const key = "cat";

  // Milestone A: Read and total the character codes.
  let total = 0;
  const parts = [];
  for (let i = 0; i < key.length; i++) {
    const code = key.charCodeAt(i);
    total += code;
    parts.push(`${key[i]}=${code}`);
  }

  // Milestone B: Get the bucket index using the class method.
  const index = table.hash(key);
  console.log("Exercise 1 — Hashing", { key, parts, total, index });

  return [
    `Key: "${key}"`,
    `Character codes: ${parts.join(" + ")}`,
    `Total: ${total}`,
    `Index: ${total} % 5 = ${index}`,
    `Try changing the key in exercise1()!`
  ].join("\n");
}

/* ============================================================
   EXERCISE 2 — HOW DO WE STORE, GET, AND UPDATE VALUES?
   ------------------------------------------------------------
   STUDENT TASK: Type these steps using the Hashtable class:

   1. Create a new hash table with 5 buckets.
   2. Add student "Amy" with grade 95 using set().
   3. Add student "Bob" with grade 87 using set().
   4. Get Amy's grade and check that it is 95.
   5. Update Amy's grade to 100 using set() again.
   6. Check that get("Amy") is now 100.
   7. Check that "Amy" appears only once in keys().

   PRACTICE CHANGE: Add a third student and change a grade.
   WHY: An existing key updates; it should not duplicate.
   ============================================================ */
function exercise2() {
  const grades = new Hashtable(5);

  // Milestone A: Store two pairs.
  grades.set("Amy", 95);
  grades.set("Bob", 87);
  const before = grades.get("Amy");

  // Milestone B: Update the same key (don't add another Amy).
  grades.set("Amy", 100);
  const after = grades.get("Amy");
  const keys = grades.keys();

  console.log("Exercise 2 — Store, get, update", { before, after, keys });

  return [
    `get("Amy") before update: ${before}`,
    `get("Amy") after update:  ${after}`,
    `get("Bob"): ${grades.get("Bob")}`,
    `keys(): ${JSON.stringify(keys)}`,
    `One "Amy" key? ${keys.filter(key => key === "Amy").length === 1}`
  ].join("\n");
}

/* ============================================================
   EXERCISE 3 — HOW DO WE HANDLE A COLLISION?
   ------------------------------------------------------------
   STUDENT TASK:

   1. Create a new hash table with 5 buckets.
   2. Use set() to add "cat" = "Milo".
   3. Use set() to add "act" = "verb".
   4. Confirm hash("cat") and hash("act") both equal 2.
   5. Confirm get() finds BOTH values.
   6. Use has() to check that both keys exist.
   7. Use keys() to list both keys.
   8. Update "cat" to "Luna" without changing "act".

   PRACTICE CHANGE: Draw bucket 2 before running the code.
   WHY: Two different keys can share one bucket safely.
   ============================================================ */
function exercise3() {
  const table = new Hashtable(5);

  // Milestone A: Create a collision.
  table.set("cat", "Milo");
  table.set("act", "verb");
  const catIndex = table.hash("cat");
  const actIndex = table.hash("act");

  // Milestone B: Check both original values.
  const before = [table.get("cat"), table.get("act")];

  // Milestone C: Update one key. The other stays unchanged.
  table.set("cat", "Luna");
  const after = [table.get("cat"), table.get("act")];
  const bothExist = table.has("cat") && table.has("act");

  console.log("Exercise 3 — Collision", {
    catIndex, actIndex, before, after, bothExist,
    bucket: table.buckets[catIndex]
  });

  return [
    `hash("cat") = ${catIndex}; hash("act") = ${actIndex}`,
    `Both keys share bucket ${catIndex}: ${catIndex === actIndex}`,
    `Before update: ${JSON.stringify(before)}`,
    `After update:  ${JSON.stringify(after)}`,
    `Both keys exist? ${bothExist}`,
    `keys(): ${JSON.stringify(table.keys())}`
  ].join("\n");
}

// ============================================================
// PART 3 — CONNECT THE JAVASCRIPT TO THE HTML PAGE
// ============================================================
// DOM means "the elements on the HTML page."
// We use event listeners so button clicks run our code.

const playgroundTable = new Hashtable(5);
let highlightedIndex = null;

// Show every bucket visually after a change.
function renderBuckets() {
  const container = document.getElementById("buckets");
  container.replaceChildren();

  for (let index = 0; index < playgroundTable.size; index++) {
    const row = document.createElement("div");
    row.className = `bucket${highlightedIndex === index ? " active" : ""}`;

    const indexBox = document.createElement("div");
    indexBox.className = "bucket-index";
    indexBox.textContent = index;

    const contents = document.createElement("div");
    contents.className = "bucket-entries";
    const entries = playgroundTable.buckets[index] || [];

    if (entries.length === 0) {
      const empty = document.createElement("span");
      empty.className = "empty";
      empty.textContent = "Empty";
      contents.append(empty);
    }

    for (const entry of entries) {
      const pair = document.createElement("span");
      pair.className = "entry";

      const key = document.createElement("span");
      key.className = "key";
      key.textContent = entry.key;

      const arrow = document.createElement("span");
      arrow.textContent = "→";

      const value = document.createElement("span");
      value.className = "value";
      value.textContent = String(entry.value);

      pair.append(key, arrow, value);
      contents.append(pair);
    }

    row.append(indexBox, contents);
    container.append(row);
  }
}

// Show the result of the method the student selected.
function runPlaygroundMethod() {
  const method = document.getElementById("method").value;
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;
  const result = document.getElementById("result");

  try {
    if (method === "keys") {
      highlightedIndex = null;
      result.textContent = `keys() → ${JSON.stringify(playgroundTable.keys())}`;
    } else {
      highlightedIndex = playgroundTable.hash(key);

      if (method === "hash") {
        result.textContent = `hash("${key}") → bucket ${highlightedIndex}`;
      } else if (method === "set") {
        const existed = playgroundTable.has(key);
        playgroundTable.set(key, value);
        result.textContent = existed
          ? `Updated "${key}" in bucket ${highlightedIndex}.`
          : `Added "${key}" → "${value}" to bucket ${highlightedIndex}.`;
      } else if (method === "get") {
        const answer = playgroundTable.get(key);
        result.textContent = playgroundTable.has(key)
          ? `get("${key}") → ${JSON.stringify(answer)}`
          : `get("${key}") → undefined (key not found)`;
      } else if (method === "has") {
        result.textContent = `has("${key}") → ${playgroundTable.has(key)}`;
      }
    }
  } catch (error) {
    highlightedIndex = null;
    result.textContent = `Error: ${error.message}`;
  }

  renderBuckets();
}

// Connect controls after the HTML is available.
document.getElementById("run-method").addEventListener("click", runPlaygroundMethod);
document.getElementById("method").addEventListener("change", (event) => {
  const isSet = event.target.value === "set";
  const isKeys = event.target.value === "keys";
  document.getElementById("value-field").hidden = !isSet;
  document.getElementById("key").disabled = isKeys;
});

document.getElementById("reset-table").addEventListener("click", () => {
  // Reset the array without replacing the table reference.
  playgroundTable.buckets = new Array(playgroundTable.size);
  highlightedIndex = null;
  document.getElementById("result").textContent = "Table reset. All five buckets are empty.";
  renderBuckets();
});

// Exercise buttons display results in the page.
// The exercises also log meaningful milestones in DevTools.
for (const [number, runExercise] of [[1, exercise1], [2, exercise2], [3, exercise3]]) {
  document.getElementById(`exercise-${number}`).addEventListener("click", () => {
    document.getElementById(`exercise-${number}-output`).textContent = runExercise();
  });
}

// Start with an empty visual table. Nothing is logged until a
// student chooses an exercise; the console stays easy to read.
renderBuckets();
