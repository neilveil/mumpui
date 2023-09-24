import React from 'react';
type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange'> & {
    onChange?: (value: string) => void;
    closeOnClick?: boolean;
};
export default function Main({ closeOnClick, disabled, value, onChange, children, className, onClick, placeholder, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
