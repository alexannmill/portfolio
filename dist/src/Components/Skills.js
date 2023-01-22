"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return (React.createElement("div", { className: "skill" },
            React.createElement("h3", null, skill)));
    });
    const renderWebDesign = webDesign.map((skill) => {
        return (React.createElement("div", { className: "skill" },
            React.createElement("h3", null, skill)));
    });
    const renderBackend = backend.map((skill) => {
        return (React.createElement("div", { className: "skill" },
            React.createElement("h3", null, skill)));
    });
    const renderStrategies = strategies.map((skill) => {
        return (React.createElement("div", { className: "skill" },
            React.createElement("h3", null, skill)));
    });
    return (React.createElement("div", { className: "skills" },
        React.createElement("h1", { className: "skill-set-title" },
            React.createElement("strong", null, "SKILL SET")),
        React.createElement("div", { className: "skill-list" },
            React.createElement("div", { className: "set" },
                React.createElement("div", { className: "list" },
                    React.createElement("h2", null, "// Font-end : "),
                    renderFrontend),
                React.createElement("div", { className: "list" },
                    React.createElement("h2", null, "// Back-end :"),
                    renderBackend)),
            React.createElement("div", { className: "set" },
                React.createElement("div", { className: "list" },
                    React.createElement("h2", null, "// Web Design :"),
                    renderWebDesign),
                React.createElement("div", { className: "list" },
                    React.createElement("h2", null, "// Strategies : "),
                    renderStrategies)))));
}
exports.default = Home;
