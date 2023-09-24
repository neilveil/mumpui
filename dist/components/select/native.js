"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ value, options = [], onChange, disabled = false, className = '', ...props }) {
    const [optionsVisible, setOptionsVisible] = (0, react_1.useState)(false);
    className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '');
    const ref = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)("div", { ...props, tabIndex: 0, ref: ref, className: className, onClick: () => !disabled && setOptionsVisible(!optionsVisible), children: (0, jsx_runtime_1.jsx)("select", { className: 'mp-select-single', value: value, onChange: e => !!onChange && !disabled && onChange(e.target.value), disabled: disabled, children: options.map((x, i) => ((0, jsx_runtime_1.jsx)("option", { value: x.key, children: x.label }, i))) }) }));
}
exports.default = Main;
