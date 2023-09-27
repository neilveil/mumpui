import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'
import data from 'data'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      sidebarBasePath='/mumpui'
      onSidebarClick={path => navigate(path)}
      empty
    ></Dashboard>
  )
}
