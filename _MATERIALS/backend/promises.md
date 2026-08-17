# The Basic Structure of a Promise

📦 Promise Created
       |
       |
       ▼
   ⏳ Pending
 (Still Working)
       |
       |
   ┌───┴───┐
   ▼       ▼
✅ Resolve  ❌ Reject
Success     Failure
   |           |
   ▼           ▼
.then()     .catch()

## 🏗️ Promise Structure

Step 1: Create the Promise

```js
const myPromise = new Promise((resolve, reject) => {

  // Do some work here

});
```

What are the parts?

```js
new Promise((resolve, reject) => {})
```

| *Part*   | **Meaning**     |
| -------  | --------------- |
| Promise  | The container   |
| resolve  | Success pathway |
| reject   | Failure pathway |

## 🎨 Visual Breakdown

```js
new Promise((resolve, reject) => {
```

```text
          |
          |
          ▼

     Do Some Work

          |
          |
    ┌─────┴─────┐
    ▼           ▼

 resolve()   reject()

    ▼           ▼

 .then()     .catch()
```

## Example of a Successful Promise

```js
 const myPromise = new Promise((resolve, reject) => {

  resolve('Pizza Delivered!');

});

myPromise
  .then(data => console.log(data))
  .catch(error => console.log(error));
  ```

*What happened?*
Promise Starts
      |
      ▼
resolve("Pizza Delivered!")
      |
      ▼
.then()
      |
      ▼
Console Output:
Pizza Delivered!

## Example of Failed Promise

```js
const myPromise = new Promise((resolve, reject) => {

  reject('Pizza Burned!');

});

myPromise
  .then(data => console.log(data))
  .catch(error => console.log(error));
  ```

*What happened?*
Promise Starts
      |
      ▼
reject("Pizza Burned!")
      |
      ▼
.catch()
      |
      ▼
Console Output:
Pizza Burned!

## 🚀 The Promise Pattern You'll See Most Often in Backend Code

```js
axios.get(url)

  .then(response => {
    console.log(response.data);
  })

  .catch(error => {
    console.log(error.message);
  });
  ```

*Visual Flow*
React Button Click
         |
         ▼
axios.get(url)
         |
         ▼
      Promise
         |
     Waiting...
         |
   ┌─────┴─────┐
   ▼           ▼

Success     Failure
   |           |

.then()    .catch()

   |           |
   ▼           ▼

Use Data   Handle Error

## Memory Trick

When you see...

```js
axios.get(url)
```

*Think immmediately...*
"Something is being requested."

```text
        ↓

"It will take time."

        ↓

"It returns a Promise."

        ↓

"I need .then() or .catch()"

        OR

"I need await."
```
