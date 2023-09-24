import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    autoCol?: boolean;
    colBreakPoint?: number;
    className?: string;
};
export default function Main({ autoCol, colBreakPoint, className, style, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
