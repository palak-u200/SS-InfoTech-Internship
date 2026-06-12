import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const USERS_KEY = "registeredUsers";
const ACTIVE_USER_KEY = "activeUser";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    localStorage.removeItem(USERS_KEY);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function AuthPanel({ mode, onNavigate, onLogin }) {
  const isRegister = mode === "register";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function showMessage(text, success = false) {
    setMessage(text);
    setIsSuccess(success);
  }

  function handleRegister(event) {
    event.preventDefault();

    const users = getUsers();
    const cleanEmail = normalizeEmail(email);

    if (users.some((user) => user.email === cleanEmail)) {
      showMessage("This email is already registered. Please login.");
      return;
    }

    const newUser = {
      fullName: fullName.trim(),
      email: cleanEmail,
      password
    };

    saveUsers([...users, newUser]);
    showMessage("Registration successful. Opening login page...", true);

    setTimeout(() => {
      onNavigate("login");
    }, 800);
  }

  function handleLogin(event) {
    event.preventDefault();

    const cleanEmail = normalizeEmail(email);
    const user = getUsers().find(
      (item) => item.email === cleanEmail && item.password === password
    );

    if (!user) {
      showMessage("Account not found or password is incorrect.");
      return;
    }

    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
    onLogin(user);
  }

  function handleSocialLogin(provider) {
    const user = {
      fullName: `${provider} User`,
      email: `${provider.toLowerCase()}@demo.com`,
      provider
    };

    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
    onLogin(user);
  }

  return (
    <main className="auth-shell">
      <div className="animated-bg" aria-hidden="true">
        <span className="orb orb-one"></span>
        <span className="orb orb-two"></span>
        <span className="orb orb-three"></span>
        <span className="grid-glow"></span>
      </div>

      <section className="auth-panel">
        <div className="panel-header">
          <div className="brand-mark">SS</div>
          <div>
            <p className="eyebrow">Secure access</p>
            <h1>{isRegister ? "Create account" : "Welcome back"}</h1>
          </div>
        </div>
        <p className="lead">
          {isRegister
            ? "Fill the form to register, or choose a social login option when it is connected."
            : "Login with your registered account or continue with a provider."}
        </p>

        <div className="social-row" aria-label="Social login options">
          <button className="social-button" type="button" onClick={() => handleSocialLogin("Google")}>
            <span className="provider-icon google-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38z" />
              </svg>
            </span>
            Google
          </button>
          <button className="social-button" type="button" onClick={() => handleSocialLogin("GitHub")}>
            <span className="provider-icon github-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A10.93 10.93 0 0 1 12 6.05c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.67.42.36.78 1.07.78 2.16v3.14c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </span>
            GitHub
          </button>
        </div>

        <div className="divider">
          <span>{isRegister ? "or register with email" : "or login with email"}</span>
        </div>

        <form className="auth-form" onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <>
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder={isRegister ? "Minimum 6 characters" : "Enter password"}
            minLength={isRegister ? 6 : undefined}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <p className={`message ${isSuccess ? "success" : ""}`} aria-live="polite">
            {message}
          </p>

          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>

        <p className="switch-text">
          {isRegister ? "Already registered? " : "New here? "}
          <button
            className="link-button"
            type="button"
            onClick={() => {
              setMessage("");
              onNavigate(isRegister ? "login" : "register");
            }}
          >
            {isRegister ? "Login" : "Create an account"}
          </button>
        </p>
      </section>
    </main>
  );
}

function Home({ activeUser, onLogout }) {
  return (
    <main className="home-shell">
      <div className="animated-bg" aria-hidden="true">
        <span className="orb orb-one"></span>
        <span className="orb orb-two"></span>
        <span className="orb orb-three"></span>
        <span className="grid-glow"></span>
      </div>

      <nav className="topbar">
        <div className="brand-row">
          <span className="brand-mark small">SS</span>
          <strong>Home</strong>
        </div>
        <button className="secondary-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <section className="welcome-section">
        <p className="eyebrow">Logged in successfully</p>
        <h1>Welcome, {activeUser.fullName}</h1>
        <p>You are now on the home page.</p>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState("register");
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    localStorage.removeItem(ACTIVE_USER_KEY);
  }, []);

  function handleLogin(user) {
    setActiveUser(user);
    setPage("home");
  }

  function handleLogout() {
    localStorage.removeItem(ACTIVE_USER_KEY);
    setActiveUser(null);
    setPage("login");
  }

  if (page === "home" && activeUser) {
    return <Home activeUser={activeUser} onLogout={handleLogout} />;
  }

  return <AuthPanel mode={page} onNavigate={setPage} onLogin={handleLogin} />;
}

createRoot(document.querySelector("#root")).render(<App />);
