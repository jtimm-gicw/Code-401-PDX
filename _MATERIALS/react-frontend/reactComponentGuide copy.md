# 🧩 React Components 

---

## **1. What is a React Component?**

A React component is a **function that returns UI (JSX)**.

👉 Think of it as a **reusable piece of your app**

---

## **2. Basic Structure of a Component**

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default MyComponent;
```

---

## ✅ **3. Required Parts of a Component**

### **1. Function**
- The component must be a function

```jsx
function MyComponent() {}
```

---

### **2. Return**
- Must return JSX (what shows on screen)

```jsx
return <h1>Hello</h1>;
```

---

### **3. JSX**
- Looks like HTML but is JavaScript

```jsx
<div>Content</div>
```

⚠️ JSX must have **one parent element**

---

### **4. Export**
- Allows other files to use the component

```jsx
export default MyComponent;
```

---

## ⚠️ **Important: JSX Parent Element**

### ❌ Incorrect:
```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

### ✅ Correct:
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

OR:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

# ⚠️ **Two Types of “Parent” (Do NOT Confuse)**

| Type | Meaning |
|------|--------|
| **Parent Component** | A component that renders another component |
| **Parent Element** | A wrapper inside JSX |

---

## **Parent Component Example**

```jsx
function App() {
  return <Header />;
}
```

- `App` = parent  
- `Header` = child  

👉 **Any component can be a parent**, not just `App.jsx`

---

# 🔁 **4. Props (Passing Data Down)**

## **What are Props?**
Props = **properties** (data passed into a component)

---

## **How Props Work**

```jsx
function App() {
  return <Greeting name="Jason" />;
}

function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

## ✅ **Key Points**
- Props flow **parent → child**
- Props are **read-only**
- Child **cannot change props**

---

## 🧠 **Simple Idea**
👉 Props = **input from parent**

---

# 🔄 **5. State (Changing Data)**

## **What is State?**
State = **data inside a component that can change**

---

## **Example**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## ✅ **Key Points**
- State is **local to the component**
- State **can change**
- When state changes → React **re-renders**

---

## 🧠 **Simple Idea**
👉 State = **data that updates**

---

# 🔁 **6. Data Flow in React**

## **Props Flow (Downward)**

```
Parent → Child
```

- Parent controls the data  
- Child receives and displays it  

---

## **State Flow (Local + Updates)**

```
Component → updates itself → re-render
```

---

## 🎯 **Combined Example**

```jsx
function App() {
  return <Counter start={5} />;
}

function Counter(props) {
  const [count, setCount] = useState(props.start);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

## ✅ **What’s Happening**
- `start` = **prop** (from parent)
- `count` = **state** (inside component)
- Props set the **starting value**
- State handles **changes**

---

# 🧬 **7. Inheritance vs Composition**

## ❌ React does NOT use inheritance

👉 Instead, React uses **composition**

---

## ✅ Composition Example

```jsx
function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}
```

👉 You build apps by **combining components**, not inheriting from them

---

# 🎯 **FINAL SUMMARY (Student-Friendly)**

- **Component** = function that returns UI  
- **Props** = data passed in (read-only)  
- **State** = data that changes  
- **Props flow down** (parent → child)  
- **State stays local**  
- **Parent component** = renders another component  
- **Parent element** = wrapper in JSX  
- **React uses composition, not inheritance**

---

# 💡 **One Sentence to Remember**

👉 *“Props bring data in, state changes data, and components combine to build the UI.”*
