"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ clean = false, className = '', style = {}, onSubmit, ...props }) {
    const _onSubmit = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        if (onSubmit)
            onSubmit(e);
    }, [onSubmit]);
    className = 'mumpui mp-form ' + className;
    return ((0, jsx_runtime_1.jsxs)("form", { ...props, className: className, style: style, onSubmit: _onSubmit, ...(clean ? cleanConfig : {}), children: [props.children, (0, jsx_runtime_1.jsx)("button", { style: { display: 'none' }, type: 'submit', onClick: e => _onSubmit(e) })] }));
}
exports.default = Main;
const cleanConfig = {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: false
};
