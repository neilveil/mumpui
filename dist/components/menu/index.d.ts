import React from 'react';
type item = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    next?: item[];
    access?: string[];
    [key: string]: any;
};
type props = React.HTMLAttributes<HTMLDivElement> & {
    active?: string;
    onClick?: (key: string) => void;
    items?: item[];
    access?: string[];
};
export default function Main({ active, onClick, items, access, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
