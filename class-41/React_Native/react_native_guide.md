# 📱 Code 401 | React Native Mobile App Development

> **Student project guide** · Two class sessions · JavaScript + React + Expo
> **Mission:** Build, test, and present a mobile app that uses at least one device feature.

---

## 🎯 Your Mission

You've built React web applications and worked with APIs, Express, and databases. Now you'll apply those skills to a **mobile app** that runs on Android or iOS.

**By the end, you should be able to:**

- Explain React web vs. React Native.
- Create and run an Expo project.
- Build components and manage state with Hooks.
- Style screens for phones.
- Request permission and use a device feature.
- Connect to an API if your app needs one.
- Debug, document, and demonstrate your app.

> 💡 **Keep it small and working.** A simple app that reliably demonstrates one phone feature is a strong project.

## 01 · React vs. React Native

React Native is a framework for building mobile apps with JavaScript and React. You still use **components, props, state, Hooks, and asynchronous functions**, but you don't write HTML for native screens.

| React web | React Native |
|---|---|
| `<div>` | `<View>` |
| `<h1>` / `<p>` | `<Text>` |
| `<button onClick={...}>` | `<Button onPress={...}>` |
| CSS stylesheets | JavaScript style objects |
| Browser | iOS / Android app |

**React web:**

```jsx
function App() {
  return <div><h1>Hello!</h1></div>;
}
```

**React Native:**

```jsx
import { View, Text } from 'react-native';

export default function App() {
  return <View><Text>Hello!</Text></View>;
}
```

### Why mobile?

Native apps can integrate closely with device features such as the **camera, GPS, contacts, sensors, and notifications**. Some are available on the web too, but permissions and capabilities vary by platform.

## 02 · Meet the tools

| Tool | What it does |
|---|---|
| **React Native** | Builds your mobile interface |
| **Expo** | Helps create, develop, and build the app |
| **Expo Go** | Previews compatible Expo projects on a real phone |
| **Expo Snack** | Lets you experiment with React Native online |
| **VS Code** | Your code editor |

> ⚠️ **Modern setup:** Older lecture notes use `npm install -g expo-cli` and `expo init`. Use the current `npx create-expo-app` workflow instead.

## 03 · Create and run your app

**Before you start:** Install Node.js LTS and a code editor. For physical-device testing, install Expo Go on your phone.

```bash
# Create a simple JavaScript starter project
npx create-expo-app@latest my-mobile-app --template blank

# Enter your project
cd my-mobile-app

# Start Expo
npx expo start
```

Scan the QR code with your phone to open the project in Expo Go. Your phone and development computer may need compatible network access. Some SDK versions or native features require a **development build** instead of Expo Go.

**✅ Checkpoint:** Your starter app opens on your phone.

## 04 · Build your first interactive component

Replace the starter `App.js` with:

```jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First Mobile App</Text>
      <Text>Button pressed: {count} times</Text>
      <Button title="Press Me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
```

**What you already know:** `useState` stores changing data; pressing the button updates state and React redraws the component.

**What's new:** `View` and `Text` are mobile UI components, `onPress` handles touch, and `StyleSheet.create` organizes styling.

**✅ Checkpoint:** Each press increases the displayed count.

## 05 · Styling for a phone

React Native styles are JavaScript objects, not regular CSS files.

```js
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8f2ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
});
```

- Use **camelCase**: `backgroundColor`, not `background-color`.
- Numbers such as `padding: 20` usually don't need `px`.
- Flexbox is central to layout; React Native defaults to `flexDirection: 'column'`.
- Keep text readable, touch targets large, and screens uncluttered.

## 06 · Use a real phone feature: Contacts

Let's request access to contacts and display their names. Use **your own phone or test data** and never upload someone's contacts without permission.

### Install the library

```bash
npx expo install expo-contacts
```

### Example `App.js`

```jsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState('');

  async function loadContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') {
        setMessage('Contacts permission was not granted.');
        return;
      }

      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name],
      });
      setContacts(data);
      setMessage(`Found ${data.length} contacts.`);
    } catch (error) {
      console.error(error);
      setMessage('Unable to load contacts.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Viewer</Text>
      <Button title="Load Contacts" onPress={loadContacts} />
      <Text>{message}</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contact}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  contact: { fontSize: 18, padding: 10 },
});
```

### Understand permissions

```text
App requests access
       ↓
Phone asks the user
    ↙       ↘
 Allow       Deny
   ↓           ↓
Read data   Show helpful message
```

**Important:** Your app must work sensibly when permission is denied. Production builds may also need platform-specific permission descriptions or configuration.

**✅ Checkpoint:** Your app requests permission and shows contact names when access is granted.

## 07 · Connect to your backend (optional)

Your existing Express, REST, JSON, and PostgreSQL knowledge still applies.

```text
📱 React Native app
        ↓ HTTP request
🖥️ Express REST API
        ↓ query
🗄️ PostgreSQL database
        ↑ JSON response
📱 React Native app displays data
```

```js
async function getUsers() {
  try {
    const response = await fetch('https://example.com/api/users');
    if (!response.ok) throw new Error('Request failed');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('API error:', error);
  }
}
```

> ⚠️ **Phone networking:** `localhost` on a physical phone means the **phone**, not your computer. For local development, use a reachable computer network address and ensure your server listens for external connections. Use HTTPS for production.

You **do not need a backend** if your app can do its job with device features and local state.

## 08 · Plan before coding

Fill in these prompts:

| Question | Your answer |
|---|---|
| What is the app called? | |
| What problem does it solve? | |
| Who is it for? | |
| What device feature will it use? | |
| What are its three main actions? | |
| Does it need an API or database? | |

### Possible app ideas

- **Photo Journal:** Capture pictures with the camera.
- **Neighborhood Explorer:** Display the user's location.
- **Motion Game:** React to shaking or tilting the phone.
- **Step Challenge:** Display available pedometer readings.
- **Contact Viewer:** Show contacts after permission is granted.

**Research first:** Check whether your selected Expo library supports your device, Expo SDK version, and Expo Go or requires a development build.

### Example file organization

```text
my-mobile-app/
├── App.js
├── components/
│   ├── Header.js
│   └── ResultCard.js
├── services/
│   └── deviceService.js
├── assets/
└── package.json
```

For multiple screens, explore **Expo Router**. A one-screen app is also fine.

## 09 · Build in small milestones

1. **Start:** Run the app on your phone.
2. **Interface:** Add readable text and interactive buttons.
3. **State:** Store and update app data.
4. **Hardware:** Install one device-feature library.
5. **Permissions:** Handle both allow and deny outcomes.
6. **Results:** Display the feature's output clearly.
7. **Backend (optional):** Fetch or save data through an API.
8. **Polish:** Test, fix bugs, document, and present.

## 10 · Debugging quick reference

| Symptom | First thing to check |
|---|---|
| App won't start | Terminal error messages |
| Phone won't connect | Network access / Expo connection mode |
| Blank screen | Imports, JSX, runtime errors |
| Button doesn't work | `onPress` handler |
| Device data missing | Permission and hardware support |
| API fails | Server URL, network, server logs |
| Native library fails | SDK compatibility / development-build requirements |

```bash
# Restart and clear the Metro cache
npx expo start --clear
```

Use `console.log()` and React Native's development tools. Test hardware features on a real device when possible: emulators don't always simulate sensors, contacts, or GPS accurately.

## 11 · Two-session plan

| Session 1: Learn & prototype | Session 2: Finish & test |
|---|---|
| Set up Expo | Complete main feature |
| Run app on phone | Handle permission failures |
| Create components | Improve styling and feedback |
| Research device API | Test on a real device |
| Build first working feature | Finish README and presentation |

**Session 1 target:** A running app, interactive UI, and device feature selected or partly working.

**Session 2 target:** A working demonstration of the main feature, tested and documented.

## 12 · Presentation guide

Prepare a short demonstration covering:

1. **What:** App name and problem it solves.
2. **Who:** Intended user.
3. **How:** Components, Hooks, Expo library, and optional backend.
4. **Demo:** Show the app working on a phone.
5. **Challenge:** Explain one problem you solved.
6. **Learning:** Share one new skill you taught yourself.

*Suggested length: 5–7 minutes, depending on class size.*

## 13 · Final project checklist

### Build
- [ ] My app starts and runs.
- [ ] I use React Native components and React state.
- [ ] My interface is readable and interactive.
- [ ] I use at least one mobile-device feature.
- [ ] I handle denied permissions and errors.

### Test and document
- [ ] I tested the main feature on an appropriate device.
- [ ] I fixed major crashes and errors.
- [ ] My README explains setup, purpose, and features.
- [ ] My code is committed to GitHub.

### Present
- [ ] I can explain my components and data flow.
- [ ] I can explain the device feature and its permissions.
- [ ] I can demonstrate a working app.
- [ ] I can describe a challenge and what I learned.

---

## 📚 Official learning resources

- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [React Native components](https://reactnative.dev/docs/components-and-apis)
- [Expo documentation](https://docs.expo.dev/)
- [Create an Expo project](https://docs.expo.dev/get-started/create-a-project/)
- [Expo Contacts](https://docs.expo.dev/versions/latest/sdk/contacts/)
- [Expo permissions](https://docs.expo.dev/guides/permissions/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Expo Snack](https://snack.expo.dev/)

---

> ### 🌟 Remember
> You already know JavaScript, React, components, state, and APIs. React Native lets you **reuse those skills in a new environment**. The goal is not to know everything in two sessions: it's to research, experiment, build something that works, and explain how you did it.
