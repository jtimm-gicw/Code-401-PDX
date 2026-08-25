/*
========================================================
INSERT SHIFT ARRAY
========================================================

GOAL:
Write a function called insertShiftArray.

The function takes:
1. An array
2. A new value

It returns a NEW array with the new value inserted
into the middle of the original array.

IMPORTANT:
We are practicing the algorithm, so we will NOT use
built-in array methods such as:
- splice()
- push()
- unshift()
- slice()

Instead, we will manually build the new array.

========================================================
HOW TO THINK ABOUT THE PROBLEM
========================================================

Imagine the array is a row of boxes:

[ 2 ][ 4 ][ 6 ][ -8 ]

We want to insert 5 into the middle:

[ 2 ][ 4 ][ 5 ][ 6 ][ -8 ]

The first question we need to answer is:

"Where is the middle?"

For an array, we can calculate the middle index with:

Math.floor(array.length / 2)

For [2, 4, 6, -8]:

array.length = 4

4 / 2 = 2

middle index = 2

That means index 2 is where the new value should go.

Remember:
Array indexes start at 0.

Index:   0   1   2   3
Value:  [2] [4] [6] [-8]

So we want 5 at index 2.

========================================================
THE ALGORITHM
========================================================

1. Create an empty array called result.

2. Find the middle index.

3. Loop through the original array.

4. When we reach the middle index:
   - Add the new value to result.
   - Then add the current original value.

5. Otherwise:
   - Add the current value to result.

6. Return result.

========================================================
WHY DOES THIS WORK?
========================================================

For:

[2, 4, 6, -8]

middle = 2

We visit each value:

index 0:
Add 2

result:
[2]

index 1:
Add 4

result:
[2, 4]

index 2:
We have reached the middle!

First add 5.
Then add 6.

result:
[2, 4, 5, 6]

index 3:
Add -8

result:
[2, 4, 5, 6, -8]

========================================================
FUNCTION
========================================================
*/

function insertShiftArray(array, newValue) {
  // Create an empty array.
  // We will build our answer one element at a time.
  const result = [];

  // Find the middle position.
  //
  // Math.floor() removes the decimal if the array
  // has an odd number of elements.
  const middleIndex = Math.floor(array.length / 2);

  // Loop through every item in the original array.
  for (let i = 0; i < array.length; i++) {

    // Have we reached the middle?
    if (i === middleIndex) {

      // Put the new value into the result FIRST.
      result[result.length] = newValue;

      // Then put the original value into the result.
      result[result.length] = array[i];

    } else {

      // If we are not at the middle,
      // just copy the original value.
      result[result.length] = array[i];
    }
  }

  // Return the new array.
  return result;
}


/*
========================================================
TEST THE FUNCTION
========================================================

Example 1:

Input:
[2, 4, 6, -8]
5

Expected:
[2, 4, 5, 6, -8]
*/

const example1 = insertShiftArray([2, 4, 6, -8], 5);

console.log("Example 1");
console.log("Input: [2, 4, 6, -8], 5");
console.log("Output:", example1);


/*
Example 2:

Input:
[42, 8, 15, 23, 42]
16

Expected:
[42, 8, 15, 16, 23, 42]
*/

const example2 = insertShiftArray([42, 8, 15, 23, 42], 16);

console.log("Example 2");
console.log("Input: [42, 8, 15, 23, 42], 16");
console.log("Output:", example2);


/*
========================================================
EDGE CASES TO THINK ABOUT
========================================================

What should happen with an empty array?

insertShiftArray([], 5)

What about one item?

insertShiftArray([10], 5)

What about an odd number of items?

insertShiftArray([1, 2, 3, 4, 5], 99)

Try these examples and see what your algorithm does.

========================================================
BIG-O
========================================================

Time Complexity: O(n)

Why?

We loop through the array once.

If the array has:
10 items -> about 10 loop iterations
1,000 items -> about 1,000 loop iterations
1,000,000 items -> about 1,000,000 loop iterations

Space Complexity: O(n)

Why?

We create a new result array that contains all of
the original elements plus the new value.

========================================================
STUDENT CHALLENGE
========================================================

Before looking at the completed function, try writing
your own version.

Ask yourself:

1. How do I find the middle?
2. How do I create a new array?
3. How do I copy values into the new array?
4. How do I insert the new value at the middle?
5. How do I avoid using splice(), push(), or other
   built-in array methods?
*/