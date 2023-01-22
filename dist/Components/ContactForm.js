"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
function ContactForm() {
    const [submitted, setSubmitted] = (0, react_2.useState)({ submitted: null });
    const handleSubmit = () => {
        setTimeout(() => {
            return setSubmitted({ submitted: true });
        }, 100);
    };
    if (submitted) {
        return (react_1.default.createElement("div", { className: "thankyou" },
            react_1.default.createElement("h1", null, "Thank you!"),
            react_1.default.createElement("h3", null, " We'll be in touch soon."),
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit", onClick: (e) => {
                    e.preventDefault();
                    setSubmitted({ submitted: null });
                } }, "Forgot something? Send Another!")));
    }
    return (react_1.default.createElement("div", { className: "form" },
        react_1.default.createElement(react_bootstrap_1.Form, { action: "https://public.herotofu.com/v1/ca7790a0-7e6a-11ed-b38f-a1ed22f366b1", onSubmit: handleSubmit, method: "POST", target: "_blank" },
            react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formName" },
                react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Name"),
                react_1.default.createElement(react_bootstrap_1.Form.Control, { className: "project-title", type: "name", name: "name", placeholder: "Enter Your Name" })),
            react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formEmail" },
                react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Email"),
                react_1.default.createElement(react_bootstrap_1.Form.Control, { className: "project-title", type: "email", name: "email", placeholder: "Enter Your Email" })),
            react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "formMessage" },
                react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "project-title" }, "Message"),
                react_1.default.createElement(react_bootstrap_1.Form.Control, { className: "project-title", as: "textarea", placeholder: "Enter Your Message", rows: 3, name: "message" })),
            react_1.default.createElement("div", { className: "submitbtn" },
                react_1.default.createElement(react_bootstrap_1.Button, { className: "contact-btn", variant: "primary", type: "submit" }, "Send Message")))));
}
exports.default = ContactForm;
