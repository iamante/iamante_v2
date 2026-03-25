import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const boatRef = useRef(null);
  const flagRef = useRef(null);

  useEffect(() => {
    // Boat bobbing animation
    gsap.to(boatRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Flag waving animation
    gsap.to(flagRef.current, {
      rotation: 5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });

    // Boat swaying side to side
    gsap.to(boatRef.current, {
      x: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-title">
        <h1>
          <span>Ahoy! I'm</span> James <span>Amante</span>
          <span>A software engineer.</span>
        </h1>
      </div>

      
      <div className="pirate-boat-container" ref={boatRef}>
        <svg className="pirate-boat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
          
          <path d="M 0 200 Q 75 190 150 200 T 300 200 L 300 250 L 0 250 Z" fill="#1a1a2e" opacity="0.3"/>

          
          <path d="M 50 180 L 70 200 L 230 200 L 250 180 Z" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="2"/>
          <ellipse cx="150" cy="180" rx="100" ry="25" fill="#2a2a2a"/>

          
          <circle cx="120" cy="185" r="5" fill="#444"/>

          
          <circle cx="150" cy="185" r="5" fill="#444"/>

          
          <circle cx="180" cy="185" r="5" fill="#444"/>

          
          <line x1="150" y1="180" x2="150" y2="40" stroke="#3a3a3a" strokeWidth="4"/>

         
          <polygon points="150,60 150,170 220,170" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="2" opacity="0.9"/>
          <polygon points="150,60 150,170 220,170" fill="#2a2a2a" opacity="0.5" filter="url(#shadow)"/>

          
          <polygon points="150,80 150,170 90,170" fill="#0a0a0a" stroke="#000" strokeWidth="2" opacity="0.8"/>

          
          <line x1="150" y1="40" x2="220" y2="170" stroke="#4a4a4a" strokeWidth="1" opacity="0.6"/>
          <line x1="150" y1="40" x2="90" y2="170" stroke="#4a4a4a" strokeWidth="1" opacity="0.6"/>
          <line x1="150" y1="100" x2="220" y2="170" stroke="#4a4a4a" strokeWidth="1" opacity="0.4"/>
          <line x1="150" y1="100" x2="90" y2="170" stroke="#4a4a4a" strokeWidth="1" opacity="0.4"/>

          
          <line x1="150" y1="40" x2="150" y2="20" stroke="#3a3a3a" strokeWidth="2"/>

          
          <g ref={flagRef} style={{ transformOrigin: "150px 20px" }}>
            <rect x="150" y="20" width="50" height="35" fill="#000" stroke="#888" strokeWidth="1"/>
            
            <circle cx="168" cy="30" r="6" fill="#fff"/>
            <circle cx="182" cy="30" r="6" fill="#fff"/>
            <circle cx="175" cy="37" r="5" fill="#fff"/>
            
            <line x1="162" y1="45" x2="188" y2="45" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="162" cy="45" r="2" fill="#fff"/>
            <circle cx="188" cy="45" r="2" fill="#fff"/>
          </g>

          
          <g>
            <line x1="240" y1="180" x2="240" y2="210" stroke="#555" strokeWidth="2"/>
            <path d="M 235 210 Q 240 215 245 210" fill="none" stroke="#555" strokeWidth="2"/>
            <circle cx="235" cy="210" r="2" fill="#555"/>
            <circle cx="245" cy="210" r="2" fill="#555"/>
          </g>

          
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
        </svg>
      </div>

      <img src="images/cloud.png" alt="black-cloud" draggable="false"/>
      <img src="images/light1.png" alt="lightning" id="light1" draggable="false"/>
      <img src="images/light2.png" alt="lightning" id="light2" draggable="false"/>
      <img src="images/cloud-f.png" alt="black-cloud-front" draggable="false"/>
    </section>
})

export default Hero;