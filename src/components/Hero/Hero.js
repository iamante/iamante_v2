import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-title">
        <h4>Ahoy! I'm</h4>
        <h1>James <span>Amante</span></h1>
        <span>A web developer.</span>
      </div>
      <img src="images/cloud.png" alt="black-cloud" />
      <img src="images/light1.png" alt="lightning" id="light1" />
      <img src="images/light2.png" alt="lightning" id="light2" />
      <img src="images/cloud-f.png" alt="black-cloud-front" />
    </section>
  );
}

export default Hero;
