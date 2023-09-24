"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ active, onClick, items = [], access, className = '', ...props }) {
    className = 'mumpui mp-menu ' + className;
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: items.map((item, i) => ((0, jsx_runtime_1.jsx)(MenuItem, { active: active, onClick: onClick, item: item, access: access }, i))) }));
}
exports.default = Main;
const isExpanded = (next = [], active) => {
    for (const x of next)
        if (x.key === active)
            return true;
        else if (x.next?.length)
            return isExpanded(x.next, active);
    return false;
};
function MenuItem({ active, onClick = () => { }, item, access }) {
    const [expanded, setExpanded] = (0, react_1.useState)(isExpanded(item.next, active));
    const isExpandable = !!item.next?.length;
    if (access && item.access && item.access.length) {
        if (!access.length)
            return null;
        if (typeof item.access === 'string')
            item.access = [item.access];
        let allowed = false;
        for (const _access of access)
            if (!allowed && item.access.includes(_access))
                allowed = true;
        if (!allowed)
            return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: `mp-menu-item ${active === item.key ? 'mp-menu-item-active' : ''} ${isExpandable ? 'mp-menu-item-expandable' : ''}`, onClick: () => (isExpandable ? setExpanded(!expanded) : onClick(item.key)), children: [(0, jsx_runtime_1.jsxs)("div", { children: [!!item.icon && (0, jsx_runtime_1.jsx)("span", { className: 'mp-menu-item-icon', children: item.icon }), (0, jsx_runtime_1.jsx)("span", { className: 'mp-menu-item-name', children: item.label })] }), isExpandable && (expanded ? arrow(true) : arrow())] }), !!(isExpandable && expanded) &&
                item.next?.map((item, i) => ((0, jsx_runtime_1.jsx)("div", { className: 'mp-menu-item-group', children: (0, jsx_runtime_1.jsx)(MenuItem, { active: active, onClick: onClick, item: item, access: access }) }, i)))] }));
}
const arrow = (rotate) => ((0, jsx_runtime_1.jsx)("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 128 128', fill: 'none', style: {
        transform: rotate ? 'rotate(90deg)' : '',
        transition: 'all 200ms ease'
    }, className: 'mp-menu-item-expand-icon', children: (0, jsx_runtime_1.jsx)("path", { d: 'M44 24L84 64L44 104', stroke: 'var(--mp-c-font-light)', strokeWidth: '16', strokeLinecap: 'round' }) }));
