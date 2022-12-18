import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <a id="contact">-</a>
      <div className="contact">
        <ContactForm />
        <div className="socials">
          <a href="https://www.linkedin.com/in/alexannmill/" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Alex Miller GitHub"
              height="30"
              width="40"
            />
          </a>
          <a href="https://github.com/alexannmill" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="Alex Miller LinkedIn"
              height="30"
              width="40"
            />
          </a>
        </div>
      </div>
    </>
  );
}
