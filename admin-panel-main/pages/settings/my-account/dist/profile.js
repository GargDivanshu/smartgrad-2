"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var input_1 = require("@/components/ui/input");
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var Menubar_1 = require("@/components/Editor/Menubar");
var label_1 = require("@/components/ui/label");
var SettingsWrapper_1 = require("@/components/Settings/SettingsWrapper");
var Profile = function (props) {
    return (react_1["default"].createElement(SettingsWrapper_1["default"], null,
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "flex" },
                react_1["default"].createElement(image_1["default"], { height: 25, width: 25, alt: "Profile Pic", className: "w-[67px] h-[67px] rounded-full", src: "https://www.gravatar.com/avatar/fallback?s=160&d=mp&r=PG" }),
                react_1["default"].createElement("button", { className: "w-[130px] h-9 font-[500] rounded-md border-[1px] my-auto mx-[16px] text-[0.875rem] border-lightgray" }, "Change Avatar")),
            react_1["default"].createElement("div", { className: 'mt-8' },
                react_1["default"].createElement("h1", { className: "my-[5px] text-[0.875rem] font-medium" }, "Username"),
                react_1["default"].createElement("div", { className: "flex rounded-md" },
                    react_1["default"].createElement("span", { className: "border-default bg-muted text-subtle hidden h-9 items-center rounded-l-md border border-r-0 px-3 text-sm md:inline-flex" }, "cal.com/"),
                    react_1["default"].createElement("div", { className: 'w-full relative' },
                        react_1["default"].createElement(input_1.Input, { className: "hover:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default min-h-9 disabled:bg-subtle block py-2 px-3 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1 disabled:cursor-not-allowed w-full mb-0 mt-0 rounded-md rounded-l-none font-sans text-sm leading-4 focus:!ring-0 border focus:border border-l-default" })))),
            react_1["default"].createElement("div", { className: 'mt-8' },
                react_1["default"].createElement(label_1.Label, { className: 'text-emphasis mb-2 block text-sm font-medium' }, "Full Name"),
                react_1["default"].createElement(input_1.Input, { placeholder: 'Full name' })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(label_1.Label, { className: 'text-emphasis mb-2 block text-sm font-medium' }, "Email"),
                react_1["default"].createElement(input_1.Input, { placeholder: 'Email' })),
            react_1["default"].createElement("h1", { className: "text-default text-[0.875rem]" }, "You may need to log out and back in to see any change take effect"),
            react_1["default"].createElement("h1", { className: "mt-[30px] font-[500] text-[0.875rem] mb-[10px]" }, "About"),
            react_1["default"].createElement("div", { className: "h-[96px] " },
                react_1["default"].createElement(Menubar_1["default"], { placeholder: "what not " })),
            react_1["default"].createElement("div", { className: "border-b border-emphasis" },
                react_1["default"].createElement("button", { className: "bg-[#eaeaea]  text-[0.875rem] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]", disabled: true }, "Update")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: " text-[0.875rem] font-semibold pt-[28px]" }, "Danger Zone"),
                react_1["default"].createElement("button", { className: "py-[6px] text-[0.875rem] px-[8px] mt-[15px] rounded-md flex border-[1px] border-lightgray border-md" },
                    react_1["default"].createElement(ai_1.AiOutlineDelete, { className: "my-auto mr-2" }),
                    react_1["default"].createElement("span", null, "Delete Account"))))));
};
exports["default"] = Profile;
