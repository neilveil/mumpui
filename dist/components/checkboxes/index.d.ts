import React from 'react';
type option = {
    key: string;
    label: string;
    [key: string]: any;
};
type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    options?: option[];
    checked?: string[];
    onChange?: (keys: string[]) => void;
    disabled?: boolean;
};
export default function Main({ options, checked, onChange, disabled, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
