import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1>My Portfolio</h1>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <ul className={menuOpen ? "active" : ""}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Project</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Join Community</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
