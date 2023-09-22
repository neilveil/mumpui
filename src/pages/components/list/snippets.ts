import data from 'data'

export const s1 = `
<List
  items={${JSON.stringify(data.list, null, 2)}}
/>
`

export const s2 = `
<List
  type='ol'
  items={${JSON.stringify(data.list, null, 2)}}
/>
`
