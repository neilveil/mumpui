"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../button"));
const icons = __importStar(require("../message/icons"));
class Main extends react_1.default.Component {
    state = {
        data: []
    };
    static _this;
    static init = ({ title = '', description, confirmText, cancelText, onConfirm, onCancel, type }) => {
        Main._this.setState({
            data: Main._this.state.data.concat({
                id: Math.random(),
                title,
                description,
                confirmText: confirmText || 'Confirm',
                cancelText: cancelText || 'Cancel',
                onConfirm,
                onCancel,
                type
            })
        });
    };
    static clear = () => Main._this.setState({ data: [] });
    componentDidMount = () => (Main._this = this);
    close = (id) => this.setState({ data: this.state.data.filter(x => x.id !== id) });
    render = () => {
        return this.state.data.map((x, i) => ((0, jsx_runtime_1.jsx)("div", { className: 'mumpui mp-confirm', onClick: e => {
                e.stopPropagation();
                this.close(x.id);
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: 'mp-confirm-dialog', onClick: e => e.stopPropagation(), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mp-confirm-title', children: [!!x.type && icons[x.type], x.title] }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-confirm-description', children: x.description }), (0, jsx_runtime_1.jsxs)("div", { className: 'mp-confirm-buttons', children: [(0, jsx_runtime_1.jsx)(button_1.default, { onClick: () => {
                                    this.close(x.id);
                                    if (x.onCancel)
                                        x.onCancel();
                                }, style: { border: 'none' }, children: x.cancelText || '' }), (0, jsx_runtime_1.jsx)(button_1.default, { onClick: () => {
                                    this.close(x.id);
                                    if (x.onConfirm)
                                        x.onConfirm();
                                }, style: { marginLeft: '1rem' }, primary: true, children: x.confirmText || '' })] })] }) }, i)));
    };
}
exports.default = Main;
