import data from 'data'

export const s1 = `
const [active, setActive] = useState("${data.tabs[0].key}")

..

<Tabs
  items={tabs}
  active={active}
  onClick={(active) => setActive(active)}
/>

..

const tabs = ${JSON.stringify(data.tabs, null, 2)}
`
