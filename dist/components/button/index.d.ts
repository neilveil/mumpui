import React from 'react';
type props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: any;
    primary?: boolean;
    className?: string;
    disabled?: boolean;
};
export default function Main({ children, primary, className, type, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
