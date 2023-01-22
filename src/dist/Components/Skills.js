"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Styles/Skills.css");
function Home() {
    const backend = [
        "SQL",
        "Node.js",
        "Javascript",
        "Typescript",
        "Ruby",
        "Express",
    ];
    const frontend = [
        "Javascript",
        "Typescript",
        "React",
        "HTML",
        "CSS",
        "jQuery",
    ];
    const webDesign = [
        "Figma",
        "Canva",
        "Tailwaind",
        "Bootstrap",
        "ERDs",
        "Responsive",
    ];
    const strategies = ["Agile", "Git", "Testing", "Documentation"];
    const renderFrontend = frontend.map((skill) => {
        return (react_1.default.createElement("div", { className: "skill" },
            react_1.default.createElement("h3", null, skill)));
    });
    const renderWebDesign = webDesign.map((skill) => {
        return (react_1.default.createElement("div", { className: "skill" },
            react_1.default.createElement("h3", null, skill)));
    });
    const renderBackend = backend.map((skill) => {
        return (react_1.default.createElement("div", { className: "skill" },
            react_1.default.createElement("h3", null, skill)));
    });
    const renderStrategies = strategies.map((skill) => {
        return (react_1.default.createElement("div", { className: "skill" },
            react_1.default.createElement("h3", null, skill)));
    });
    return (react_1.default.createElement("div", { className: "skills" },
        react_1.default.createElement("h1", { className: "skill-set-title" },
            react_1.default.createElement("strong", null, "SKILL SET")),
        react_1.default.createElement("div", { className: "skill-list" },
            react_1.default.createElement("div", { className: "set" },
                react_1.default.createElement("div", { className: "list" },
                    react_1.default.createElement("h2", null, "// Font-end : "),
                    renderFrontend),
                react_1.default.createElement("div", { className: "list" },
                    react_1.default.createElement("h2", null, "// Back-end :"),
                    renderBackend)),
            react_1.default.createElement("div", { className: "set" },
                react_1.default.createElement("div", { className: "list" },
                    react_1.default.createElement("h2", null, "// Web Design :"),
                    renderWebDesign),
                react_1.default.createElement("div", { className: "list" },
                    react_1.default.createElement("h2", null, "// Strategies : "),
                    renderStrategies)))));
}
exports.default = Home;
