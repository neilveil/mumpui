import Message from './components/message'
import Confirm from './components/confirm'

export { default as Dummy } from './components/dummy'
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

const MumpUI = () => {
  return (
    <>
      <Message />
      <Confirm />
    </>
  )
}

export { MumpUI, Message, Confirm }
