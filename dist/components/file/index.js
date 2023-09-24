"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ children, className = '', style = {}, ...props }) {
    className = 'mumpui mp-file ' + (className || '');
    const ref = (0, react_1.useRef)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, style: style, onClick: () => ref.current.click(), children: [(0, jsx_runtime_1.jsx)("input", { ...props, ref: ref, type: 'file' }), children] }));
}
exports.default = Main;
