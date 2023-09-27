import { Docs } from 'components'
import { Field, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [options, setOptions] = useState(data.countries)
  const [value, setValue] = useState<typeof data.countries>([data.countries[0]])

  return (
    <Docs name='multiSelect'>
      <Docs.Showcase code={snippets.s1}>
        <Field label='Multi-Select' style={{ maxWidth: '15rem' }}>
          <Select.Multi options={data.countries} value={value} onChange={value => setValue(value)} />
        </Field>
      </Docs.Showcase>

      <Docs.Showcase title='Multi-Select component with search or clear only' code={snippets.s2}>
        <Field label='Multi-Select with search & clear' style={{ maxWidth: '15rem' }}>
          <Select.Multi
            value={value}
            onChange={value => setValue(value)}
            options={options}
            onSearch={search => setOptions(Select.search(search, data.countries))}
            clearable
            placeholder='Select..'
          />
        </Field>
      </Docs.Showcase>

      <Docs.Props
        title='Select.Multi'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of option objects containing key & label' },
          { name: 'value', type: 'array', usage: 'Array of selected option objects containing key & label' },
          { name: 'onChange', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string' },
          { name: 'onSearch', type: 'function', usage: 'Shows search box only if search function is passed' },
          { name: 'clearable', type: 'boolean', usage: '' },
          { name: 'disabled', type: 'boolean', usage: '' }
        ]}
      />

      {/* All the changes belows also need to be done in select docs */}

      <Docs.Props
        title='Select.search'
        type='function'
        fields={[
          { name: 'search', type: 'string', usage: 'Searched text' },
          { name: 'options', type: 'array', usage: 'Select input field options' },
          { name: 'caseSensitive', type: 'boolean', defaultValue: 'false' }
        ]}
      />

      <Docs.Info>
        A basic text based <code>Search</code> method is provied with <code>Select</code> component. For calling API or
        any other functionality, search method need to be implemented.
      </Docs.Info>
    </Docs>
  )
}
