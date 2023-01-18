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
        <div className="socials">
          <h1>CONNECT WITH ME ON </h1>
          <a href="https://www.linkedin.com/in/alexannmill/" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Alex Miller LinkedIn"
              height="60"
              width="60"
            />
          </a>
          <a href="https://github.com/alexannmill" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="Alex Miller Github"
              height="60"
              width="60"
            />
          </a>
        </div>
      </div>
    </>
  );
}

