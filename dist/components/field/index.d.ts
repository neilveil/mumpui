import React from 'react';
type props = React.InputHTMLAttributes<HTMLDivElement> & {
    label?: string;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ className, style, label, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
