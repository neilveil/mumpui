import { Dashboard } from 'lib'

export default function Main() {
  return (
    <Dashboard icon={<span className='icon'>home</span>} title='Home' style={{ maxWidth: 1000 }}>
      <h3>Welcome to MumpUI Dashboard.</h3>
    </Dashboard>
  )
}
