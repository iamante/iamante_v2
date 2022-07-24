import React from 'react'
import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-text">
                <h4>Nice to meet you!</h4>
                <h1>Hey, I'm James<br/> a Software Engineer</h1>
                <h4>From San jose del monte Bulacan, Philippines.</h4>
                <p>I have a passion in technology and programming learning new things always give me excitement as there will always challenge to overcome. I'm a self taught developer strive to become a great developer that i can be, so you will find me learning and reading about coding and other stuff .</p>
            </div>
            <div className="about-img">
                <img src="images/james.png" alt="james" />
                <img src="images/bg-snow.png" alt="snow-background" />
                <img src="images/smoke-bot.png" alt="smoke-bottom" />
                <img src="images/smoke-border.png" alt="smoke-border" />
                <img src="images/hand.png" alt="hand" />
            </div>
        </section>
    )
}

export default About
