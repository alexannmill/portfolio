"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Carousel_1 = __importDefault(require("react-bootstrap/Carousel"));
const HungyDev_1 = __importDefault(require("./Projects/HungyDev"));
const Interviewer_1 = __importDefault(require("./Projects/Interviewer"));
const Jungle_1 = __importDefault(require("./Projects/Jungle"));
const Safeguardian_1 = __importDefault(require("./Projects/Safeguardian"));
const WhatsBrewin_1 = __importDefault(require("./Projects/WhatsBrewin"));
require("./Styles/Projects.css");
function Projects() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "projects" },
            react_1.default.createElement(Carousel_1.default, null,
                react_1.default.createElement(Carousel_1.default.Item, null,
                    react_1.default.createElement(Safeguardian_1.default, null)),
                react_1.default.createElement(Carousel_1.default.Item, null,
                    react_1.default.createElement(WhatsBrewin_1.default, null)),
                react_1.default.createElement(Carousel_1.default.Item, null,
                    react_1.default.createElement(HungyDev_1.default, null)),
                react_1.default.createElement(Carousel_1.default.Item, null,
                    react_1.default.createElement(Interviewer_1.default, null)),
                react_1.default.createElement(Carousel_1.default.Item, null,
                    react_1.default.createElement(Jungle_1.default, null))))));
}
exports.default = Projects;
