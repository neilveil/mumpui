import data from 'data'

export const s1 = `
const [active, setActive] = useState("${data.tabs[0].key}")

..

<Tabs
  options={${JSON.stringify(data.tabs, null, 2)}}
  active={active}
  onClick={(active) => setActive(active)}
/>
`
