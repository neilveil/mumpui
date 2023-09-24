import React from 'react';
type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};
export default function Checkbox({ checked, label, onChange, disabled, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
