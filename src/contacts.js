import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./css/contacts.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_ljv6a8c",
        "template_u44g9uu",
        form.current,
        "Kzyf-TBPv2H7F5f7c"
      )
      .then(
        (result) => {
          // show the user a success message
          window.alert("Message sent successfully");
        },
        (error) => {
          // show the user an error
          window.alert(`Error: ${error}`);
        }
      );
  };

  return (
    <>
      <div className="contacts" id="contacts">
        <div className="review">
          <h1>Feel free to reach out</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email"/>
            <textarea name="message" placeholder="Your comment"/>
            <input className="submit-btn" type="submit" value="Send" />
          </form>
        </div>
        <div className="social-holder">
          <h4>Or you could reach me directly</h4>
          <div className="social-links">
            <p>
              <FaEnvelope />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaGithub />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
