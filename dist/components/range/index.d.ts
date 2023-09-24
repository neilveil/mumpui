import React from 'react';
type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    onValue?: (value: number) => void;
};
export default function Main({ onChange, onValue, className, style, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
