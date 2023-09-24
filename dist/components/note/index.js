"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ className = '', type, ...props }) {
    className = `mumpui mp-note ${type ? type : ''} ${className})`;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: props.children }));
}
exports.default = Main;
