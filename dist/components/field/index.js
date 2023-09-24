"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ className = '', style = {}, label, ...props }) {
    className = 'mumpui mp-field ' + className;
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, style: style, children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-label', children: label ? label : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "\u00A0" }) }), props.children] }));
}
exports.default = Main;
