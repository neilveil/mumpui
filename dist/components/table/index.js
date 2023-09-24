"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ cols, data, className = '', style = {}, ...props }) {
    className = 'mumpui mp-table ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { className: className, style: style, children: (0, jsx_runtime_1.jsxs)("table", { ...props, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: cols.map((x, i) => ((0, jsx_runtime_1.jsx)("th", { align: x.align || 'left', style: { width: x.width }, children: x.name }, i))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map((x, i) => ((0, jsx_runtime_1.jsx)("tr", { children: cols.map((y, j) => ((0, jsx_runtime_1.jsx)("td", { style: { width: y.width, textAlign: y.align }, children: y.render ? y.render(x[y.key], x, [i, j]) : x[y.key] }, j))) }, i))) })] }) }));
}
exports.default = Main;
