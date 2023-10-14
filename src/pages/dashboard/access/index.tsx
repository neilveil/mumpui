import data from 'data'
import { Checkboxes, Dashboard } from 'lib'
import { useState } from 'react'

const allAccess = [
  { key: 'users', label: 'Users' },
  { key: 'access', label: 'Access' },
  { key: 'profile', label: 'Profile' },
  { key: 'blogs', label: 'Blogs' }
]

export default function Main() {
  const [access, setAccess] = useState([])

  return (
    <Dashboard icon={<span className='icon'>task_alt</span>} title='Access' sidebar={data.DashboardSidebar({ access })}>
      <br />

      <Checkboxes options={allAccess} checked={access} onChange={(access: any) => setAccess(access)} />
    </Dashboard>
  )
}
