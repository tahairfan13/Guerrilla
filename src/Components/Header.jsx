import React from "react";

function Header() {
  return (
    <header>
      <h1>
        A home is <br /> built with love
        <br /> and dreams
      </h1>
      <p>Real estate farm that makes your dreams true</p>
      <div className="btn-container">
        <button className="btn btn-fill">Our projects</button>
        <button className="btn btn-outlined">Contact us</button>
      </div>
    </header>
  );
}

export default Header;
