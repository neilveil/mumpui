"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Main({ snippet = '', lang = 'text', className, ...props }) {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (ref.current && snippet && lang)
            ref.current.innerHTML = window.Prism.highlight(snippet.trim(), window.Prism.languages[lang], lang);
    }, [lang, snippet]);
    className = 'mumpui mp-code ' + (className || '');
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: (0, jsx_runtime_1.jsx)("pre", { children: (0, jsx_runtime_1.jsx)("code", { ref: ref }) }) }));
}
exports.default = Main;
