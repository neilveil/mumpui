import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    type?: 'red' | 'blue' | 'green' | 'yellow' | 'quote';
    className?: string;
};
export default function Main({ className, type, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
