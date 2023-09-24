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
const icons = __importStar(require("./icons"));
class Main extends react_1.default.Component {
    static props = {};
    state = { messages: [] };
    static _this;
    static max = 3;
    static duration = 3000;
    static info = (text = '', duration) => Main.pushMessage({ icon: icons.info, text, duration });
    static warn = (text = '', duration) => Main.pushMessage({ icon: icons.warn, text, duration });
    static success = (text = '', duration) => Main.pushMessage({ icon: icons.success, text, duration });
    static error = (text = '', duration) => Main.pushMessage({ icon: icons.error, text, duration });
    static loading = (text = '', duration) => Main.pushMessage({ icon: icons.loading, text, duration });
    static clear = (id) => Main._this.setState({ messages: id ? Main._this.state.messages.filter(x => x.id !== id) : [] });
    static pushMessage = ({ icon, text, duration }) => {
        if (duration === 0)
            duration = 5000000000000;
        if (!duration)
            duration = Main.duration;
        const message = {
            id: Symbol(),
            icon: icon,
            type: 'info',
            text,
            expiry: Date.now() + duration
        };
        Main._this.setState({ messages: Main._this.state.messages.concat(message) });
        if (duration)
            setTimeout(Main.messageCleaner, duration);
        return message.id;
    };
    static messageCleaner = () => Main._this.setState({ messages: Main._this.state.messages.filter(x => x.expiry > Date.now()).slice(-Main.max) });
    componentDidMount = () => (Main._this = this);
    render = () => {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'mumpui mp-message', children: this.state.messages.slice(-Main.max).map((x, i) => ((0, jsx_runtime_1.jsx)(Message, { ...x }, i))) }));
    };
}
exports.default = Main;
const Message = ({ icon, text }) => ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: 'mp-message-box', children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-message-icon', children: icon }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-message-text', children: text })] }) }));
