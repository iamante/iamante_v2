import React from 'react'
import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-text">
                <span>Nice to meet you!</span>
                <h1><span>Hey, I'm James</span><span> a web developer</span></h1>
                <span>From San jose del monte Bulacan, Philippines.</span>
                <p>I have a passion in web development and technology learning new things always give me excitement as there will always challenge to overcome. I'm a self taught developer strive to become a great developer someday that i can be, so you will find me learning and reading about coding and other stuff .</p>
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
