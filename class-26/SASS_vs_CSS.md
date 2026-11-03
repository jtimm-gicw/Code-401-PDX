# 🎨 CSS vs. SCSS — Beginner's Guide

**🎯 Goal:** Learn what CSS and SCSS do, how their syntax and file types differ, how to import them, and when to use each one.

## 1. What are CSS and SCSS?

- **CSS (Cascading Style Sheets)** controls how a webpage looks: colors, fonts, spacing, borders, and layouts.
- **SCSS** is a way to write styles using familiar CSS rules **plus extra tools** for organizing and reusing code.

**💡 [EXPLAIN]** The browser understands **CSS**, not SCSS directly. A build tool converts SCSS into regular CSS before the browser uses it.

## 2. File extensions

| Extension | What it contains | Example filename |
|---|---|---|
| `.css` | Regular CSS rules | `styles.css` |
| `.scss` | CSS-like rules with additional SCSS features | `styles.scss` |
| `_name.scss` | An SCSS *partial*: a shared file normally loaded by another SCSS file | `_colors.scss` |

**[STUDENT TIP]** Both CSS and SCSS use `{ }` to group rules and `;` to end declarations. If you know basic CSS, SCSS will look familiar.

## 3. Syntax comparison

### CSS

```css
.card {
  background: white;
  border-radius: 16px;
}

.card h2 {
  color: purple;
}
```

### SCSS

```scss
$card-background: white; // Save a value to reuse

.card {
  background: $card-background;
  border-radius: 16px;

  h2 {
    color: purple;
  }
}
```

**💡 [EXPLAIN]** Both examples can produce the same appearance. SCSS uses `$card-background` as a **variable** and places the `h2` rule **inside** `.card`. This is called **nesting**.

**⚠️ [IMPORTANT]** Modern CSS supports nesting too. Nesting is *not* exclusive to SCSS.

## 4. Reusable values: CSS and SCSS variables

### CSS custom property (often called a CSS variable)

```css
:root {
  --main-color: #6055cc;
}

.heading {
  color: var(--main-color);
}
```

### SCSS variable

```scss
$main-color: #6055cc;

.heading {
  color: $main-color;
}
```

**💡 [EXPLAIN]** Both help avoid repeating values. CSS custom properties remain in the CSS the browser reads and can change while the page runs. SCSS variables are replaced with their values when SCSS is converted into CSS.

## 5. SCSS tools: mixins and `@use`

### Mixin: a reusable group of styles

```scss
@mixin card-style {
  background: white;
  padding: 20px;
  border-radius: 16px;
}

.profile-card {
  @include card-style;
}

.product-card {
  @include card-style;
}
```

**💡 [EXPLAIN]** A **mixin** is like a recipe. Write a group of styles once, then use `@include` to apply them in different places.

### `@use`: share SCSS code between files

**File: `_colors.scss`**

```scss
$primary: #6055cc;
```

**File: `styles.scss`**

```scss
@use 'colors' as c;

.button {
  background: c.$primary;
}
```

- `@use 'colors'` loads the shared `_colors.scss` file.
- `as c` gives that file a short name.
- `c.$primary` uses the color defined in that file.

## 6. How imports differ

### Importing a stylesheet into a JavaScript app

In projects with a build tool such as Vite, importing CSS and SCSS into JavaScript looks almost the same:

```javascript
import './styles.css';
import './styles.scss';
```

The difference is the **file extension**. The build tool handles converting the SCSS file into CSS.

### Sharing styles between files

- **CSS:** You can load a CSS file from HTML using `<link rel="stylesheet" href="styles.css">`. CSS also supports `@import`, although combining stylesheets through a build tool is often preferred.
- **SCSS:** Use `@use` to access variables, mixins, and other shared SCSS features from another SCSS file.

**⚠️ [IMPORTANT]** `@use` inside SCSS and `import` inside JavaScript do different jobs. `@use` shares SCSS features; a JavaScript stylesheet import includes styling in the app's build.

## 7. What do you need to use SCSS?

A browser can use a `.css` file directly. An `.scss` file needs a tool to convert it to CSS.

For example, in a **Vite project** with npm, install the SCSS compiler:

```bash
npm install -D sass
```

Then start the project's development server (if its `package.json` has a `dev` script):

```bash
npm run dev
```

**[STUDENT TIP]** The npm package is named `sass`, but you can still write **only `.scss` files**. You do not need to learn another stylesheet syntax.

If the project already includes the compiler in `package.json`, running `npm install` is enough to install it.

## 8. Why choose CSS or SCSS?

| Choose CSS when… | Choose SCSS when… |
|---|---|
| The styles are simple or small | The stylesheet is growing and has repeated patterns |
| You want to avoid an extra compiler | You want reusable mixins and organized shared files |
| Built-in CSS features meet your needs | SCSS features make the code easier for your team to maintain |

**Neither is always better.** Choose what makes the styling easier to understand and maintain.

## 9. Quick review questions

1. **What does CSS control?** — How a webpage looks.
2. **Can a browser read SCSS directly?** — No. SCSS must be converted to CSS.
3. **What is the difference between `.css` and `.scss`?** — `.scss` supports extra tools such as variables and mixins.
4. **What does `$main-color` mean in SCSS?** — A variable holding a reusable value.
5. **What does `@include` do?** — Inserts the styles from a mixin.
6. **What does `@use` do?** — Makes shared SCSS variables and mixins available from another file.
7. **When might you prefer regular CSS?** — When your styling is simple and you do not need extra tools.

---

**🎯 Key takeaway:** **CSS controls appearance. SCSS adds tools for organizing styling code. The browser ultimately receives CSS.**
