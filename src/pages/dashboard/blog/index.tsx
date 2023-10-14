import data from 'data'
import { Dashboard } from 'lib'

export default function Main() {
  return (
    <Dashboard icon={<span className='icon'>rss_feed</span>} title='Blog' sidebar={data.DashboardSidebar({})}>
      <h3>Blog: {window.location.pathname.split('/').pop()}</h3>
    </Dashboard>
  )
}
