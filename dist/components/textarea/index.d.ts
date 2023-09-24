import React from 'react';
type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    autoHeight?: boolean;
    onValue?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ className, style, autoHeight, onValue, onChange, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
