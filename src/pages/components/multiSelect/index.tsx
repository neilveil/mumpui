import { Docs } from 'components'
import { Field, Fields, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [options, setOptions] = useState(data.countries)
  const [value, setValue] = useState<typeof data.countries>([])

  return (
    <Docs name='Multi-Select input field'>
      <Docs.Showcase code={snippets.s1}>
        <Fields>
          <Field label='Multi-Select'>
            <Select.Multiple options={data.countries} value={value} onSelect={value => setValue(value)} />
          </Field>

          <Field label='Multi-Select with search & clear'>
            <Select.Multiple
              value={value}
              onSelect={value => setValue(value)}
              options={options}
              onSearch={search => setOptions(Select.search(search, data.countries))}
              clearable
              placeholder='Select..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase title='Multi-Select component with search or clear only' code={snippets.s1}>
        <Fields>
          <Field label='Multi-Select with search'>
            <Select.Multiple
              value={value}
              onSelect={value => setValue(value)}
              options={options}
              onSearch={search => setOptions(Select.search(search, data.countries))}
            />
          </Field>

          <Field label='Multi-Select with clear'>
            <Select.Multiple
              value={value}
              onSelect={value => setValue(value)}
              options={options}
              clearable
              placeholder='Select..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Select'
        type='component'
        fields={[
          { required: true, name: 'value', type: 'string' },
          { required: true, name: 'options', type: 'array', usage: '' },
          { required: true, name: 'onSelect', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string' },
          { name: 'onSearch', type: 'function', usage: '' },
          { name: 'clearable', type: 'function', usage: '' },
          { name: 'disabled', type: 'function', usage: '' }
        ]}
      />
    </Docs>
  )
}
