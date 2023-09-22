import data from 'data'

export const s1 = `
<Chain data={${JSON.stringify(data.chain, null, 2)}} />
`

export const s2 = `
// Different seperator
<Chain data={${JSON.stringify(data.chain, null, 2)}} seperator='•' />

// Customized seperator
<Chain
  data={${JSON.stringify(data.chain, null, 2)}}
  seperator={
    <div
      style={{
        width: '.25rem',
        height: '.25rem',
        backgroundColor: '#888',
        margin: '0 .25rem',
        borderRadius: '50%'
      }}
    ></div>
  }
/>

// Using chain as breadcrumb component
<Chain
  data={${JSON.stringify(data.chain, null, 2)}.map(x => (
    <Link key={x} to={x} style={{ color: 'var(--c-link)' }}>
      {x}
    </Link>
  ))}
/>
`
