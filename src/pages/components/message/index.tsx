import { Docs } from 'components'
import { Button, Message } from 'lib'
import * as snippets from './snippets'

let message: symbol
export default function Main() {
  return (
    <Docs name='message'>
      <Docs.Showcase title={<span>Success, Info, Warn & Error message</span>} code={snippets.s1}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => Message.success('Success message!')}>Success</Button>
          <Button onClick={() => Message.error('Error message!')}>Error</Button>
          <Button onClick={() => Message.warn('Warn message!')}>Warn</Button>
          <Button onClick={() => Message.info('Info message')}>Info</Button>
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Loading message</span>} code={snippets.s2}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => Message.loading('Loading..', 1000)}>Loader</Button>
          <Button onClick={() => Message.loading('Wait..', 0)}>Loading till clear</Button>
          <Button onClick={() => Message.clear()} style={{ border: 'none' }}>
            Clear
          </Button>
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Clear particular message for custom sequence</span>} code={snippets.s3}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => Message.info('Message 1', 0)}>Message 1</Button>
          <Button
            onClick={() => {
              message = Message.info('Message 2', 0)
            }}
          >
            Message 2
          </Button>
          <Button onClick={() => Message.clear(message)}>Clear message 2</Button>
          <Button onClick={() => Message.clear()}>Clear all</Button>
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Message.success(text, duration)'
        type='function'
        fields={[
          { name: 'text', type: 'string', usage: 'Message text' },
          { name: 'duration', type: 'number', usage: 'Duration in milliseconds' }
        ]}
      />

      <span>
        Same as above for
        <code>Message.info</code> | <code>Message.warn</code> | <code>Message.error</code>
      </span>

      <Docs.Props
        title='Message.clear(message)'
        type='function'
        fields={[
          {
            name: 'message',
            type: 'symbol',
            usage: 'Clear selected message if message argument provided else clear all messages'
          }
        ]}
      />
    </Docs>
  )
}
