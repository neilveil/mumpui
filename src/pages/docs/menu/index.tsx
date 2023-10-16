import { Docs } from 'components'
import { Menu } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  const [selected, setSelected] = useState('home')

  return (
    <Docs name='menu'>
      <Docs.Showcase title='Menu usage for selection' code={snippets.s1}>
        <Menu
          active={selected}
          onChange={key => setSelected(key)}
          items={data.menu}
          style={{ width: '100%', maxWidth: '12rem' }}
        />
      </Docs.Showcase>

      <Docs.Info>
        Please note, icon are not packed with <b>MumpUI</b>.
      </Docs.Info>

      <Docs.Showcase title='Menu usage for navigation' code={snippets.s2}>
        <Menu
          items={[
            { label: 'Menu', path: '/docs/menu', icon: <span className='icon'>menu</span> },
            { label: 'Home', path: '/home', icon: <span className='icon'>home</span> },
            { label: 'Setup', path: '/setup', icon: <span className='icon'>settings</span> }
          ]}
          style={{ width: '100%', maxWidth: '12rem' }}
          basePath='/mumpui'
        />
      </Docs.Showcase>

      <Docs.Props
        title='Menu'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'active', type: 'string' },
          { name: 'onChange', type: 'function' },
          { name: 'items', type: 'array', usage: 'Array of menu item objects' },
          { name: 'basePath', type: 'string', usage: 'Application base path which is also set in the router' }
        ]}
      />

      <Docs.Props
        title='item'
        type='object'
        fields={[
          { name: 'key', type: 'string' },
          { name: 'label', type: 'string' },
          { name: 'path', type: 'string', usage: 'Navigate to path on click' },
          { name: 'icon', type: 'jsx' },
          { name: 'next', type: 'array', usage: 'Array of menu item object under this item' }
        ]}
      />
    </Docs>
  )
}
