"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const checkbox_1 = __importDefault(require("../checkbox"));
function Main({ options = [], checked = [], onChange, disabled, className = '', ...props }) {
    className = 'mumpui mp-checkboxes ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: options.map(({ key, label }, i) => ((0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: checked.includes(key), label: label, onChange: _checked => !!onChange && !disabled && onChange(_checked ? checked.concat(key) : checked.filter(x => x !== key)), disabled: disabled }, i))) }));
}
exports.default = Main;
