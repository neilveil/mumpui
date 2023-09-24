"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ empty, children, className = '', ...props }) {
    className = `mumpui mp-loader ${className || ''})`;
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, children: [(0, jsx_runtime_1.jsx)("svg", { viewBox: '25 25 50 50', children: (0, jsx_runtime_1.jsx)("circle", { cx: '50', cy: '50', r: '20' }) }), !empty && (0, jsx_runtime_1.jsx)("div", { className: 'mp-loader-text', children: children === undefined ? 'Loading..' : children })] }));
}
exports.default = Main;
