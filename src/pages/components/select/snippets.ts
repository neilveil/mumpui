import data from 'data'

export const s1 = `
const [value, setValue] = useState(${JSON.stringify(data.countries[0])})

..

<Field label='Select' style={{ maxWidth: '15rem' }}>
  <Select
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
const [value, setValue] = useState(${JSON.stringify(data.countries[0])})

<Field label='Select with search & clear' style={{ maxWidth: '15rem' }}>
  <Select
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

export const s3 = `
const [valueNative, setValueNative] = useState('India')

..

<Field label='Native Select' style={{ maxWidth: '15rem' }}>
  <Select.Native
    options={countries.map(x => x.label)}
    value={valueNative}
    onChange={valueNative => setValueNative(valueNative)}
  />
</Field>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
