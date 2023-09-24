import data from 'data'
import { Checkboxes, Dashboard } from 'lib'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const allAccess = [
  { key: 'users', label: 'Users' },
  { key: 'access', label: 'Access' },
  { key: 'profile', label: 'Profile' },
  { key: 'blogs', label: 'Blogs' }
]

export default function Main() {
  const [access, setAccess] = useState([])

  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>task_alt</span>}
      title='Access'
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={key => navigate(key)}
      sidebarAccess={access}
    >
      <br />

      <Checkboxes options={allAccess} checked={access} onChange={(access: any) => setAccess(access)} />
    </Dashboard>
  )
}
