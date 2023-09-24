import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    empty?: boolean;
    className?: string;
};
export default function Main({ empty, children, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
