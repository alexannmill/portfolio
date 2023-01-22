"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const interviewer_png_1 = __importDefault(require("../imgs/interviewer.png"));
function Interviewer() {
    return (React.createElement(react_bootstrap_1.Card, { className: "interviewer", style: { width: "60vw" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: interviewer_png_1.default, alt: "interviewer Image" }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, { className: "project-title" }, "Interviewer \uD83D\uDCC6"),
            React.createElement(react_bootstrap_1.Card.Text, null, "Front-end focused app for scheduling interviews build with React.js. Testing with Storybook and Jest"),
            React.createElement(react_bootstrap_1.Button, { href: "https://github.com/alexannmill/interviewer", variant: "dark", target: "_blank" },
                React.createElement("a", { href: "https://github.com/alexannmill", target: "blank" },
                    React.createElement("img", { align: "center", src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "30", width: "40" }))))));
}
exports.default = Interviewer;
