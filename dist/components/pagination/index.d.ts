import React from 'react';
type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    pageSize: number;
    totalItems: number;
    offset: number;
    onChange?: (offset: number) => void;
    disabled?: boolean;
    className?: string;
};
export default function Main({ pageSize, totalItems, offset, onChange, disabled, className, ...props }: props): import("react/jsx-runtime").JSX.Element;
export {};
