import React from 'react';
export type option = {
    key: string;
    label: string;
    [key: string]: string;
};
type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> & {
    options?: option[];
    value?: option;
    onChange?: (value?: option) => void;
    onSearch?: (search: string) => void;
    placeholder?: any;
    clearable?: boolean;
    disabled?: boolean;
    valueHOC?: (option: option) => any;
    optionHOC?: (option: option) => any;
};
declare function Main({ value, options, onChange, onSearch, placeholder, clearable, disabled, className, valueHOC, optionHOC, ...props }: props): import("react/jsx-runtime").JSX.Element;
declare namespace Main {
    var Multi: typeof import("./multi").default;
    var Native: typeof import("./native").default;
    var search: typeof import("./search").default;
}
export default Main;
