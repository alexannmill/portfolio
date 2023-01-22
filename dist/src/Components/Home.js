"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Styles/Home.css");
const IMG_0528_JPG_1 = __importDefault(require("./imgs/IMG_0528.JPG"));
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "home" },
            React.createElement("div", { className: "img-container" },
                React.createElement("img", { className: "home-bg-img", src: IMG_0528_JPG_1.default, alt: "me" })),
            React.createElement("div", { className: "slant" },
                React.createElement("h1", { className: "hi" }, "Hi, my name is "),
                React.createElement("h1", { className: "name" }, " Alex Miller."),
                React.createElement("p", { className: "blurb" },
                    "Brewer turned Software Developer. I enjoy creating applications that have a seamless user experience; maintaining continuity with themes, responses, and expectations.",
                    " ")))));
}
exports.default = Home;
