import data from 'data'
import {
  Button,
  Chain,
  Checkboxes,
  ColorPicker,
  Divider,
  Dropdown,
  Field,
  Fields,
  File,
  Form,
  Input,
  List,
  Loader,
  Placeholder,
  Radio,
  Range,
  Search,
  Select,
  Table,
  Textarea,
  Tooltip
} from 'lib'
import { useState } from 'react'

export default {
  input: {
    name: 'Input',
    docs: '/component/input',
    tags: [],
    Component() {
      return <Input placeholder='Type something..' />
    }
  },
  textarea: {
    name: 'Textarea',
    docs: '/component/textarea',
    tags: [],
    Component() {
      const [value, setValue] = useState('')

      return (
        <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type something..' autoHeight />
      )
    }
  },
  field: {
    name: 'Field',
    docs: '/component/field',
    tags: [],
    Component() {
      return (
        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>
      )
    }
  },
  form: {
    name: 'Form',
    docs: '/component/form',
    tags: [],
    Component() {
      return (
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
    }
  },
  checkbox: {
    name: 'Checkbox',
    docs: '/component/checkbox',
    tags: [],
    Component() {
      const [value, setValue] = useState<string[]>(['india'])

      return (
        <div>
          <Checkboxes options={countries.slice(0, 3)} checked={value} onChange={value => setValue(value)} />
        </div>
      )
    }
  },
  radio: {
    name: 'Radio',
    docs: '/component/radio',
    tags: [],
    Component() {
      const [value, setValue] = useState('india')

      return (
        <div>
          <Radio options={countries.slice(0, 3)} checked={value} onChange={(value: any) => setValue(value)} />
        </div>
      )
    }
  },
  select: {
    name: 'Select',
    docs: '/component/select',
    tags: [],
    Component() {
      const [value, setValue] = useState<(typeof data.countries)[0] | undefined>(data.countries[0])

      return <Select options={data.countries} value={value} onSelect={value => setValue(value)} />
    }
  },
  multiselect: {
    name: 'Multi-Select',
    docs: '/component/multiSelect',
    tags: [],
    Component() {
      const [value, setValue] = useState<typeof data.countries>([data.countries[0]])

      return <Select.Multi options={data.countries} value={value} onSelect={value => setValue(value)} />
    }
  },
  search: {
    name: 'Search',
    docs: '/component/search',
    tags: [],
    Component() {
      const [value, setValue] = useState('')

      {
        /* Change in docs too */
      }

      return (
        <Search value={value} onChange={value => setValue(value)} placeholder='Search..'>
          <div style={{ padding: '1rem' }}>
            <div>You can put anything in the dropdown..</div>

            {['A1 red box', 'B2 green circle', 'C3 hexagon']
              .filter(x => x.toLowerCase().includes(value.toLowerCase().trim()))
              .map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '1rem',
                    margin: '1rem 1rem 0 0',
                    backgroundColor: 'var(--mp-c-hover)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setValue(x)}
                >
                  {x}
                </div>
              ))}

            {!!value && (
              <div onClick={() => setValue('')} style={{ display: 'inline-block', cursor: 'pointer' }}>
                Clear
              </div>
            )}
          </div>
        </Search>
      )
    }
  },
  button: {
    name: 'Button',
    docs: '/component/Button',
    tags: [],
    Component() {
      return (
        <Fields>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button style={{ borderStyle: 'dashed', color: '#f5222d', borderColor: '#f5222d' }}>Delete</Button>
        </Fields>
      )
    }
  },
  datetime: {
    name: 'Date / Time',
    docs: '/component/datetime',
    tags: [],
    Component() {
      return (
        <div>
          <Input type='date' defaultValue='2020-01-01' />
          <br />
          <Input type='month' defaultValue='2020-01' />
          <br />
          <Input type='time' defaultValue='18:00' />
        </div>
      )
    }
  },
  color: {
    name: 'Color Picker',
    docs: '/component/colorPicker',
    tags: [],
    Component() {
      const [color, setColor] = useState('#0A94FF')

      return (
        <ColorPicker
          placeholder='Select color..'
          value={color}
          onValue={value => setColor(value)}
          style={{ maxWidth: '15rem' }}
        />
      )
    }
  },
  range: {
    name: 'Range',
    docs: '/component/range',
    tags: [],
    Component() {
      return <Range />
    }
  },
  file: {
    name: 'File',
    docs: '/component/file',
    tags: [],
    Component() {
      return <File>Upload Image</File>
    }
  },
  divider: {
    name: 'Divider',
    docs: '/component/Button',
    tags: [],
    Component() {
      return (
        <div>
          <Divider align='left'>More</Divider>
          <Divider align='center'>More</Divider>
          <Divider align='right'>More</Divider>
        </div>
      )
    }
  },
  list: {
    name: 'List',
    docs: '/component/list',
    tags: [],
    Component() {
      return <List data={[]} />
    }
  },
  table: {
    name: 'Table',
    docs: '/component/table',
    tags: [],
    Component() {
      return <Table data={[]} cols={[]} />
    }
  },
  loader: {
    name: 'Loader',
    docs: '/component/loader',
    tags: [],
    Component() {
      return <Loader />
    }
  },
  placeholder: {
    name: 'Placeholder',
    docs: '/component/placeholder',
    tags: [],
    Component() {
      return <Placeholder />
    }
  },
  chain: {
    name: 'Chain',
    docs: '/component/chain',
    tags: [],
    Component() {
      return <Chain />
    }
  },
  tooltip: {
    name: 'Tooltip',
    docs: '/component/tooltip',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  message: {
    name: 'Message',
    docs: '/component/message',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  confirm: {
    name: 'Confirm',
    docs: '/component/confirm',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  modal: {
    name: 'Modal',
    docs: '/component/modal',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  note: {
    name: 'Note',
    docs: '/component/note',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  tabs: {
    name: 'Tabs',
    docs: '/component/tabs',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  menu: {
    name: 'Menu',
    docs: '/component/menu',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  pagination: {
    name: 'Pagination',
    docs: '/component/pagination',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  breadcrumb: {
    name: 'Breadcrumb',
    docs: '/component/breadcrumb',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello div!'>
          <div>Hello!</div>
        </Tooltip>
      )
    }
  },
  theme: {
    name: 'Theme',
    docs: '/component/theme',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  responsive: {
    name: 'Responsive',
    docs: '/component/responsive',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  classes: {
    name: 'Classes',
    docs: '/component/classes',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  request: {
    name: 'Request',
    docs: '/component/request',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  storage: {
    name: 'Storage',
    docs: '/component/storage',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  utils: {
    name: 'Utils',
    docs: '/component/utils',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  uh: {
    name: 'URL Handler',
    docs: '/component/uh',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  sh: {
    name: 'Scroll Handler',
    docs: '/component/sh',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  dh: {
    name: 'Depth Handler',
    docs: '/component/dh',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  wrapper: {
    name: 'Wrapper',
    docs: '/component/wrapper',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  dashboard: {
    name: 'Dashboard',
    docs: '/dashboard',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  typography: {
    name: 'Typography',
    docs: '/component/typography',
    tags: [],
    Component() {
      return <div></div>
    }
  },
  code: {
    name: 'Code',
    docs: '/component/code',
    tags: [],
    Component() {
      return <div></div>
    }
  }
}

const countries = [
  { key: 'india', label: 'India' },
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
