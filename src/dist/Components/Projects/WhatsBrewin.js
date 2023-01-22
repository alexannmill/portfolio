"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const whatsbrewing_png_1 = __importDefault(require("../imgs/whatsbrewing.png"));
function WhatsBrewin() {
    return (React.createElement(react_bootstrap_1.Card, { className: "whats-brewing", style: { width: "60vw" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: whatsbrewing_png_1.default, alt: "Whats Brewin IMG" }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, { className: "project-title" }, "What's Brewin' \uD83C\uDF7A"),
            React.createElement(react_bootstrap_1.Card.Text, null,
                "What's Brewin' a centralized platform to discover new breweries. We love beer and travel and wanted to give back to the breweries in all areas giving them a space to be easily discovered. This is our final project for Web Development Program at Lighthouse Labs made possible with the help of -",
                React.createElement("a", { href: "https://www.openbrewerydb.org/", target: "_blank" }, "Open Brewery DB"),
                "."),
            React.createElement(react_bootstrap_1.Button, { href: "https://github.com/alexannmill/whats.brewin", variant: "dark", target: "_blank" },
                React.createElement("img", { align: "center", src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "30", width: "40" })))));
}
exports.default = WhatsBrewin;
