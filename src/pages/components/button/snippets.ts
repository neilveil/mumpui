export const s1 = `
<Fields>
  <Button>Default</Button>

  <Button
    primary
    onClick={() => {
      Message.success('Clicked!')
    }}
  >
    Primary
  </Button>
</Fields>
`

export const s2 = `
<Fields>
  // Stroke button
  <Button style={{ borderColor: '#0A94FF', color: '#0A94FF' }}>Update</Button>
  // Solid button
  <Button style={{ backgroundColor: '#0A94FF', color: 'white', border: 'none' }}>Edit</Button>
  // Dashed button
  <Button style={{ color: '#f5222d', borderColor: '#f5222d', borderStyle: 'dashed' }}>Delete</Button>
  // Icon button
  <Button style={{ backgroundColor: '#52c41a', color: 'white', border: 'none' }}>
    <span className='icon'>brush</span>
  </Button>
  // Text button
  <Button style={{ border: 'none' }}>Clear</Button>
</Fields>
`
