import React from 'react';
interface data {
    id: number;
    title?: string;
    onConfirm?: () => void;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onCancel?: () => void;
    type?: 'info' | 'error' | 'success' | 'warn';
}
interface state {
    data: data[];
}
export default class Main extends React.Component {
    state: state;
    static _this: InstanceType<typeof Main>;
    static init: ({ title, description, confirmText, cancelText, onConfirm, onCancel, type }: Omit<data, 'id'>) => void;
    static clear: () => void;
    componentDidMount: () => this;
    close: (id: number) => void;
    render: () => import("react/jsx-runtime").JSX.Element[];
}
export {};
