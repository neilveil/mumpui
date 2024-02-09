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

export const s2 = `
const [value, setValue] = useState('Hello there,\\nHow are you?\\nThis is the 3rd row.')

..

<Textarea
  value={value}
  onValue={value => setValue(value)}
  maxLength={50}
  placeholder='Type here..'
  autoHeight
/>
`
