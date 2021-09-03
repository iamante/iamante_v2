import React from 'react'
import './Contact.css'
import Button from '../Button/Button'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="form-container">
                <span>Love what you see?</span>
                <h1>Let's talk</h1>
                <p>You can also email me at amantejamse@gmail.com</p>
                <form action="" method="post">
                    <input type="text" placeholder="Full name" />
                    <input type="text" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <Button title="Send Message" />
                </form>
            </div>
            <div className="social-container">
                <img src="/images/james-eye.png" alt="james eye" />
                <h1>James Amante</h1>
                <h3>Web Developer</h3>
                <p>Connect</p>
                <div className="social">
                    <img src="/images/icons/message-icon.svg" alt="" />
                    <img src="/images/icons/message-icon.svg" alt="" />
                    <img src="/images/icons/message-icon.svg" alt="" />
                    <img src="/images/icons/message-icon.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact
