"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
require("./Styles/NavBar.css");
function NavBar() {
    return (react_1.default.createElement(Navbar_1.default, { className: "navbar", fixed: "top", expand: "lg" }, react_1.default.createElement(Container_1.default, null, react_1.default.createElement(Navbar_1.default.Brand, { href: "#home" }, react_1.default.createElement("h1", { className: "logo" }, "@|ex Mi||er")), react_1.default.createElement(Navbar_1.default.Toggle, { "aria-controls": "basic-navbar-nav" }), react_1.default.createElement(Navbar_1.default.Collapse, { id: "basic-navbar-nav" }, react_1.default.createElement(Nav_1.default, { className: "me-auto" }, react_1.default.createElement(Nav_1.default.Link, { href: "#home" }, "// About"), react_1.default.createElement(Nav_1.default.Link, { href: "#projects" }, "// Projects"), react_1.default.createElement(Nav_1.default.Link, { href: "#contact" }, "// Contact"), react_1.default.createElement(Nav_1.default.Link, { href: "#blog" }, "// BeerBlog"), react_1.default.createElement(Nav_1.default.Link, { href: "github.com/alexannmill" }, "// Github"), react_1.default.createElement(Nav_1.default.Link, { href: "https://resume.creddle.io/resume/idi71kas4cy", target: "_blank" }, " ", "// Resume"))))));
}
exports.default = NavBar;
