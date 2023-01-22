"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Styles/Home.css");
const IMG_0528_jpg_1 = __importDefault(require("./imgs/IMG_0528.jpg"));
const react_1 = __importDefault(require("react"));
function Home() {
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", { className: "home" }, react_1.default.createElement("div", { className: "img-container" }, react_1.default.createElement("img", { className: "home-bg-img", src: IMG_0528_jpg_1.default, alt: "profile pic" })), react_1.default.createElement("div", { className: "slant" }, react_1.default.createElement("h1", { className: "hi" }, "Hi, my name is "), react_1.default.createElement("h1", { className: "name" }, " Alex Miller."), react_1.default.createElement("p", { className: "blurb" }, "Brewer turned Software Developer. I enjoy creating applications that have a seamless user experience; maintaining continuity with themes, responses, and expectations.", " ")))));
}
exports.default = Home;
