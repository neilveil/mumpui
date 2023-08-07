import { Button, Checkbox, Divider, Dropdown, Field, File, Form, Input, Radio, Range } from 'lib'
import { useState } from 'react'

export default {
  input: {
    name: 'Input',
    docs: '/component/input',
    tags: [],
    component: () => <Input placeholder='Type something..' style={{ width: '100%' }} />
  },
  dropdown: {
    name: 'Dropdown',
    docs: '/component/dropdown',
    tags: [],
    component: () => {
      const [value, setValue] = useState(countries[0])
      return (
        <div style={{ width: '100%' }}>
          <Dropdown options={countries} value={value} onSelect={(country: any) => setValue(country)} />
        </div>
      )
    }
  },
  multiselect: {
    name: 'Select',
    docs: '/component/dropdown',
    tags: [],
    component: () => {
      const [value, setValue] = useState([countries[0]])
      const [search, setSearch] = useState('')

      const options = search
        ? countries.filter(x => x.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : countries

      return (
        <div style={{ width: '100%' }}>
          <Dropdown
            options={options}
            value={value}
            onSelect={(country: any) => setValue(country)}
            onSearch={search => setSearch(search)}
            placeholder='Empty'
            clearable
          />
        </div>
      )
    }
  },
  checkbox: {
    name: 'Checkbox',
    docs: '/component/checkbox',
    tags: [],
    component: () => {
      const [value, setValue] = useState([])

      return (
        <div style={{ width: '100%' }}>
          <Checkbox options={countries.slice(0, 3)} checked={value} onChange={(value: any) => setValue(value)} />
        </div>
      )
    }
  },
  radio: {
    name: 'Radio',
    docs: '/component/radio',
    tags: [],
    component: () => {
      const [value, setValue] = useState('sweden')

      return (
        <div style={{ width: '100%' }}>
          <Radio options={countries.slice(0, 3)} selected={value} onChange={(value: any) => setValue(value)} />
        </div>
      )
    }
  },
  range: {
    name: 'Range',
    docs: '/component/range',
    tags: [],
    component: () => {
      const [value, setValue] = useState('sweden')

      return (
        <div style={{ width: '100%' }}>
          <Range />
        </div>
      )
    }
  },
  file: {
    name: 'File',
    docs: '/component/file',
    tags: [],
    component: () => {
      return <File label='Upload Image' />
    }
  },
  form: {
    name: 'Form',
    docs: '/component/form',
    tags: [],
    component: () => (
      <Form style={{ width: '100%' }}>
        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>

        <Button>Submit</Button>
      </Form>
    )
  },
  divider: {
    name: 'Divider',
    docs: '/component/Button',
    tags: [],
    component: () => (
      <div style={{ width: '100%' }}>
        <Divider align='left'>More</Divider>
        <Divider align='center'>More</Divider>
        <Divider align='right'>More</Divider>
      </div>
    )
  },
  button: {
    name: 'Button',
    docs: '/component/Button',
    tags: [],
    component: () => <Button>Click</Button>
  }
}

const countries = [
  { key: 'sweden', label: 'Sweden' },
  { key: 'germany', label: 'Germany' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'United kingdom', label: 'United Kingdom' },
  { key: 'japan', label: 'Japan' },
  { key: 'United states', label: 'United States' },
  { key: 'canada', label: 'Canada' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'denmark', label: 'Denmark' }
]
