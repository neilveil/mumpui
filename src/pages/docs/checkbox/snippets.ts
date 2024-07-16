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

<Checkboxes
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`

export const s3 = `
const [value, setValue] = useState(['india'])

..

<Checkboxes
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
  className='mp-grid-2' // 'mp-grid-1' | 'mp-grid-2' | 'mp-grid-3' | 'mp-grid-4'
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
