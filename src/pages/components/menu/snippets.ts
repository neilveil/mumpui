import data from 'data'

const menu = JSON.parse(JSON.stringify(data.menu))

const updateIcon = (x: any) => {
  if (x.length) {
    x.forEach(updateIcon)
    return
  }

  if (x.icon) x.icon = `--<span className='icon'>${x.icon.props.children}</span>--`

  if (x?.next?.length) updateIcon(x.next)
}

updateIcon(menu)

export const s1 = `
const [selected, setSelected] = useState('home')

..

<Menu
  selected={selected}
  onSelect={(selected: any) => setSelected(selected)}
  items={${JSON.stringify(menu, null, 2).replaceAll('"--', '').replaceAll('--"', '')}}
  style={{ width: '100%', maxWidth: '12rem' }}
/>
`
