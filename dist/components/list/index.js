"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function ListMaker({ items = [], type = 'ul', isTop = false }) {
    const list = items.map((x, i) => typeof x === 'string' ? (0, jsx_runtime_1.jsx)("li", { children: x }, i) : (0, jsx_runtime_1.jsx)(ListMaker, { items: x, type: type, isTop: false }, i));
    if (isTop)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: list });
    return type === 'ul' ? (0, jsx_runtime_1.jsx)("ul", { children: list }) : (0, jsx_runtime_1.jsx)("ol", { children: list });
}
function Main({ items = [], type = 'ul', className = '', ...props }) {
    className = `mumpui mp-list ${className}`;
    const list = (0, jsx_runtime_1.jsx)(ListMaker, { items: items, type: type, isTop: true });
    return type === 'ul' ? ((0, jsx_runtime_1.jsx)("ul", { ...props, className: className, children: list })) : ((0, jsx_runtime_1.jsx)("ol", { ...props, className: className, children: list }));
}
exports.default = Main;
