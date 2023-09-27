export default {
  button: {
    type: 'Component',
    name: 'Button',
    description:
      "The Button component is a fundamental element for user interaction, allowing to trigger actions with a simple click. It's highly customizable and can be tailored to fit your design needs.",
    link: '/docs/button',
    keywords: ['button', 'ui-button', 'clickable-element', 'interactive-component'],
    related: ['input', 'form'],
    img: ''
  },
  chain: {
    type: 'Component',
    name: 'Chain',
    description:
      'The Chain component offers a flexible alternative to traditional breadcrumbs, providing a dynamic way to preview & navigate through a series of steps or pages.',
    link: '/docs/chain',
    keywords: ['chain', 'linked-elements', 'sequential-steps', 'navigation'],
    related: ['tabs', 'menu', 'dashboard'],
    img: ''
  },
  checkbox: {
    type: 'Component',
    name: 'Checkbox',
    description:
      "The Checkbox component enables users to make selections or indicate choices from a set of options. It's a versatile input element for forms and settings.",
    link: '/docs/checkbox',
    keywords: ['checkbox', 'selection', 'input', 'multiple-choice'],
    related: ['radio', 'input', 'form'],
    img: ''
  },
  code: {
    type: 'Component',
    name: 'Code',
    description:
      'The Code component is designed for displaying and formatting code snippets, making it easier for developers to share and understand code.',
    link: '/docs/code',
    keywords: ['code', 'programming', 'syntax-highlighting', 'code-snippet'],
    related: [],
    img: ''
  },
  colorPicker: {
    type: 'Component',
    name: 'Color Picker',
    description:
      'The Color Picker component allows users to choose and select colors from a palette, facilitating customization and visual preferences.',
    link: '/docs/colorPicker',
    keywords: ['color-picker', 'color-selection', 'visual-color-choice'],
    related: ['input', 'form'],
    img: ''
  },
  confirm: {
    type: 'Component',
    name: 'Confirm',
    description:
      'The Confirm component presents a modal dialog to users, asking for confirmation before executing critical actions. It helps prevent accidental or irreversible operations.',
    link: '/docs/confirm',
    keywords: ['confirm', 'confirmation-dialog', 'user-action', 'decision'],
    related: ['message', 'modal', 'note'],
    img: ''
  },
  dashboard: {
    type: 'Component',
    name: 'Dashboard',
    description:
      'The Dashboard component provides a structured layout for managing and visualizing data, offering an organized view of key metrics and insights.',
    link: '/docs/dashboard',
    keywords: ['dashboard', 'data-management', 'crud-operations', 'user-roles'],
    related: ['table', 'list', 'pagination', 'chain'],
    img: ''
  },
  datetime: {
    type: 'Component',
    name: 'Datetime',
    description:
      'The Datetime component facilitates the selection of date and time values, ensuring accuracy and precision in date-related interactions.',
    link: '/docs/datetime',
    keywords: ['datetime', 'date-picker', 'time-picker', 'month-picker', 'date-time-selection'],
    related: ['input', 'form'],
    img: ''
  },
  divider: {
    type: 'Component',
    name: 'Divider',
    description:
      'The Divider component serves as a visual separator, helping to delineate content and improve the overall layout and readability of the interface.',
    link: '/docs/divider',
    keywords: ['divider', 'separation', 'visual-division', 'section-separator'],
    related: ['chain', 'tabs'],
    img: ''
  },
  field: {
    type: 'Component',
    name: 'Field',
    description:
      'The Field component is a fundamental building block for form elements, providing a structured way to capture user input or information.',
    link: '/docs/field',
    keywords: ['field', 'fields', 'input-field', 'form-input', 'data-entry'],
    related: ['input', 'checkbox', 'radio', 'datetime', 'select', 'range'],
    img: ''
  },
  file: {
    type: 'Component',
    name: 'File',
    description:
      'The File component allows users to upload files or documents, enhancing the interactivity and functionality of your application.',
    link: '/docs/file',
    keywords: ['file', 'file-upload', 'file-selection', 'document-upload', 'upload', 'upload-image'],
    related: ['input', 'button'],
    img: ''
  },
  form: {
    type: 'Component',
    name: 'Form',
    description:
      'The Form component provides a structured layout for organizing and collecting user input, offering a seamless way to gather information.',
    link: '/docs/form',
    keywords: ['form', 'data-input', 'user-input', 'form-submission', 'submit', 'form-submit'],
    related: ['input', 'button', 'datetime', 'checkbox', 'radio', 'select', 'range', 'colorPicker'],
    img: ''
  },
  input: {
    type: 'Component',
    name: 'Input',
    description:
      "The Input component offers a text input field for users to enter and edit information. It's a foundational element for various types of data input.",
    link: '/docs/input',
    keywords: ['input', 'text-input', 'user-input', 'data-entry'],
    related: ['textarea', 'datetime', 'checkbox', 'radio', 'select', 'range', 'file', 'colorPicker'],
    img: ''
  },
  list: {
    type: 'Component',
    name: 'List',
    description:
      'The List component displays a collection of items in an organized manner, making it easy for users to scan and navigate through content.',
    link: '/docs/list',
    keywords: ['list', 'item-list', 'ordered-list', 'unordered-list'],
    related: ['table', 'dashboard'],
    img: ''
  },
  loader: {
    type: 'Component',
    name: 'Loader',
    description:
      'The Loader component visually indicates that a process is in progress, providing feedback to users while data or content is being loaded.',
    link: '/docs/loader',
    keywords: ['loader', 'loading-indicator', 'progress-indicator', 'loading-animation', 'process'],
    related: ['placeholder', 'dashboard'],
    img: ''
  },
  menu: {
    type: 'Component',
    name: 'Menu',
    description:
      'The Menu component offers an expandable list of options, allowing users to navigate through a set of related actions or content categories.',
    link: '/docs/menu',
    keywords: ['menu', 'navigation-menu', 'site-menu', 'menu-options'],
    related: ['tabs', 'chain'],
    img: ''
  },
  message: {
    type: 'Component',
    name: 'Message',
    description:
      'The Message component displays brief, contextual notifications to users, providing feedback on the outcome of their actions (e.g., success, error, warning, information).',
    link: '/docs/message',
    keywords: [
      'message',
      'notification',
      'alert',
      'user-feedback',
      'success',
      'error',
      'warn',
      'warning',
      'info',
      'information'
    ],
    related: ['confirm', 'modal', 'note'],
    img: ''
  },
  modal: {
    type: 'Component',
    name: 'Modal',
    description:
      'The Modal component presents content in a layered dialog, drawing attention to important information or actions without navigating away from the current context.',
    link: '/docs/modal',
    keywords: ['modal', 'popup', 'overlay', 'user-interaction'],
    related: ['confirm', 'message', 'note'],
    img: ''
  },
  multiSelect: {
    type: 'Component',
    name: 'MultiSelect',
    description:
      'The MultiSelect component is an interactive dropdown that allows users to select multiple options from a list, with the added functionality of a search feature for convenience.',
    link: '/docs/multiSelect',
    keywords: ['multi-select', 'multiple-selection', 'choice-selection', 'dropdown'],
    related: ['select', 'input', 'form'],
    img: ''
  },
  note: {
    type: 'Component',
    name: 'Note',
    description:
      'The Note component highlights important information or quotes using distinct colors (e.g., red, blue, green, yellow), making key content stand out.',
    link: '/docs/note',
    keywords: ['note', 'informational-note', 'user-information', 'message'],
    related: ['message', 'confirm'],
    img: ''
  },
  pagination: {
    type: 'Component',
    name: 'Pagination',
    description:
      'The Pagination component divides content into manageable sections, allowing users to navigate through pages of information with ease.',
    link: '/docs/pagination',
    keywords: ['pagination', 'page-navigation', 'page-numbers', 'page-control'],
    related: ['table', 'dashboard', 'tabs'],
    img: ''
  },
  placeholder: {
    type: 'Component',
    name: 'Placeholder',
    description:
      'The Placeholder component creates visual space and structure for content that is yet to be populated, ensuring a clean and organized layout.',
    link: '/docs/placeholder',
    keywords: ['placeholder', 'temporary-content', 'filler-content', 'empty', 'no-data'],
    related: ['loader', 'dashboard'],
    img: ''
  },
  radio: {
    type: 'Component',
    name: 'Radio',
    description:
      "The Radio component allows users to select a single option from a list of choices. It's particularly useful in scenarios where users need to make mutually exclusive selections.",
    link: '/docs/radio',
    keywords: ['radio', 'radio-button', 'single-choice', 'selection'],
    related: ['checkbox', 'input', 'form'],
    img: ''
  },
  range: {
    type: 'Component',
    name: 'Range',
    description:
      'The Range component enables users to select a value within a specified range, providing a visual representation of the selected range.',
    link: '/docs/range',
    keywords: ['range', 'range-slider', 'value-range', 'adjustable-range'],
    related: ['input', 'form'],
    img: ''
  },
  search: {
    type: 'Component',
    name: 'Search',
    description:
      'The Search component offers a customizable dropdown interface with search functionality, allowing users to efficiently locate and select options.',
    link: '/docs/search',
    keywords: ['search', 'search-bar', 'search-input', 'query-input'],
    related: ['select', 'multiSelect', 'input'],
    img: ''
  },
  select: {
    type: 'Component',
    name: 'Select',
    description:
      'The Select component provides a dropdown menu with a searchable interface, making it easy for users to choose from a list of options.',
    link: '/docs/select',
    keywords: ['select', 'dropdown', 'option-selection', 'choice', 'dropdown'],
    related: ['multiSelect', 'search', 'input', 'form'],
    img: ''
  },
  table: {
    type: 'Component',
    name: 'Table',
    description:
      'The Table component organizes and presents data in a structured format, making it easy for users to scan, analyze, and interact with tabular information.',
    link: '/docs/table',
    keywords: ['table', 'data-table', 'tabular-data', 'grid'],
    related: ['list', 'pagination', 'dashboard'],
    img: ''
  },
  tabs: {
    type: 'Component',
    name: 'Tabs',
    description:
      'The Tabs component allows users to navigate between different sections of content, providing an organized and intuitive way to access information.',
    link: '/docs/tabs',
    keywords: ['tabs', 'tabbed-interface', 'tab-navigation', 'tab-selection', 'groups'],
    related: ['menu', 'chain', 'divider'],
    img: ''
  },
  textarea: {
    type: 'Component',
    name: 'Textarea',
    description:
      'The Textarea component offers a multi-line text input field, suitable for longer-form content such as comments, messages, or descriptions.',
    link: '/docs/textarea',
    keywords: ['textarea', 'text-input-area', 'multi-line-input', 'user-input'],
    related: ['input', 'form'],
    img: ''
  },
  theme: {
    type: '',
    name: 'Theme',
    description: '',
    link: '/docs/textarea',
    keywords: [],
    related: ['setup'],
    img: ''
  },
  tooltip: {
    type: 'Component',
    name: 'Tooltip',
    description:
      'The Tooltip component provides additional contextual information when users hover over an element, enhancing user understanding and interaction.',
    link: '/docs/tooltip',
    keywords: ['tooltip', 'information-tooltip', 'hover-text', 'contextual-help', 'help'],
    related: ['message', 'modal', 'note'],
    img: ''
  },
  setup: {
    type: '',
    name: 'Setup',
    description: 'Get started with MumpUI in 3 steps. Just Install, Initialize & setup theme, and you are good to go.',
    link: '/setup',
    keywords: ['install', 'initialize', 'theme', 'configure', 'integrate', 'environment', 'setup'],
    related: [],
    img: ''
  },
  theStoryOfMumpUI: {
    type: 'Blog',
    name: 'The story of MumpUI',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  treeShaking: {
    type: 'Blog',
    name: 'Tree Shaking: Import only selected components, not the complete library',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  noMoreColorfulButtons: {
    type: 'Blog',
    name: 'Why buttons customizations are deprecated in MumpUI?',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  bestMultiSelectComponent: {
    type: 'Blog',
    name: 'The complexity of Multi-Select component',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  whyToUseRem: {
    type: 'Blog',
    name: 'Why & where to use rem?',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  nativeComponents: {
    type: 'Blog',
    name: 'Why to use native html components?',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  themeManagement: {
    type: 'Blog',
    name: 'How to manage light/dark/custom themes in your web app?',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  customize: {
    type: 'Blog',
    name: 'How to customize default MumpUI theme?',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  },
  responsive: {
    type: 'Blog',
    name: 'Guide to responsive UI design',
    description: '',
    link: '',
    keywords: [],
    related: [],
    img: ''
  }
}
