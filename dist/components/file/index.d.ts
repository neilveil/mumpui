import React from 'react';
type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    children?: any;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ children, className, style, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
