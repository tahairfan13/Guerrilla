import React from "react";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>lugar</h1>
      </div>
      <NavItems />
    </nav>
  );
}

export default Navbar;
