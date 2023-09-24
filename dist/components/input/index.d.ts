import React from 'react';
type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
    prefix?: any;
    onPrefixClick?: () => void;
    suffix?: any;
    onSuffixClick?: () => void;
    onValue?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
};
export default function Main({ prefix, onPrefixClick, suffix, onSuffixClick, className, style, onValue, onChange, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
