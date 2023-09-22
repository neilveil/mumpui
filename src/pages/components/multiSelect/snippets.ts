import data from 'data'

export const s1 = `
const [value, setValue] = useState([${JSON.stringify(data.countries[0])}])

..

<Field label='Multi-Select' style={{ maxWidth: '15rem' }}>
  <Select.Multi
    options={countries}
    value={value}
    onChange={value => setValue(value)}
  />
</Field>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`

export const s2 = `
const [options, setOptions] = useState(countries)
const [value, setValue] = useState([${JSON.stringify(data.countries[0])}])

..

<Field label='Multi-Select with search & clear' style={{ maxWidth: '15rem' }}>
  <Select.Multi
    value={value}
    onChange={value => setValue(value)}
    options={options}
    onSearch={search => setOptions(Select.search(search, countries))}
    clearable
    placeholder='Select..'
  />
</Field>


..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
