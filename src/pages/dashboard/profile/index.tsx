import data from 'data'
import { Dashboard } from 'lib'

export default function Main() {
  return (
    <Dashboard icon={<span className='icon'>person</span>} title='Profile' sidebar={data.DashboardSidebar({})}>
      <div style={{ fontSize: '.8rem' }}>
        <div>Username: jonsmith</div>
        <div>Name: Jon Smith</div>
      </div>
    </Dashboard>
  )
}
