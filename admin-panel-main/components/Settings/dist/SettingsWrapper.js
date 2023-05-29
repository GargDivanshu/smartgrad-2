"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./Header");
var SettingsWrapper = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0" }),
        react_1["default"].createElement("div", { className: 'flex flex-1 flex-col' },
            react_1["default"].createElement("div", { className: 'flex flex-1 [&>*]:flex-1' },
                react_1["default"].createElement("div", { className: 'mx-auto max-w-full justify-center md:max-w-3xl' },
                    react_1["default"].createElement(Header_1["default"], null),
                    props.children)))));
};
exports["default"] = SettingsWrapper;
