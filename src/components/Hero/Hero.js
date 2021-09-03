import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-title">
                <span>Ahoy! I'm</span>
                <div>James</div>
                <div>Amante</div>
                <span>A web developer.</span>
            </div>
            <img src="images/cloud.png" alt="black-cloud" />
        </section>
    )
}

export default Hero
