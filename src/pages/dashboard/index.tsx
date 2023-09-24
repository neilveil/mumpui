import { Dashboard } from 'lib'
import { Link, useNavigate } from 'react-router-dom'
import data from 'data'
import { SwitchTheme } from 'components'

export default function Main() {
  const navigate = useNavigate()

  return (
    <Dashboard
      icon={<span className='icon'>home</span>}
      title='Home'
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={path => navigate(path)}
    >
      <h3>Welcome to MumpUI Dashboard.</h3>

      <Link to='/'>
        <u style={{ marginTop: '2rem', fontSize: '.9rem' }}>Go back to home</u>
      </Link>

      <div style={{ margin: '2rem 0' }}>
        <SwitchTheme text='Switch theme!' />
      </div>
    </Dashboard>
  )
}
