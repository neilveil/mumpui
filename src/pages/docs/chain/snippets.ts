import data from 'data'

export const s1 = `
<Chain items={${JSON.stringify(data.chain, null, 2)}} />
`

export const s2 = `
// Different seperator
<Chain items={${JSON.stringify(data.chain, null, 2)}} seperator='•' />

// Customized seperator
<Chain
  items={${JSON.stringify(data.chain, null, 2)}}
  seperator={
    <div
      style={{
        width: '.25rem',
        height: '.25rem',
        backgroundColor: 'var(--mp-c-font)',
        margin: '0 .25rem',
        borderRadius: '50%'
      }}
    ></div>
  }
/>

// Using chain as breadcrumb component
<Chain
  items={${JSON.stringify(data.chain, null, 2)}.map(x => (
    <Link key={x} to={x} className='c-blue'>
      {x}
    </Link>
  ))}
/>
`
