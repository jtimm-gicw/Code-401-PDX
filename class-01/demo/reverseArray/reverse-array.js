/*
===========================================================
REVERSE ARRAY - JAVASCRIPT DEMO
===========================================================

CODE CHALLENGE
--------------
Write a function called reverseArray that takes an array
as an argument and returns a new array with the elements
in reverse order.

IMPORTANT:
We are NOT allowed to use JavaScript's built-in reverse()
method.

Example:

Input:

[1, 2, 3, 4, 5, 6]

Output:

[6, 5, 4, 3, 2, 1]


===========================================================
WHAT DOES "REVERSE AN ARRAY" MEAN?
===========================================================

Reversing an array means changing the order of its elements
so that the LAST element becomes the FIRST element.

Example:

Original:

Index:    0   1   2   3   4
          ↓   ↓   ↓   ↓   ↓
Array:   [10, 20, 30, 40, 50]

Reversed:

Index:    0   1   2   3   4
          ↓   ↓   ↓   ↓   ↓
Array:   [50, 40, 30, 20, 10]


===========================================================
OUR STRATEGY
===========================================================

Instead of using:

array.reverse()

we will:

1. Create an empty array.
2. Start at the LAST index of the original array.
3. Move backward through the original array.
4. Add each value to the new array.
5. Return the new array.

For example:

Original:

[1, 2, 3, 4, 5]

Start at the last index:

             ↓
[1, 2, 3, 4, 5]
             4

Take 5.

New array:

[5]

Move backward:

             ↓
[1, 2, 3, 4, 5]
         3

Take 4.

New array:

[5, 4]

Continue until we reach index 0.

Final result:

[5, 4, 3, 2, 1]


===========================================================
SINGLE RESPONSIBILITY PRINCIPLE
===========================================================

Our reverseArray function has ONE job:

    Take an array and return it in reverse order.

We do not need to put printing, testing, or other
responsibilities inside the function.

This makes the function:

- Easier to understand
- Easier to test
- Easier to reuse
===========================================================
*/


// =========================================================
// REVERSE ARRAY
// =========================================================

function reverseArray(array) {

  // -------------------------------------------------------
  // STEP 1: Create an empty array.
  // -------------------------------------------------------
  //
  // We will place the reversed values into this array.
  //
  // Example:
  //
  // originalArray = [1, 2, 3, 4, 5]
  //
  // reversedArray = []
  //

  const reversedArray = [];


  // -------------------------------------------------------
  // STEP 2: Start at the LAST index.
  // -------------------------------------------------------
  //
  // Arrays use zero-based indexes.
  //
  // Example:
  //
  // [1, 2, 3, 4, 5]
  //
  // Index:
  //  0  1  2  3  4
  //
  // The length is 5.
  //
  // The last index is:
  //
  // 5 - 1 = 4
  //
  // Therefore:
  //
  // array.length - 1
  //

  for (let index = array.length - 1; index >= 0; index--) {

    // -----------------------------------------------------
    // STEP 3: Add the current value to the new array.
    // -----------------------------------------------------
    //
    // If the original array is:
    //
    // [1, 2, 3, 4, 5]
    //
    // We begin with:
    //
    // index = 4
    //
    // array[4] = 5
    //
    // So:
    //
    // reversedArray = [5]
    //

    reversedArray[reversedArray.length] = array[index];
  }


  // -------------------------------------------------------
  // STEP 4: Return the completed array.
  // -------------------------------------------------------

  return reversedArray;
}


// =========================================================
// TESTING THE FUNCTION
// =========================================================

console.log("====================================");
console.log("REVERSE ARRAY CODE CHALLENGE");
console.log("====================================");


// ---------------------------------------------------------
// TEST 1
// ---------------------------------------------------------

const array1 = [1, 2, 3, 4, 5, 6];

console.log("\nTest 1");
console.log("Input:");
console.log(array1);

console.log("Output:");
console.log(reverseArray(array1));


// ---------------------------------------------------------
// TEST 2
// ---------------------------------------------------------

const array2 = [
  89,
  2354,
  3546,
  23,
  10,
  -923,
  823,
  -12
];

console.log("\nTest 2");
console.log("Input:");
console.log(array2);

console.log("Output:");
console.log(reverseArray(array2));


// ---------------------------------------------------------
// TEST 3
// ---------------------------------------------------------

const array3 = [
  2, 3, 5, 7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97, 101, 103, 107, 109, 113, 127,
  131, 137, 139, 149, 151, 157, 163,
  167, 173, 179, 181, 191, 193, 197, 199
];

console.log("\nTest 3");
console.log("Input:");
console.log(array3);

console.log("Output:");
console.log(reverseArray(array3));


// ---------------------------------------------------------
// TEST 4: EMPTY ARRAY
// ---------------------------------------------------------

const array4 = [];

console.log("\nTest 4 - Empty Array");
console.log("Input:");
console.log(array4);

console.log("Output:");
console.log(reverseArray(array4));


// ---------------------------------------------------------
// TEST 5: ONE ELEMENT
// ---------------------------------------------------------

const array5 = [42];

console.log("\nTest 5 - One Element");
console.log("Input:");
console.log(array5);

console.log("Output:");
console.log(reverseArray(array5));


// =========================================================
// HOW THE LOOP WORKS
// =========================================================

/*

Let's walk through this example:

const numbers = [10, 20, 30, 40];

reverseArray(numbers);


The indexes are:

             0    1    2    3
             ↓    ↓    ↓    ↓
numbers =   [10,  20,  30,  40]


The loop starts here:

index = numbers.length - 1

index = 4 - 1

index = 3


First iteration:

numbers[3]

= 40

reversedArray:

[40]


Second iteration:

index = 2

numbers[2]

= 30

reversedArray:

[40, 30]


Third iteration:

index = 1

numbers[1]

= 20

reversedArray:

[40, 30, 20]


Fourth iteration:

index = 0

numbers[0]

= 10

reversedArray:

[40, 30, 20, 10]


The loop stops when index becomes -1.

The final result is:

[40, 30, 20, 10]


===========================================================
IMPORTANT
===========================================================

We did NOT use:

array.reverse()

We also avoided other built-in array methods.

The solution uses:

- A function
- A loop
- Array indexing
- Array assignment
- return

These are the fundamental concepts the challenge
is testing.
===========================================================
*/
