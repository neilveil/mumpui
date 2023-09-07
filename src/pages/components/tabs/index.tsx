import { Docs } from 'components'
import { Tabs } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [active, setActive] = useState(0)

  return (
    <Docs type='Component' name='Tabs'>
      <Docs.Showcase
        title={<span></span>}
        code={`
<Tabs
  options={Array(20)
    .fill(0)
    .map((x, i) => 'Tab ' + (i + 1))}
  active={active}
  onClick={(active: any) => setActive(active)}
/>
`}
      >
        <Tabs
          options={Array(20)
            .fill(0)
            .map((x, i) => 'Tab ' + (i + 1))}
          active={active}
          onClick={(active: any) => setActive(active)}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Tab'
        type='props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of tab names' },
          { name: 'active', type: 'number', usage: 'Active tab' },
          { name: 'onClick', type: 'function', usage: <code>{'(active) => {}'}</code> }
        ]}
      />
    </Docs>
  )
}
