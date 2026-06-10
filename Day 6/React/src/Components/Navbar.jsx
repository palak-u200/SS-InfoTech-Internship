function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 backdrop-blur-md bg-black/20">

      <h1 className="text-3xl font-bold text-pink-400 animate-float">
        Palak
      </h1>

      <ul className="flex gap-8 list-none">
        <li>
          <a href="#" className="hover:text-pink-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-pink-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-pink-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-pink-400 transition">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;