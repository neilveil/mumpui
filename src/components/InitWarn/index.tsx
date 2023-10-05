import { Note } from 'lib'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Note type='yellow' style={{ margin: '4rem 0', fontSize: '.8rem' }}>
      This component does not work if <b>MumpUI</b> is not initialized at the top of the project.
      <br />
      <Link to='/setup'>
        <div className='c-blue' style={{ marginTop: '.5rem', display: 'inline-block' }}>
          MumpUI Setup →
        </div>
      </Link>
    </Note>
  )
}
