import React from 'react';
declare global {
    interface Window {
        Prism: any;
    }
}
type props = React.HTMLAttributes<HTMLDivElement> & {
    snippet?: string;
    lang?: string;
};
export default function Main({ snippet, lang, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
