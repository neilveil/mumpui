import { Docs } from 'components'
import { Tabs } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [active, setActive] = useState(data.tabs[0].key)
  const [active2, setActive2] = useState(data.tabs[0].key)

  return (
    <Docs name='tabs'>
      <Docs.Showcase code={snippets.s1}>
        <Tabs items={data.tabs} active={active} onChange={active => setActive(active)} />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s1}>
        <Tabs items={data.tabs} active={active2} onChange={active => setActive2(active)} alt />
      </Docs.Showcase>

      <Docs.Props
        title='Tab'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'items', type: 'array', usage: 'Array of items' },
          { name: 'active', type: 'string', usage: 'Active tab key' },
          { name: 'onChange', type: 'function', usage: 'To set active tab' },
          { name: 'alt', type: 'boolean', usage: 'Use alternate design' }
        ]}
      />

      <Docs.Props
        title='item'
        type='object'
        fields={[
          { name: 'key', type: 'string', usage: 'Unique string key' },
          { name: 'label', type: 'string', usage: 'Tab label to show' }
        ]}
      />
    </Docs>
  )
}
