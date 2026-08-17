# UML for Demo --> "server from scratch"

> Shows how a request moves through the application

```text
                         ┌─────────────────┐
                         │     CLIENT      │
                         │ Browser / Test  │
                         └────────┬────────┘
                                  │
                                  │ HTTP Request
                                  ▼
                         ┌─────────────────┐
                         │    server.js    │
                         │ Express App     │
                         └────────┬────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
          ┌─────────────────┐         ┌─────────────────┐
          │    stamper.js   │         │     Routes      │
          │   Middleware    │         │                 │
          │                 │         │ GET /           │
          │ Adds timestamp  │         │ GET /data       │
          │ to req object   │         │ GET /bad        │
          └────────┬────────┘         └────────┬────────┘
                   │                           │
                   │ next()                    │
                   └──────────────┬────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     Response    │
                         │                 │
                         │ 200 Success     │
                         │ 404 Not Found   │
                         │ 500 Server Error│
                         └─────────────────┘
                                  ▲
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    │                           │
          ┌─────────┴────────┐        ┌─────────┴────────┐
          │    404.js        │        │     500.js       │
          │                  │        │                  │
          │ Not Found        │        │ Server Error     │
          └──────────────────┘        └──────────────────┘

```

## UML --> Simplified Version

```text
CLIENT
  │
  │ GET /data
  ▼
SERVER
  │
  ▼
MIDDLEWARE
  │
  │ adds timestamp
  │
  │ next()
  ▼
ROUTE
  │
  │ creates response
  ▼
CLIENT
```

### What happens when something goes wrong?

```text
CLIENT
  │
  ▼
SERVER
  │
  ▼
ROUTE
  │
  │ Something goes wrong!
  │
  ▼
500 ERROR HANDLER
  │
  ▼
CLIENT
```

### For a route that does not exist

```text
CLIENT
  │
  │ GET /pizza
  ▼
SERVER
  │
  │ No matching route
  ▼
404 HANDLER
  │
  ▼
CLIENT
```

> "Don't think of UML as something fancy. We're just drawing a picture of how our application works before we write the code."
