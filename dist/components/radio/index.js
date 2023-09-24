"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ options = [], checked, onChange, disabled, className = '', style = {}, ...props }) {
    className = 'mumpui mp-radio ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: 'mp-radios ' + className, style: style, children: options.map(({ key, label }, i) => ((0, jsx_runtime_1.jsx)(Radio, { checked: checked === key, _key: key, label: label, onChange: key => !!onChange && !disabled && onChange(key), disabled: disabled }, i))) }));
}
exports.default = Main;
function Radio(props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'mp-radio', children: (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("input", { type: 'radio', checked: props.checked, onChange: () => props.onChange(props._key) }), (0, jsx_runtime_1.jsx)("span", { className: `mp-radio-icon ${props.disabled ? 'mp-disabled' : ''}` }), (0, jsx_runtime_1.jsx)("span", { className: 'mp-radio-label', children: props.label })] }) }));
}
exports.Radio = Radio;
