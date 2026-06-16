import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import "./Profile.css";

function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(form);
    setIsEditing(false);
    notify("Profile updated");
  };

  return (
    <section className="content-section profile-page page-transition">
      <div className="profile-card">
        <img src={user.avatar} alt={user.name} />
        <div>
          <p className="eyebrow">Your account</p>
          {isEditing ? (
            <form className="profile-form" onSubmit={handleSubmit}>
              <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
              <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
              <button className="gold-button" type="submit">Save Profile</button>
            </form>
          ) : (
            <>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>Registered on {new Date(user.registeredAt).toLocaleDateString()}</p>
            </>
          )}
          <div className="profile-actions">
            <button className="ghost-button" type="button" onClick={() => setIsEditing((value) => !value)}>
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
            <button className="dark-button" type="button" onClick={() => { logout(); navigate("/login"); }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
