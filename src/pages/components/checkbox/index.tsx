import { Docs } from 'components'
import { Checkbox, Code } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [value, setValue] = useState([])

  return (
    <Docs type='Component' name='Checkbox'>
      <Docs.Showcase
        info={<span></span>}
        code={`
<Checkbox checked={value} options={countries} onChange={(value: any) => setValue(value)} />
`}
      >
        <Checkbox checked={value} options={countries} onChange={(value: any) => setValue(value)} />
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Evenly distributed</span>}
        code={`
<Checkbox
  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
  checked={value}
  options={countries}
  onChange={(value: any) => setValue(value)}
/>
`}
      >
        <Checkbox
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          checked={value}
          options={countries}
          onChange={(value: any) => setValue(value)}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Checkbox'
        fields={[
          { required: true, name: 'options', type: 'array' },
          { required: true, name: 'checked', type: 'array' },
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

const checked = ['a', 'b']

// e.g. keys => ['a', 'b']
const onChange = (keys) => {}
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
