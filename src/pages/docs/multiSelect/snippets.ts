import data from 'data'

export const s1 = `
const [value, setValue] = useState([${JSON.stringify(data.countries[0])}])

..

<Fields autoCol>
  <Field label='Multi-Select'>
    <Select.Multi
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      placeholder='Select..'
    />
  </Field>

  <Field label='Multi-Select with search'>
    <Select.Multi
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      simpleSearch
      placeholder='Select..'
    />
  </Field>
</Fields>

<Fields autoCol>
  <Field label='Multi-Select with clear'>
    <Select.Multi
      value={value}
      onChange={value => setValue(value)}
      options={countries}
      clearable
      placeholder='Select..'
    />
  </Field>

  <Field label='Multi-Select with search & clear'>
    <Select.Multi
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
