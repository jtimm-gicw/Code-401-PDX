# Code 401 — Computer Setup

Welcome to **Code 401!** 🎉

Before we begin this section of the course, we need to install a few tools that we will use throughout our assignments and labs.

> 💡 **Important:** These commands are intended for a Linux/Ubuntu environment.

---

## 🛠️ What Are We Installing?

We need to install two main tools:

| Tool | What It Does |
|---|---|
| **HTTPie** | A command-line tool for making HTTP/API requests |
| **PostgreSQL** | A relational database that we will use to store data |

We will also start the PostgreSQL database service after installing it.

---

# 1️⃣ Install HTTPie

**HTTPie** is a command-line tool that makes it easier to communicate with APIs.

### Run this command:

```bash
sudo apt install -y httpie
```

### What does this command mean?

- `sudo` → Runs the command with administrator permissions
- `apt` → Ubuntu's package manager
- `install` → Installs a package
- `-y` → Automatically answers "yes" to installation prompts
- `httpie` → The package we want to install

### ✅ Verify the installation

After installation, run:

```bash
http --version
```

You should see the installed version of HTTPie.

---

# 2️⃣ Install PostgreSQL

**PostgreSQL** is a relational database management system.

We will use PostgreSQL to store and retrieve application data.

### Run this command:

```bash
sudo apt install -y postgresql postgresql-contrib
```

### What are we installing?

- `postgresql` → The PostgreSQL database server
- `postgresql-contrib` → Additional PostgreSQL tools and extensions

---

# 3️⃣ Start PostgreSQL

After PostgreSQL has been installed, we need to start the PostgreSQL service.

### Run:

```bash
sudo systemctl start postgresql
```

Alternatively, you can use:

```bash
sudo service postgresql start
```

> 💡 **You only need to use one of these commands.**

---

# 4️⃣ Check PostgreSQL Status

Let's make sure PostgreSQL is running correctly.

Run:

```bash
sudo systemctl status postgresql
```

Look for:

```text
Active: active (running)
```

### ✅ If you see this:

**PostgreSQL is running! 🎉**

You can exit the status screen by pressing:

```text
q
```

---

# 🔄 Useful PostgreSQL Commands

You may need these commands throughout the course.

### Start PostgreSQL

```bash
sudo systemctl start postgresql
```

### Stop PostgreSQL

```bash
sudo systemctl stop postgresql
```

### Restart PostgreSQL

```bash
sudo systemctl restart postgresql
```

### Check PostgreSQL Status

```bash
sudo systemctl status postgresql
```

---

# Setup Checklist

Before moving on, make sure you have completed each step.

- [ ] Install HTTPie

```bash
sudo apt install -y httpie
```

- [ ] Verify HTTPie

```bash
http --version
```

- [ ] Install PostgreSQL

```bash
sudo apt install -y postgresql postgresql-contrib
```

- [ ] Start PostgreSQL

```bash
sudo systemctl start postgresql
```

- [ ] Check PostgreSQL status

```bash
sudo systemctl status postgresql
```

---

# 🎯 Setup Complete!

If everything was successful, you should now have:

```text
💻 Your Computer
│
├── 🌐 HTTPie
│   └── Used for making API requests
│
└── 🐘 PostgreSQL
    └── Used for storing application data
```

You're ready to continue with the **Code 401** coursework! 🚀
