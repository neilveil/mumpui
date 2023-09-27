export const s1 = `
const [offset, setOffset] = useState(0)
const totalItems = 956
const pageSize = 10

..

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Pagination
    pageSize={pageSize}
    totalItems={totalItems}
    offset={offset}
    onChange={(offset) => setOffset(offset)}
  />
</div>
`
