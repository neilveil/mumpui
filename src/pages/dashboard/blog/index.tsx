import data from 'data'
import { Dashboard } from 'lib'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>rss_feed</span>}
      title='Blog'
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <h3>Blog: {window.location.pathname.split('/').pop()}</h3>
    </Dashboard>
  )
}
