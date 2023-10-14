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
  active={selected}
  onClick={(selected: any) => setSelected(selected)}
  items={items}
  style={{ width: '100%', maxWidth: '12rem' }}
/>

..

const items = ${helpers.iconCleaner(data.menu)}
`
