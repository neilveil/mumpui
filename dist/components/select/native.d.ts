import React from 'react';
import { type option } from '.';
type native = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    options?: option[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
};
export default function Main({ value, options, onChange, disabled, className, ...props }: native): import("react/jsx-runtime").JSX.Element;
export {};
