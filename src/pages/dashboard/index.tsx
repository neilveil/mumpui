import { Dashboard } from 'lib'
import { Link, useNavigate } from 'react-router-dom'
import { sidebarIcon, sidebarItems } from './shared'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebarIcon={sidebarIcon}
      sidebarItems={sidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <h3>Welcome to MumpUI Dashboard.</h3>
      <Link to='/'>
        <u style={{ marginTop: '2rem', fontSize: '.9rem' }}>Go back to home</u>
      </Link>
    </Dashboard>
  )
}
