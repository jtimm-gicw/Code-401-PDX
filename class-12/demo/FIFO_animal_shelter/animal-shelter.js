'use strict';

/*
=========================================================
🐶 🐱 FIFO ANIMAL SHELTER
=========================================================

In this challenge, you will create a simple animal shelter system that manages dogs and cats waiting to be adopted. The shelter follows the First-In, First-Out (FIFO) rule, meaning animals that arrived first should be adopted first.

You will build an AnimalShelter class using JavaScript with two methods: enqueue() to add animals to the shelter and dequeue() to remove the longest-waiting dog or cat based on an adopter's preference.

Why are we doing this? This challenge helps you practice working with queues, classes, and methods while learning how to organize and retrieve information in the correct order. These skills are useful in real-world applications like customer service lines, appointment systems, and managing requests.

GOAL:

Create an AnimalShelter that stores dogs and cats.

The shelter follows:

FIFO

First In
First Out


Think about a line at a store.

The first person who enters the line should be the
first person who gets helped.


ANIMAL SHELTER EXAMPLE:

Buddy enters first.
Max enters second.

DOG QUEUE:

FRONT              BACK

Buddy  →  Max

If someone adopts a dog:

Buddy leaves first.

=========================================================
*/


console.log('========================================');
console.log('🐶 🐱 FIFO ANIMAL SHELTER DEMO');
console.log('========================================');



/*
=========================================================
STEP 1
CREATE A SIMPLE QUEUE
=========================================================

Instead of using JavaScript's Array.shift(),
we will create a small Queue class.

WHY?

Array.shift() removes the first item in an array.

However, JavaScript then has to move the remaining
array items forward.

That can take more work as the array grows.


Instead, our Queue will keep track of:

front
rear
storage


Example:

FRONT                  REAR
  ↓                       ↓

Buddy → Max → Rocky


front tells us where the first animal is.

rear tells us where the next animal should be added.
=========================================================
*/


class Queue {

  constructor() {

    // This object stores our queue items.
    this.storage = {};

    // front points to the oldest item.
    this.front = 0;

    // rear points to where the NEXT item will be added.
    this.rear = 0;
  }



  /*
  =======================================================
  enqueue(value)

  enqueue means:

  ADD something to the BACK of the queue.
  =======================================================
  */

  enqueue(value) {

    // Store the new value at the rear position.
    this.storage[this.rear] = value;

    // Move rear forward so the next item
    // gets its own position.
    this.rear++;

  }



  /*
  =======================================================
  dequeue()

  dequeue means:

  REMOVE something from the FRONT of the queue.
  =======================================================
  */

  dequeue() {

    // First check whether the queue is empty.
    if (this.isEmpty()) {

      return null;

    }


    // Get the oldest item.
    const value = this.storage[this.front];


    // Remove it from storage.
    delete this.storage[this.front];


    // Move the front forward.
    this.front++;


    // Return the item we removed.
    return value;

  }



  /*
  =======================================================
  isEmpty()

  Returns true if nothing is waiting in the queue.
  =======================================================
  */

  isEmpty() {

    return this.front === this.rear;

  }



  /*
  =======================================================
  values()

  This method is ONLY here to help with our classroom demo.

  It lets us easily see what is currently inside
  the queue.
  =======================================================
  */

  values() {

    const results = [];

    for (let i = this.front; i < this.rear; i++) {

      results.push(this.storage[i]);

    }

    return results;

  }

}



/*
=========================================================
STEP 2
CREATE THE ANIMAL SHELTER
=========================================================

Our shelter needs TWO queues.

Why?

Because someone can request:

"dog"

OR

"cat"


So we will have:

DOG QUEUE

and

CAT QUEUE


Example:

DOGS

Buddy → Max → Rocky


CATS

Luna → Milo → Zoe
=========================================================
*/


class AnimalShelter {

  constructor() {

    // Queue containing only dogs.
    this.dogs = new Queue();

    // Queue containing only cats.
    this.cats = new Queue();

  }



  /*
  =======================================================
  enqueue(animal)

  This method adds an animal to the shelter.

  The animal should look like:

  {
    name: "Buddy",
    species: "dog"
  }

  OR:

  {
    name: "Luna",
    species: "cat"
  }
  =======================================================
  */

  enqueue(animal) {

    console.log('');
    console.log(`➡️ ${animal.name} arrived at the shelter.`);


    /*
    Check the animal's species.

    If it is a dog:

    Put it into the DOG queue.
    */

    if (animal.species === 'dog') {

      this.dogs.enqueue(animal);

      console.log(`🐶 ${animal.name} joined the DOG queue.`);

    }


    /*
    Otherwise check whether it is a cat.
    */

    else if (animal.species === 'cat') {

      this.cats.enqueue(animal);

      console.log(`🐱 ${animal.name} joined the CAT queue.`);

    }


    /*
    Our challenge says the shelter only holds
    dogs and cats.

    If another animal appears, we will not add it.
    */

    else {

      console.log(
        `❌ ${animal.name} was not added. ` +
        'The shelter only accepts dogs and cats.'
      );

      return null;

    }


    // Show students the shelter after each addition.
    this.showShelter();

  }



  /*
  =======================================================
  dequeue(pref)

  pref means "preference".

  Someone may prefer:

  "dog"

  OR

  "cat"


  Example:

  shelter.dequeue("dog");


  We return the dog that has been waiting
  the longest.
  =======================================================
  */

  dequeue(pref) {

    console.log('');
    console.log(`🔎 Adoption request: ${pref}`);


    /*
    DOG REQUEST
    */

    if (pref === 'dog') {

      const dog = this.dogs.dequeue();


      // What if there are no dogs?
      if (dog === null) {

        console.log('❌ There are no dogs available.');

        return null;

      }


      console.log(`🏠 ${dog.name} was adopted!`);

      this.showShelter();

      return dog;

    }



    /*
    CAT REQUEST
    */

    if (pref === 'cat') {

      const cat = this.cats.dequeue();


      // What if there are no cats?
      if (cat === null) {

        console.log('❌ There are no cats available.');

        return null;

      }


      console.log(`🏠 ${cat.name} was adopted!`);

      this.showShelter();

      return cat;

    }



    /*
    INVALID PREFERENCE

    The challenge specifically tells us:

    If pref is NOT "dog" or "cat",
    return null.
    */

    console.log(
      '❌ Invalid preference. Please choose "dog" or "cat".'
    );

    return null;

  }



  /*
  =======================================================
  showShelter()

  This is NOT required by the code challenge.

  We are creating it because this is a teaching demo.

  It lets students SEE what is happening to our queues.
  =======================================================
  */

  showShelter() {

    const dogNames = this.dogs
      .values()
      .map(dog => dog.name);


    const catNames = this.cats
      .values()
      .map(cat => cat.name);


    console.log('');
    console.log('-------- CURRENT SHELTER --------');

    console.log(
      '🐶 DOGS:',
      dogNames.length ? dogNames.join(' → ') : 'EMPTY'
    );

    console.log(
      '🐱 CATS:',
      catNames.length ? catNames.join(' → ') : 'EMPTY'
    );

    console.log('---------------------------------');

  }

}



/*
=========================================================
STEP 3
CREATE OUR SHELTER
=========================================================
*/


console.log('');
console.log('STEP 1: Create the shelter');


const shelter = new AnimalShelter();


shelter.showShelter();


/*

EXPECTED:

DOGS: EMPTY
CATS: EMPTY

*/



/*
=========================================================
STEP 4
ADD OUR FIRST DOG
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 2: Buddy arrives');
console.log('========================================');


const buddy = {

  name: 'Buddy',

  species: 'dog'

};


shelter.enqueue(buddy);


/*

DOG QUEUE:

FRONT
  ↓

Buddy

*/



/*
=========================================================
STEP 5
ADD OUR FIRST CAT
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 3: Luna arrives');
console.log('========================================');


const luna = {

  name: 'Luna',

  species: 'cat'

};


shelter.enqueue(luna);


/*

DOGS:

Buddy


CATS:

Luna

*/



/*
=========================================================
STEP 6
ADD ANOTHER DOG
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 4: Max arrives');
console.log('========================================');


const max = {

  name: 'Max',

  species: 'dog'

};


shelter.enqueue(max);


/*

DOG QUEUE:

FRONT          BACK

Buddy   →   Max


IMPORTANT QUESTION:

If someone wants a dog right now,
which dog should leave?


ANSWER:

Buddy


WHY?

Buddy entered BEFORE Max.

FIFO:

First In
First Out

*/



/*
=========================================================
STEP 7
ADD ANOTHER CAT
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 5: Milo arrives');
console.log('========================================');


const milo = {

  name: 'Milo',

  species: 'cat'

};


shelter.enqueue(milo);


/*

Our shelter should now look like:

DOGS:

Buddy → Max


CATS:

Luna → Milo

*/



/*
=========================================================
STEP 8
DEQUEUE A DOG
=========================================================

Someone wants to adopt a dog.

Which dog should leave?

Buddy or Max?


Buddy arrived FIRST.

Therefore Buddy leaves FIRST.
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 6: Someone wants a dog');
console.log('========================================');


const adoptedDog = shelter.dequeue('dog');


console.log('');
console.log('Returned from dequeue():');

console.log(adoptedDog);


/*

EXPECTED:

{
  name: "Buddy",
  species: "dog"
}


DOG QUEUE BEFORE:

Buddy → Max


DOG QUEUE AFTER:

Max

*/



/*
=========================================================
STEP 9
DEQUEUE A CAT
=========================================================

Now someone wants a cat.

Our cat queue is:

Luna → Milo


Luna entered first.

So Luna should leave first.
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 7: Someone wants a cat');
console.log('========================================');


const adoptedCat = shelter.dequeue('cat');


console.log('');
console.log('Returned from dequeue():');

console.log(adoptedCat);


/*

EXPECTED:

Luna


CAT QUEUE BEFORE:

Luna → Milo


CAT QUEUE AFTER:

Milo

*/



/*
=========================================================
STEP 10
INVALID PREFERENCE
=========================================================

The challenge tells us:

If pref is NOT:

"dog"

or

"cat"

return null.
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 8: Someone asks for a bird');
console.log('========================================');


const birdRequest = shelter.dequeue('bird');


console.log('');
console.log('Returned value:');

console.log(birdRequest);


/*

EXPECTED:

null

*/



/*
=========================================================
STEP 11
TEST AN INVALID ANIMAL
=========================================================

Our shelter should only contain dogs and cats.

Let's see what happens if someone tries to add
a bird.
=========================================================
*/


console.log('');
console.log('========================================');
console.log('STEP 9: Try adding a bird');
console.log('========================================');


const tweety = {

  name: 'Tweety',

  species: 'bird'

};


shelter.enqueue(tweety);



/*
=========================================================
FINAL RESULT
=========================================================
*/


console.log('');
console.log('========================================');
console.log('FINAL SHELTER');
console.log('========================================');


shelter.showShelter();



/*
=========================================================
🧠 FINAL REVIEW
=========================================================

What did we learn?


1. FIFO

   First In
   First Out


2. enqueue()

   Adds something to the BACK of a queue.


3. dequeue()

   Removes something from the FRONT of a queue.


4. Our AnimalShelter uses TWO queues.

   One for dogs.

   One for cats.


5. When someone requests a dog:

   Return the dog that has been waiting longest.


6. When someone requests a cat:

   Return the cat that has been waiting longest.


7. Invalid preference?

   Return null.


=========================================================
BIG-O
=========================================================

Because our Queue tracks the front and rear:

enqueue:

O(1)

We know exactly where to add the animal.


dequeue:

O(1)

We know exactly where the oldest animal is.


SPACE:

O(n)

We need storage for all animals currently
inside the shelter.


=========================================================
STUDENT CHECK-IN QUESTIONS
=========================================================

1. What does FIFO mean?

2. Why do we use two queues?

3. Where does enqueue() add an animal?

4. Where does dequeue() remove an animal?

5. If Buddy enters before Max, which dog leaves first?

6. What should dequeue("bird") return?

7. Why can enqueue() be O(1)?

8. Why can dequeue() be O(1)?

=========================================================
*/
