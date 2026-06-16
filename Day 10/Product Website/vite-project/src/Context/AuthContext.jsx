import { createContext, useContext, useEffect, useMemo, useState } from "react";

const REGISTERED_USER_KEY = "techluxe_registered_user";
const SESSION_USER_KEY = "techluxe_session_user";

export const AuthContext = createContext(null);

const safeParse = (value, fallback = null) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

function AuthProvider({ children }) {
  const [registeredUser, setRegisteredUser] = useState(() =>
    safeParse(localStorage.getItem(REGISTERED_USER_KEY))
  );
  const [user, setUser] = useState(() =>
    safeParse(localStorage.getItem(SESSION_USER_KEY))
  );

  useEffect(() => {
    if (registeredUser) {
      localStorage.setItem(REGISTERED_USER_KEY, JSON.stringify(registeredUser));
    }
  }, [registeredUser]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_USER_KEY);
    }
  }, [user]);

  const register = ({ name, email, password }) => {
    const nextUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name.trim()
      )}&background=111111&color=f5c542&bold=true`,
      registeredAt: new Date().toISOString(),
    };

    setRegisteredUser(nextUser);
    setUser(nextUser);
    return { ok: true, user: nextUser };
  };

  const login = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!registeredUser) {
      return { ok: false, message: "Please register before logging in." };
    }

    if (
      registeredUser.email !== normalizedEmail ||
      registeredUser.password !== password
    ) {
      return { ok: false, message: "Invalid email or password." };
    }

    setUser(registeredUser);
    return { ok: true, user: registeredUser };
  };

  const updateProfile = ({ name, email }) => {
    const updated = {
      ...registeredUser,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name.trim()
      )}&background=111111&color=f5c542&bold=true`,
    };

    setRegisteredUser(updated);
    setUser(updated);
    return updated;
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      registeredUser,
      isAuthenticated: Boolean(user),
      register,
      login,
      logout,
      updateProfile,
    }),
    [user, registeredUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
