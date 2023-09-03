import elements from './elements'

export default [
  {
    name: 'Input',
    elements: [
      elements.input,
      elements.textarea,
      elements.field,
      elements.form,
      elements.checkbox,
      elements.radio,
      elements.dropdown,
      elements.multiselect,
      elements.search,
      elements.button,
      elements.datetime,
      elements.color,
      elements.range,
      elements.file
    ]
  },
  {
    name: 'Display',
    elements: [
      elements.list,
      elements.table,
      elements.loader,
      elements.placeholder,
      elements.divider,
      elements.chain,
      elements.tooltip
    ]
  },
  {
    name: 'Feedback',
    elements: [elements.message, elements.confirm, elements.modal, elements.note]
  },
  {
    name: 'Navigation',
    elements: [elements.tabs, elements.menu, elements.pagination, elements.breadcrumb]
  },
  {
    name: 'Styling',
    elements: [elements.theme, elements.responsive, elements.classes]
  },
  {
    name: 'Helpers',
    elements: [
      elements.request,
      elements.storage,
      elements.utils,
      elements.uh,
      elements.sh,
      elements.dh,
      elements.wrapper
    ]
  },
  {
    name: 'Advanced',
    elements: [elements.dashboard, elements.typography, elements.code]
  }
]
