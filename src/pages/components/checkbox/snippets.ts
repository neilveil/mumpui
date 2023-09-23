import data from 'data'

export const s1 = `
const [active, setActive] = useState(false)

..

<Checkbox
  label='Active'
  checked={active}
  onChange={value => setActive(value)}
/>
`

export const s2 = `
const [value, setValue] = useState(['india'])

..

<Checkbox
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`

export const s3 = `
<Checkbox
  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
