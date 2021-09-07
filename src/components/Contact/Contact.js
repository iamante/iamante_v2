import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Mailer from "./Mailer";

function Contact() {
  const [result, showResult] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      showResult(false);
    }, 4000);
  }, [result]);

  return (
    <section id="contact" className="contact">
      <div className="form-container">
        <span>Love what you see?</span>
        <h1>Let's talk</h1>
        <p>
          You can also email me at <a href="mailto:amantejamse@gmail.com">amantejamse@gmail.com</a>
        </p>
        <Mailer propResult={showResult} />
      </div>
      <div className="social-container">
        {result ? (
          <img src="/images/comment.png" alt="message send" className="sent" />
        ) : null}
        <img src="/images/james-eye.png" alt="james eye" />
        <h1>James Amante</h1>
        <h3>Web Developer</h3>
        <p>Connect</p>
        <div className="social">
          <div className="icon">
            <a
              href="https://www.facebook.com/jams.code"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF id="icon" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/iamante"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn id="icon" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/iamante"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub id="icon" />
            </a>
          </div>
          <div className="icon">
            <a
              href="mailto:amantejamse@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail id="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
