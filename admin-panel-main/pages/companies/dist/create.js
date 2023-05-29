"use strict";
exports.__esModule = true;
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var Menubar_1 = require("@/components/Editor/Menubar");
var DropDown_1 = require("@/components/ui/DropDown");
var Create = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "max-w-[950px] min-w-full overflow-x-hidden " },
            react_1["default"].createElement("form", { className: "border-[1px] border-lightgrayBg rounded-lg p-4" },
                react_1["default"].createElement("div", { className: "grid grid-cols-2" },
                    react_1["default"].createElement("div", { className: "grid grid-rows-3 max-w-[350px]" },
                        react_1["default"].createElement("div", { className: "w-full h-[37px] m-3" },
                            react_1["default"].createElement(input_1.Input, { className: "max-w-[350px]", type: "text", placeholder: "Company Name" })),
                        react_1["default"].createElement("div", { className: "max-w-[350px] h-[37px] m-3" },
                            react_1["default"].createElement(input_1.Input, { className: "max-w-[350px]", type: "text", placeholder: "Tagline" })),
                        react_1["default"].createElement("div", { className: "max-w-[350px] h-[37px] m-3" },
                            react_1["default"].createElement(input_1.Input, { className: "max-w-[350px]", type: "text", placeholder: "Tags" }))),
                    react_1["default"].createElement("div", { className: "overflow-hidden w-[550px] max-w-[550px] max-h-[190px]" },
                        react_1["default"].createElement(Menubar_1["default"], { placeholder: "as" }))),
                react_1["default"].createElement("div", { className: "flex flex-row mt-6" },
                    react_1["default"].createElement("div", { className: "w-[750px] min-h-[400px] m-2 my-auto leading" },
                        react_1["default"].createElement(Menubar_1["default"], { placeholder: "asdad" })),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center " },
                        react_1["default"].createElement("div", { className: "h-[90px] mb-5 text-white rounded-full w-[90px] bg-black" }, "Logo URL"),
                        react_1["default"].createElement("div", { className: "w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(input_1.Input, { placeholder: "Logo URL" })),
                        react_1["default"].createElement("div", { className: "w-[120px] min-w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(DropDown_1["default"], { text: "No. of E", options: ["1-10", "11-25", "26-50", "51-100", "100+"] })),
                        react_1["default"].createElement("div", { className: "w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(input_1.Input, { className: "text-sm w-[120px] max-w-[120px]", placeholder: "No of M" })),
                        react_1["default"].createElement("div", { className: "w-[92px] min-w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(input_1.Input, { type: "text", placeholder: "Funding" })))),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("div", { className: "w-[320px] h-[340px] max-h-[340px] m-2" }),
                    react_1["default"].createElement("div", { className: "w-[550px] h-[340px] max-h-[340px] m-2" })),
                react_1["default"].createElement("div", { className: "flex justify-end w-[875px]" })))));
};
exports["default"] = Create;
