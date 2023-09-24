import data from 'data'
import {
  Button,
  Chain,
  Checkboxes,
  ColorPicker,
  Confirm,
  Divider,
  Field,
  Fields,
  File,
  Form,
  Input,
  List,
  Loader,
  Menu,
  Message,
  Modal,
  Note,
  Pagination,
  Placeholder,
  Radio,
  Range,
  Search,
  Select,
  Table,
  Tabs,
  Textarea,
  Tooltip
} from 'lib'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <Checkboxes options={data.countries.slice(0, 3)} checked={value} onChange={value => setValue(value)} />
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
          <Radio options={data.countries.slice(0, 3)} checked={value} onChange={(value: any) => setValue(value)} />
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

      return <Select options={data.countries} value={value} onChange={value => setValue(value)} />
    }
  },
  multiselect: {
    name: 'Multi-Select',
    docs: '/component/multiSelect',
    tags: [],
    Component() {
      const [value, setValue] = useState<typeof data.countries>([data.countries[0]])

      return <Select.Multi options={data.countries} value={value} onChange={value => setValue(value)} />
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
                    backgroundColor: '#88888818',
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
    docs: '/component/button',
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
    name: 'Date / Month / Time',
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
      const [files, setFiles] = useState<any>([])

      return (
        <div>
          <Field label='Upload images'>
            <File accept='image/jpeg' onChange={(e: any) => setFiles(Array.from(e.target.files))} multiple>
              <Button>Upload</Button>
            </File>
          </Field>

          <div>
            {!!files.length && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {files.map((file: any, i: number) => (
                  <div key={i}>
                    <img src={URL.createObjectURL(file)} style={{ width: '100%', maxHeight: '10rem' }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }
  },
  list: {
    name: 'List',
    docs: '/component/list',
    tags: [],
    Component() {
      return <List style={{ fontSize: '.8rem', paddingLeft: '2rem' }} items={data.list} />
    }
  },
  table: {
    name: 'Table',
    docs: '/component/table',
    tags: [],
    Component() {
      return <Table cols={data.table.cols} data={data.table.data.slice(0, 3)} />
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
  divider: {
    name: 'Divider',
    docs: '/component/divider',
    tags: [],
    Component() {
      return <Divider align='left'>More</Divider>
    }
  },
  chain: {
    name: 'Chain',
    docs: '/component/chain',
    tags: [],
    Component() {
      return <Chain items={['Home', 'Products', 'Price']} />
    }
  },
  tooltip: {
    name: 'Tooltip',
    docs: '/component/tooltip',
    tags: [],
    Component() {
      return (
        <Tooltip label='Hello there!' position='right' style={{ maxWidth: '4rem' }}>
          <div style={{ background: '#88888818', padding: '.5rem', textAlign: 'center' }}>Hover</div>
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
        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => Message.info('Hello there!')}>Message</Button>
        </div>
      )
    }
  },
  confirm: {
    name: 'Confirm',
    docs: '/component/confirm',
    tags: [],
    Component() {
      return (
        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={() =>
              Confirm.init({
                title: 'Are you sure you want to continue?',
                description: 'You are about to continue',
                onConfirm: () => Message.success('Nice!')
              })
            }
          >
            Confirm
          </Button>
        </div>
      )
    }
  },
  modal: {
    name: 'Modal',
    docs: '/component/modal',
    tags: [],
    Component() {
      const [visible, setVisible] = useState(false)

      return (
        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => setVisible(true)}>Modal</Button>

          <Modal visible={visible} onClose={() => setVisible(false)} style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1.25rem' }}>Demo Modal</div>

            <div style={{ fontSize: '.8rem', marginTop: '.5rem' }}>
              This is dummy modal. You can render anything inside.
            </div>

            <div className='flex-end' style={{ marginTop: '1.5rem' }}>
              <Button onClick={() => setVisible(false)}>Close</Button>
            </div>
          </Modal>
        </div>
      )
    }
  },
  note: {
    name: 'Note',
    docs: '/component/note',
    tags: [],
    Component() {
      return (
        <Note type='blue' style={{ fontSize: '.8rem' }}>
          Hello there!
        </Note>
      )
    }
  },
  tabs: {
    name: 'Tabs',
    docs: '/component/tabs',
    tags: [],
    Component() {
      const [active, setActive] = useState(data.tabs[0].key)

      return <Tabs items={data.tabs} active={active} onClick={(active: string) => setActive(active)} />
    }
  },
  menu: {
    name: 'Menu',
    docs: '/component/menu',
    tags: [],
    Component() {
      const [selected, setSelected] = useState('home')

      return (
        <Menu
          active={selected}
          onClick={(selected: any) => setSelected(selected)}
          items={data.menu}
          style={{ width: '100%', maxWidth: '12rem' }}
        />
      )
    }
  },
  pagination: {
    name: 'Pagination',
    docs: '/component/pagination',
    tags: [],
    Component() {
      const [offset, setOffset] = useState(0)
      const totalItems = 956
      const pageSize = 10

      return (
        <div style={{ textAlign: 'center' }}>
          <Pagination
            pageSize={pageSize}
            totalItems={totalItems}
            offset={offset}
            onChange={(offset: any) => setOffset(offset)}
          />
        </div>
      )
    }
  },
  breadcrumb: {
    name: 'Breadcrumb',
    docs: '/component/chain',
    tags: [],
    Component() {
      return (
        <Chain
          items={data.chain.map(x => (
            <Link key={x} to={x} style={{ color: 'var(--c-link)' }}>
              {x}
            </Link>
          ))}
        />
      )
    }
  },
  dashboard: {
    name: 'Dashboard',
    docs: '/component/dashboard',
    tags: [],
    Component() {
      return (
        <Link to='/dashboard' target='_blank' style={{ textAlign: 'center' }}>
          <Button>Demo</Button>
        </Link>
      )
    }
  }
}
