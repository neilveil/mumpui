import React from 'react';
import { type option } from '.';
type multiple = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> & {
    options?: option[];
    value?: option[];
    onChange?: (value: option[]) => void;
    onSearch?: (search: string) => void;
    placeholder?: any;
    clearable?: boolean;
    disabled?: boolean;
    valueHOC?: (option: option) => any;
    optionHOC?: (option: option) => any;
};
export default function Main({ value, options, onChange, onSearch, placeholder, clearable, disabled, className, optionHOC, ...props }: multiple): import("react/jsx-runtime").JSX.Element;
export {};
