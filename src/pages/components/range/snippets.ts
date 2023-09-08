export const s1 = `
const [value, setValue] = useState('10')

..

<Field
  label={'Range (' + value + ')'}
>
  <Range
    value={value}
    onValud={value => setValue(value)}
    step={5}
  />
</Field>
`
