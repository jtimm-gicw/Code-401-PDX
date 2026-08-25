# PostgreSQL Setup: Password 

## 401 Backend Development

This guide walks you through the basic PostgreSQL setup we need before connecting PostgreSQL to our Node/Express backend with Sequelize.

We will do two things:

1. Create a password for the PostgreSQL `postgres` user.
2. Create an example database that our backend can connect to.

---

## Part 1: Start PostgreSQL

Before we do anything else, make sure PostgreSQL is installed.

Check that PostgreSQL is installed:

```bash
psql --version
```

> You should see something similar to:

```bash
psql (16.15)
```

### Step 1: Open PostgreSQL as the postgres user

On Ubuntu/Linux, PostgreSQL creates a special system user called:

```bash
postgres
```

We can use that account to access PostgreSQL.
Run:

```bash
sudo -u postgres psql
```

You should see something similar to:
```bash
psql (16.15)
Type "help" for help.

postgres=#
```

**What does postgres=# mean?**
> You are no longer in your normal Linux terminal. You are now inside the PostgreSQL command-line interface.

When you see:

```bash
postgres=#
```

> PostgreSQL is waiting for you to enter a PostgreSQL command.

## Part 2: Create a PostgreSQL Password

Our Node/Express application will eventually need to connect to PostgreSQL.

To make that connection, we need:

```text
username
password
host
port
database name
```

For now, we are going to create a password for the PostgreSQL postgres user.

### Step 2: Create the password

While you are at the:

```bash
postgres=#
```

prompt, run:

```bash
ALTER USER postgres WITH PASSWORD 'your_password';
```

*For example:*

```bash
ALTER USER postgres WITH PASSWORD 'eXamplePw123';
```

You should see:

```bsh
ALTER ROLE
```

#### Important

**Do NOT** type the password by itself.

*Incorrect:*

```bash
postgres=# eXamplePw123
```

PostgreSQL thinks you are trying to execute SQL.

*Correct:*

```bash
ALTER USER postgres WITH PASSWORD 'Therebedragons101';
```

> The password must be inside the SQL command.

## Part 3: Exit PostgreSQL

> When you are finished creating the password, exit PostgreSQL:

```bash
\q
```

You should return to your normal terminal.

*For example:*

```bash
➜ backend-repo git:(devBranch)
```

## Part 4: Test the Password

> Now let's make sure the password actually works.

From your normal terminal, run:

```bash
psql -U postgres -h localhost -W
```

You should see:

```bash
Password:
```
> Enter the password you created.

*For example:*
eXamplePw123

#### Important

> When you type a password in the terminal, you may not see anything appear.

- That is normal.

**Successful Connection**

> If your password works, you should see something similar to:

```bash
psql (16.15)
Type "help" for help.

postgres=#
```

***You are successfully connected to PostgreSQL.***
You may also see:

```bash
SSL connection
```

> This is normal.
