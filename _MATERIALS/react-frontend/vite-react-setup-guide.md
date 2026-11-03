# ⚡ Vite + GitHub Setup Guide (Step-by-Step)

## 🎯 Goal
Create a React app using **Vite** and push it to **GitHub**.

---

# ⚡ Part 1 — Create a Vite React App

## 🧰 Before You Start

Make sure you have:
- Node.js installed  
- A terminal (VS Code terminal, Git Bash)

Check Node:
```bash
node -v
```

---

## 🚀 Step 1 — Create the Project

```bash
npm create vite@latest
```

---

## 📝 Step 2 — Answer the Prompts

**Project name**
```
my-react-project
```

**Framework**
```
React
```

**Variant**
```
JavaScript
```

---

## 📂 Step 3 — Move into Your Project

```bash
cd my-react-project
```

---

## 📦 Step 4 — Install Dependencies

```bash
npm install
```

---

## ▶️ Step 5 — Start the Server

```bash
npm run dev
```

---

## 🌐 Step 6 — Open in Browser

Go to:
```
http://localhost:5173/
```

---

## 🧪 Step 7 — Confirm It Works

You should see a Vite + React starter page.

---

## 📁 Project Structure (Simple)

- src/ → your code  
- App.jsx → main component  
- main.jsx → connects app  

---

## ⚠️ Common Issues

**Command not found**
```bash
npx create vite@latest
```

**App not loading**
```bash
npm run dev
```

**Wrong folder**
- Make sure you're inside your project folder

---

## 💡 Pro Tips

- Use lowercase project names  
- Use dashes (not spaces)  
- Always run `npm run dev` to start  

---

## 🎯 Quick Commands

```bash
npm create vite@latest
cd your-project-name
npm install
npm run dev
```

---

# 🚀 Part 2 — Push Your Vite App to GitHub

## ✅ Step 1 — Go into your project folder

```bash
cd your-project-name
```

---

## ✅ Step 2 — Initialize Git

```bash
git init
```

---

## ✅ Step 3 — Check `.gitignore`

Make sure it includes:
```
node_modules
dist
.env
```

---

## ✅ Step 4 — Add and Commit Files

```bash
git add .
git commit -m "Initial commit"
```

---

## ✅ Step 5 — Create a GitHub Repo

- Go to GitHub
- Click **New Repository**
- Name it (same as your project)
- Click **Create repository**
- ⚠️ Do NOT add a README or **ANY OTHER FILE**

---

## ✅ Step 6 — Connect to GitHub

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
```

---

## ✅ Step 7 — Push Your Code

```bash
git branch -M main
git push -u origin main
```

---

## 🎉 Done!

Your project is now on GitHub.

---

## 🔁 Future Updates

```bash
git add .
git commit -m "your message"
git push
```

---

## ⚠️ Common Git Issues

**Repo already has README**
```bash
git pull origin main --rebase
```

**Wrong remote URL**
```bash
git remote -v
```

**Need to change remote**
```bash
git remote set-url origin NEW_URL
```

---

## 💡 Final Tip

**Always run:**
```bash
ls
```
before working *to confirm you're in the correct folder*.
