import { Docs } from 'components'
import { Button, Fields, Message } from 'lib'
import * as snippets from './snippets'

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
          <Button style={{ borderColor: '#0A94FF', color: '#0A94FF' }}>Update</Button>
          <Button style={{ backgroundColor: '#0A94FF', color: 'white', border: 'none' }}>Edit</Button>
          <Button style={{ color: '#f5222d', borderColor: '#f5222d', borderStyle: 'dashed' }}>Delete</Button>
          <Button style={{ backgroundColor: '#52c41a', color: 'white', border: 'none' }}>
            <span className='icon'>brush</span>
          </Button>
          <Button style={{ border: 'none' }}>Clear</Button>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        Do not forget to install some icons pack like{' '}
        <a href='https://fonts.google.com/icons?icon.set=Material+Icons' target='_blank' rel='noreferrer'>
          Google Fonts
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
