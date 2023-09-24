import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    children?: any;
    align?: 'left' | 'center' | 'right';
    className?: string;
};
export default function Main({ children, align, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
