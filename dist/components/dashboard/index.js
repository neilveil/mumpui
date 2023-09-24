"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const menu_1 = __importDefault(require("../menu"));
const button_1 = __importDefault(require("../button"));
const input_1 = __importDefault(require("../input"));
const pagination_1 = __importDefault(require("../pagination"));
const loader_1 = __importDefault(require("../loader"));
const placeholder_1 = __importDefault(require("../placeholder"));
function Main(props) {
    const [menuItemActive, setMenuItemSelected] = (0, react_1.useState)(window.location.pathname);
    const [expandable, setExpandable] = (0, react_1.useState)(false);
    const toggleSidebar = () => setExpandable(!expandable);
    window.toggleSidebar = toggleSidebar;
    const sidebarItems = sidebarItemsGenerator(props.sidebarItems);
    const focusSearch = (e) => {
        const isSearchFocused = window.document.activeElement?.id === 'mp-dashboard-search';
        const searchEl = document.querySelector('#mp-dashboard-search');
        if (!searchEl)
            return;
        if (e.key === '/' && !isSearchFocused)
            searchEl.focus();
        else if (e.key === 'Escape' && isSearchFocused)
            searchEl.blur();
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('keyup', focusSearch);
        return () => window.removeEventListener('keyup', focusSearch);
    }, []);
    const sidebar = ((0, jsx_runtime_1.jsxs)("div", { className: props.sidebarClassName || '', style: props.sidebarStyle || {}, children: [!!props.sidebarImg && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-sidebar-icon', children: (0, jsx_runtime_1.jsx)("img", { src: props.sidebarImg, alt: '' }) })), (0, jsx_runtime_1.jsx)(menu_1.default, { active: menuItemActive, onClick: selected => {
                    if (props.onSidebarClick)
                        props.onSidebarClick(selected.toString());
                    setMenuItemSelected(selected.toString());
                }, items: sidebarItems, access: props.sidebarAccess })] }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'mumpui mp-dashboard ' + (props.className || ''), style: props.style || {}, children: [(0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-sidebar', children: sidebar }), !!expandable && ((0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-expandable', onClick: () => toggleSidebar(), children: (0, jsx_runtime_1.jsx)("div", { onClick: e => e.stopPropagation(), children: sidebar }) })), (0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-content', children: [!!(props.header || props.title) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-header ' + (props.headerClassName || ''), style: props.headerStyle || {}, children: [!!props.header && props.header, (0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-header-row', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-header-left', children: [!!props.icon && (0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-icon', children: props.icon }), (0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-expandable-icon', onClick: toggleSidebar, children: menuIcon }), (0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-title', children: [props.title, !!props.info && (0, jsx_runtime_1.jsx)("span", { className: 'mp-dashboard-info', children: props.info })] })] }), !!props.onAdd && ((0, jsx_runtime_1.jsx)(button_1.default, { className: 'mp-dashboard-button-add', onClick: props.onAdd, children: "+\u00A0\u00A0Add" }))] }), !!props.headerSuffix && props.headerSuffix] })), (0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-body', children: props.loading ? ((0, jsx_runtime_1.jsx)(loader_1.default, {})) : props.empty ? ((0, jsx_runtime_1.jsx)(placeholder_1.default, {})) : ((0, jsx_runtime_1.jsxs)("div", { className: props.bodyClassName || '', style: props.bodyStyle || {}, children: [!!(props.onSearch || props.filter) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-body-search-and-filter', children: [(0, jsx_runtime_1.jsx)("div", { children: !!props.onSearch && ((0, jsx_runtime_1.jsx)(input_1.default, { id: 'mp-dashboard-search', value: props.search, onChange: e => props.onSearch && props.onSearch(e.target.value), placeholder: 'Search..' })) }), (0, jsx_runtime_1.jsx)("div", { children: props.filter })] })), !!props.children && props.children] })) }), (!!props.footer ||
                        !!props.paginationTotalItems ||
                        !!props.onDelete ||
                        !!props.onCreate ||
                        !!props.onUpdate) && ((0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-footer ' + (props.footerClassName || ''), style: props.footerStyle || {}, children: [!!props.footer && props.footer, (0, jsx_runtime_1.jsx)("div", { className: 'mp-dashboard-pagination', children: !!props.paginationTotalItems && ((0, jsx_runtime_1.jsx)(pagination_1.default, { pageSize: props.paginationPageSize || 0, totalItems: props.paginationTotalItems, offset: props.paginationOffset || 0, onChange: props.paginationOnChange || (() => { }) })) }), (0, jsx_runtime_1.jsxs)("div", { className: 'mp-dashboard-footer-buttons', children: [(0, jsx_runtime_1.jsx)("div", { children: !!props.onDelete && ((0, jsx_runtime_1.jsx)(button_1.default, { className: 'mp-dashboard-button-delete', onClick: props.onDelete, children: "Delete" })) }), (0, jsx_runtime_1.jsx)("div", { children: (!!props.onCreate || !!props.onUpdate) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.default, { className: 'mp-dashboard-button-cancel', style: { marginRight: '1rem' }, onClick: () => (props.onCancel ? props.onCancel() : window.history.back()), children: "Cancel" }), props.onCreate ? ((0, jsx_runtime_1.jsx)(button_1.default, { className: 'mp-dashboard-button-create', onClick: props.onCreate, children: "Create" })) : ((0, jsx_runtime_1.jsx)(button_1.default, { className: 'mp-dashboard-button-update', onClick: props.onUpdate, children: "Update" }))] })) })] })] }))] })] }));
}
exports.default = Main;
const sidebarItemsGenerator = (sidebar = []) => sidebar.map(({ name, icon, path, next, access }) => ({
    key: path || Math.random(),
    label: name,
    icon,
    next: next ? sidebarItemsGenerator(next) : [],
    access
}));
const menuIcon = ((0, jsx_runtime_1.jsxs)("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'var(--mp-c-font)', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M0,0h24v24H0V0z', fill: 'none' }), (0, jsx_runtime_1.jsx)("path", { d: 'M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z' })] }));
