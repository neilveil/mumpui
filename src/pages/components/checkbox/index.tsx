import { Docs } from 'components'
import { Checkbox, Checkboxes } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import related from '../related'

export default function Main() {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState<string[]>(['india'])

  return (
    <Docs name='Checkbox'>
      <Docs.Showcase title='Single' code={snippets.s1}>
        <Checkbox label='Active' checked={active} onChange={value => setActive(value)} />
      </Docs.Showcase>

      <Docs.Showcase title='Multiple' code={snippets.s2}>
        <Checkboxes checked={value} options={countries} onChange={value => setValue(value)} />
      </Docs.Showcase>

      <Docs.Showcase title='Evenly distributed' code={snippets.s3}>
        <Checkboxes
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          checked={value}
          options={countries}
          onChange={value => setValue(value)}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Checkbox'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'label', type: 'string' },
          { name: 'checked', type: 'boolean' },
          { name: 'onChange', type: 'function' },
          { name: 'disabled', type: 'boolean' }
        ]}
      />

      <Docs.Props
        title='Checkboxes'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of objects of key & label' },
          { name: 'checked', type: 'array', usage: 'Array of selected options keys' },
          { name: 'onChange', type: 'function' },
          { name: 'disabled', type: 'boolean' }
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
