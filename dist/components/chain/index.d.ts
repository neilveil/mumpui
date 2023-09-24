import React from 'react';
type x = string | number | JSX.Element;
type props = React.HTMLAttributes<HTMLDivElement> & {
    items?: x[];
    seperator?: x;
    className?: string;
};
export default function Main({ className, items, seperator, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
