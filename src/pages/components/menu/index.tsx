import { Docs } from 'components'
import { Menu } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [selected, setSelected] = useState('home')

  return (
    <Docs name='Menu'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <Menu
          active={selected}
          onClick={(selected: any) => setSelected(selected)}
          items={data.menu}
          style={{ width: '100%', maxWidth: '12rem' }}
        />
      </Docs.Showcase>

      <Docs.Info>
        Please note, icon are not packed with <b>MumpUI</b>.
      </Docs.Info>

      <Docs.Props
        title='Menu'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'active', type: 'string' },
          { name: 'onClick', type: 'function' },
          { name: 'items', type: 'array', usage: 'Array of menu item objects' }
        ]}
      />

      <Docs.Props
        title='item'
        type='object'
        fields={[
          { name: 'key', type: 'string' },
          { name: 'label', type: 'string' },
          { name: 'icon', type: 'jsx' },
          { name: 'next', type: 'array', usage: 'Array of menu item object under this item' }
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
