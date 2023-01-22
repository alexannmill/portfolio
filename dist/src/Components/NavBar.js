"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
require("./Styles/NavBar.css");
function NavBar() {
    return (React.createElement(Navbar_1.default, { className: "navbar", fixed: "top", expand: "lg" },
        React.createElement(Container_1.default, null,
            React.createElement(Navbar_1.default.Brand, { href: "#home" },
                React.createElement("h1", { className: "logo" }, "@|ex Mi||er")),
            React.createElement(Navbar_1.default.Toggle, { "aria-controls": "basic-navbar-nav" }),
            React.createElement(Navbar_1.default.Collapse, { id: "basic-navbar-nav" },
                React.createElement(Nav_1.default, { className: "me-auto" },
                    React.createElement(Nav_1.default.Link, { href: "#home" }, "// About"),
                    React.createElement(Nav_1.default.Link, { href: "#projects" }, "// Projects"),
                    React.createElement(Nav_1.default.Link, { href: "#contact" }, "// Contact"),
                    React.createElement(Nav_1.default.Link, { href: "#blog" }, "// BeerBlog"),
                    React.createElement(Nav_1.default.Link, { href: "github.com/alexannmill" }, "// Github"),
                    React.createElement(Nav_1.default.Link, { href: "https://resume.creddle.io/resume/idi71kas4cy", target: "_blank" },
                        " ",
                        "// Resume"))))));
}
exports.default = NavBar;
