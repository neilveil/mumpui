import data from 'data'

export const s1 = `
const [active, setActive] = useState("${data.tabs[0].key}")

..

<Tabs
  items={tabs}
  active={active}
  onChange={(active) => setActive(active)}
/>

..

const tabs = ${JSON.stringify(data.tabs, null, 2)}
`

export const s2 = `
const [active, setActive] = useState("${data.tabs[0].key}")

..

<Tabs
  items={tabs}
  active={active}
  onChange={(active) => setActive(active)}
  alt
/>

..

const tabs = ${JSON.stringify(data.tabs, null, 2)}
`
