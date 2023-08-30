import React from "react";
import ContactForm from "./ContactForm";
import "./Styles/Contact.css";


export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-form">
          <h1>Have a question?</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

