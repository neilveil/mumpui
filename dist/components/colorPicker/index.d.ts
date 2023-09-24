import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValue?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ value, className, onValue, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
