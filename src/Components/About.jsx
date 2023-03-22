import React from "react";
import AboutImage from "../assets/about.png";
import Number from "./Number";
function About() {
  return (
    <section className="about section-container">
      {/* <h2 className="section-title">Properties</h2>
      <p className="section-desc">
        {" "}
        Turpis facilisis tempor pulvinar in lobortis ornare magna.{" "}
      </p> */}
      <div className="about-image">
        <img src={AboutImage} alt="about" />
      </div>
      <div className="section-details">
        <h2 className="section-title">
          Award winning real estate company in Dubai
        </h2>
        <p className="section-desc">
          Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
          scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
          ornare magna.
        </p>
        <div className="number-container">
          <Number title="Previous projects" Number="34+" />
          <Number title="years experience" Number="20y" />
          <Number title="Ongoing projects" Number="12" />
        </div>
      </div>
    </section>
  );
}

export default About;
