import React from 'react';
type item = {
    key: string;
    label: string;
    [key: string]: any;
};
type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
    items?: item[];
    active?: string;
    onClick?: (active: string) => void;
    className?: string;
};
export default function Main({ items, active, onClick, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
