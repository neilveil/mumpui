import { Docs } from 'components'
import { Button, Fields, Message } from 'lib'
import * as snippets from './snippets'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Docs name='button'>
      <Docs.Showcase title='Default buttons' code={snippets.s1}>
        <Fields>
          <Button>Default</Button>
          <Button
            primary
            onClick={() => {
              Message.success('Clicked!')
            }}
          >
            Primary
          </Button>
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase title='Customization' code={snippets.s2}>
        <Fields>
          <Button className='f-blue c-white'>Update</Button>
          <Button className='c-blue b-blue'>Edit</Button>
          <Button className='c-red d-red'>Delete</Button>
          <Button className='f-green c-white'>
            <span className='icon'>brush</span>
          </Button>
          <Button className='b-transparent'>Clear</Button>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        Do not forget to install some icons pack like{' '}
        <a href='https://fonts.google.com/icons?icon.set=Material+Icons' target='_blank' rel='noreferrer'>
          Google Icons
        </a>{' '}
        (Free) ,{' '}
        <a href='https://fontawesome.com/search' target='_blank' rel='noreferrer'>
          Font Awesome
        </a>
        ,{' '}
        <a href='https://www.streamlinehq.com/icons' target='_blank' rel='noreferrer'>
          Stream Line
        </a>{' '}
        etc to use icons.
      </Docs.Info>

      <Docs.Info>
        <Link to='/docs/theme'>MumpUI Color classes usage →</Link>
      </Docs.Info>

      <Docs.Props
        title='Button'
        type='component'
        fields={[
          { name: '..', usage: 'All button element props' },
          { name: 'primary', type: 'boolean', usage: 'To set the primary button' }
        ]}
      />
    </Docs>
  )
}
