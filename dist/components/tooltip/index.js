"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ className = '', label, position = 'top', delay, ...props }) {
    className = 'mumpui mp-tooltip ' + className;
    delay = delay !== undefined ? delay : Main.delay;
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, children: [props.children, (0, jsx_runtime_1.jsx)("div", { style: { animationDelay: delay.toString() + 'ms' }, className: 'mp-tooltip-text mp-tooltip-' + position, children: label })] }));
}
exports.default = Main;
Main.delay = 300;
