import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const boatRef = useRef(null);
  const flagRef = useRef(null);
  const containerRef = useRef(null); // Added a main container ref

  useEffect(() => {
    // GSAP Context is best practice for React to ensure clean unmounting
    let ctx = gsap.context(() => {
      
      // 1. Boat bobbing animation (Up/Down)
      gsap.to(boatRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Flag waving animation
      // Note: CSS transform-origin in JS should be string or set via gsap.set
      gsap.to(flagRef.current, {
        rotation: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "left center", 
      });

      // 3. Boat swaying side to side (Slightly staggered from bobbing)
      gsap.to(boatRef.current, {
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Lightning Flicker (Optional - matching your lightning images)
      gsap.to("#light1, #light2", {
        opacity: 0,
        duration: 0.1,
        repeat: -1,
        repeatDelay: Math.random() * 5 + 2,
        yoyo: true,
      });

    }, containerRef); // Scope everything to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-title">
        <h1>
          <span>Ahoy! I'm</span> James <span>Amante</span>
          <br />
          <span>A software engineer.</span>
        </h1>
      </div>

      <img src="images/cloud.png" alt="black-cloud" draggable="false"/>
      <img src="images/light1.png" alt="lightning" id="light1" draggable="false"/>
      <img src="images/light2.png" alt="lightning" id="light2" draggable="false"/>
      <img src="images/cloud-f.png" alt="black-cloud-front" draggable="false"/>
    </section>
  );
}

export default Hero;