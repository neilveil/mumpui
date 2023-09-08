import { Docs } from 'components'
import { Radio } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import related from '../related'

export default function Main() {
  const [value, setValue] = useState('india')

  return (
    <Docs name='Radio'>
      <Docs.Showcase code={snippets.s1}>
        <Radio checked={value} options={countries} onChange={value => setValue(value)} />
      </Docs.Showcase>

      <Docs.Showcase title='Evenly distributed' code={snippets.s2}>
        <Radio
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          checked={value}
          options={countries}
          onChange={value => setValue(value)}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Radio'
        type='component'
        fields={[
          { name: 'options', type: 'array', usage: 'Array of objects of key & label' },
          { name: 'checked', type: 'string', usage: 'Selected option key' },
          { name: 'onChange', type: 'function' }
        ]}
      />

      <Docs.Related components={[related.field, related.input, related.button]} />
    </Docs>
  )
}

const countries = [
  { key: 'canada', label: 'Canada' },
  { key: 'denmark', label: 'Denmark' },
  { key: 'germany', label: 'Germany' },
  { key: 'india', label: 'India' },
  { key: 'japan', label: 'Japan' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'sweden', label: 'Sweden' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'united-kingdom', label: 'United Kingdom' },
  { key: 'united-states', label: 'United States' }
]
