import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'
import data from 'data'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebarImg='/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={path => navigate(path)}
      empty
    ></Dashboard>
  )
}
