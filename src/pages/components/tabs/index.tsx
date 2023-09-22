import { Docs } from 'components'
import { Tabs } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [active, setActive] = useState(data.tabs[0].key)

  return (
    <Docs name='Tabs'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <Tabs options={data.tabs} active={active} onClick={(active: any) => setActive(active)} />
      </Docs.Showcase>

      <Docs.Props
        title='Tab'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'options', type: 'array', usage: 'Array of options' },
          { name: 'active', type: 'string', usage: 'Active tab key' },
          { name: 'onClick', type: 'function', usage: 'To set active tab' }
        ]}
      />

      <Docs.Props
        title='option'
        type='object'
        fields={[
          { name: 'key', type: 'string', usage: 'Unique string key' },
          { name: 'label', type: 'string', usage: 'Tab label to show' }
        ]}
      />

      <Docs.Props
        title='onClick'
        type='function'
        fields={[{ name: 'key', type: 'string', usage: 'Clicked tab key' }]}
      />
    </Docs>
  )
}
