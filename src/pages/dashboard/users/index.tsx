import data from 'data'
import { Dashboard, Message, Table } from 'lib'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const pageSize = 5

export default function Main() {
  const [search, setSearch] = useState('')
  const [offset, setOffset] = useState(0)

  const navigate = useNavigate()

  const users = data.users

  return (
    <Dashboard
      icon={<span className='icon'>person</span>}
      title='Users'
      info={users.length + ' users'}
      onAdd={() => navigate('/dashboard/users/create')}
      //
      search={search}
      onSearch={search => setSearch(search)}
      filter={
        <div style={{ display: 'flex', fontSize: '.8rem', gap: '1rem' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => Message.info('F1 clicked!')}>
            F1
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => Message.warn('F2 clicked!')}>
            F2
          </div>
        </div>
      }
      //
      // onCreate={() => {}}
      // onDelete={() => {}}
      //
      paginationPageSize={pageSize}
      paginationTotalItems={users.length}
      paginationOffset={offset}
      paginationOnChange={offset => setOffset(offset)}
      //
      sidebar={data.DashboardSidebar({})}
    >
      <Table
        cols={[
          { key: 'id', name: '#', align: 'center', width: '1rem' },
          { name: 'Name', align: 'left', width: '100%', render: (value, x: any) => x.firstName + ' ' + x.lastName },
          { key: 'salary', name: 'Salary', align: 'right' },
          {
            align: 'center',
            render: () => (
              <Link to='/dashboard/users/udpate'>
                <span className='icon'>edit</span>
              </Link>
            )
          }
        ]}
        data={users.slice(offset, offset + pageSize)}
      />
    </Dashboard>
  )
}
