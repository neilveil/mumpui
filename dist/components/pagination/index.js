"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ pageSize = 10, totalItems = 0, offset = 0, onChange, disabled, className = '', ...props }) {
    className = 'mumpui mp-pagination ' + className;
    const _onChange = (pageNumber) => {
        if (disabled)
            return;
        if (pageNumber.toString() === 'NaN' || pageNumber < 1 || pageNumber > Math.ceil(totalItems / pageSize)) {
            setPageNumber(1);
            if (onChange)
                onChange(0);
            return;
        }
        const offset = (pageNumber - 1) * pageSize;
        if (onChange)
            onChange(offset);
    };
    const [pageNumber, setPageNumber] = (0, react_1.useState)(Math.ceil(offset / pageSize) + 1);
    const pages = Math.ceil(totalItems / pageSize);
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, className: className, children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-pagination-left-arrow ' + (pageNumber <= 1 ? 'mp-pagination-disabled' : ''), onClick: () => {
                    if (pageNumber > 1) {
                        const _pageNumber = pageNumber - 1;
                        setPageNumber(_pageNumber);
                        _onChange(_pageNumber);
                    }
                }, children: arrow(true) }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-pagination-page-number', children: (0, jsx_runtime_1.jsx)("input", { type: 'number', value: pageNumber, min: 1, onChange: e => setPageNumber(parseInt(e.target.value)), onBlur: () => _onChange(pageNumber), onKeyUp: (e) => {
                        if (e.key === 'Enter') {
                            _onChange(pageNumber);
                            e.target.blur();
                        }
                    }, style: { width: (pageNumber || 0).toString().length + 1 + 'ch' }, placeholder: '..' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-pagination-seperator', children: "/" }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-pagination-pages', children: pages }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-pagination-right-arrow ' + (pageNumber >= pages ? 'mp-pagination-disabled' : ''), onClick: () => {
                    if (pageNumber < pages) {
                        const _pageNumber = pageNumber + 1;
                        setPageNumber(_pageNumber);
                        _onChange(_pageNumber);
                    }
                }, children: arrow() })] }));
}
exports.default = Main;
const arrow = (rotate) => ((0, jsx_runtime_1.jsx)("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 128 128', fill: 'none', style: { transform: rotate ? 'rotate(180deg)' : '' }, className: 'mp-menu-item-expand-icon', children: (0, jsx_runtime_1.jsx)("path", { d: 'M44 24L84 64L44 104', stroke: 'var(--mp-c-font-light)', strokeWidth: '16', strokeLinecap: 'round' }) }));
