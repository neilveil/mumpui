import data from 'data'
import * as helpers from 'helpers'

export const s1 = `
const [selected, setSelected] = useState('home')

..

<Menu
  active={selected}
  onClick={(selected: any) => setSelected(selected)}
  items={items}
  style={{ width: '100%', maxWidth: '12rem' }}
/>

..

const items = ${helpers.iconCleaner(data.menu)}
`

export const s2 = `
const [selected, setSelected] = useState('home')

..

<Menu
  items={[
    { label: 'Menu', path: '/docs/menu', icon: <span className='icon'>menu</span> },
    { label: 'Home', path: '/home', icon: <span className='icon'>home</span> },
    { label: 'Setup', path: '/setup', icon: <span className='icon'>settings</span> }
  ]}
  style={{ width: '100%', maxWidth: '12rem' }}
  basePath='/mumpui'
/>
`
