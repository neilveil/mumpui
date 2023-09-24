"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Checkbox({ checked, label, onChange, disabled, className = '', ...props }) {
    className = `mumpui mp-checkbox ${className}`;
    return ((0, jsx_runtime_1.jsx)("div", { className: className, children: (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("input", { ...props, type: 'checkbox', checked: checked, onChange: () => !!onChange && !disabled && onChange(!checked) }), (0, jsx_runtime_1.jsx)("span", { className: `mp-checkbox-icon ${disabled ? 'mp-disabled' : ''}` }), (0, jsx_runtime_1.jsx)("span", { className: 'mp-checkbox-label', children: label })] }) }));
}
exports.default = Checkbox;
