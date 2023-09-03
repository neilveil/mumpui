import { Checkbox, Dashboard } from 'lib'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebarIcon, sidebarItems } from '../shared'

const allAccess = [
  { key: 'users', label: 'Users' },
  { key: 'access', label: 'Access' },
  { key: 'profile', label: 'Profile' },
  { key: 'blogs', label: 'Blogs' }
]

export default function Main() {
  const [access, setAccess] = useState([])

  const navigate = useNavigate()

  const sidebarItem = sidebarItems.find(x => x.name === 'Access')

  const _sidebarItems = sidebarItems.map(x => {
    return {
      ...x,
      access: x._access,
      next: x.next ? x.next.map(y => ({ ...y, access: y._access })) : []
    }
  })

  return (
    <Dashboard
      icon={sidebarItem?.icon}
      title={sidebarItem?.name}
      sidebarIcon={sidebarIcon}
      sidebarItems={_sidebarItems}
      onSidebarClick={key => navigate(key)}
      sidebarAccess={access}
    >
      <br />

      <Checkbox options={allAccess} checked={access} onChange={(access: any) => setAccess(access)} />
    </Dashboard>
  )
}
