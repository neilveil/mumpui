import { Docs } from 'components'
import { Pagination } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [offset, setOffset] = useState(0)
  const totalItems = 956
  const pageSize = 10

  return (
    <Docs type='Component' name='Pagination'>
      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <div className='flex-center'>
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
        type='props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'pageSize', type: 'number', usage: 'Number of items on the page' },
          { name: 'totalItems', type: 'number', usage: 'Total number of items' },
          { name: 'offset', type: 'number', usage: 'Number of items to be skipped' },
          { name: 'onChange', type: 'function', usage: <code>{'(offset: number) => {}'}</code> },
          { name: 'disabled', type: 'boolean', usage: 'Useful when pulling the data through API' }
        ]}
      />
    </Docs>
  )
}
