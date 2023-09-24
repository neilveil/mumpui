import React from 'react';
declare global {
    interface Window {
        toggleSidebar: any;
    }
}
interface sidebarItem {
    icon?: any;
    name: any;
    path?: string;
    next?: sidebarItem[];
    access?: string | string[];
}
interface props {
    className?: string;
    style?: React.CSSProperties;
    sidebarImg?: string;
    sidebarItems?: sidebarItem[];
    sidebarAccess?: string[];
    onSidebarClick?: (path: string) => void;
    sidebarClassName?: string;
    sidebarStyle?: React.CSSProperties;
    header?: any;
    title?: any;
    icon?: any;
    info?: any;
    onAdd?: () => void;
    headerSuffix?: any;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    children?: any;
    loading?: boolean;
    empty?: boolean;
    search?: string;
    onSearch?: (search: string) => void;
    filter?: any;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
    footer?: any;
    onDelete?: () => void;
    onCreate?: () => void;
    onUpdate?: () => void;
    onCancel?: () => void;
    footerClassName?: string;
    footerStyle?: React.CSSProperties;
    paginationPageSize?: number;
    paginationTotalItems?: number;
    paginationOffset?: number;
    paginationOnChange?: (offset: number) => void;
}
export default function Main(props: props): import("react/jsx-runtime").JSX.Element;
export {};
