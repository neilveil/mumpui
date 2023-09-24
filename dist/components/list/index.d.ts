import React from 'react';
type items = string | items[];
type props = React.HTMLAttributes<HTMLUListElement> & {
    items?: items[];
    type?: 'ul' | 'ol';
};
export default function Main({ items, type, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
