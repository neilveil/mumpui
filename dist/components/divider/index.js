"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ children, align = 'center', className = '', ...props }) {
    const isEmpty = children === undefined;
    className = `mumpui mp-divider ${isEmpty ? 'mp-divider-empty' : ''} ${className}`;
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, children: [(0, jsx_runtime_1.jsx)("div", { style: align === 'left' ? { width: '10vw' } : {}, className: 'mp-divider-line' }), !isEmpty && (0, jsx_runtime_1.jsx)("div", { className: 'mp-divider-text', children: children }), (0, jsx_runtime_1.jsx)("div", { style: align === 'right' ? { width: '10vw' } : {}, className: 'mp-divider-line' })] }));
}
exports.default = Main;
