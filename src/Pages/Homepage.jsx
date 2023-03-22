import React from "react";
import About from "../Components/About";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Properties from "../Components/Properties";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Properties />
      <About />
    </>
  );
}

export default Homepage;
