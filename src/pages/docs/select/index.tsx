import { Docs } from 'components'
import { Field, Fields, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [value, setValue] = useState<(typeof data.countries)[0] | undefined>(data.countries[0])
  const [valueNative, setValueNative] = useState('india')

  return (
    <Docs name='select'>
      <Docs.Showcase code={snippets.s1}>
        <Fields autoCol>
          <Field label='Select'>
            <Select value={value} onChange={value => setValue(value)} options={data.countries} placeholder='Select..' />
          </Field>

          <Field label='Select with search'>
            <Select
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              simpleSearch
              placeholder='Select..'
            />
          </Field>
        </Fields>

        <Fields autoCol>
          <Field label='Select with clear'>
            <Select
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              simpleSearch
              placeholder='Select..'
            />
          </Field>

          <Field label='Select with search & clear'>
            <Select
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              simpleSearch
              clearable
              placeholder='Select..'
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase title='⭐ Native select component' code={snippets.s2}>
        <Field label='Native Select' style={{ maxWidth: '15rem' }}>
          <Select.Native
            options={data.countries}
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
          { name: 'simpleSearch', type: 'function', usage: 'Show search box in dropdown' },
          { name: 'onSearch', type: 'function', usage: 'For advanced search implementation' },
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
          { name: '..', usage: 'All input element props' },
          { name: 'options', type: 'array', usage: 'Array of option objects containing key & label' },
          { name: 'value', type: 'string', usage: 'Selected option key' },
          { name: 'onChange', type: 'function' },
          { name: 'disabled', type: 'boolean' }
        ]}
      />

      <Docs.Info>
        A basic text based <code>Search</code> method is provied with <code>Select</code> component. For calling API or
        any other functionality, search method need to be implemented with <code>onSearch</code>.
      </Docs.Info>
    </Docs>
  )
}
