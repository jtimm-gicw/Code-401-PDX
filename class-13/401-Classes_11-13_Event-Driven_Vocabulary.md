**# 🍕 401 — Event-Driven Programming Vocabulary & Methods — Classes 11–13**

**## Class 11 → Class 12 → Class 13 Quick Reference**

\> **\*\*Big idea:\*\*** An event-driven program lets one part of an application **\*\*announce that something happened\*\***, while other parts **\*\*listen and respond\*\***.

This guide builds on the **\*\*Order Up! Pizzeria\*\*** demo from Class 11. fileciteturn0file0

\---

**# 🎯 The Pizzeria Mental Model**

Think about our pizza application:

\`\`\`text

👤 Customer

    |

    | emit("order-placed")

    ↓

📢 Event Bus

    |

    | listen with .on()

    ↓

👨‍🍳 Kitchen

    |

    | emit("ready-for-pickup")

    ↓

📢 Event Bus

    |

    | listen with .on()

    ↓

🚗 Driver

    |

    | emit("delivered")

    ↓

📢 Event Bus

    |

    | listen with .on()

    ↓

👤 Customer

\`\`\`

The important pattern is:

\`\`\`text

EVENT

  ↓

LISTENER

  ↓

HANDLER

  ↓

ACTION

  ↓

NEW EVENT

\`\`\`

\---

**# 📚 Part 1 — Event-Driven Programming Vocabulary**

**## 1. Event**

**### Simple definition**

An **\*\*event\*\*** is a message that says:

\> **\*\*"Something happened."\*\***

Examples from our pizzeria:

\`\`\`text

order-placed

confirmed

in-the-oven

ready-for-pickup

out-for-delivery

delivered

\`\`\`

An event does not have to be a physical thing.

Examples:

\`\`\`text

user-logged-in

button-clicked

file-uploaded

payment-completed

database-connected

message-received

\`\`\`

**### Easy way to remember**

\`\`\`text

EVENT = "Something happened!"

\`\`\`

\---

**# 2. Event Name**

An **\*\*event name\*\*** is the label we give an event.

Example:

\`\`\`javascript

'order-placed'

\`\`\`

The event name tells other parts of the program **\*\*what happened\*\***.

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

Here:

\`\`\`text

'order-placed' = event name

order          = event payload

\`\`\`

**### Common event names**

\`\`\`text

order-placed

user-created

message-sent

connected

disconnected

error

delivered

\`\`\`

**### Important**

The event name is just a string.

These are all valid event names:

\`\`\`javascript

'order-placed'

'pizzaReady'

'USER_LOGIN'

'hello'

\`\`\`

Your application needs to use the **\*\*same event name\*\*** when listening for the event.

\---

**# 3. Event Listener**

A **\*\*listener\*\*** waits for a specific event.

Example:

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

This means:

\> "Listen for \`order-placed\`. When it happens, run \`handleOrder\`."

**### Easy way to remember**

\`\`\`text

.on() = LISTEN

\`\`\`

\---

**# 4. Event Handler**

An **\*\*event handler\*\*** is the function that runs when an event happens.

Example:

\`\`\`javascript

function handleOrder(order) {

  console.log(\`Kitchen received order #${order.orderId}\`);

}

events.on('order-placed', handleOrder);

\`\`\`

Here:

\`\`\`text

order-placed = event

handleOrder  = event handler

\`\`\`

**### Easy way to remember**

\`\`\`text

LISTEN → HANDLER → RESPOND

\`\`\`

\---

**# 5. Event Emitter**

An **\*\*EventEmitter\*\*** is a Node.js object that can:

\- listen for events

\- announce events

\- send information with events

Example:

\`\`\`javascript

const EventEmitter = require('events');

const events = new EventEmitter();

\`\`\`

Think of it as an **\*\*announcement system\*\***.

\`\`\`text

EventEmitter

     ↓

Announcement System

     ↓

"Something happened!"

\`\`\`

\---

**# 6. EventEmitter Class**

A **\*\*class\*\*** is a blueprint for creating objects.

This:

\`\`\`javascript

const EventEmitter = require('events');

\`\`\`

gives us the \`EventEmitter\` class.

Then:

\`\`\`javascript

const events = new EventEmitter();

\`\`\`

creates an actual EventEmitter object.

**### Remember**

\`\`\`text

EventEmitter = blueprint

events = actual EventEmitter instance

\`\`\`

\---

**# 7. EventEmitter Instance**

An **\*\*instance\*\*** is an actual object created from a class.

Example:

\`\`\`javascript

const events = new EventEmitter();

\`\`\`

The variable \`events\` now holds one EventEmitter instance.

In our modular pizzeria:

\`\`\`text

events.js

    ↓

ONE EventEmitter instance

    ↓

customer.js

kitchen.js

driver.js

\`\`\`

This is important because the modules need to use the **\*\*same event system\*\***.

\---

**# 8. Event Bus**

An **\*\*event bus\*\*** is a shared place where parts of an application can:

\- announce events

\- listen for events

In our Class 11 demo, the shared EventEmitter acts like an event bus.

\`\`\`javascript

// events.js

const EventEmitter = require('events');

const events = new EventEmitter();

module.exports = events;

\`\`\`

Other files use the same event bus:

\`\`\`javascript

const events = require('./events');

\`\`\`

**### Easy analogy**

Think of an event bus like a **\*\*public announcement system\*\***.

\`\`\`text

📢 Event Bus

"Order #101 is ready!"

\`\`\`

Anyone listening for that event can respond.

\---

**# 9. Event Payload**

An **\*\*event payload\*\*** is the information sent along with an event.

Example:

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

Here:

\`\`\`text

order-placed = event name

order        = payload

\`\`\`

Our order payload might contain:

\`\`\`javascript

const order = {

  orderId: 101,

  items: ['Large Pepperoni Pizza', 'Garlic Knots'],

  address: '123 Main Street',

};

\`\`\`

Another example from the pizzeria:

\`\`\`javascript

events.emit('delivered', {

  orderId: 101,

  status: 'delivered',

  timestamp: new Date().toISOString(),

});

\`\`\`

**### Easy way to remember**

\`\`\`text

EVENT NAME = What happened?

PAYLOAD = Information about what happened.

\`\`\`

\---

**# 10. Callback Function**

A **\*\*callback\*\*** is a function passed to another function so it can be called later.

Example:

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

Here:

\`\`\`text

handleOrder = callback function

\`\`\`

Another example:

\`\`\`javascript

setTimeout(() => {

  console.log('Pizza is ready!');

}, 2000);

\`\`\`

The arrow function is the callback.

**### Easy way to remember**

\`\`\`text

CALLBACK = "Use this function later."

\`\`\`

\---

**# 11. Synchronous**

**\*\*Synchronous\*\*** means code happens in order, one step at a time.

Example:

\`\`\`javascript

console.log('A');

console.log('B');

console.log('C');

\`\`\`

Output:

\`\`\`text

A

B

C

\`\`\`

The next line runs after the previous line.

\---

**# 12. Asynchronous**

**\*\*Asynchronous\*\*** means a task can be scheduled to happen later while the program continues doing other work.

Example:

\`\`\`javascript

setTimeout(() => {

  console.log('Pizza is ready!');

}, 2000);

console.log('Customer is waiting...');

\`\`\`

The program does not stop for two seconds doing nothing.

Instead, the callback is scheduled to run later.

**### Easy way to remember**

\`\`\`text

SYNCHRONOUS   = Do this, then this, then this.

ASYNCHRONOUS  = Start this, continue working,

                come back when it is ready.

\`\`\`

\---

**# 13. Delay**

A **\*\*delay\*\*** is an amount of time to wait before something happens.

In JavaScript:

\`\`\`javascript

setTimeout(callback, 2000);

\`\`\`

The \`2000\` means approximately:

\`\`\`text

2000 milliseconds

\= 2 seconds

\`\`\`

\---

**# 14. Millisecond**

A **\*\*millisecond\*\*** is one thousandth of a second.

\`\`\`text

1000 milliseconds = 1 second

2000 milliseconds = 2 seconds

5000 milliseconds = 5 seconds

\`\`\`

JavaScript timers use milliseconds.

\---

**# 15. Event Chain**

An **\*\*event chain\*\*** is a series of events where one event leads to another.

Our pizzeria:

\`\`\`text

order-placed

     ↓

confirmed

     ↓

in-the-oven

     ↓

ready-for-pickup

     ↓

out-for-delivery

     ↓

delivered

\`\`\`

A handler can respond to one event and emit another event.

\`\`\`javascript

events.on('order-placed', (order) => {

  events.emit('confirmed', {

    orderId: order.orderId,

    status: 'confirmed',

  });

});

\`\`\`

\---

**# 16. Decoupling**

**\*\*Decoupling\*\*** means parts of an application do not need to directly depend on each other's functions.

Without events:

\`\`\`text

Customer → calls Kitchen function

Kitchen  → calls Driver function

Driver   → calls Customer function

\`\`\`

With events:

\`\`\`text

Customer

   ↓

Event Bus

   ↓

Kitchen

   ↓

Event Bus

   ↓

Driver

\`\`\`

The customer does not need to know:

\> "Which kitchen function should I call?"

The customer only announces:

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

The kitchen listens.

**### Easy way to remember**

\`\`\`text

DECOUPLING = Parts don't have to directly call each other.

\`\`\`

\---

**# 17. Module**

A **\*\*module\*\*** is a separate file that contains related code.

Our Class 11 application separates responsibilities:

\`\`\`text

events.js

customer.js

kitchen.js

driver.js

app.js

\`\`\`

Each file has a job.

\---

**# 18. Shared Instance**

A **\*\*shared instance\*\*** is one object that multiple modules use.

Our shared EventEmitter:

\`\`\`text

             events.js

                 |

          ONE EventEmitter

                 |

      +----------+----------+

      ↓          ↓          ↓

 customer     kitchen     driver

\`\`\`

Each module imports the same object:

\`\`\`javascript

const events = require('./events');

\`\`\`

This allows the modules to communicate through the same event bus.

\---

**# 19. Socket.IO**

**\*\*Socket.IO\*\*** is a library for real-time, two-way communication between a client and a server.

In simple terms:

\> **\*\*Socket.IO lets the client and server send events to each other in real time.\*\***

Class 11:

\`\`\`text

ONE Node process

Customer

Kitchen

Driver

      ↓

EventEmitter

\`\`\`

Class 12 moves toward:

\`\`\`text

📱 Client

    ↕

🌐 Network

    ↕

🖥️ Server

\`\`\`

With Socket.IO:

\`\`\`text

Client

  |

  | emit event

  ↓

Server

  |

  | emit event

  ↓

Client

\`\`\`

**### Important connection to Class 11**

The idea is still:

\`\`\`text

emit

  ↓

event

  ↓

listener

  ↓

handler

\`\`\`

The major difference is that Socket.IO lets these events travel between connected clients and servers over a network.

\---

**# 20. Socket**

A **\*\*socket\*\*** represents a connection between a client and a server.

Think:

\`\`\`text

📱 Client

   |

   | connection

   |

🖥️ Server

\`\`\`

The socket can send and receive events.

Example:

\`\`\`javascript

socket.emit('order-placed', order);

\`\`\`

And listen:

\`\`\`javascript

socket.on('order-status', (payload) => {

  console.log(payload);

});

\`\`\`

\---

**# 21. Namespace**

A **\*\*namespace\*\*** is a separate communication area within a Socket.IO server.

It lets you organize connections and events into different sections.

Example:

\`\`\`text

Socket.IO Server

/

├── /customer

├── /kitchen

└── /driver

\`\`\`

You might use different namespaces when different groups of clients need separate communication areas.

**### Easy analogy**

Think of a namespace like a **\*\*department in a company\*\***.

\`\`\`text

Company

├── Kitchen Department

├── Customer Department

└── Driver Department

\`\`\`

Each department has its own communication area.

**### Important**

A namespace is **\*\*not the same thing as an event name\*\***.

\`\`\`text

Namespace = communication area

Event     = something that happened

\`\`\`

\---

**# 22. Room**

A **\*\*room\*\*** is a group of connected sockets inside a namespace.

Example:

\`\`\`text

/kitchen namespace

Room: order-101

   ├── Kitchen Tablet

   └── Manager Tablet

\`\`\`

A server can send an event to everyone in a particular room.

Rooms are useful when only certain connected clients should receive a message.

\---

**# 23. Client**

A **\*\*client\*\*** is an application that connects to a server.

Examples:

\`\`\`text

Web browser

Mobile app

Desktop application

\`\`\`

In Class 12, the browser can act as a Socket.IO client.

\---

**# 24. Server**

A **\*\*server\*\*** is a program that listens for requests or connections and performs work for clients.

In our Socket.IO example:

\`\`\`text

Client

   ↕

Socket.IO Server

\`\`\`

The server can listen for events and emit events.

\---

**# 25. Real-Time Communication**

**\*\*Real-time communication\*\*** means information can be sent as events happen instead of waiting for the client to repeatedly ask for updates.

Traditional approach:

\`\`\`text

Client: "Is my order ready?"

Server: "No."

Client: "Is my order ready?"

Server: "No."

Client: "Is my order ready?"

Server: "YES!"

\`\`\`

Event-driven approach:

\`\`\`text

Kitchen:

"ready-for-pickup!"

       ↓

Client receives the event immediately.

\`\`\`

\---

**# 📚 Part 2 — EventEmitter Methods**

**# 26.** \`.on()\`

**## Purpose**

\`.on()\` registers a listener for an event.

**### Syntax**

\`\`\`javascript

events.on(eventName, listener);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event to listen for |

\| \`listener\` | The function to run when the event happens |

**### Example**

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

This means:

\> "When \`order-placed\` happens, run \`handleOrder\`."

**### With an arrow function**

\`\`\`javascript

events.on('order-placed', (order) => {

  console.log(\`Received order #${order.orderId}\`);

});

\`\`\`

**### Easy way to remember**

\`\`\`text

.on() = LISTEN

\`\`\`

\---

**# 27.** \`.emit()\`

**## Purpose**

\`.emit()\` announces that an event happened.

**### Syntax**

\`\`\`javascript

events.emit(eventName, ...arguments);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event being announced |

\| \`...arguments\` | Optional information sent with the event |

**### Example**

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

Here:

\`\`\`text

'order-placed' = event name

order          = payload

\`\`\`

**### Multiple values can be sent**

\`\`\`javascript

events.emit('pizza-ready', orderId, status);

\`\`\`

The listener can receive them:

\`\`\`javascript

events.on('pizza-ready', (orderId, status) => {

  console.log(orderId);

  console.log(status);

});

\`\`\`

**### Easy way to remember**

\`\`\`text

.emit() = ANNOUNCE

\`\`\`

\---

**# 28.** \`.once()\`

**## Purpose**

\`.once()\` listens for an event but runs the listener **\*\*only one time\*\***.

**### Syntax**

\`\`\`javascript

events.once(eventName, listener);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event to listen for |

\| \`listener\` | The function to run once |

**### Example**

\`\`\`javascript

events.once('order-placed', (order) => {

  console.log(\`First order received: #${order.orderId}\`);

});

\`\`\`

If \`order-placed\` is emitted several times, this listener responds only to the first one.

**### Easy way to remember**

\`\`\`text

.on()   = listen every time

.once() = listen one time

\`\`\`

\---

**# 29.** \`.off()\`

**## Purpose**

\`.off()\` removes a listener.

**### Syntax**

\`\`\`javascript

events.off(eventName, listener);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event the listener was listening for |

\| \`listener\` | The exact listener function to remove |

**### Example**

\`\`\`javascript

function handleOrder(order) {

  console.log(\`Order #${order.orderId}\`);

}

events.on('order-placed', handleOrder);

// Later...

events.off('order-placed', handleOrder);

\`\`\`

After \`.off()\`:

\`\`\`text

handleOrder no longer responds

to order-placed.

\`\`\`

**### Important**

The function must be available so it can be removed.

This is easier:

\`\`\`javascript

function handleOrder(order) {

  console.log(order);

}

events.on('order-placed', handleOrder);

events.off('order-placed', handleOrder);

\`\`\`

Than:

\`\`\`javascript

events.on('order-placed', (order) => {

  console.log(order);

});

\`\`\`

because the anonymous function does not have a convenient function name to pass to \`.off()\` later.

\---

**# 30.** \`.removeListener()\`

\`.removeListener()\` also removes a listener.

**### Syntax**

\`\`\`javascript

events.removeListener(eventName, listener);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event |

\| \`listener\` | The listener function to remove |

In modern Node.js code, \`.off()\` is commonly used as the simpler name.

Think:

\`\`\`text

.off() = stop listening

\`\`\`

\---

**# 31.** \`.removeAllListeners()\`

**## Purpose**

Removes all listeners for an event, or all listeners from the EventEmitter if no event name is provided.

**### Syntax**

\`\`\`javascript

events.removeAllListeners(eventName);

\`\`\`

**### Parameter**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | Optional event whose listeners should be removed |

Example:

\`\`\`javascript

events.removeAllListeners('order-placed');

\`\`\`

This removes all listeners for:

\`\`\`text

order-placed

\`\`\`

**### ⚠️ !! IMPORTANT**

Use this carefully.

You could accidentally remove listeners that another part of your application needs.

\---

**# 32.** \`.listenerCount()\`

**## Purpose**

Counts how many listeners are registered for an event.

**### Syntax**

\`\`\`javascript

events.listenerCount(eventName);

\`\`\`

**### Parameter**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | The event to check |

**### Example**

\`\`\`javascript

const count = events.listenerCount('order-placed');

console.log(count);

\`\`\`

This can help you understand whether anything is listening for an event.

\---

**# 📚 Part 3 — Timer Methods**

**# 33.** \`setTimeout()\`

**## Purpose**

\`setTimeout()\` schedules a function to run **\*\*later\*\***.

In our pizzeria demo, it simulates:

\`\`\`text

🍕 Baking

⏳ Waiting

🚗 Driving

\`\`\`

**### Syntax**

\`\`\`javascript

setTimeout(callback, delay);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`callback\` | Function to run later |

\| \`delay\` | How many milliseconds to wait |

**### Example**

\`\`\`javascript

setTimeout(() => {

  console.log('🍕 Pizza is ready!');

}, 2000);

\`\`\`

Meaning:

\`\`\`text

Run this function

after approximately 2000 milliseconds.

\`\`\`

\---

**# 34.** \`setTimeout()\` **With Additional Arguments**

\`setTimeout()\` can also pass additional arguments to the callback.

**### Syntax**

\`\`\`javascript

setTimeout(callback, delay, arg1, arg2, ...);

\`\`\`

**### Example**

\`\`\`javascript

function announce(orderId) {

  console.log(\`Order #${orderId} is ready!\`);

}

setTimeout(announce, 2000, 101);

\`\`\`

The callback receives:

\`\`\`text

101

\`\`\`

after the delay.

**### In our class demo**

We usually use a closure instead:

\`\`\`javascript

setTimeout(() => {

  events.emit('ready-for-pickup', {

    orderId: order.orderId,

    status: 'ready-for-pickup',

  });

}, 2000);

\`\`\`

This lets the callback use \`order\` from the surrounding code.

\---

**# 35.** \`clearTimeout()\`

**## Purpose**

\`clearTimeout()\` cancels a timer that was created with \`setTimeout()\`.

**### Example**

\`\`\`javascript

const timer = setTimeout(() => {

  console.log('Pizza is ready!');

}, 5000);

clearTimeout(timer);

\`\`\`

The scheduled callback will not run.

**### Easy way to remember**

\`\`\`text

setTimeout()  = schedule it

clearTimeout() = cancel it

\`\`\`

\---

**# 36. Timer ID**

When you call \`setTimeout()\`, JavaScript returns a value that identifies that timer.

Example:

\`\`\`javascript

const timer = setTimeout(() => {

  console.log('Done!');

}, 2000);

\`\`\`

The variable:

\`\`\`javascript

timer

\`\`\`

stores the timer identifier.

That identifier can be given to:

\`\`\`javascript

clearTimeout(timer);

\`\`\`

\---

**# 📚 Part 4 — Socket.IO Methods**

These methods build on the same event pattern students learned with Node's EventEmitter.

\---

**# 37.** \`socket.on()\`

**## Purpose**

Listens for an event on a Socket.IO socket.

**### Syntax**

\`\`\`javascript

socket.on(eventName, listener);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | Event to listen for |

\| \`listener\` | Function to run when the event arrives |

**### Example**

\`\`\`javascript

socket.on('order-status', (payload) => {

  console.log(payload);

});

\`\`\`

**### Connection to Class 11**

Node EventEmitter:

\`\`\`javascript

events.on('order-status', handler);

\`\`\`

Socket.IO:

\`\`\`javascript

socket.on('order-status', handler);

\`\`\`

The idea is the same:

\`\`\`text

.on() = LISTEN

\`\`\`

\---

**# 38.** \`socket.emit()\`

**## Purpose**

Sends an event through a Socket.IO connection.

**### Syntax**

\`\`\`javascript

socket.emit(eventName, ...data);

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`eventName\` | Event being sent |

\| \`...data\` | Optional data/payload |

**### Example**

\`\`\`javascript

socket.emit('order-placed', order);

\`\`\`

**### Connection to Class 11**

Node EventEmitter:

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

Socket.IO:

\`\`\`javascript

socket.emit('order-placed', order);

\`\`\`

Again:

\`\`\`text

.emit() = ANNOUNCE / SEND AN EVENT

\`\`\`

\---

**# 39.** \`io.on()\`

In a Socket.IO server, \`io.on()\` can listen for important Socket.IO events.

A common example is:

\`\`\`javascript

io.on('connection', (socket) => {

  console.log('A client connected!');

});

\`\`\`

**### Parameters**

\| Parameter | Meaning |

\|---|---|

\| \`'connection'\` | Event that occurs when a client connects |

\| callback | Function that receives the connected socket |

The \`socket\` represents that particular client connection.

\---

**# 40.** \`io.emit()\`

\`io.emit()\` sends an event to **\*\*all connected clients\*\***.

**### Example**

\`\`\`javascript

io.emit('order-status', {

  orderId: 101,

  status: 'ready-for-pickup',

});

\`\`\`

Think:

\`\`\`text

SERVER

  |

  +----→ Client A

  +----→ Client B

  +----→ Client C

\`\`\`

Everyone connected receives the event.

\---

**# 41.** \`socket.broadcast.emit()\`

This sends an event to other connected sockets, generally excluding the socket that sent the event.

Example:

\`\`\`javascript

socket.broadcast.emit('driver-arrived', {

  orderId: 101,

});

\`\`\`

Think:

\`\`\`text

Sender

  X  ← does not receive it

Everyone else

  ↓

  receives it

\`\`\`

\---

**# 42.** \`socket.join()\`

A socket can join a Socket.IO room.

**### Syntax**

\`\`\`javascript

socket.join(roomName);

\`\`\`

**### Parameter**

\| Parameter | Meaning |

\|---|---|

\| \`roomName\` | Name of the room to join |

Example:

\`\`\`javascript

socket.join('order-101');

\`\`\`

Now that socket belongs to:

\`\`\`text

Room: order-101

\`\`\`

\---

**# 43.** \`socket.leave()\`

A socket can leave a room.

**### Syntax**

\`\`\`javascript

socket.leave(roomName);

\`\`\`

Example:

\`\`\`javascript

socket.leave('order-101');

\`\`\`

**### Easy way to remember**

\`\`\`text

.join()  = enter a room

.leave() = leave a room

\`\`\`

\---

**
---

# 📚 Part 4B — Class 13: Queues & Subscriptions

Class 13 builds on Socket.IO by adding **subscriptions** and a **queue** to the Message Hub. Instead of only broadcasting an event to whoever is connected right now, the server can organize clients by topic and keep messages waiting when needed.

# 44. Message Hub

A **Message Hub** is the central server that receives events/messages and decides where they should go.

```text
Client → Message Hub → Subscriber
```

Think of it as the pizzeria's communication center.

# 45. Queue

A **queue** is a structure that holds messages in order until they can be handled.

```text
FRONT → Message 1 → Message 2 → Message 3 → BACK
```

# 46. FIFO

**FIFO** means **First In, First Out**. The first message placed into the queue should be the first message taken out.

```text
First message IN → First message OUT
```

# 47. Enqueue

**Enqueue** means adding a new message to the **back** of a queue.

```text
QUEUE: [101, 102]

enqueue(103)

QUEUE: [101, 102, 103]
```

# 48. Dequeue

**Dequeue** means removing the next message from the **front** of a queue.

```text
QUEUE: [101, 102, 103]

dequeue() → 101

QUEUE: [102, 103]
```

# 49. Subscription

A **subscription** means a client tells the Message Hub which type of messages it wants to receive.

```text
Kitchen → subscribe → orders:new
Driver  → subscribe → orders:ready
```

Easy way to remember:

```text
SUBSCRIBE = “Send me messages about this topic.”
```

# 50. Topic / Channel

A **topic** or **channel** is a named category used to organize messages and subscriptions.

Examples:

```text
orders:new
orders:ready
orders:delivered
```

# 51. Queued Message

A **queued message** is a message being held in the queue until it can be retrieved or handled.

# 52. Offline Client

An **offline client** is a client that is not currently connected to the Message Hub. A queue can help keep messages available while the client is away.

# 53. Reconnection

**Reconnection** happens when a client that lost its connection connects to the Message Hub again. After reconnecting, the client can ask for messages that are waiting for it.

# 54. Message Persistence

**Message persistence** means keeping a message available instead of immediately losing it when nobody is ready to receive it.

> **Class 13 note:** If the demo stores queues only in JavaScript memory, this is **in-memory persistence**. Restarting the server would clear those messages unless they are also stored in a database or another permanent storage system.

# 55. Acknowledgment / ACK

An **acknowledgment**, often shortened to **ACK**, is a message that means:

> **“I received the message.”**

This helps the Message Hub know that a client successfully received or handled a queued message.

# 56. Message ID

A **message ID** is a unique value used to identify one particular message. It can help the Message Hub know which message was received or acknowledged.

# 57. Queue Key

A **queue key** is the name or identifier used to find a particular queue. For example, a topic name can be used to decide which queue should hold a message.

# 58. Delivery

**Delivery** means sending a message from the Message Hub to the client or subscriber that should receive it.

---

# 📚 Class 13 Socket.IO Method — `io.to(room).emit()`

## Purpose

`io.to(room).emit()` sends an event to the sockets that are currently in a particular Socket.IO room.

### Syntax

```javascript
io.to(roomName).emit(eventName, payload);
```

### Example

```javascript
io.to('orders:new').emit('order-placed', order);
```

Think:

```text
Message Hub
    |
    | io.to('orders:new').emit(...)
    ↓
Room: orders:new
    ├── Kitchen Client A
    └── Kitchen Client B
```

Only sockets in that room receive this room-targeted event.

### Connection to subscriptions

A Class 13 subscription can use a Socket.IO room:

```javascript
socket.join('orders:new');
```

Then the Message Hub can send only to clients subscribed to that topic:

```javascript
io.to('orders:new').emit('order-placed', order);
```

### Easy way to remember

```text
io.emit()             = SEND TO EVERYONE
socket.broadcast.emit() = SEND TO OTHERS
io.to(room).emit()    = SEND TO ONE GROUP / ROOM
```

---

# 🍕 Room vs Queue — Important Class 13 Difference

These ideas can look similar, but they solve different problems.

```text
ROOM
WHO belongs to this group?

orders:new
├── Kitchen A
└── Kitchen B


QUEUE
WHAT messages are waiting?

orders:new
├── Order #201
├── Order #202
└── Order #203
```

> **ROOM = WHO should receive messages.**  
> **QUEUE = WHAT messages are waiting.**

---

# 🔑 Class 13 Events / Operations to Recognize

The exact event names depend on the demo implementation, but students should understand these Class 13 operations:

```text
subscribe
   ↓
“I want messages for this topic.”

getall
   ↓
“Give me the messages currently waiting in this queue.”

getstatus
   ↓
“Give me the current queue/message status.”

received / acknowledgment
   ↓
“I received this message.”
```

---

# 🧠 Class 11 → Class 12 → Class 13 Progression

```text
CLASS 11 — EventEmitter

Something happens
      ↓
   emit()
      ↓
 Event Bus
      ↓
    on()
      ↓
  Handler


CLASS 12 — Socket.IO

   Client
      ↓
   emit()
      ↓
   NETWORK
      ↓
   Server
      ↓
   emit()
      ↓
Connected Clients


CLASS 13 — Queues + Subscriptions

Publisher sends message
      ↓
 MESSAGE HUB
      ↓
Who subscribed?
      ↓
Is the subscriber available?
   ↙             ↘
 YES              NO
  ↓                ↓
SEND             QUEUE
                   ↓
              Client returns
                   ↓
             Retrieve messages
                   ↓
                RECEIVE
                   ↓
                  ACK
```

# 📚 Part 5 — Event-Driven Patterns to Recognize**

**# 44. Publisher**

A **\*\*publisher\*\*** is the part of the application that announces an event.

Example:

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

The customer is acting as the publisher.

\---

**# 45. Subscriber**

A **\*\*subscriber\*\*** is the part of the application that listens for an event.

Example:

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

The kitchen is acting as a subscriber.

\---

**# 46. Publisher / Subscriber Pattern**

The **\*\*publisher/subscriber pattern\*\*** separates the code that announces an event from the code that responds to it.

\`\`\`text

PUBLISHER

    |

    | emit()

    ↓

EVENT

    |

    ↓

SUBSCRIBER

    |

    | handler

    ↓

ACTION

\`\`\`

Our pizzeria:

\`\`\`text

Customer

   |

   | order-placed

   ↓

Kitchen

\`\`\`

The customer does not need to directly call the kitchen.

\---

**# 47. Event-Driven Architecture**

**\*\*Event-driven architecture\*\*** is a way of designing applications around events.

Instead of thinking only:

\`\`\`text

Function A calls Function B.

Function B calls Function C.

\`\`\`

we can think:

\`\`\`text

Something happened.

       ↓

Who cares?

       ↓

Those listeners respond.

       ↓

They may create new events.

\`\`\`

\---

**# 48. Event Handler vs Event Listener**

These terms are closely related but emphasize different things.

**### Listener**

The code that says:

\> "Watch for this event."

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

**### Handler**

The function that says:

\> "Here's what to do when the event happens."

\`\`\`javascript

function handleOrder(order) {

  console.log('Kitchen received the order.');

}

\`\`\`

Together:

\`\`\`text

Listener → waits

Handler  → responds

\`\`\`

\---

**# 📚 Part 6 — Parameters at a Glance**

**##** \`.on()\`

\`\`\`javascript

events.on(eventName, listener);

\`\`\`

\`\`\`text

eventName → What should I listen for?

listener  → What function should run?

\`\`\`

\---

**##** \`.emit()\`

\`\`\`javascript

events.emit(eventName, ...arguments);

\`\`\`

\`\`\`text

eventName → What happened?

arguments → What information should I send?

\`\`\`

\---

**##** \`.once()\`

\`\`\`javascript

events.once(eventName, listener);

\`\`\`

\`\`\`text

eventName → What should I listen for?

listener  → What should run one time?

\`\`\`

\---

**##** \`.off()\`

\`\`\`javascript

events.off(eventName, listener);

\`\`\`

\`\`\`text

eventName → Which event?

listener  → Which listener should stop?

\`\`\`

\---

**##** \`setTimeout()\`

\`\`\`javascript

setTimeout(callback, delay);

\`\`\`

\`\`\`text

callback → What should happen later?

delay    → How many milliseconds should we wait?

\`\`\`

\---

**##** \`clearTimeout()\`

\`\`\`javascript

clearTimeout(timer);

\`\`\`

\`\`\`text

timer → Which scheduled timer should be cancelled?

\`\`\`

\---

**##** \`socket.on()\`

\`\`\`javascript

socket.on(eventName, listener);

\`\`\`

\`\`\`text

eventName → What event should I listen for?

listener  → What should happen when it arrives?

\`\`\`

\---

**##** \`socket.emit()\`

\`\`\`javascript

socket.emit(eventName, ...data);

\`\`\`

\`\`\`text

eventName → What event am I sending?

data      → What information am I sending?

\`\`\`

\---

**# 🧠 Part 7 — The Most Important Terms**

If you remember only these, remember these:

\| Term | Plain-English Meaning |

\|---|---|

\| **\*\*Event\*\*** | Something happened |

\| **\*\*Event name\*\*** | Label for what happened |

\| **\*\*Emitter\*\*** | Announces an event |

\| **\*\*Listener\*\*** | Waits for an event |

\| **\*\*Handler\*\*** | Function that responds |

\| **\*\*Payload\*\*** | Information sent with an event |

\| **\*\*Event bus\*\*** | Shared place for events |

\| **\*\*Callback\*\*** | Function used later |

\| **\*\*Synchronous\*\*** | Happens step-by-step now |

\| **\*\*Asynchronous\*\*** | Can happen later |

\| **\*\*Event chain\*\*** | Events leading to more events |

\| **\*\*Decoupling\*\*** | Parts don't directly depend on each other |

\| **\*\*Socket\*\*** | Connection between client and server |

\| **\*\*Socket.IO\*\*** | Library for real-time event communication |

\| **\*\*Namespace\*\*** | Separate communication area |

\| **\*\*Room\*\*** | Group of sockets inside a namespace |

\| **\*\*Client\*\*** | Program connecting to a server |

\| **\*\*Server\*\*** | Program providing services to clients |

\---

**# 🔑 Part 8 — The Five Methods to Know First**

For Class 11, focus on these:

**## 1.** \`.on()\`

\`\`\`javascript

events.on('order-placed', handleOrder);

\`\`\`

\> **\*\*Listen\*\***

\---

**## 2.** \`.emit()\`

\`\`\`javascript

events.emit('order-placed', order);

\`\`\`

\> **\*\*Announce\*\***

\---

**## 3.** \`.once()\`

\`\`\`javascript

events.once('connected', handleConnection);

\`\`\`

\> **\*\*Listen once\*\***

\---

**## 4.** \`setTimeout()\`

\`\`\`javascript

setTimeout(() => {

  console.log('Pizza is ready!');

}, 2000);

\`\`\`

\> **\*\*Do something later\*\***

\---

**## 5.** \`clearTimeout()\`

\`\`\`javascript

clearTimeout(timer);

\`\`\`

\> **\*\*Cancel something scheduled\*\***

\---

**# 🍕 Class 11 Vocabulary in One Picture**

\`\`\`text

                         EVENT-DRIVEN PROGRAMMING

                                  EVENT

                           "Something happened!"

                                  |

                                  ↓

                            .emit()

                           "ANNOUNCE"

                                  |

                                  ↓

                             EVENT BUS

                         "Shared announcement

                              system"

                                  |

                    +-------------+-------------+

                    |                           |

                    ↓                           ↓

                 .on()                       .on()

                "LISTEN"                    "LISTEN"

                    |                           |

                    ↓                           ↓

                HANDLER                     HANDLER

              "RESPOND"                    "RESPOND"

                    |                           |

                    ↓                           ↓

                  ACTION                    NEW EVENT

\`\`\`

\---

**# 🔮 Class 11 → Class 12**

**## Class 11**

Everything is inside one Node.js process:

\`\`\`text

Customer

Kitchen

Driver

   |

   ↓

EventEmitter

\`\`\`

We learned:

\`\`\`text

event

emit()

on()

handler

payload

event bus

setTimeout()

\`\`\`

\---

**## Class 12**

Events can move between connected clients and a server:

\`\`\`text

📱 Customer

     |

     | Socket.IO event

     ↓

🌐 Network

     |

     ↓

🖥️ Server

     |

     | Socket.IO event

     ↓

🚗 Driver

\`\`\`

We will build on the same basic idea:

\`\`\`text

.emit()

   ↓

EVENT

   ↓

.on()

   ↓

HANDLER

\`\`\`

The big change is:

\> **\*\*Class 11: events inside one process.\*\***

\> **\*\*Class 12: events can travel across a network.\*\***

\---

**# 🧪 Quick Student Check**

Before moving on, you should be able to answer:

**### 1. What is an event?**

**\*\*Something that happened.\*\***

**### 2. What does** \`.emit()\` **do?**

**\*\*Announces an event.\*\***

**### 3. What does** \`.on()\` **do?**

**\*\*Listens for an event.\*\***

**### 4. What is an event handler?**

**\*\*The function that responds to an event.\*\***

**### 5. What is an event payload?**

**\*\*Information sent with the event.\*\***

**### 6. What is an event bus?**

**\*\*A shared place where events can be announced and listened for.\*\***

**### 7. Why use one shared EventEmitter?**

**\*\*So different modules are using the same event bus.\*\***

**### 8. What does** \`setTimeout()\` **do?**

**\*\*Schedules a function to run later.\*\***

**### 9. What does Socket.IO add to the picture?**

**\*\*It allows real-time event communication between connected clients and a server.\*\***

**### 10. What is a namespace?**

**\*\*A separate communication area within Socket.IO.\*\***

\---

**# 🎯 The One Sentence to Remember**

\> **\*\*An event-driven program lets one part of an application announce that something happened, while other parts listen and respond.\*\***