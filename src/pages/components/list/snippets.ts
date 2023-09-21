import data from 'data'

export const s1 = `
<List
  data={${JSON.stringify(data.list, null, 2)}}
/>
`

export const s2 = `
<List
  type='ol'
  data={${JSON.stringify(data.list, null, 2)}}
/>
`
