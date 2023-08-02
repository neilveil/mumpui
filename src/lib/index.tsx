import Message from './components/message'

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

const MumpUI = () => {
  return (
    <>
      <Message />
    </>
  )
}

export { MumpUI, Message }
