
```markdown
# React User Context Demo

This is a simple React project demonstrating how to use the React Context API for managing user authentication state across components.

## ✨ Features

- 🔐 User login simulation using context
- 📦 Centralized state management with `UserContext`
- 💅 Styled login and profile views with clean CSS
- 🧠 Demonstrates use of `useContext`, `useState`, and `PropTypes`

## 📁 Project Structure

```

src/
├── Context/
│   └── UserContext.js
├── Components/
│   ├── Login.js
│   ├── Profile.js
├── Styles/
│   └── LoginProfile.css
├── App.js
└── index.js

````

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

## 🧠 How It Works

* `UserContext.js` provides a context that holds the `user` object and a `setUser` function.
* `Login.js` allows users to input a username and password. On submit, the user data is set via context.
* `Profile.js` reads the `user` from context and displays a personalized welcome message (or a login prompt if not logged in).



## 🔧 Tech Stack

* React
* Context API
* PropTypes
* CSS (no external frameworks)
---

Made with 💙 using React.

```

---


