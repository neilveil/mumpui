"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ closeOnClick = true, disabled, value = '', onChange, children, className, onClick, placeholder, ...props }) {
    const [optionsVisible, setOptionsVisible] = (0, react_1.useState)(false);
    className = 'mumpui mp-search ' + (disabled ? 'mp-disabled ' : '') + (className || '');
    const ref = (0, react_1.useRef)();
    const clickListener = e => {
        if (ref.current && !ref.current.contains(e.target))
            setOptionsVisible(false);
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('click', clickListener);
        return () => window.removeEventListener('click', clickListener);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, ref: ref, className: className, children: [(0, jsx_runtime_1.jsx)("input", { onChange: e => {
                    if (onChange)
                        onChange(e.target.value);
                }, onClick: e => {
                    if (onClick)
                        onClick(e);
                    if (!disabled)
                        setOptionsVisible(!optionsVisible);
                }, value: value, disabled: disabled, placeholder: placeholder }), !!optionsVisible && ((0, jsx_runtime_1.jsx)("div", { onClick: () => closeOnClick && setOptionsVisible(!optionsVisible), className: 'mp-input-expanded-area', children: children }))] }));
}
exports.default = Main;
