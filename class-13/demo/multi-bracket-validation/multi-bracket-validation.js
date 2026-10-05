'use strict';

/*
node multi-bracket-validation.js

============================================================
MULTI-BRACKET VALIDATION
============================================================

Goal:

Create a function:

validateBrackets(string)

Return:

true
    if all brackets are balanced correctly.

false
    if brackets are missing, mismatched,
    or closed in the wrong order.


We are checking 3 bracket types:

()
[]
{}


MAIN DATA STRUCTURE:

STACK


Why use a Stack?

A Stack follows:

LIFO
Last In, First Out


The LAST bracket we OPEN
should be the FIRST bracket we CLOSE.


Example:

{
[
(

The ( was opened last.

So it needs to close first:

)
]
}
*/


// ==========================================================
// STEP 1 — CREATE A MATCHING BRACKET TABLE
// ==========================================================

/*
We need an easy way to know which opening bracket
belongs with each closing bracket.

If we see:

)

we expect:

(

to be on top of the Stack.


If we see:

]

we expect:

[


If we see:

}

we expect:

{
*/

const matchingBrackets = {
  ')': '(',
  ']': '[',
  '}': '{',
};


console.log('STEP 1');

console.log('Matching bracket table:');

console.log(matchingBrackets);

console.log('-----------------------------------');


// ==========================================================
// STEP 2 — KNOW OUR OPENING BRACKETS
// ==========================================================

/*
These are the characters that should be PUSHED
onto our Stack.

Remember:

PUSH = add something to the top of the Stack.
*/

const openingBrackets = [
  '(',
  '[',
  '{',
];


console.log('STEP 2');

console.log('Opening brackets:');

console.log(openingBrackets);

console.log('-----------------------------------');


// ==========================================================
// STEP 3 — CREATE THE FUNCTION
// ==========================================================

function validateBrackets(string) {

  /*
  Create an empty Stack.

  We can use a normal JavaScript array
  as our Stack.

  push()
      adds something

  pop()
      removes the most recently added item
  */

  const stack = [];


  console.log('');

  console.log('===================================');

  console.log(`Checking: "${string}"`);

  console.log('Starting Stack:', stack);

  console.log('===================================');


  // ========================================================
  // STEP 4 — LOOP THROUGH THE STRING
  // ========================================================

  /*
  Look at each character one at a time.

  Example:

  "{[]}"

  We will examine:

  {
  [
  ]
  }
  */

  for (const character of string) {

    console.log('');

    console.log(`Current character: ${character}`);


    // ======================================================
    // STEP 5 — IS IT AN OPENING BRACKET?
    // ======================================================

    /*
    If we find:

    (
    [
    {

    PUSH it onto our Stack.
    */

    if (openingBrackets.includes(character)) {

      stack.push(character);


      console.log(
        `Opening bracket found. PUSH ${character}`
      );


      console.log(
        'Stack is now:',
        stack
      );


      /*
      continue means:

      We are finished with this character.

      Move to the next character in the loop.
      */

      continue;
    }


    // ======================================================
    // STEP 6 — IS IT A CLOSING BRACKET?
    // ======================================================

    /*
    Our matchingBrackets object contains:

    )
    ]
    }

    So this asks:

    "Is this character a closing bracket?"
    */

    if (matchingBrackets[character]) {

      console.log(
        `Closing bracket found: ${character}`
      );


      // ====================================================
      // EDGE CASE — EMPTY STACK
      // ====================================================

      /*
      What if we see:

      }

      but our Stack is empty?


      There is no:

      {

      waiting to match it.


      Example:

      Input:

      "}"


      Stack:

      [ empty ]


      Answer:

      false
      */

      if (stack.length === 0) {

        console.log(
          'Stack is empty.'
        );

        console.log(
          'There is no opening bracket to match.'
        );

        console.log(
          'Answer: false'
        );


        return false;
      }


      // ====================================================
      // STEP 7 — POP THE TOP OPENING BRACKET
      // ====================================================

      /*
      pop() removes the most recent item.

      Example Stack:

      [
        "{",
        "[",
        "("
      ]

      pop() gives us:

      "("

      because it was added last.
      */

      const lastOpeningBracket = stack.pop();


      console.log(
        `POP from Stack: ${lastOpeningBracket}`
      );


      console.log(
        `Expected match for ${character}:`,
        matchingBrackets[character]
      );


      // ====================================================
      // STEP 8 — DO THE BRACKETS MATCH?
      // ====================================================

      /*
      Example:

      character = "]"

      matchingBrackets["]"]

      gives us:

      "["


      So we compare:

      lastOpeningBracket

      with:

      matchingBrackets[character]
      */

      if (
        lastOpeningBracket !==
        matchingBrackets[character]
      ) {

        console.log(
          'The brackets do NOT match.'
        );


        console.log(
          `Found ${lastOpeningBracket} but expected ${matchingBrackets[character]}`
        );


        console.log(
          'Answer: false'
        );


        return false;
      }


      /*
      If we reach this point,
      the opening and closing brackets matched.
      */

      console.log(
        'The brackets match!'
      );


      console.log(
        'Stack is now:',
        stack
      );
    }


    // ======================================================
    // NORMAL CHARACTERS
    // ======================================================

    /*
    If the character is NOT a bracket,
    we simply ignore it.

    Example:

    hello {world}

    Letters such as:

    h
    e
    l
    l
    o

    do not affect the Stack.
    */
  }


  // ========================================================
  // STEP 9 — CHECK THE STACK AT THE END
  // ========================================================

  /*
  We finished checking the entire string.


  If the Stack is EMPTY:

  Every opening bracket found
  a matching closing bracket.

  Answer:

  true


  ------------------------------


  If something is STILL in the Stack:

  Some opening bracket was never closed.

  Example:

  "{{"

  Stack:

  [
    "{",
    "{"
  ]

  Answer:

  false
  */


  const answer = stack.length === 0;


  console.log('');

  console.log(
    'Reached the end of the string.'
  );


  console.log(
    'Final Stack:',
    stack
  );


  console.log(
    'Answer:',
    answer
  );


  return answer;
}


// ==========================================================
// EXAMPLE 1 — SIMPLE MATCH
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"{}"


Will the answer be:

true

or

false?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 1');

console.log(
  'Question: Is "{}" balanced?'
);


const example1 = validateBrackets(
  '{}'
);


console.log(
  'FINAL ANSWER EXAMPLE 1:',
  example1
);


// ==========================================================
// EXAMPLE 2 — NESTED BRACKETS
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"{[()]}"


Look at the order we OPEN:

{
[
(


Now look at the order we CLOSE:

)
]
}


Are they closing in reverse order?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 2');

console.log(
  'Question: Is "{[()]}" balanced?'
);


const example2 = validateBrackets(
  '{[()]}'
);


console.log(
  'FINAL ANSWER EXAMPLE 2:',
  example2
);


// ==========================================================
// EXAMPLE 3 — WRONG BRACKET TYPE
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"{]"


We opened with:

{


But tried to close with:

]


Do those brackets match?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 3');

console.log(
  'Question: Is "{]" balanced?'
);


const example3 = validateBrackets(
  '{]'
);


console.log(
  'FINAL ANSWER EXAMPLE 3:',
  example3
);


// ==========================================================
// EXAMPLE 4 — WRONG CLOSING ORDER
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"{[}]"


We opened:

{
[


Which bracket was opened LAST?

[


So which one should close FIRST?

]


But instead we see:

}


What should happen?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 4');

console.log(
  'Question: Is "{[}]" balanced?'
);


const example4 = validateBrackets(
  '{[}]'
);


console.log(
  'FINAL ANSWER EXAMPLE 4:',
  example4
);


// ==========================================================
// EXAMPLE 5 — MULTIPLE CORRECT PAIRS
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"()[]{}"


We have:

()

[]

{}


Are all three pairs correctly matched?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 5');

console.log(
  'Question: Is "()[]{}" balanced?'
);


const example5 = validateBrackets(
  '()[]{}'
);


console.log(
  'FINAL ANSWER EXAMPLE 5:',
  example5
);


// ==========================================================
// EXAMPLE 6 — MISSING CLOSING BRACKETS
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"{{"


We PUSH:

{


Then PUSH another:

{


At the end of the string,
will our Stack be empty?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 6');

console.log(
  'Question: Is "{{" balanced?'
);


const example6 = validateBrackets(
  '{{'
);


console.log(
  'FINAL ANSWER EXAMPLE 6:',
  example6
);


// ==========================================================
// EXAMPLE 7 — CLOSING BRACKET FIRST
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"}"


Remember:

Our Stack starts EMPTY.


Can we close something
that was never opened?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 7');

console.log(
  'Question: Is "}" balanced?'
);


const example7 = validateBrackets(
  '}'
);


console.log(
  'FINAL ANSWER EXAMPLE 7:',
  example7
);


// ==========================================================
// EXAMPLE 8 — TEXT WITH BRACKETS
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


"hello {world}"


Remember:

Normal letters are ignored.

Only brackets affect our Stack.


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 8');

console.log(
  'Question: Is "hello {world}" balanced?'
);


const example8 = validateBrackets(
  'hello {world}'
);


console.log(
  'FINAL ANSWER EXAMPLE 8:',
  example8
);


// ==========================================================
// EXAMPLE 9 — EMPTY STRING
// ==========================================================

/*

QUESTION FOR STUDENTS:

What do you think this will return?


""


There are no characters.

There are also no unmatched brackets.


Will the Stack be empty at the end?


GUESS BEFORE READING THE OUTPUT.

*/

console.log('');

console.log('EXAMPLE 9');

console.log(
  'Question: Is an empty string balanced?'
);


const example9 = validateBrackets(
  ''
);


console.log(
  'FINAL ANSWER EXAMPLE 9:',
  example9
);


// ==========================================================
// FINAL SUMMARY
// ==========================================================

console.log('');

console.log(
  '==================================='
);

console.log(
  'MULTI-BRACKET VALIDATION SUMMARY'
);

console.log(
  '==================================='
);


console.log(`

STEP 1

Look at each character.


STEP 2

Opening bracket?

PUSH it onto the Stack.


STEP 3

Closing bracket?

Check the top of the Stack.


STEP 4

Wrong match?

Return false.


STEP 5

Correct match?

POP the opening bracket.


STEP 6

Reached the end?

If Stack is empty:

true


If something remains:

false


-----------------------------------

TIME COMPLEXITY

O(n)

Why?

We look at each character once.


SPACE COMPLEXITY

O(n)

Why?

In the worst case,
we may store all opening brackets
inside the Stack.

-----------------------------------

STACK RULE:

LIFO

Last In, First Out

`);
