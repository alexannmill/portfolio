"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
function ContactForm() {
    const [submitted, setSubmitted] = (0, react_1.useState)(null);
    const handleSubmit = (e) => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    if (submitted) {
        return (React.createElement("div", { className: "thankyou" },
            React.createElement("h1", null, "Thank you!"),
            React.createElement("h3", null, " We'll be in touch soon."),
            React.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit", onClick: (e) => {
                    e.preventDefault();
                    setSubmitted(null);
                } }, "Forgot something? Send Another!")));
    }
    return (React.createElement("div", { className: "form" },
        React.createElement(react_bootstrap_1.Form, { action: "https://public.herotofu.com/v1/ca7790a0-7e6a-11ed-b38f-a1ed22f366b1", onSubmit: handleSubmit, method: "POST", target: "_blank" },
            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formName" },
                React.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Name"),
                React.createElement(react_bootstrap_1.Form.Control, { className: "project-title", type: "name", name: "name", placeholder: "Enter Your Name" })),
            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formEmail" },
                React.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Email"),
                React.createElement(react_bootstrap_1.Form.Control, { className: "project-title", type: "email", name: "email", placeholder: "Enter Your Email" })),
            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formMessage" },
                React.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Message"),
                React.createElement(react_bootstrap_1.Form.Control, { className: "project-title", as: "textarea", placeholder: "Enter Your Message", rows: 3, name: "message" })),
            React.createElement("div", { className: "submitbtn" },
                React.createElement(react_bootstrap_1.Button, { className: "contact-btn", variant: "primary", type: "submit" }, "Send Message")))));
}
exports.default = ContactForm;
