# 🎨 CSS vs. Sass vs. SCSS — Beginner's Guide

**Code 401 · Class 26 · Dream Trip Planner**  
**Goal:** Understand what CSS and Sass do, how their files and syntax differ, and when to use each.

## 1. First, what are CSS, Sass, and SCSS?

- **CSS (Cascading Style Sheets)** tells the browser how a webpage looks: colors, fonts, spacing, and layout.
- **Sass** is a tool and styling language that gives us extra ways to organize styles. It **converts our Sass code into regular CSS** so browsers can understand it.
- **SCSS** is the most common way to write Sass. It looks almost exactly like CSS, but adds features such as variables and mixins.

**Remember:** The browser reads **CSS**, not raw Sass or SCSS. In our React/Vite project, the build tools handle the conversion for us.

## 2. File types: What does the ending mean?

| File | What it contains | Example |
|---|---|---|
| `.css` | Regular CSS | `base.css` |
| `.scss` | Sass features written with CSS-style `{ }` and `;` | `main.scss` |
| `.sass` | Sass features written using indentation instead of `{ }` and `;` | `theme.sass` |

**In Class 26, we use `.scss`, not `.sass`.** This makes the transition easier because students already know CSS syntax.

## 3. Syntax: How does the code look?

### CSS (`styles.css`)

```css
.card {
  background-color: white;
  border-radius: 20px;
}

.card h2 {
  color: purple;
}
```

### SCSS (`styles.scss`)

```scss
$card-color: white; // A reusable Sass variable

.card {
  background-color: $card-color;
  border-radius: 20px;

  h2 { // A related rule placed inside the card rule
    color: purple;
  }
}
```

Both examples can produce the **same appearance**. SCSS helps us organize the styles and reuse values.

### Sass (`styles.sass`) — for comparison only

```sass
$card-color: white

.card
  background-color: $card-color
  border-radius: 20px

  h2
    color: purple
```

Notice: `.sass` uses **indentation** (spaces) instead of curly braces and semicolons. We will **not** use this version in our demo.

## 4. What extra features does SCSS give us?

| Feature | Simple explanation | Example |
|---|---|---|
| **Variables** | Save a value so we can reuse it | `$purple: #6055cc;` |
| **Nesting** | Put related styles inside one another | `.card { h2 { color: red; } }` |
| **Mixins** | Save a group of style rules and reuse them | `@include card-style;` |
| **Modules** | Share variables or mixins between files | `@use 'tokens' as t;` |

**Example: a mixin**

```scss
@mixin rounded-card {
  background: white;
  border-radius: 20px;
  padding: 20px;
}

.destination-card {
  @include rounded-card;
}
```

A **mixin** is like a reusable recipe for styling. Instead of rewriting the same three rules, we use `@include`.

> **Important:** Modern CSS also has features such as custom properties (CSS variables) and nesting. You do **not** need Sass for every project. Sass is useful when its organization and reusable mixins make the code easier to manage.

## 5. How do imports work?

There are **two different kinds of imports** to remember in our React app.

### A. Import a stylesheet into a React/JavaScript file

In `src/main.jsx` (or another app entry file), Vite understands both kinds:

```jsx
import './styles/base.css';   // Regular CSS
import './styles/main.scss';  // SCSS: Vite asks Sass to convert it to CSS
```

**Difference:** The import statement looks the same; only the **file extension** changes. SCSS needs the Sass package installed.

### B. Share one SCSS file with another SCSS file

Suppose `src/styles/_tokens.scss` contains:

```scss
$purple: #6055cc;
```

Then `src/styles/main.scss` can use it:

```scss
@use 'tokens' as t;

.title {
  color: t.$purple;
}
```

- `@use` means **load shared styles or values from another Sass file**.
- `t` is a short name (an **alias**) for `tokens`.
- `t.$purple` means **use the `$purple` value from that file**.
- A file beginning with `_`, such as `_tokens.scss`, is called a **partial**. It is meant to be loaded by other Sass files, not usually compiled as its own separate stylesheet.

**⚠️ Important:** Older Sass lessons may show `@import 'tokens';`. Sass has deprecated its old `@import` system. For new SCSS code, prefer **`@use`**. Regular CSS has its own `@import`, but that is **not** the same as Sass `@use`.

## 6. How do we install and run it in Dream Trip Planner?

The Class 26 Vite starter already lists Sass in `package.json`. From the project folder:

```bash
npm install
npm run dev
```

If Sass is **not** listed in a different Vite project, install it with:

```bash
npm install -D sass
```

- `npm install` downloads the packages listed in `package.json`.
- `-D` saves Sass as a **development dependency**, a tool used while building the app.
- `npm run dev` starts Vite. Vite handles the SCSS-to-CSS conversion automatically.

**You do not need** `npm run server` or a separate Sass terminal command for this demo.

## 7. Which should I choose: CSS or SCSS?

| Choose CSS when... | Choose SCSS when... |
|---|---|
| Your page has a small amount of styling | Many components share the same colors or card styles |
| You want to keep setup simple | You want Sass variables, mixins, and shared modules |
| Regular CSS already meets your needs | Your stylesheet is growing and getting repetitive |

**Neither is automatically better.** Use the simpler option that helps your team write and maintain clear styles.

## 8. Quick Class 26 file tour

```text
src/
├── class-components/
│   └── class-demo.css    ← Traditional CSS example
├── styles/
│   ├── base.css          ← Regular CSS
│   ├── _tokens.scss      ← Shared Sass values (variables)
│   ├── _mixins.scss      ← Reusable style recipes (mixins)
│   └── main.scss         ← Main SCSS styles
└── main.jsx              ← Imports the stylesheets
```

## 9. Check your understanding

1. **Does the browser read SCSS directly?** No. Sass converts it to CSS first.
2. **What is the difference between `.scss` and `.sass`?** SCSS uses CSS-style braces and semicolons; Sass uses indentation.
3. **What does `@use` do?** It loads shared Sass styles or values from another file.
4. **Why choose SCSS for Dream Trip Planner?** We can reuse colors, card styles, and other styling rules across components.

**Key takeaway:** **CSS styles the webpage. Sass helps us write and organize that styling. SCSS is the Sass syntax that looks like CSS.**

---

### Further reading

- [Sass: Syntax](https://sass-lang.com/documentation/syntax/)
- [Sass: `@use`](https://sass-lang.com/documentation/at-rules/use/)
- [Sass: `@import` deprecation](https://sass-lang.com/documentation/at-rules/import/)
- [Vite: CSS pre-processors](https://vite.dev/guide/features.html#css-pre-processors)
