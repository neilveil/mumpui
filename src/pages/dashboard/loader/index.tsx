import { Dashboard } from 'lib'
import data from 'data'

export default function Main() {
  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebar={data.DashboardSidebar({})}
      loading
    ></Dashboard>
  )
}
