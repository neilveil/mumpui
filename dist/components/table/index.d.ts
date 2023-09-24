import React from 'react';
interface col {
    name?: string;
    key?: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
    render?: (value: string, x: object, index: [row: number, col: number]) => void;
}
type props = React.TableHTMLAttributes<HTMLTableElement> & {
    cols: col[];
    data: object[];
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ cols, data, className, style, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
