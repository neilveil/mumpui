import React from 'react';
type props = React.FormHTMLAttributes<HTMLFormElement> & {
    clean?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ clean, className, style, onSubmit, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
