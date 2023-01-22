"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const hungrydev_png_1 = __importDefault(require("../imgs/hungrydev.png"));
function HungryDev() {
    return (React.createElement(react_bootstrap_1.Card, { className: "hungry-dev", style: { width: "60vw" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: hungrydev_png_1.default, alt: "Hungry Dev IMG" }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, { className: "project-title" }, "The Hungry Dev \uD83D\uDC0D "),
            React.createElement(react_bootstrap_1.Card.Text, null,
                React.createElement("a", { href: "https://the-hungry-dev.netlify.app" }, "Click Here to Play!"),
                React.createElement("br", null),
                "A GitHub commit themed snake game. This is a quick game for landing or loading pages. Open to all, feel free to insert into your work! Using Vanilla JS, HTML, and CSS."),
            React.createElement(react_bootstrap_1.Button, { href: "https://github.com/alexannmill/the.very.hungry.dev", variant: "dark", target: "_blank" },
                React.createElement("img", { align: "center", src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "30", width: "40" })))));
}
exports.default = HungryDev;
