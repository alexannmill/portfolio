"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carousel_1 = __importDefault(require("react-bootstrap/Carousel"));
const HungyDev_1 = __importDefault(require("./Projects/HungyDev"));
const Interviewer_1 = __importDefault(require("./Projects/Interviewer"));
const Jungle_1 = __importDefault(require("./Projects/Jungle"));
const Safeguardian_1 = __importDefault(require("./Projects/Safeguardian"));
const WhatsBrewin_1 = __importDefault(require("./Projects/WhatsBrewin"));
require("./Styles/Projects.css");
function Projects() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "projects" },
            React.createElement(Carousel_1.default, null,
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement(Safeguardian_1.default, null)),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement(WhatsBrewin_1.default, null)),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement(HungyDev_1.default, null)),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement(Interviewer_1.default, null)),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement(Jungle_1.default, null))))));
}
exports.default = Projects;
