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
          { required: true, name: 'active', type: 'string' },
          { required: true, name: 'onClick', type: 'function' },
          { required: true, name: 'items', customType: 'array', usage: 'Array of menu item objects' }
        ]}
      />

      <Docs.Props
        title='item'
        type='object'
        fields={[
          { required: true, name: 'key', customType: 'number|string' },
          { required: true, name: 'label', type: 'string' },
          { name: 'icon', type: 'jsx' },
          { name: 'next', customType: 'array', usage: 'Array of menu item object under this item' }
        ]}
      />
    </Docs>
  )
}
