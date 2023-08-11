import data from 'data'
import { Dashboard, Table } from 'lib'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sidebarIcon, sidebarItems } from '../shared'

export default function Main() {
  const [search, setSearch] = useState('')
  const [offset, setOffset] = useState(0)

  const navigate = useNavigate()

  const users = data.users.slice(0, 96)

  return (
    <Dashboard
      icon={<span className='icon'>person</span>}
      title='Users'
      info={users.length + ' users'}
      onAdd={() => {
        navigate('/dashboard/users/create')
      }}
      //
      search={search}
      onSearch={search => setSearch(search)}
      filter={
        <Link
          to='/dashboard/access'
          style={{
            fontSize: '.8rem',
            color: 'var(--mp-c-font-light)',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          Manage access
        </Link>
      }
      //
      // onCreate={() => {}}
      // onDelete={() => {}}
      //
      paginationPageSize={10}
      paginationTotalItems={users.length}
      paginationOffset={offset}
      paginationOnChange={offset => setOffset(offset)}
      //
      sidebarIcon={sidebarIcon}
      sidebarItems={sidebarItems}
      onSidebarClick={key => navigate(key)}
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
        data={users.slice(offset, offset + 10)}
      />
    </Dashboard>
  )
}
