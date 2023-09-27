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
  <Button className='f-blue c-white'>Update</Button>
  <Button className='c-blue b-blue'>Edit</Button>
  <Button className='c-red d-red'>Delete</Button>
  <Button className='f-green c-white'>
    <span className='icon'>brush</span>
  </Button>
  <Button className='b-transparent'>Clear</Button>
</Fields>
`
