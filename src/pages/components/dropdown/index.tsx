import { Docs } from 'components'
import { Dropdown, Field, Fields } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [select, setSelect] = useState(countries[0])
  const [multiSelect, setMultiSelect] = useState([countries[0], countries[1]])
  const [search, setSearch] = useState('')

  return (
    <Docs name='Dropdown & Multi-Select'>
      <Docs.Showcase title={<span>Dropdown & Searchable Dropdown</span>} code={snippets.s1}>
        <Fields>
          <Field label='Select'>
            <div className='mp-input'>
              <select className='mp-input-value'>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>

            {/* <Dropdown
              value={select}
              onSelect={(select: any) => setSelect(select)}
              options={countries}
              placeholder='Search..'
            /> */}
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

      <Docs.Showcase title={<span>Multi-Select & Searchable Multi-Select</span>} code={snippets.s1}>
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

      <Docs.Showcase title={<span>Clearable</span>} code={snippets.s1}>
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

      <Docs.Showcase title={<span>Disabled</span>} code={snippets.s1}>
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
  { key: 'india', label: 'India' },
  { key: 'canada', label: 'Canada' },
  { key: 'denmark', label: 'Denmark' },
  { key: 'germany', label: 'Germany' },
  { key: 'japan', label: 'Japan' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'sweden', label: 'Sweden' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'united-kingdom', label: 'United Kingdom' },
  { key: 'united-states', label: 'United States' }
]
