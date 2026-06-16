import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import "./Register.css";

function Register() {
  const { register } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password.length < 6) {
      notify("Password must be at least 6 characters.", "error");
      return;
    }

    if (form.password !== form.confirmPassword) {
      notify("Passwords do not match.", "error");
      return;
    }

    register(form);
    notify("Account created successfully");
    navigate("/profile");
  };

  return (
    <section className="auth-page page-transition">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Join the boutique</p>
        <h1>Register</h1>
        <input type="text" placeholder="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(event) => setForm({ ...form, confirmPassword: event.target.value })} required />
        <button className="gold-button" type="submit">Create Account</button>
        <p>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
}

export default Register;
