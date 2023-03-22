import React from "react";

function NavItems() {
  return (
    <ul className="nav-links">
      <li>
        <a href="/" className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="/contact" className="nav-link">
          projects
        </a>
      </li>
      <li>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavItems;
