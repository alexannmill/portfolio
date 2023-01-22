"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const safeguardian_png_1 = __importDefault(require("../imgs/safeguardian.png"));
function Safeguardian() {
    return (React.createElement(react_bootstrap_1.Card, { className: "safeguardian", style: { width: "60vw" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: safeguardian_png_1.default, alt: "Safeguardian Image" }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, { className: "project-title" }, "Safeguardian \uD83D\uDCCD"),
            React.createElement(react_bootstrap_1.Card.Text, null,
                React.createElement("strong", null, "Work-in-progress:"),
                " A map application for unhoused people to find resources. Hoping one day mall-screen kiosk are up around the city giving information to those in need."),
            React.createElement(react_bootstrap_1.Button, { href: "https://github.com/alexannmill/safeguardian", target: "_blank", variant: "dark" },
                React.createElement("img", { align: "center", src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", alt: "Alex Miller Github", height: "30", width: "40" })))));
}
exports.default = Safeguardian;
