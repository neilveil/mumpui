import data from 'data'
import { Dashboard } from 'lib'

export default function Main() {
  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebar={data.DashboardSidebar({})}
      empty
    ></Dashboard>
  )
}
