"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavBar_1 = __importDefault(require("../dist/src/Components/NavBar"));
const Home_1 = __importDefault(require("../dist/src/Components/Home"));
const Contact_1 = __importDefault(require("../dist/src/Components/Contact"));
const Projects_1 = __importDefault(require("../dist/src/Components/Projects"));
const BeerBlog_1 = __importDefault(require("../dist/src/Components/BeerBlog"));
const Skills_1 = __importDefault(require("../dist/src/Components/Skills"));
function App() {
    return (React.createElement("div", { className: "App" }, React.createElement(NavBar_1.default, null), React.createElement("a", { id: "home" }), React.createElement(Home_1.default, null), React.createElement("a", { id: "skills" }), React.createElement(Skills_1.default, null), React.createElement("a", { id: "projects" }), React.createElement(Projects_1.default, null), React.createElement("a", { id: "blog" }), React.createElement(BeerBlog_1.default, null), React.createElement("a", { id: "contact" }, "."), React.createElement(Contact_1.default, null)));
}
exports.default = App;
