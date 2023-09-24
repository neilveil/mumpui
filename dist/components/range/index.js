"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ onChange, onValue, className = '', style = {}, ...props }) {
    className = 'mumpui mp-range ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { className: className, style: style, children: (0, jsx_runtime_1.jsx)("input", { ...props, type: 'range', onChange: e => {
                if (onChange)
                    onChange(e);
                if (onValue)
                    onValue(Number(e.target.value));
            } }) }));
}
exports.default = Main;
