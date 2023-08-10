import { useState } from 'react'
import {
  Button,
  Chain,
  Checkbox,
  Divider,
  Dropdown,
  Field,
  File,
  Form,
  Input,
  List,
  Loader,
  Placeholder,
  Radio,
  Range,
  Search,
  Table,
  Textarea,
  Tooltip
} from 'lib'

export default {
  input: {
    name: 'Input',
    docs: '/component/input',
    tags: [],
    component: () => <Input placeholder='Type something..' />
  },
  textarea: {
    name: 'Textarea',
    docs: '/component/textarea',
    tags: [],
    component: () => {
      const [value, setValue] = useState('')

      return (
        <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type something..' autoRows={2} />
      )
    }
  },
  dropdown: {
    name: 'Dropdown',
    docs: '/component/dropdown',
    tags: [],
    component: () => {
      const [value, setValue] = useState(countries[0])
      return (
        <div>
          <Dropdown options={countries} value={value} onSelect={(country: any) => setValue(country)} />
        </div>
      )
    }
  },
  multiselect: {
    name: 'Dropdown / Multi-Select',
    docs: '/component/dropdown',
    tags: [],
    component: () => {
      const [value, setValue] = useState([countries[0]])
      const [search, setSearch] = useState('')

      const options = search
        ? countries.filter(x => x.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : countries

      return (
        <div>
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
        <div>
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
        <div>
          <Radio options={countries.slice(0, 3)} checked={value} onChange={(value: any) => setValue(value)} />
        </div>
      )
    }
  },
  range: {
    name: 'Range',
    docs: '/component/range',
    tags: [],
    component: () => {
      return <Range />
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
  field: {
    name: 'Field',
    docs: '/component/field',
    tags: [],
    component: () => (
      <Form>
        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>
      </Form>
    )
  },
  form: {
    name: 'Form',
    docs: '/component/form',
    tags: [],
    component: () => (
      <Form>
        <Field label='Username'>
          <Input placeholder='Enter name..' />
        </Field>
        <Field label='Passowrd'>
          <Input placeholder='Enter password..' />
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
      <div>
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
    component: () => (
      <div className='flex-start'>
        <Button type='dashed'>Update</Button>
        <Button type='danger'>Delete</Button>
        <Button>Cancel</Button>
      </div>
    )
  },
  search: {
    name: 'Search',
    docs: '/component/search',
    tags: [],
    component: () => <Search placeholder='Search..'>Anything..</Search>
  },
  datetime: {
    name: 'Date / Time',
    docs: '/component/search',
    tags: [],
    component: () => (
      <div>
        <Input type='date' defaultValue='01-01-2020' />
        <br />
        <Input type='time' defaultValue='18:00' />
      </div>
    )
  },
  color: {
    name: 'Color',
    docs: '/component/color',
    tags: [],
    component: () => <Input type='color' placeholder='Pick..' />
  },
  list: {
    name: 'List',
    docs: '/component/list',
    tags: [],
    component: () => <List />
  },
  table: {
    name: 'Table',
    docs: '/component/table',
    tags: [],
    component: () => <Table data={[]} cols={[]} />
  },
  loader: {
    name: 'Loader',
    docs: '/component/loader',
    tags: [],
    component: () => <Loader />
  },
  placeholder: {
    name: 'Placeholder',
    docs: '/component/placeholder',
    tags: [],
    component: () => <Placeholder />
  },
  chain: {
    name: 'Chain',
    docs: '/component/chain',
    tags: [],
    component: () => <Chain />
  },
  tooltip: {
    name: 'Tooltip',
    docs: '/component/tooltip',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  message: {
    name: 'Message',
    docs: '/component/message',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  confirm: {
    name: 'Confirm',
    docs: '/component/confirm',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  modal: {
    name: 'Modal',
    docs: '/component/modal',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  note: {
    name: 'Note',
    docs: '/component/note',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  tabs: {
    name: 'Tabs',
    docs: '/component/tabs',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  menu: {
    name: 'Menu',
    docs: '/component/menu',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  pagination: {
    name: 'Pagination',
    docs: '/component/pagination',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  breadcrumb: {
    name: 'Breadcrumb',
    docs: '/component/breadcrumb',
    tags: [],
    component: () => (
      <Tooltip label='Hello div!'>
        <div>Hello!</div>
      </Tooltip>
    )
  },
  theme: {
    name: 'Theme',
    docs: '/component/theme',
    tags: [],
    component: () => <div></div>
  },
  responsive: {
    name: 'Responsive',
    docs: '/component/responsive',
    tags: [],
    component: () => <div></div>
  },
  classes: {
    name: 'Classes',
    docs: '/component/classes',
    tags: [],
    component: () => <div></div>
  },
  request: {
    name: 'Request',
    docs: '/component/request',
    tags: [],
    component: () => <div></div>
  },
  storage: {
    name: 'Storage',
    docs: '/component/storage',
    tags: [],
    component: () => <div></div>
  },
  utils: {
    name: 'Utils',
    docs: '/component/utils',
    tags: [],
    component: () => <div></div>
  },
  uh: {
    name: 'URL Handler',
    docs: '/component/uh',
    tags: [],
    component: () => <div></div>
  },
  sh: {
    name: 'Scroll Handler',
    docs: '/component/sh',
    tags: [],
    component: () => <div></div>
  },
  dh: {
    name: 'Depth Handler',
    docs: '/component/dh',
    tags: [],
    component: () => <div></div>
  },
  wrapper: {
    name: 'Wrapper',
    docs: '/component/wrapper',
    tags: [],
    component: () => <div></div>
  },
  dashboard: {
    name: 'Dashboard',
    docs: '/component/dashboard',
    tags: [],
    component: () => <div></div>
  },
  typography: {
    name: 'Typography',
    docs: '/component/typography',
    tags: [],
    component: () => <div></div>
  },
  code: {
    name: 'Code',
    docs: '/component/code',
    tags: [],
    component: () => <div></div>
  },
  md: {
    name: 'Markdown',
    docs: '/component/md',
    tags: [],
    component: () => <div></div>
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
