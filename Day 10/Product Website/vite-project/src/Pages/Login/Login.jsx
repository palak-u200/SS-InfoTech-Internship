import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import "./Login.css";

function Login() {
  const { login } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login(form);

    if (!result.ok) {
      notify(result.message, "error");
      return;
    }

    notify("Welcome back");
    navigate(location.state?.from || "/profile");
  };

  return (
    <section className="auth-page page-transition">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Member access</p>
        <h1>Login</h1>
        <input type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        <button className="gold-button" type="submit">Login</button>
        <p>New to TechLuxe? <Link to="/register">Create account</Link></p>
      </form>
    </section>
  );
}

export default Login;
