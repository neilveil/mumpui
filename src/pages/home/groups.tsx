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
      showcases.multiselect,
      showcases.search,
      showcases.button,
      showcases.datetime,
      showcases.color,
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
    name: 'Styling',
    showcases: [showcases.theme, showcases.responsive, showcases.classes]
  },
  {
    name: 'Helpers',
    showcases: [
      showcases.request,
      showcases.storage,
      showcases.utils,
      showcases.uh,
      showcases.sh,
      showcases.dh,
      showcases.wrapper
    ]
  },
  {
    name: 'Advanced',
    showcases: [showcases.dashboard, showcases.typography, showcases.code]
  }
]
