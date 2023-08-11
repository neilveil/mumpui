import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'
import { sidebarIcon, sidebarItems } from '../shared'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>person</span>}
      title='Profile'
      sidebarIcon={sidebarIcon}
      sidebarItems={sidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <div style={{ fontSize: '.8rem' }}>
        <div>Username: jonsmith</div>
        <div>Name: Jon Smith</div>
      </div>
    </Dashboard>
  )
}
