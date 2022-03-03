import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-title">
        <h1>
          <span>Ahoy! I'm</span> James <span>Amante</span>
          <span>A Software Engineer.</span>
        </h1>
      </div>
      <img src="images/cloud.png" alt="black-cloud" />
      <img src="images/light1.png" alt="lightning" id="light1" />
      <img src="images/light2.png" alt="lightning" id="light2" />
      <img src="images/cloud-f.png" alt="black-cloud-front" />
    </section>
  );
}

export default Hero;
