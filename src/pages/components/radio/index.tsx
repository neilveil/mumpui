import { Docs } from 'components'
import { Radio, Code } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('sweden')

  return (
    <Docs name='Radio'>
      <Docs.Showcase
        title={<span></span>}
        code={`
<Checkbox checked={value} options={countries} onChange={(value: any) => setValue(value)} />
`}
      >
        <Radio checked={value} options={countries} onChange={(value: any) => setValue(value)} />
      </Docs.Showcase>

      <Docs.Showcase
        title={<span>Evenly distributed</span>}
        code={`
<Checkbox
  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
  checked={value}
  options={countries}
  onChange={(value: any) => setValue(value)}
/>
`}
      >
        <Radio
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          checked={value}
          options={countries}
          onChange={(value: any) => setValue(value)}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Radio'
        fields={[
          { required: true, name: 'options', type: 'array' },
          { required: true, name: 'checked', customType: 'number | string' },
          { required: true, name: 'onChange', type: 'function' },
          { name: 'className', type: 'string' },
          { name: 'style', type: 'object' }
        ]}
      />

      <br />

      <Code snippet={schema} lang='jsx'></Code>
    </Docs>
  )
}

const schema = `
const options = [
  { key: 'a', label: 'A' },
  { key: 'b', label: 'B' },
  { key: 'c', label: 'C' }
]
// Key can be a number | string

const checked = 'a'

// e.g. key => 'a'
const onChange = (key) => {}
`

const countries = [
  { key: 'sweden', label: 'Sweden' },
  { key: 'germany', label: 'Germany' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'United kingdom', label: 'United Kingdom' },
  { key: 'japan', label: 'Japan' },
  { key: 'United states', label: 'United States' },
  { key: 'canada', label: 'Canada' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'denmark', label: 'Denmark' }
]
