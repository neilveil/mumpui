import { Docs } from 'components'
import { Button, Message } from 'lib'

let message: symbol
export default function Main() {
  return (
    <Docs type='Component' name='Message'>
      <Docs.Showcase
        title={<span>Success, Info, Warning & Error message</span>}
        code={`
<div className='flex-wrap'>
  <Button onClick={() => Message.success('Success message!')}>Success</Button>
  <Button onClick={() => Message.error('Error message!')}>Error</Button>
  <Button onClick={() => Message.warning('Warning message!')}>Warning</Button>
  <Button onClick={() => Message.info('Info message')}>Info</Button>
</div>
`}
      >
        <div className='flex-wrap'>
          <Button onClick={() => Message.success('Success message!')}>Success</Button>
          <Button onClick={() => Message.error('Error message!')}>Error</Button>
          <Button onClick={() => Message.warning('Warning message!')}>Warning</Button>
          <Button onClick={() => Message.info('Info message')}>Info</Button>
        </div>
      </Docs.Showcase>

      <Docs.Showcase
        title={<span>Loading message</span>}
        code={`
<div className='flex-wrap'>
  <Button onClick={() => Message.loading('Loading..')}>Loading</Button>
  <Button onClick={() => Message.loading('Loading..')}>Loading till clear</Button>
  <Button onClick={() => Message.clear()} type='text'>
    Clear
  </Button>
</div>
`}
      >
        <div className='flex-wrap'>
          <Button onClick={() => Message.loading('Loading..')}>Loading</Button>
          <Button onClick={() => Message.loading('Wait..', 0)}>Loading till clear</Button>
          <Button onClick={() => Message.clear()} type='text'>
            Clear
          </Button>
        </div>
      </Docs.Showcase>

      <Docs.Showcase
        title={<span>Clear particular message for custom sequence</span>}
        code={`
<div className='flex-wrap'>
  <Button
    onClick={() => {
      Message.info('Message 1', 0)
      setTimeout(() => {
        message = Message.info('Message 2', 0)
        setTimeout(() => {
          Message.info('Message 3', 0)
        }, 200)
      }, 200)
    }}
  >
    Trigger
  </Button>

  <Button onClick={() => Message.clear(message)} type='text'>
    Clear only 2
  </Button>

  <Button onClick={() => Message.clear()} type='text'>
    Clear all
  </Button>
</div>
`}
      >
        <div className='flex-wrap'>
          <Button
            onClick={() => {
              Message.info('Message 1', 0)
              setTimeout(() => {
                message = Message.info('Message 2', 0)
                setTimeout(() => {
                  Message.info('Message 3', 0)
                }, 200)
              }, 200)
            }}
          >
            Trigger
          </Button>

          <Button onClick={() => Message.clear(message)} type='text'>
            Clear only 2
          </Button>

          <Button onClick={() => Message.clear()} type='text'>
            Clear all
          </Button>
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Message.(succcess | error | warning | info)'
        type='function'
        fields={[
          { required: true, name: 'text', type: 'string', usage: 'Message content' },
          { name: 'duration', type: 'number', usage: 'Duration in ms' }
        ]}
      />
    </Docs>
  )
}
