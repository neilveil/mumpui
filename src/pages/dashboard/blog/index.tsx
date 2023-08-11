import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'
import { sidebarIcon, sidebarItems } from '../shared'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>rss_feed</span>}
      title='Blog'
      sidebarIcon={sidebarIcon}
      sidebarItems={sidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <h3>Blog: {window.location.pathname.split('/').pop()}</h3>
    </Dashboard>
  )
}
