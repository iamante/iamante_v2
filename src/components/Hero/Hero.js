// Pirate Boat with GSAP Animations
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Initialize GSAP animations
    const boat = document.querySelector('.boat');
    gsap.to(boat, {
      duration: 2,
      x: 100,
      rotation: 360,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="hero">
      <h1>Welcome to the Pirate Adventure!</h1>
      <div className="boat">
        {/* Render your pirate boat graphic here */}
        <img src="/path/to/pirate-boat.png" alt="Pirate Boat" />
      </div>
    </div>
  );
};

export default Hero;