"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ prefix, onPrefixClick, suffix, onSuffixClick, className = '', style = {}, onValue, onChange, ...props }) {
    className = 'mumpui mp-input ' + className;
    style = Object.assign({}, style);
    const _onChange = (e) => {
        if (onChange)
            onChange(e);
        if (onValue)
            onValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, style: style, children: [prefix && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-prefix', onClick: onPrefixClick, style: { cursor: onPrefixClick ? 'pointer' : '' }, children: prefix })), (0, jsx_runtime_1.jsx)("input", { ...props, onChange: _onChange }), suffix && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-suffix', onClick: onSuffixClick, style: { cursor: onSuffixClick ? 'pointer' : '' }, children: suffix }))] }));
}
exports.default = Main;
