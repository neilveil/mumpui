import React from 'react';
type icon = React.ReactNode;
type text = string;
type duration = number;
type message = {
    id: symbol;
    icon: icon;
    type: string;
    text: text;
    expiry: duration;
};
interface state {
    messages: message[];
}
export default class Main extends React.Component {
    static props: {};
    state: state;
    static _this: InstanceType<typeof Main>;
    static max: number;
    static duration: number;
    static info: (text?: string, duration?: number | undefined) => symbol;
    static warn: (text?: string, duration?: number | undefined) => symbol;
    static success: (text?: string, duration?: number | undefined) => symbol;
    static error: (text?: string, duration?: number | undefined) => symbol;
    static loading: (text?: string, duration?: number | undefined) => symbol;
    static clear: (id?: symbol) => void;
    static pushMessage: ({ icon, text, duration }: {
        icon: React.ReactNode;
        text: string;
        duration?: number | undefined;
    }) => symbol;
    static messageCleaner: () => void;
    componentDidMount: () => this;
    render: () => import("react/jsx-runtime").JSX.Element;
}
export {};
