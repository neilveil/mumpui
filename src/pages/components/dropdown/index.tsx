import { Docs } from 'components'
import { Dropdown, Field, Fields } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [select, setSelect] = useState(countries[0])
  const [search, setSearch] = useState('')
  const [multiSelect, setMultiSelect] = useState([countries[0], countries[1]])

  return (
    <Docs type='Component' name='Dropdown'>
      <Docs.Showcase
        info={<span>Dropdown & Searchable Dropdown</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Select'>
            <Dropdown
              value={select}
              onSelect={(select: any) => setSelect(select)}
              options={countries}
              placeholder='Search..'
            />
          </Field>

          <Field label='Select with Search'>
            <Dropdown
              value={select}
              onSelect={(select: any) => setSelect(select)}
              options={Search(search, countries)}
              onSearch={search => setSearch(search)}
              placeholder='Search..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Multi-Select & Searchable Multi-Select</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Select'>
            <Dropdown
              value={multiSelect}
              onSelect={(multiSelect: any) => setMultiSelect(multiSelect)}
              options={countries}
              placeholder='Search..'
            />
          </Field>

          <Field label='Select with Search'>
            <Dropdown
              value={multiSelect}
              onSelect={(multiSelect: any) => setMultiSelect(multiSelect)}
              options={Search(search, countries)}
              onSearch={search => setSearch(search)}
              placeholder='Search..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Clearable</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Select'>
            <Dropdown
              value={select}
              onSelect={(select: any) => setSelect(select)}
              options={countries}
              placeholder='Search..'
              clearable
            />
          </Field>

          <Field label='Select with Search'>
            <Dropdown
              value={multiSelect}
              onSelect={(multiSelect: any) => setMultiSelect(multiSelect)}
              options={Search(search, countries)}
              onSearch={search => setSearch(search)}
              placeholder='Search..'
              clearable
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Disabled</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Select'>
            <Dropdown
              value={countries[0]}
              onSelect={(select: any) => setSelect(select)}
              options={countries}
              placeholder='Search..'
              disabled
            />
          </Field>

          <Field label='Select'>
            <Dropdown
              value={[countries[0], countries[1]]}
              onSelect={(multiSelect: any) => setMultiSelect(multiSelect)}
              options={Search(search, countries)}
              disabled
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Dropdown'
        fields={[
          {
            required: true,
            name: 'value',
            customType: 'object | array',
            usage: 'If value is an array then Multi-Select else Dropdown'
          },
          { required: true, name: 'options', type: 'array', usage: '' },
          { required: true, name: 'onSelect', type: 'function', usage: '' },
          { name: 'onSearch', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string' },
          { name: 'clearable', type: 'function', usage: '' },
          { name: 'disabled', type: 'function', usage: '' },
          { name: 'status', type: 'string', usage: '"error" | "info" | "success" | "warning"' },
          { name: 'className', type: 'function', usage: '' },
          { name: 'style', type: 'function', usage: '' }
        ]}
      />
    </Docs>
  )
}

const Search = (search: string, options: any, caseSensitive: boolean = false) => {
  if (search)
    return options.filter(({ label }: any) =>
      caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase())
    )
  else return options
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
