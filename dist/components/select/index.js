"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const multi_1 = __importDefault(require("./multi"));
const native_1 = __importDefault(require("./native"));
const search_1 = __importDefault(require("./search"));
function Main({ value, options = [], onChange, onSearch, placeholder, clearable = false, disabled = false, className = '', valueHOC = (value) => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value.label }), optionHOC = (option) => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: option.label }), ...props }) {
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
    const _onSelect = (selected) => {
        if (onSearch)
            onSearch('');
        if (onChange)
            onChange(selected);
        setOptionsVisible(false);
    };
    if (value)
        options = options.filter(x => value.key !== x.key);
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, tabIndex: 0, ref: ref, className: className, onClick: () => !disabled && setOptionsVisible(!optionsVisible), children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-select-single', children: value ? valueHOC(value) : placeholder }), optionsVisible && !!(options.length || onSearch) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-input-expanded-area', children: [!!(onSearch || clearable) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-select-area', onClick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                        }, children: [onSearch ? ((0, jsx_runtime_1.jsx)("input", { placeholder: 'Search..', onChange: e => onSearch && onSearch(e.target.value), onKeyUp: e => {
                                    if (e.key === 'Enter') {
                                        if (options.length)
                                            _onSelect(options[0]);
                                    }
                                }, className: 'mp-select-search', autoFocus: true })) : ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-search', children: "\u00A0" })), !!clearable && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-clear', onClick: () => !!onChange && onChange(), children: "Clear" }))] })), options.map((x, i) => ((0, jsx_runtime_1.jsx)("div", { className: 'mp-select-option', onClick: e => {
                            e.stopPropagation();
                            _onSelect(x);
                        }, children: optionHOC(x) }, i)))] }))] }));
}
exports.default = Main;
Main.Multi = multi_1.default;
Main.Native = native_1.default;
Main.search = search_1.default;
