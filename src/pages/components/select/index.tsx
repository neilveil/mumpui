import { Docs } from 'components'
import { Field, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [options, setOptions] = useState(data.countries)
  const [value, setValue] = useState<(typeof data.countries)[0] | undefined>(data.countries[0])
  const [valueNative, setValueNative] = useState('India')

  return (
    <Docs name='Select input field'>
      <Docs.Showcase code={snippets.s1}>
        <Field label='Select' style={{ maxWidth: '15rem' }}>
          <Select options={data.countries} value={value} onChange={value => setValue(value)} />
        </Field>
      </Docs.Showcase>

      <Docs.Showcase title='Select component with search or clear only' code={snippets.s2}>
        <Field label='Select with search & clear' style={{ maxWidth: '15rem' }}>
          <Select
            value={value}
            onChange={value => setValue(value)}
            options={options}
            onSearch={search => setOptions(Select.search(search, data.countries))}
            clearable
            placeholder='Select..'
          />
        </Field>
      </Docs.Showcase>

      <Docs.Showcase title='Native select component' code={snippets.s3}>
        <Field label='Native Select' style={{ maxWidth: '15rem' }}>
          <Select.Native
            options={data.countries.map(x => x.label)}
            value={valueNative}
            onChange={valueNative => setValueNative(valueNative)}
          />
        </Field>
      </Docs.Showcase>

      <Docs.Info>
        Native select component is better for mobile devices as it open a native modal for selection.
      </Docs.Info>

      <Docs.Props
        title='Select'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of option objects containing key & label' },
          { name: 'value', type: 'object', usage: 'Object of key & label' },
          { name: 'onChange', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string' },
          { name: 'onSearch', type: 'function', usage: 'Shows search box only if search function is passed' },
          { name: 'clearable', type: 'boolean', usage: '' },
          { name: 'disabled', type: 'boolean', usage: '' },
          { name: 'valueHOC', type: 'function', usage: 'Selected value HOC to customize selected option' },
          { name: 'optionHOC', type: 'function', usage: 'Option HOC to customize option in list' }
        ]}
      />

      <Docs.Props
        title='Select.Native'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of options of strings' },
          { name: 'value', type: 'string', usage: 'Selected option' },
          { name: 'onChange', type: 'function' },
          { name: 'disabled', type: 'boolean' }
        ]}
      />

      {/* All the changes belows also need to be done in multi-select docs */}

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
