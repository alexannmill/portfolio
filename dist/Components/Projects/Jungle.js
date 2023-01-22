"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const jungle_png_1 = __importDefault(require("../imgs/jungle.png"));
function Jungle() {
    return (React.createElement(react_bootstrap_1.Card, { className: "jungle", style: { width: "60vw" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: jungle_png_1.default, alt: "Jungle IMG" }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, { className: "project-title" }, "Jungle \uD83C\uDF31 "),
            React.createElement(react_bootstrap_1.Card.Text, null,
                React.createElement("br", null),
                "A mini e-commerce application built with Ruby on Rails with Active Record."),
            React.createElement(react_bootstrap_1.Button, { href: "https://github.com/alexannmill/jungle", variant: "dark", target: "_blank" },
                React.createElement("a", { href: "https://github.com/alexannmill", target: "blank" },
                    React.createElement("img", { align: "center", src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "30", width: "40" }))))));
}
exports.default = Jungle;
