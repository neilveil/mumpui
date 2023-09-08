export const s1 = `
const [value, setValue] = useState(['india'])

const countries = [
  { key: 'canada', label: 'Canada' },
  { key: 'denmark', label: 'Denmark' },
  { key: 'germany', label: 'Germany' },
  { key: 'india', label: 'India' },
  { key: 'japan', label: 'Japan' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'sweden', label: 'Sweden' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'united-kingdom', label: 'United Kingdom' },
  { key: 'united-states', label: 'United States' }
]

..

<Checkbox
  checked={value}
  options={countries}
  onChange={(value) => setValue(value)}
/>
`

export const s2 = `
<Checkbox
  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
  checked={value}
  options={countries}
  onChange={value => setValue(value)}
/>
`
