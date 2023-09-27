export const s1 = `
const [value, setValue] = useState('')

..

<Search value={value} onChange={value => setValue(value)} placeholder='Search..'>
  <div style={{ padding: '1rem' }}>
    <div>You can put anything in the dropdown..</div>

    {['A1 red box', 'B2 green circle', 'C3 hexagon']
      .filter(x => x.toLowerCase().includes(value.toLowerCase().trim()))
      .map((x, i) => (
        <div
          key={i}
          style={{
            display: 'inline-block',
            padding: '1rem',
            margin: '1rem 1rem 0 0',
            backgroundColor: 'var(--mp-c-light)',
            cursor: 'pointer'
          }}
          onClick={() => setValue(x)}
        >
          {x}
        </div>
      ))}

    {!!value && (
      <div onClick={() => setValue('')} style={{ display: 'inline-block', cursor: 'pointer' }}>
        Clear
      </div>
    )}
  </div>
</Search>
`
