export const s1 = `
const [offset, setOffset] = useState(0)
const totalItems = 956
const pageSize = 10

..

<div>
  <Pagination
    pageSize={pageSize}
    totalItems={totalItems}
    offset={offset}
    onChange={(offset) => setOffset(offset)}
  />
</div>
`
