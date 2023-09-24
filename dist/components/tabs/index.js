"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ items = [], active, onClick, className = '', ...props }) {
    className = 'mumpui mp-tabs ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: items.map(({ key, label }, i) => ((0, jsx_runtime_1.jsx)("div", { className: active === key ? 'mp-tab-active' : '', onClick: (e) => {
                e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                if (onClick)
                    onClick(key);
            }, children: label }, i))) }));
}
exports.default = Main;
