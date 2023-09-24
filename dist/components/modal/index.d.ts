import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    visible?: boolean;
    onClose?: () => void;
};
export default function Main({ children, visible, onClose, className, ...props }: props): import("react/jsx-runtime").JSX.Element | null;
export {};
