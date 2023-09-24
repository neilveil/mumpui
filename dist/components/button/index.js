"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ children, primary, className = '', type = 'button', ...props }) {
    className = `mumpui mp-button ${primary ? 'mp-button-primary' : ''}  ${className}`;
    return ((0, jsx_runtime_1.jsx)("button", { ...props, type: type, className: className, disabled: props.disabled, onClick: props.onClick, children: children }));
}
exports.default = Main;
