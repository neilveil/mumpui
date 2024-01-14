import Confirm from './components/confirm'
import Dashboard from './components/dashboard'
import Form from './components/form'
import Message from './components/message'
import Tooltip from './components/tooltip'

export { default as Button } from './components/button'
export { default as Chain } from './components/chain'
export { default as Checkbox } from './components/checkbox'
export { default as Checkboxes } from './components/checkboxes'
export { default as Code } from './components/code'
export { default as ColorPicker } from './components/colorPicker'
export { default as Divider } from './components/divider'
export { default as Field } from './components/field'
export { default as Fields } from './components/fields'
export { default as File } from './components/file'
export { default as Input } from './components/input'
export { default as List } from './components/list'
export { default as Loader } from './components/loader'
export { default as MD } from './components/md'
export { default as Menu } from './components/menu'
export { default as Modal } from './components/modal'
export { default as Note } from './components/note'
export { default as Pagination } from './components/pagination'
export { default as Placeholder } from './components/placeholder'
export { default as Progress } from './components/progress'
export { default as Radio } from './components/radio'
export { default as Range } from './components/range'
export { default as Search } from './components/search'
export { default as Select } from './components/select'
export { default as Table } from './components/table'
export { default as Tabs } from './components/tabs'
export { default as Textarea } from './components/textarea'

type tooltip = {
  delay?: number
}

type form = {
  clean?: boolean
}

type message = {
  duration?: number
  max?: number
}

type dashboard = {
  sidebar?: any
  minBackNavWidth?: number
  width?: string
}

type props = {
  tooltip?: tooltip
  form?: form
  message?: message
  dashboard?: dashboard
}

const MumpUI = ({ tooltip, form, message, dashboard }: props) => {
  if (tooltip && tooltip.delay !== undefined) Tooltip.delay = tooltip.delay

  if (form && form.clean !== undefined) Form.clean = form.clean

  if (message && message.max !== undefined) Message.max = message.max
  if (message && message.duration !== undefined) Message.duration = message.duration

  if (dashboard && dashboard.sidebar !== undefined) Dashboard.sidebar = dashboard.sidebar
  if (dashboard && dashboard.minBackNavWidth !== undefined) Dashboard.minBackNavWidth = dashboard.minBackNavWidth
  if (dashboard && dashboard.width !== undefined) Dashboard.width = dashboard.width

  return (
    <>
      <Message />
      <Confirm />
    </>
  )
}

export default MumpUI
export { Confirm, Dashboard, Form, Message, MumpUI, Tooltip }
