"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ className = '', style = {}, autoHeight, onValue, onChange, ...props }) {
    className = 'mumpui mp-textarea ' + className;
    const ref = (0, react_1.useRef)();
    const setHeight = (0, react_1.useCallback)((e) => (e && e.style && autoHeight ? (e.style.height = e.scrollHeight + 'px') : null), [autoHeight]);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setHeight(ref);
        });
    }, [setHeight]);
    (0, react_1.useEffect)(() => {
        setHeight(ref.current);
    }, [props.value, setHeight]);
    const _onChange = (e) => {
        if (!e.target.value)
            e.target.style.height = '';
        else
            setHeight(ref.current);
        if (onChange)
            onChange(e);
        if (onValue)
            onValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: className, style: style, children: (0, jsx_runtime_1.jsx)("textarea", { ...props, ref: ref, onChange: _onChange }) }));
}
exports.default = Main;
