import { Docs } from 'components'
import { Radio } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('india')

  return (
    <Docs name='radio'>
      <Docs.Showcase code={snippets.s1}>
        <Radio checked={value} options={countries} onChange={value => setValue(value)} />
      </Docs.Showcase>

      <Docs.Showcase title='Evenly distributed' code={snippets.s2}>
        <Radio checked={value} options={countries} onChange={value => setValue(value)} className='mp-grid-2' />
      </Docs.Showcase>

      <Docs.Props
        title='Radio'
        type='component'
        fields={[
          { name: 'options', type: 'array', usage: 'Array of objects of key & label' },
          { name: 'checked', type: 'string', usage: 'Selected option key' },
          { name: 'onChange', type: 'function' },
          { name: 'disabled', type: 'boolean' }
        ]}
      />
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
