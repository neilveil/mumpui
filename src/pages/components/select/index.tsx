import { Docs } from 'components'
import { Field, Fields, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [options, setOptions] = useState(data.countries)
  const [value, setValue] = useState<(typeof data.countries)[0] | undefined>(data.countries[0])
  const [valueNative, setValueNative] = useState('India')

  return (
    <Docs name='Select input field'>
      <Docs.Showcase title='Select component' code={snippets.s1}>
        <Fields>
          <Field label='Select'>
            <Select options={data.countries} value={value} onSelect={value => setValue(value)} />
          </Field>

          <Field label='Select with search & clear'>
            <Select
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

      <Docs.Showcase title='Select component with search or clear only' code={snippets.s1}>
        <Fields>
          <Field label='Select with search'>
            <Select
              value={value}
              onSelect={value => setValue(value)}
              options={options}
              onSearch={search => setOptions(Select.search(search, data.countries))}
            />
          </Field>

          <Field label='Select with clear'>
            <Select
              value={value}
              onSelect={value => setValue(value)}
              options={options}
              clearable
              placeholder='Select..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase title='Native select component' code={snippets.s1}>
        <Fields>
          <Field label='Select'>
            <Select.Native
              options={data.countries.map(x => x.label)}
              value={valueNative}
              onSelect={valueNative => setValueNative(valueNative)}
              style={{ maxWidth: '15rem' }}
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        Native select component is better for mobile devices as it open a native modal for selection.
      </Docs.Info>

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
