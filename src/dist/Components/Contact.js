"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContactForm_1 = __importDefault(require("./ContactForm"));
require("./Styles/Contact.css");
function Contact() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "contact" },
            react_1.default.createElement("div", { className: "contact-form" },
                react_1.default.createElement("h1", null, "Have a question?"),
                react_1.default.createElement(ContactForm_1.default, null)),
            react_1.default.createElement("div", { className: "socials" },
                react_1.default.createElement("h1", null, "CONNECT WITH ME ON "),
                react_1.default.createElement("a", { href: "https://www.linkedin.com/in/alexannmill/", target: "blank" },
                    react_1.default.createElement("img", { src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg", alt: "Alex Miller LinkedIn", height: "60", width: "60" })),
                react_1.default.createElement("a", { href: "https://github.com/alexannmill", target: "blank" },
                    react_1.default.createElement("img", { src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "60", width: "60" }))))));
}
exports.default = Contact;
