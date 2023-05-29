"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Animated = function (props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("svg", { width: "200", height: "200", viewBox: "0 0 200 200" },
            react_1["default"].createElement("path", { d: "M 20 20 L 180 180 M 20 180 L 180 20", stroke: "#333", "stroke-width": "10", "stroke-linecap": "round", "stroke-dasharray": "0 200", "stroke-dashoffset": "0" },
                react_1["default"].createElement("animate", { attributeName: "stroke-dasharray", from: "0 200", to: "200 200", dur: "2s", begin: "0s", fill: "freeze" }),
                react_1["default"].createElement("animate", { attributeName: "stroke-dashoffset", from: "0", to: "200", dur: "2s", begin: "0s", fill: "freeze" })))));
};
exports["default"] = Animated;
