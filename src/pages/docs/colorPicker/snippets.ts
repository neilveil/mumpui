export const s1 = `
const [color, setColor] = useState('#0A94FF')

..

<Field label='Select color'>
  <ColorPicker
    placeholder='Select color..'
    value={color}
    onValue={value => setColor(value)}
    style={{ maxWidth: '15rem' }}
  />
</Field>
`
