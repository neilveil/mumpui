import { Docs } from 'components'
import { Pagination } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [offset, setOffset] = useState(0)
  const totalItems = 956
  const pageSize = 10

  return (
    <Docs name='pagination'>
      <Docs.Showcase code={snippets.s1}>
        <div style={{ display: 'flex' }}>
          <Pagination
            pageSize={pageSize}
            totalItems={totalItems}
            offset={offset}
            onChange={(offset: any) => setOffset(offset)}
          />
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Pagination'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'pageSize', type: 'number', usage: 'Number of items on the page' },
          { name: 'totalItems', type: 'number', usage: 'Total number of items' },
          { name: 'offset', type: 'number', usage: 'Number of items to be skipped' },
          { name: 'onChange', type: 'function', usage: 'To update the offset' },
          { name: 'disabled', type: 'boolean', usage: 'Useful when pulling the data through API' }
        ]}
      />

      <Docs.Props
        title='onChange'
        type='function'
        fields={[{ name: 'offset', type: 'number', usage: 'Number of items to be skipped' }]}
      />
    </Docs>
  )
}
