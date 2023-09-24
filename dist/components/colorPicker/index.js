"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ value = '', className = '', onValue, ...props }) {
    className = 'mumpui mp-color-picker ' + className;
    const onChange = (e) => {
        let value = e.target.value;
        value = value
            .split('')
            .filter((x) => x)
            .filter((x) => !!/[#0-9a-f]/i.exec(x))
            .join('')
            .toLowerCase();
        if (!value)
            value = '#';
        if (onValue)
            onValue(value.slice(0, 7));
    };
    value = value.toLocaleLowerCase();
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, children: [(0, jsx_runtime_1.jsx)("input", { className: 'mp-color-picker-swatch', style: { width: '4rem' }, onChange: onChange, type: 'color', value: value }), (0, jsx_runtime_1.jsx)("input", { className: 'mp-color-picker-text', type: 'text', onChange: onChange, value: value })] }));
}
exports.default = Main;
