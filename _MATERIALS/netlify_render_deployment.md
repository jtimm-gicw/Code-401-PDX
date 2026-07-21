# 🚀 Deploying a React Frontend with Netlify and a Node/Express Backend with Render

## 🏗️ Understanding the Deployment Architecture

Before deploying, it's important to understand what happens after your application goes online.

```text
                👤 User
                  │
                  ▼
      https://your-app.netlify.app
                  │
          React Frontend
             (Netlify)
                  │
       API Requests (fetch)
                  │
                  ▼
    https://your-api.onrender.com
                  │
        Express Backend
            (Render)
                  │
                  ▼
          MongoDB Atlas
```

### What Each Service Does

| Service | Job |
|---------|-----|
| 🌐 Netlify | Hosts your React frontend |
| 🚀 Render | Runs your Express server |
| 🍃 MongoDB Atlas | Stores your application data |
| 🐙 GitHub | Stores your project code |

---

## 🧰 Before You Begin

You should already have:

- ✅ GitHub Account
- ✅ Netlify Account
- ✅ Render Account
- ✅ MongoDB Atlas Database
- ✅ React (Vite) Frontend
- ✅ Node/Express Backend
- ✅ Working application on localhost

---

## 📁 Typical Project Structure

```text
my-project/

frontend/
│
├── src/
├── public/
├── package.json
├── vite.config.js
└── .env

backend/
│
├── routes/
├── models/
├── server.js
├── package.json
└── .env
```

---

## ✅ Step 1 — Test Everything Locally

Never deploy code that isn't working.

### Start your backend

```bash
npm run dev
```

or

```bash
npm start
```

---

### Start your frontend

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

Make sure:

- ✅ Weather loads
- ✅ API requests work
- ✅ Database connects
- ✅ Authentication works (if applicable)
- ✅ No console errors

---

## 📤 Step 2 — Push Your Code to GitHub

Commit your latest code.

```bash
git add .

git commit -m "Ready for deployment"

git push origin main
```

Both Netlify and Render will automatically pull your latest code from GitHub.

---

## 🚀 Step 3 — Deploy the Backend to Render

Login to Render.

Click

```
New +
```

↓

```
Web Service
```

↓

Connect your GitHub repository.

---

### Configure Your Service

| Setting | Value |
|----------|-------|
| Environment | Node |
| Build Command | `npm install` |
| Start Command | `node server.js` *(or `npm start`)* |

Click

```
Deploy Web Service
```

---

Render will create a URL similar to:

```
https://your-api.onrender.com
```

**This URL is now your backend.**

---

## 🔐 Step 4 — Add Environment Variables to Render

### What are Environment Variables?

Instead of putting passwords, API keys, or database connections directly into your code, we store them separately.

Instead of this:

```javascript
const apiKey = "12345";
```

we write:

```javascript
const apiKey = process.env.API_KEY;
```

This keeps sensitive information secure.

---

### Local Backend (.env)

Example:

```text
PORT=3001

MONGO_URI=mongodb+srv://...

JWT_SECRET=mySecret

WEATHER_API_KEY=abcdef123
```

---

### Add These Variables to Render

Open:

```
Dashboard

↓

Your Web Service

↓

Environment

↓

Add Environment Variable
```

Copy each variable from your local `.env` file into Render.

Example:

| Variable | Value |
|----------|-------|
| MONGO_URI | mongodb+srv://... |
| JWT_SECRET | mySecret |
| WEATHER_API_KEY | abcdef123 |

---

### Does My Code Change?

**No!**

Your code still looks like this:

```javascript
require("dotenv").config();

const apiKey = process.env.WEATHER_API_KEY;
```

The only difference is where the value comes from.

| Development | Production |
|--------------|------------|
| `.env` file | Render Dashboard |

---

## 🌐 Step 5 — Deploy the Frontend to Netlify

Login to Netlify.

Click

```
Add New Site
```

↓

```
Import Existing Project
```

↓

Choose GitHub.

---

## Build Settings

For Vite projects:

| Setting | Value |
|----------|-------|
| Build Command | `npm run build` |
| Publish Directory | `dist` |

Click

```
Deploy Site
```

Netlify creates a URL similar to:

```
https://my-awesome-app.netlify.app
```

---

## 🔄 Step 6 — Replace Your Frontend Environment Variable

This is the most important step.

### During Development

Your frontend probably uses:

```text
VITE_SERVER_URL=http://localhost:3001
```

Why?

Because your backend is running on your own computer.

---

### After Deployment

Your backend now lives on Render.

Replace

```text
VITE_SERVER_URL=http://localhost:3001
```

with

```text
VITE_SERVER_URL=https://your-api.onrender.com
```

### What's Different?

| Local | Production |
|--------|------------|
| localhost | Render URL |

That is the only thing that changes.

---

## ⚙️ Step 7 — Add the Variable to Netlify

Open:

```
Site Settings

↓

Environment Variables

↓

Add Variable
```

Create:

| Variable | Value |
|----------|-------|
| VITE_SERVER_URL | https://your-api.onrender.com |

Click Save.

Then redeploy your website.

---

## 💻 Step 8 — Update Your Fetch Requests

Avoid this:

```javascript
fetch("http://localhost:3001/weather");
```

Instead use:

```javascript
fetch(`${import.meta.env.VITE_SERVER_URL}/weather`);
```

Another example:

```javascript
const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/favorites`
);
```

Now the same code works:

- 💻 On localhost
- 🌐 On Netlify

without changing any JavaScript.

---

## 🌍 Step 9 — Configure CORS

Your frontend and backend now have different web addresses.

Example:

Frontend

```
https://weather-app.netlify.app
```

Backend

```
https://weather-api.onrender.com
```

Browsers block requests between websites unless permission is granted.

---

### Install CORS

```bash
npm install cors
```

---

### Import CORS

```javascript
const cors = require("cors");
```

---

### Allow Your Netlify Website

```javascript
app.use(cors({
    origin: "https://weather-app.netlify.app"
}));
```

---

## During Development

Many developers simply use:

```javascript
app.use(cors());
```

Later they restrict it to only their deployed frontend.

---

## 🧪 Step 10 — Test Everything

Visit your Netlify website.

Verify:

- ✅ Data loads correctly
- ✅ Database saves information
- ✅ CRUD operations work
- ✅ Login works
- ✅ No CORS errors
- ✅ No browser console errors

---

## 🧠 Understanding Environment Variables

### Development

```text
React Frontend
(localhost:5173)

        │

        ▼

VITE_SERVER_URL

        │

        ▼

http://localhost:3001

        │

        ▼

Express Backend

        │

        ▼

MongoDB Atlas
```

---

### Production

```text
React Frontend
(Netlify)

        │

        ▼

VITE_SERVER_URL

        │

        ▼

https://your-api.onrender.com

        │

        ▼

Express Backend
(Render)

        │

        ▼

MongoDB Atlas
```

The **only thing that changes** is the value of `VITE_SERVER_URL`.

---

## ⚠️ Common Mistakes

| ❌ Mistake | ✅ Solution |
|------------|-------------|
| Using `localhost` after deployment | Replace it with your Render URL |
| Forgetting to add environment variables to Render | Copy every variable from `.env` |
| Forgetting to add `VITE_SERVER_URL` to Netlify | Add it in Netlify's Environment Variables |
| Hardcoding URLs in `fetch()` | Use `import.meta.env.VITE_SERVER_URL` |
| Getting CORS errors | Install and configure the `cors` package |
| Forgetting to redeploy after changing variables | Trigger a new deployment |

---

## ✅ Deployment Checklist

- [ ] Backend works locally
- [ ] Frontend works locally
- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Render environment variables added
- [ ] Backend URL tested
- [ ] Frontend deployed to Netlify
- [ ] `VITE_SERVER_URL` added to Netlify
- [ ] Frontend redeployed
- [ ] CORS configured
- [ ] Application tested successfully

---

## 🎉 Congratulations!

You have successfully deployed a full-stack JavaScript application using:

- 🌐 **Netlify** for your React frontend
- 🚀 **Render** for your Express backend
- 🍃 **MongoDB Atlas** for your database
- 🐙 **GitHub** for version control

This is a common deployment architecture used by professional web developers because it separates the frontend and backend while keeping them connected through API requests.
