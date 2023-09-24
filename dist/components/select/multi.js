"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ value = [], options = [], onChange, onSearch, placeholder, clearable = false, disabled = false, className = '', optionHOC = (option) => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: option.label }), ...props }) {
    const [optionsVisible, setOptionsVisible] = (0, react_1.useState)(false);
    className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '');
    const ref = (0, react_1.useRef)(null);
    placeholder = (0, jsx_runtime_1.jsx)("div", { style: { color: 'var(--mp-c-placeholder)' }, children: placeholder || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "\u00A0" }) });
    const clickListener = e => {
        if (ref.current && !ref.current.contains(e.target))
            setOptionsVisible(false);
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('click', clickListener);
        return () => window.removeEventListener('click', clickListener);
    }, []);
    const _onChange = (selected) => {
        if (onSearch)
            onSearch('');
        if (onChange)
            onChange(value.concat(selected));
        const inputEl = ref.current.querySelector('input');
        if (inputEl) {
            inputEl.value = '';
            inputEl.focus();
        }
    };
    const selectedKey = value.map(x => x.key);
    const valueEl = value.map((x, i) => ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-select-chip', children: [x.label, (0, jsx_runtime_1.jsx)(CrossIcon, { color: 'var(--mp-c-font-light)', onClick: e => {
                    if (disabled)
                        return;
                    e.stopPropagation();
                    if (onChange)
                        onChange(value.filter(y => y.key !== x.key));
                } })] }, i)));
    options = options.filter(x => !selectedKey.includes(x.key));
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, tabIndex: 0, ref: ref, className: className, onClick: () => !disabled && setOptionsVisible(!optionsVisible), children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-select-multi', children: value.length ? valueEl : placeholder }), optionsVisible && !!(options.length || onSearch) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-input-expanded-area', children: [!!(onSearch || clearable) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-select-area', onClick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                        }, children: [onSearch ? ((0, jsx_runtime_1.jsx)("input", { placeholder: 'Search..', onChange: e => onSearch && onSearch(e.target.value), onKeyUp: e => {
                                    if (e.key === 'Enter') {
                                        if (options.length)
                                            _onChange(options[0]);
                                    }
                                }, className: 'mp-select-search', autoFocus: true })) : ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-search', children: "\u00A0" })), !!clearable && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-clear', onClick: () => !!onChange && onChange([]), children: "Clear" }))] })), options.map((x, i) => ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-option', onClick: e => {
                            e.stopPropagation();
                            _onChange(x);
                        }, children: optionHOC(x) }, i)))] }))] }));
}
exports.default = Main;
const CrossIcon = ({ color = '#000000', onClick }) => ((0, jsx_runtime_1.jsxs)("svg", { onClick: onClick, width: '128', height: '128', viewBox: '0 0 128 128', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M12 12L116.652 116.652', stroke: color, strokeWidth: '18', strokeLinecap: 'round' }), (0, jsx_runtime_1.jsx)("path", { d: 'M116.652 12L12 116.652', stroke: color, strokeWidth: '18', strokeLinecap: 'round' })] }));
