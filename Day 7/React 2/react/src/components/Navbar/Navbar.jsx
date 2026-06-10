import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <div className="logo">
        Portfolio
      </div>

      <ul className="nav-links">

        <li onClick={() => setPage("home")}>
          Home
        </li>

        <li onClick={() => setPage("about")}>
          About
        </li>

        <li onClick={() => setPage("projects")}>
          Projects
        </li>

        <li onClick={() => setPage("contact")}>
          Contact
        </li>

      </ul>

    </nav>
  );
}

export default Navbar; 