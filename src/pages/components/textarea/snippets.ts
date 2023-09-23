export const s1 = `
const [value, setValue] = useState('Hello there,\\nHow are you?\\nThis is the 3rd row.')

..

<Fields>
  <Field label="Textarea">
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder='Type here..'
    />
  </Field>

  <Field label="Textarea with auto height">
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder='Type here..'
      autoHeight
    />
  </Field>
</Fields>
`
