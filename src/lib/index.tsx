import Message from './components/message'
import Confirm from './components/confirm'
import Tooltip from './components/tooltip'

export { default as Input } from './components/input'
export { default as Field } from './components/field'
export { default as Fields } from './components/fields'
export { default as Dropdown } from './components/dropdown'
export { default as Form } from './components/form'
export { default as Textarea } from './components/textarea'
export { default as Button } from './components/button'
export { default as Range } from './components/range'
export { default as Checkbox } from './components/checkbox'
export { default as Radio } from './components/radio'
export { default as File } from './components/file'
export { default as Dashboard } from './components/dashboard'
export { default as Menu } from './components/menu'
export { default as Pagination } from './components/pagination'
export { default as Placeholder } from './components/placeholder'
export { default as Loader } from './components/loader'
export { default as Divider } from './components/divider'
export { default as Code } from './components/code'
export { default as Search } from './components/search'
export { default as Note } from './components/note'
export { default as Tabs } from './components/tabs'
export { default as Chain } from './components/chain'
export { default as Table } from './components/table'
export { default as Embed } from './components/embed'
export { default as Modal } from './components/modal'
export { default as List } from './components/list'

interface tooltip {
  delay?: number
}

interface message {
  duration?: number
  max?: number
}

interface props {
  tooltip?: tooltip
  message?: message
}

const MumpUI = ({ tooltip, message }: props) => {
  if (tooltip && tooltip.delay !== undefined) Tooltip.delay = tooltip.delay

  if (message && message.max !== undefined) Message.max = message.max
  if (message && message.duration !== undefined) Message.duration = message.duration

  return (
    <>
      <Message />
      <Confirm />
    </>
  )
}

export { MumpUI, Message, Confirm, Tooltip }
