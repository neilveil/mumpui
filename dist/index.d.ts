import Confirm from './components/confirm';
import Message from './components/message';
import Tooltip from './components/tooltip';
export { default as Button } from './components/button';
export { default as Chain } from './components/chain';
export { default as Checkbox } from './components/checkbox';
export { default as Checkboxes } from './components/checkboxes';
export { default as Code } from './components/code';
export { default as ColorPicker } from './components/colorPicker';
export { default as Dashboard } from './components/dashboard';
export { default as Divider } from './components/divider';
export { default as Field } from './components/field';
export { default as Fields } from './components/fields';
export { default as File } from './components/file';
export { default as Form } from './components/form';
export { default as Input } from './components/input';
export { default as List } from './components/list';
export { default as Loader } from './components/loader';
export { default as Menu } from './components/menu';
export { default as Modal } from './components/modal';
export { default as Note } from './components/note';
export { default as Pagination } from './components/pagination';
export { default as Placeholder } from './components/placeholder';
export { default as Radio } from './components/radio';
export { default as Range } from './components/range';
export { default as Search } from './components/search';
export { default as Select } from './components/select';
export { default as Table } from './components/table';
export { default as Tabs } from './components/tabs';
export { default as Textarea } from './components/textarea';
interface tooltip {
    delay?: number;
}
interface message {
    duration?: number;
    max?: number;
}
interface props {
    tooltip?: tooltip;
    message?: message;
}
declare const MumpUI: ({ tooltip, message }: props) => import("react/jsx-runtime").JSX.Element;
export default MumpUI;
export { MumpUI, Message, Confirm, Tooltip };
