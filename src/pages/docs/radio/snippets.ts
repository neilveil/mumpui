import data from 'data'

export const s1 = `
const [value, setValue] = useState('india')

..

<Radio
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`

export const s2 = `
const [value, setValue] = useState('india')

..

<Radio
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
  className='mp-grid-2'
/>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
