"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Styles/Projects.css");
function BeerBlog() {
    return (react_1.default.createElement("div", { className: "beerblog" },
        react_1.default.createElement("h1", { className: "beerblogtitle" },
            react_1.default.createElement("strong", null, " BEER BLOG ")),
        react_1.default.createElement("h3", null, "Coming Soon!"),
        react_1.default.createElement("p", { className: "beerblogblurb" }, "I would cringe at every time someone told me that a blog helps you stand out in the tech world. So in the midst of a career change and being in a world of new and uncomfortable territory, I thought what better time to blog about beer! This keeps brewing fresh and sharp and avoiding sounding like a moron trying to talk smart on something I know I shouldn't be giving advice on yet."),
        react_1.default.createElement("p", { className: "beerblogblurb" },
            " ",
            "Here I will be sharing homebrew recipes, most of which will be ones that were on tap at Herald Street. I will also cover some some key concepts for beginners along with tips and how-tos for growing up our own cultures.")));
}
exports.default = BeerBlog;
