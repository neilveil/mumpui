import React from 'react';
type props = React.HTMLAttributes<HTMLDivElement> & {
    label?: any;
    position?: 'top' | 'right' | 'bottom' | 'left';
    delay?: number;
    className?: string;
};
declare function Main({ className, label, position, delay, ...props }: props): import("react/jsx-runtime").JSX.Element;
declare namespace Main {
    var delay: number;
}
export default Main;
