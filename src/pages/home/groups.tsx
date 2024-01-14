import showcases from './showcases'

export default [
  {
    name: 'Input',
    showcases: [
      showcases.input,
      showcases.textarea,
      showcases.field,
      showcases.form,
      showcases.checkbox,
      showcases.radio,
      showcases.select,
      showcases.multiSelect,
      showcases.search,
      showcases.button,
      showcases.datetime,
      showcases.colorPicker,
      showcases.range,
      showcases.file
    ]
  },
  {
    name: 'Display',
    showcases: [
      showcases.list,
      showcases.table,
      showcases.loader,
      showcases.progress,
      showcases.placeholder,
      showcases.divider,
      showcases.chain,
      showcases.tooltip
    ]
  },
  {
    name: 'Feedback',
    showcases: [showcases.message, showcases.confirm, showcases.modal, showcases.note]
  },
  {
    name: 'Navigation',
    showcases: [showcases.tabs, showcases.menu, showcases.pagination, showcases.breadcrumb]
  },
  {
    name: 'Advanced',
    showcases: [showcases.dashboard, showcases.icons, showcases.typography, showcases.markdown, showcases.code]
  }
]
