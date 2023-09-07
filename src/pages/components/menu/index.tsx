import { Docs } from 'components'
import { Menu } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [selected, setSelected] = useState(0)

  return (
    <Docs type='Component' name='Menu'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <Menu
          selected={selected}
          onSelect={(selected: any) => setSelected(selected)}
          items={[
            {
              key: 0,
              name: 'Home',
              icon: <span className='icon'>home</span>,
              next: []
            },
            {
              key: 1,
              name: 'Products',
              icon: <span className='icon'>widgets</span>,
              next: []
            },
            {
              key: 2,
              name: 'Settings',
              icon: <span className='icon'>settings</span>,
              next: [
                {
                  key: 3,
                  name: 'Profile',
                  icon: <span className='icon'>person</span>,
                  next: []
                },
                {
                  key: 4,
                  name: 'Blogs',
                  icon: <span className='icon'>rss_feed</span>,
                  next: [
                    {
                      key: 5,
                      name: 'Blog 1',
                      icon: <span className='icon'>rss_feed</span>,
                      next: []
                    },
                    {
                      key: 6,
                      name: 'Blog 2',
                      icon: <span className='icon'>rss_feed</span>,
                      next: []
                    }
                  ]
                }
              ]
            }
          ]}
          style={{ width: '100%', maxWidth: '12rem' }}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Menu'
        type='props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { required: true, name: 'selected', customType: 'number|string' },
          { required: true, name: 'onSelect', type: 'function' },
          { required: true, name: 'items', customType: 'array', usage: 'Array of menu items' }
        ]}
      />

      <Docs.Props
        title='Item'
        type='object keys'
        fields={[
          { required: true, name: 'key', customType: 'number|string' },
          { required: true, name: 'name', type: 'string' },
          { name: 'icon', type: 'jsx' },
          { name: 'next', customType: 'array', usage: 'Array of menu items under this item' }
        ]}
      />
    </Docs>
  )
}
