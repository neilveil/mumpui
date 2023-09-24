"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Main({ children, visible = true, onClose, className = '', ...props }) {
    className = 'mumpui mp-modal';
    return visible ? ((0, jsx_runtime_1.jsx)("div", { className: className, onClick: e => {
            if (props.onClick)
                props.onClick(e);
            if (onClose)
                onClose();
        }, children: (0, jsx_runtime_1.jsx)("div", { ...props, className: 'mp-modal-box', onClick: e => e.stopPropagation(), children: children }) })) : null;
}
exports.default = Main;
