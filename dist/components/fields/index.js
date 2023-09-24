"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ autoCol = false, colBreakPoint = 1080, className = '', style = {}, ...props }) {
    className = 'mumpui mp-fields ' + (className || '');
    if (autoCol && window.innerWidth <= colBreakPoint)
        style.flexDirection = 'column';
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, style: style, children: props.children }));
}
exports.default = Main;
