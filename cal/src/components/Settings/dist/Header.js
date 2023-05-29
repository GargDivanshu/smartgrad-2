"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header = function (props) {
    return (react_1["default"].createElement("header", { className: "mx-auto block justify-between pt-8 sm:flex" },
        react_1["default"].createElement("div", { className: "border-subtle mb-8 flex w-full items-center border-b pb-6" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: "font-cal text-emphasis mb-1 text-xl font-bold leading-5 tracking-wide" }, "Profile"),
                react_1["default"].createElement("p", { className: "text-default text-sm ltr:mr-4 rtl:ml-4" }, "Manage settings for your Cal.com profile")),
            react_1["default"].createElement("div", { className: "ms-auto flex-shrink-0" }))));
};
exports["default"] = Header;
