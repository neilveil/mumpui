import React from 'react';
type option = {
    key: string;
    label: string;
    [key: string]: any;
};
type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    options?: option[];
    checked?: string;
    onChange?: (keys: string) => void;
    disabled?: boolean;
};
export default function Main({ options, checked, onChange, disabled, className, style, ...props }: props): import("react/jsx-runtime").JSX.Element;
type radio = {
    checked: boolean;
    _key: string;
    label: string;
    onChange: (key: string) => void;
    disabled?: boolean;
};
export declare function Radio(props: radio): import("react/jsx-runtime").JSX.Element;
export {};
