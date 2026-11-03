# 🧩 React Components — Student Guide (Extended)

## 🎯 Learning Goals
By the end of this guide, you will:
- Understand what React components are
- Learn how to create and use components
- Understand JSX and modularity
- Learn props and state
- Build dynamic and reusable UI

---

# 🟢 What is React?

React is a JavaScript library used to build user interfaces (UI).

Instead of building one large page, React lets us build apps using small reusable pieces.

---

# 🧱 What is a Component?

A component is a reusable piece of UI.

Examples:
- Header
- Footer
- Button
- Card

Think of components like LEGO blocks 🧱

---

# ✨ What is JSX?

JSX looks like HTML but is actually JavaScript.

```jsx
function App() {
  return <h1>Hello React!</h1>;
}
```

---

# ⚡ Creating a React App (Vite)

```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
```

---

# 🧩 Your First Component

```jsx
function Header() {
  return <h2>This is the Header</h2>;
}

export default Header;
```

---

# 🔁 Using a Component

```jsx
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <h1>Hello React!</h1>
    </>
  );
}
```

---

# 🟡 Props (Passing Data)

## What are Props?
Props (short for properties) are used to pass data into components.

## Example:

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

Using it:

```jsx
function App() {
  return (
    <>
      <Greeting name="Jason" />
      <Greeting name="Student" />
    </>
  );
}
```

👉 Each component receives different data!

---

# 🔵 State (Changing Data)

## What is State?
State is data that can change over time.

React updates the UI when state changes.

---

## Example using useState

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

---

## Using the Counter

```jsx
function App() {
  return (
    <>
      <Counter />
    </>
  );
}
```

---

# 🧠 Key Differences

Props:
- Passed into components
- Read-only

State:
- Managed inside component
- Can change

---

# ⚠️ Rules

- Components must be capitalized
- Props are read-only
- State updates trigger re-render

---

# 🧪 Practice

## Task 1
Create a Button component with props

```jsx
function Button(props) {
  return <button>{props.label}</button>;
}
```

---

## Task 2
Create a counter with state

---

# 🏁 Summary

- Components = reusable UI
- Props = data passed in
- State = data that changes
- React updates UI automatically

---


