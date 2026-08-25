
/*
========================================================
BINARY SEARCH PRACTICE
========================================================

LEARNING GOAL
--------------------------------------------------------
Practice finding a value inside a SORTED array using
the binary search algorithm.

Instead of checking every value one at a time, binary
search repeatedly cuts the search area in HALF.

Think about looking for a word in a dictionary:

You don't start on page 1.

You open somewhere near the middle, compare the word,
and decide whether to search before or after that page.

Binary search does the same thing with an array.

*/


// ======================================================
// PART 1: OUR BINARY SEARCH FUNCTION
// ======================================================

function BinarySearch(array, key) {

  console.log("\n========================================");
  console.log("STARTING BINARY SEARCH");
  console.log("========================================");

  console.log("Array:", array);
  console.log("Search key:", key);

  /*
  ------------------------------------------------------
  STEP 1: Create our two boundaries.

  left:
    The first index we are searching.

  right:
    The last index we are searching.

  Example:

  [4, 8, 15, 16, 23, 42]
   ↑                   ↑
  left                right
  ------------------------------------------------------
  */

  let left = 0;
  let right = array.length - 1;

  console.log("Starting left:", left);
  console.log("Starting right:", right);


  /*
  ------------------------------------------------------
  STEP 2: Keep searching while there is still a
  section of the array to search.

  If left becomes greater than right, there is
  nothing left to search.
  ------------------------------------------------------
  */

  while (left <= right) {

    /*
    ----------------------------------------------------
    STEP 3: Find the middle index.

    Example:

    left = 0
    right = 5

    middle = (0 + 5) / 2
    middle = 2.5

    Array indexes must be whole numbers, so we use
    Math.floor().

    middle = 2
    ----------------------------------------------------
    */

    let middle = Math.floor((left + right) / 2);

    let middleValue = array[middle];


    console.log("\n--- SEARCH STEP ---");
    console.log("Left index:", left);
    console.log("Right index:", right);
    console.log("Middle index:", middle);
    console.log("Middle value:", middleValue);


    /*
    ----------------------------------------------------
    STEP 4: Did we find the value?

    If the middle value equals our search key,
    we're done!

    Return the middle index.
    ----------------------------------------------------
    */

    if (middleValue === key) {

      console.log("FOUND IT!");
      console.log("Key:", key);
      console.log("Index:", middle);

      return middle;
    }


    /*
    ----------------------------------------------------
    STEP 5: Is the key GREATER than the middle value?

    Example:

    Middle value = 15
    Key = 42

    42 is greater than 15.

    Because our array is sorted, we know that everything
    BEFORE 15 is also smaller than 42.

    Therefore, we can throw away the LEFT half.

    Move left to:

        middle + 1
    ----------------------------------------------------
    */

    if (key > middleValue) {

      console.log(
        key,
        "is GREATER than",
        middleValue
      );

      console.log("Eliminate the LEFT half.");
      console.log("Search the RIGHT half.");

      left = middle + 1;

      console.log("New left:", left);
    }


    /*
    ----------------------------------------------------
    STEP 6: Otherwise, the key must be SMALLER than
    the middle value.

    Example:

    Middle value = 42
    Key = 15

    15 is smaller than 42.

    Because the array is sorted, everything AFTER 42
    is also too large.

    Therefore, we can throw away the RIGHT half.

    Move right to:

        middle - 1
    ----------------------------------------------------
    */

    else {

      console.log(
        key,
        "is SMALLER than",
        middleValue
      );

      console.log("Eliminate the RIGHT half.");
      console.log("Search the LEFT half.");

      right = middle - 1;

      console.log("New right:", right);
    }
  }


  /*
  ------------------------------------------------------
  STEP 7: If we get here, the value was not found.

  The loop stopped because:

      left > right

  There is no search area left.

  The challenge tells us to return -1 when the
  search key isn't in the array.
  ------------------------------------------------------
  */

  console.log("\nVALUE NOT FOUND");
  console.log("Search key:", key);
  console.log("Returning: -1");

  return -1;
}
/*BIG-O
--------------------------------------------------------
Time Complexity:  O(log n)
Space Complexity: O(1)

IMPORTANT:
Binary search requires the array to be SORTED.

========================================================
*/

// ======================================================
// EXAMPLE 1
// Find a value in the middle
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 1");
console.log("# Find 15");
console.log("########################################");

let result1 = BinarySearch(
  [4, 8, 15, 16, 23, 42],
  15
);

console.log("Final answer:", result1);

// Expected:
// 2


// ======================================================
// EXAMPLE 2
// Find a value at the end
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 2");
console.log("# Find 42");
console.log("########################################");

let result2 = BinarySearch(
  [4, 8, 15, 16, 23, 42],
  42
);

console.log("Final answer:", result2);

// Expected:
// 5


// ======================================================
// EXAMPLE 3
// Value is NOT in the array
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 3");
console.log("# Search for 90");
console.log("########################################");

let result3 = BinarySearch(
  [11, 22, 33, 44, 55, 66, 77],
  90
);

console.log("Final answer:", result3);

// Expected:
// -1


// ======================================================
// EXAMPLE 4
// Negative numbers
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 4");
console.log("# Find 42 in an array with negatives");
console.log("########################################");

let result4 = BinarySearch(
  [-131, -82, 0, 27, 42, 68, 179],
  42
);

console.log("Final answer:", result4);

// Expected:
// 4


// ======================================================
// EXAMPLE 5
// Missing value between two existing values
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 5");
console.log("# Search for 4");
console.log("########################################");

let result5 = BinarySearch(
  [1, 2, 3, 5, 6, 7],
  4
);

console.log("Final answer:", result5);

// Expected:
// -1


// ======================================================
// EXAMPLE 6
// Find the FIRST item
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 6");
console.log("# Find the first item");
console.log("########################################");

let result6 = BinarySearch(
  [10, 20, 30, 40, 50],
  10
);

console.log("Final answer:", result6);

// Expected:
// 0


// ======================================================
// EXAMPLE 7
// Find the LAST item
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 7");
console.log("# Find the last item");
console.log("########################################");

let result7 = BinarySearch(
  [10, 20, 30, 40, 50],
  50
);

console.log("Final answer:", result7);

// Expected:
// 4


// ======================================================
// EXAMPLE 8
// One-item array
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 8");
console.log("# One-item array");
console.log("########################################");

let result8 = BinarySearch(
  [100],
  100
);

console.log("Final answer:", result8);

// Expected:
// 0


// ======================================================
// EXAMPLE 9
// One-item array where the value is missing
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 9");
console.log("# One-item array - value missing");
console.log("########################################");

let result9 = BinarySearch(
  [100],
  50
);

console.log("Final answer:", result9);

// Expected:
// -1


// ======================================================
// EXAMPLE 10
// Empty array
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EXAMPLE 10");
console.log("# Empty array");
console.log("########################################");

let result10 = BinarySearch(
  [],
  100
);

console.log("Final answer:", result10);

// Expected:
// -1


// ======================================================
// STUDENT PRACTICE
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# STUDENT PRACTICE");
console.log("########################################");

console.log(`
Before looking at the console output, try tracing
each problem yourself.

For every search, ask:

1. What is LEFT?
2. What is RIGHT?
3. What is MIDDLE?
4. What value is at MIDDLE?
5. Is the key bigger or smaller?
6. Which half can we eliminate?
7. What are the new LEFT and RIGHT values?
8. Did we find the key?
9. If not, when should we return -1?
`);


// ======================================================
// PRACTICE 1
// ======================================================

console.log("\n");
console.log("----------------------------------------");
console.log("PRACTICE 1");
console.log("----------------------------------------");

console.log(
  "Search for 23 in:",
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
);

let practice1 = BinarySearch(
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
  23
);

console.log("Practice 1 answer:", practice1);

// Expected:
// 5


// ======================================================
// PRACTICE 2
// ======================================================

console.log("\n");
console.log("----------------------------------------");
console.log("PRACTICE 2");
console.log("----------------------------------------");

console.log(
  "Search for 72 in:",
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
);

let practice2 = BinarySearch(
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
  72
);

console.log("Practice 2 answer:", practice2);

// Expected:
// 8


// ======================================================
// PRACTICE 3
// ======================================================

console.log("\n");
console.log("----------------------------------------");
console.log("PRACTICE 3");
console.log("----------------------------------------");

console.log(
  "Search for 50 in:",
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
);

let practice3 = BinarySearch(
  [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
  50
);

console.log("Practice 3 answer:", practice3);

// Expected:
// -1


// ======================================================
// EDGE CASES
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# EDGE CASES");
console.log("########################################");

console.log("\nEmpty array:");
console.log(BinarySearch([], 5));

console.log("\nOne item - found:");
console.log(BinarySearch([5], 5));

console.log("\nOne item - missing:");
console.log(BinarySearch([5], 10));

console.log("\nFirst item:");
console.log(BinarySearch([5, 10, 15, 20], 5));

console.log("\nLast item:");
console.log(BinarySearch([5, 10, 15, 20], 20));

console.log("\nMissing value:");
console.log(BinarySearch([5, 10, 15, 20], 12));


// ======================================================
// IMPORTANT INTERVIEW CONCEPT
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# INTERVIEW CONCEPT");
console.log("########################################");

console.log(`
WHY DOES BINARY SEARCH WORK?

The array is SORTED.

That means when we look at the middle value,
we can determine which half cannot contain our
search key.

For example:

[4, 8, 15, 16, 23, 42]
          ^
        middle

If we are looking for 42:

42 > 15

Therefore, everything to the LEFT of 15 can be
ignored.

We only need to search:

[16, 23, 42]

We just eliminated half of the search area!
`);


// ======================================================
// LINEAR SEARCH VS BINARY SEARCH
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# LINEAR VS BINARY SEARCH");
console.log("########################################");

console.log(`
LINEAR SEARCH:

Check each item one at a time.

[4] -> [8] -> [15] -> [16] -> [23] -> [42]

Worst-case time:
O(n)


BINARY SEARCH:

Check the middle and eliminate half.

[4, 8, 15, 16, 23, 42]
          ^
        middle

Then search only one half.

Worst-case time:
O(log n)
`);


// ======================================================
// BIG-O TAKEAWAY
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# BIG-O TAKEAWAY");
console.log("########################################");

console.log(`
TIME COMPLEXITY
----------------
O(log n)

Why?

Because each search eliminates approximately
HALF of the remaining values.


SPACE COMPLEXITY
----------------
O(1)

Why?

Because we only create a few variables:

left
right
middle

We do NOT create another array.
`);


// ======================================================
// FINAL STUDENT CHECKLIST
// ======================================================

console.log("\n\n");
console.log("########################################");
console.log("# BINARY SEARCH CHECKLIST");
console.log("########################################");

console.log(`
When you see a problem involving:

"Search a SORTED array"

Think:

1. Binary search

2. Create:
   left
   right

3. Find:
   middle

4. Compare:
   array[middle]
   vs.
   key

5. If equal:
   return middle

6. If key is larger:
   search RIGHT

7. If key is smaller:
   search LEFT

8. If left passes right:
   return -1

9. Explain:
   O(log n) time
   O(1) space
`);

console.log("\nBinary Search practice complete! 🔎");

