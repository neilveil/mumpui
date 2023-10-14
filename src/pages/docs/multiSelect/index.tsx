import { Docs } from 'components'
import { Field, Fields, Select } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [value, setValue] = useState<typeof data.countries>([data.countries[0]])

  return (
    <Docs name='multiSelect'>
      <Docs.Showcase code={snippets.s1}>
        <Fields autoCol>
          <Field label='Multi-Select'>
            <Select.Multi
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              placeholder='Select..'
            />
          </Field>

          <Field label='Multi-Select with search'>
            <Select.Multi
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              simpleSearch
              placeholder='Select..'
            />
          </Field>
        </Fields>

        <Fields autoCol>
          <Field label='Multi-Select with clear'>
            <Select.Multi
              value={value}
              onChange={value => setValue(value)}
              options={data.countries}
              clearable
              placeholder='Select..'
            />
          </Field>

          <Field label='Multi-Select with search & clear'>
            <Select.Multi
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

      <Docs.Props
        title='Select.Multi'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of option objects containing key & label' },
          { name: 'value', type: 'array', usage: 'Array of selected option objects containing key & label' },
          { name: 'onChange', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string' },
          { name: 'simpleSearch', type: 'function', usage: 'Show search box in dropdown' },
          { name: 'onSearch', type: 'function', usage: 'For advanced search implementation' },
          { name: 'clearable', type: 'boolean', usage: '' },
          { name: 'disabled', type: 'boolean', usage: '' }
        ]}
      />

      <Docs.Info>
        A basic text based <code>Search</code> method is provied with <code>Select</code> component. For calling API or
        any other functionality, search method need to be implemented with <code>onSearch</code>.
      </Docs.Info>
    </Docs>
  )
}
