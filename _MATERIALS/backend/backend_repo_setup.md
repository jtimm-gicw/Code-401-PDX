# 🚀 Backend Server Setup Guide (Ubuntu + GitHub)

## 🎯 Goal

By the end of this guide, you will:

✅ Create a backend project folder  
✅ Initialize Node.js  
✅ Install common backend packages  
✅ Create a Git repository  
✅ Connect your project to GitHub  
✅ Push your code online

---

# Step 1: Open the Terminal

**Open your Ubuntu terminal.**

---

# Step 2: Navigate to Your Projects Folder

Move into your projects directory.

```bash
cd ~/projects/courses/
```

If you do not have a projects folder:

```bash
mkdir ~/projects
cd ~/projects
```

---

# Step 3: Create Your Backend Folder

Choose a project name.

Example:

```bash
mkdir movie-backend
```

Move into the folder:

```bash
cd movie-backend
```

Check your location:

```bash
pwd
```

You should see something similar to:

```bash
/home/yourname/projects/movie-backend
```

---

# Step 4: Initialize Node.js

Create a `package.json` file.

```bash
npm init -y
```

The `-y` automatically accepts the default settings.

You should now see:

```bash
package.json
```

---

# Step 5: Install Required Packages

Install common backend packages:

```bash
npm install express axios dotenv cors
```

### What These Packages Do

| Package | Purpose |
|----------|----------|
| express | Creates the server |
| axios | Makes API requests |
| dotenv | Stores secret keys safely |
| cors | Allows frontend and backend to communicate |

---

# Step 6: Create Project Files

Create the basic files:

```bash
touch server.js
touch .env
touch .gitignore
```

Check that they exist:

```bash
ls
```

You should see:

```bash
node_modules
package-lock.json
package.json
server.js
.env
.gitignore
```

---

# Step 7: Configure .gitignore

Open the file:

```bash
code .gitignore
```

Add:

```text
node_modules
.env
```

### Why?

We do NOT upload:

- node_modules
- secret API keys

to GitHub.

---

# Step 8: Create a Simple Server

Open:

```bash
code server.js
```

Add:

```javascript
const express = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Backend Server Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Step 9: Test the Server

Start the server:

```bash
node server.js
```

You should see:

```bash
Server running on port 3001
```

Open your browser:

```text
http://localhost:3001
```

You should see:

```text
Backend Server Running!
```

Stop the server:

```bash
Ctrl + C
```

---

# Step 10: Initialize Git

Create a local Git repository:

```bash
git init
```

You should see:

```bash
Initialized empty Git repository
```

---

# Step 11: Check Git Status

```bash
git status
```

Git will show all untracked files.

---

# Step 12: Add Files to Git

Stage everything:

```bash
git add .
```

Check status:

```bash
git status
```

You should see:

```bash
Changes to be committed
```

---

# Step 13: Create Your First Commit

Commit your work:

```bash
git commit -m "Initial backend setup"
```

---

# Step 14: Create an Empty GitHub Repository

Go to GitHub.

Click:

```text
New Repository
```

Repository Name:

```text
movie-backend
```

### IMPORTANT

Leave these UNCHECKED:

❌ Add README

❌ Add .gitignore

❌ Add License

Create an EMPTY repository.

---

# Step 15: Connect Local Repo to GitHub

GitHub will provide a URL similar to:

HTTPS:

```bash
https://github.com/yourusername/movie-backend.git
```

OR SSH:

```bash
git@github.com:yourusername/movie-backend.git
```

Connect your local repository:

```bash
git remote add origin git@github.com:yourusername/movie-backend.git
```

Verify:

```bash
git remote -v
```

---

# Step 16: Push to GitHub

Rename branch to main:

```bash
git branch -M main
```

Push to GitHub:

```bash
git push -u origin main
```

You should see:

```bash
Enumerating objects...
Writing objects...
```

---

# Step 17: Refresh GitHub

Refresh your repository page.

You should now see:

✅ package.json

✅ package-lock.json

✅ server.js

✅ .gitignore

---

# Daily Git Workflow

Whenever you make changes:

## Check Status

```bash
git status
```

## Add Changes

```bash
git add .
```

## Commit Changes

```bash
git commit -m "Describe what changed"
```

Example:

```bash
git commit -m "Added weather route"
```

## Push to GitHub

```bash
git push
```

---

# Common Commands Cheat Sheet

### Start Server

```bash
node server.js
```

### Stop Server

```bash
Ctrl + C
```

### Check Git Status

```bash
git status
```

### Add Files

```bash
git add .
```

### Commit Changes

```bash
git commit -m "message"
```

### Push to GitHub

```bash
git push
```

### View Files

```bash
ls
```

### Open VS Code

```bash
code .
```

---

# 🎉 Success!

You have now:

✅ Created a backend project

✅ Installed Express

✅ Installed Axios

✅ Installed Dotenv

✅ Installed Cors

✅ Initialized Git

✅ Connected GitHub

✅ Made your first commit

✅ Pushed your backend project online

You're ready to start building API routes and backend applications!