import data from 'data'

export const s1 = `
const [value, setValue] = useState(${JSON.stringify(data.countries[0])})

..

<Fields autoCol>
  <Field label='Select'>
    <Select
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      placeholder='Select..'
    />
  </Field>

  <Field label='Select with search'>
    <Select
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      simpleSearch
      placeholder='Select..'
    />
  </Field>
</Fields>

<Fields autoCol>
  <Field label='Select with clear'>
    <Select
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      simpleSearch
      placeholder='Select..'
    />
  </Field>

  <Field label='Select with search & clear'>
    <Select
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      simpleSearch
      clearable
      placeholder='Select..'
    />
  </Field>
</Fields>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`

export const s2 = `
const [valueNative, setValueNative] = useState('india')

..

<Field label='Native Select' style={{ maxWidth: '15rem' }}>
  <Select.Native
    options={data.countries}
    value={valueNative}
    onChange={valueNative => setValueNative(valueNative)}
  />
</Field>

..

const countries = ${JSON.stringify(data.countries, null, 2)}
`
