"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ className = '', items = [], seperator = '/', ...props }) {
    className = 'mumpui mp-chain ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: items.map((x, i) => [
            (0, jsx_runtime_1.jsx)("div", { className: 'mp-chain-element', children: x }, 'l' + i),
            items.length - 1 !== i && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-chain-seperator', children: seperator }, 's' + i))
        ]) }));
}
exports.default = Main;
