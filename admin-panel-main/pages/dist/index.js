"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
var dynamic_1 = require("next/dynamic");
var swr_1 = require("swr");
var button_1 = require("@/components/ui/button");
var Event_1 = require("@/components/Events/Event");
var inter = google_1.Inter({ subsets: ['latin'] });
var Table = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('@/components/Table'); }); }, {
    ssr: false
});
function Home() {
    var fetcher = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fetch.apply(void 0, args).then(function (res) { return res.json(); });
    };
    var headings = ["company", "Designation", "Experience"];
    var _a = swr_1["default"]("https://api.publicapis.org/entries", fetcher), data = _a.data, error = _a.error;
    console.log(data);
    var content = [
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs"
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs"
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs"
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs"
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: inter.className + " flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0" },
            React.createElement("header", { className: 'flex w-full max-w-full items-center truncate' },
                React.createElement("div", { className: 'w-full truncate ltr:mr-4 rtl:ml-4 md:block' },
                    React.createElement("h3", { className: 'font-cal max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold sm:text-xl md:block xl:max-w-full tracking-normal hidden' }, "Event Types"),
                    React.createElement("p", { className: 'text-default hidden text-sm md:block' }, "Create events to share for people to book on your calendar.")),
                React.createElement(button_1.Button, { className: 'inline-flex items-center text-sm font-medium relative rounded-full justify-center md:rounded-md transition-transform !shadow-none px-4 py-2.5 hover:bg-[#696969] text-inverted bg-[#292929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-brand h-14 md:h-9 md:w-auto md:px-4 md:py-2.5' },
                    React.createElement("div", { className: 'max-h-fit items-center flex flex-row justify-center ' },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "hidden font-bold h-4 text-inverted w-4 stroke-[1.5px] ltr:mr-2 ltr:-ml-1 rtl:-mr-1 rtl:ml-2 md:inline-flex" },
                            React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                            React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" })),
                        React.createElement("span", { className: 'font-medium items-center justify-center text-inverted relative hidden md:inline' }, "New"))))),
        React.createElement("div", { className: '' },
            React.createElement("div", { className: 'bg-default border-subtle mb-16 flex overflow-hidden rounded-md border' },
                React.createElement("ul", { className: 'divide-subtle !static w-full divide-y' },
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null),
                    React.createElement(Event_1["default"], null))))));
}
exports["default"] = Home;
