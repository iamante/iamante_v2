import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-title">
                <h4>Ahoy! I'm</h4>
                <div>James</div>
                <div>Amante</div>
                <h4>A web developer.</h4>
            </div>
            <img src="images/cloud.png" alt="black-cloud" />
            <img src="images/light1.png" alt="lightning" id="light1" />
            <img src="images/light2.png" alt="lightning" id="light2" />
            <img src="images/cloud-f.png" alt="black-cloud-front"/>
        </section>
    )
}

export default Hero
