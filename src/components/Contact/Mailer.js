import React from "react";
import Button from "../Button/Button";
import emailjs from "emailjs-com";

function Mailer({ propResult }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26athkr",
        "template_sk1ce1i",
        e.target,
        "user_JqkOM7104frFPXKehfvGV"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
    setTimeout(propResult(true), 2000);
  };
  return (
    <>
      <form action="" method="POST" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <Button title="Send Message" submit="submit" />
      </form>
    </>
  );
}

export default Mailer;
