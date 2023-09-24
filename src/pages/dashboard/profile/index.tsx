import data from 'data'
import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>person</span>}
      title='Profile'
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <div style={{ fontSize: '.8rem' }}>
        <div>Username: jonsmith</div>
        <div>Name: Jon Smith</div>
      </div>
    </Dashboard>
  )
}
